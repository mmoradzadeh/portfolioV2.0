import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import AlertError from '../AlertError/AlertError';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// After signing up at https://www.emailjs.com:
//   1. Create a Gmail service  → copy Service ID
//   2. Create a template with variables: {{from_name}}, {{from_email}}, {{message}}
//   3. Copy your Public Key from Account → API Keys
//   4. Set a domain allowlist for your public key in EmailJS dashboard (Security tab)
//      so the key only works from your own domain.
//   5. Create client/.env.local and fill in the three values below.
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? '';
// ─────────────────────────────────────────────────────────────────────────────

// RFC 5322-compliant email pattern
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const COOLDOWN_MS = 60_000;

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
  website: string; // honeypot
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error' | 'cooldown';

const ContactFrom = () => {
  const formRef                    = useRef<HTMLFormElement>(null);
  const [status, setStatus]        = useState<SubmitStatus>('idle');
  const [cooldownLeft, setCooldown]= useState(0);
  const cooldownTimer              = useRef<ReturnType<typeof setInterval> | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ mode: 'onTouched' });

  const startCooldown = () => {
    let remaining = COOLDOWN_MS / 1000;
    setCooldown(remaining);
    setStatus('cooldown');
    cooldownTimer.current = setInterval(() => {
      remaining -= 1;
      setCooldown(remaining);
      if (remaining <= 0) {
        clearInterval(cooldownTimer.current!);
        setStatus('idle');
        setCooldown(0);
      }
    }, 1000);
  };

  const onSubmit = async (data: FormData) => {
    if (data.website.trim() !== '') { setStatus('success'); reset(); return; }
    if (!formRef.current) return;
    setStatus('loading');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY });
      reset();
      startCooldown();
    } catch (err) {
      if (import.meta.env.DEV) console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const isSubmitting = status === 'loading';
  const isDisabled   = isSubmitting || status === 'cooldown';

  return (
    <div className="contact-form-card rounded-3 p-4 p-md-5 shadow-sm">
      <h3 className="h4 fw-bold mb-1">Send Me a Message</h3>
      <p className="small mb-4" style={{ color: 'var(--text-sec)' }}>I typically respond within 24 hours.</p>

      {(status === 'success' || status === 'cooldown') && (
        <div className="alert alert-success d-flex align-items-center gap-2" role="alert">
          <i className="fas fa-check-circle flex-shrink-0" />
          <span>
            Message sent! I'll be in touch soon.
            {status === 'cooldown' && (
              <span className="ms-2" style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                (You can send another in {cooldownLeft}s)
              </span>
            )}
          </span>
        </div>
      )}

      {status === 'error' && (
        <div className="alert alert-danger d-flex align-items-center gap-2" role="alert">
          <i className="fas fa-exclamation-circle flex-shrink-0" />
          <span>
            Something went wrong. Please email me directly at{' '}
            <a href="mailto:mehdimoradzadeh@outlook.com" className="alert-link" rel="noopener">
              mehdimoradzadeh@outlook.com
            </a>.
          </span>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate>

        {/* ── Honeypot ── */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
          <label htmlFor="website">Website</label>
          <input {...register('website')} id="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {/* ── Name ── */}
        <div className="mb-3">
          <label htmlFor="from_name" className="form-label fw-medium">Name</label>
          <input
            {...register('from_name', {
              required: 'Please enter your name',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
              maxLength: { value: 100, message: 'Name is too long' },
              pattern: { value: /^[^<>{}[\]\\/]*$/, message: 'Name contains invalid characters' },
            })}
            id="from_name" type="text" autoComplete="name" maxLength={100}
            className={`form-control ${errors.from_name ? 'is-invalid' : ''}`}
            placeholder="Jane Smith" disabled={isDisabled}
          />
          {errors.from_name?.message && <AlertError>{errors.from_name.message}</AlertError>}
        </div>

        {/* ── Email ── */}
        <div className="mb-3">
          <label htmlFor="from_email" className="form-label fw-medium">Email</label>
          <input
            {...register('from_email', {
              required: 'Please enter your email address',
              maxLength: { value: 254, message: 'Email address is too long' },
              pattern: { value: EMAIL_REGEX, message: 'Please enter a valid email address' },
            })}
            id="from_email" type="email" autoComplete="email" maxLength={254}
            className={`form-control ${errors.from_email ? 'is-invalid' : ''}`}
            placeholder="jane@example.com" disabled={isDisabled}
          />
          {errors.from_email?.message && <AlertError>{errors.from_email.message}</AlertError>}
        </div>

        {/* ── Message ── */}
        <div className="mb-4">
          <label htmlFor="message" className="form-label fw-medium">
            Message
            <span className="ms-1 fw-normal" style={{ fontSize: '0.78rem', color: 'var(--text-sec)' }}>
              (max 2 000 characters)
            </span>
          </label>
          <textarea
            {...register('message', {
              required: 'Please write your message',
              minLength: { value: 10, message: 'Message must be at least 10 characters' },
              maxLength: { value: 2000, message: 'Message must be 2 000 characters or fewer' },
            })}
            id="message" autoComplete="off" maxLength={2000}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            rows={5} placeholder="Tell me about your project or opportunity…" disabled={isDisabled}
          />
          {errors.message?.message && <AlertError>{errors.message.message}</AlertError>}
        </div>

        {/* ── Submit ── */}
        <button
          type="submit"
          className="btn-submit btn w-100 py-3 d-flex align-items-center justify-content-center gap-2"
          disabled={isDisabled}
        >
          {isSubmitting ? (
            <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />Sending…</>
          ) : status === 'cooldown' ? (
            <><i className="fas fa-clock" />Wait {cooldownLeft}s before sending again</>
          ) : (
            <><i className="fas fa-paper-plane" />Send Message</>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactFrom;
