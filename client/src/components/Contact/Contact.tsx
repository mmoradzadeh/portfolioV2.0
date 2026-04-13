import React from 'react';
import ContactFrom from '../ContactForm/ContactFrom';

const Contact: React.FC = () => (
    <section id="contact" className="py-5 section-padding dark-bg">
        <div className="container">

            {/* ── Header ─────────────────────────────────────────────── */}
            <div className="text-center mb-5">
                <span className="section-label">Let's Talk</span>
                <h2 className="display-5 fw-bold mb-2" style={{ color: 'var(--text)' }}>Get In Touch</h2>
                <div className="section-divider" />
                <p className="mx-auto" style={{ maxWidth: '560px', color: 'var(--text-sec)' }}>
                    Have a project in mind, a role to discuss, or just want to connect?
                    My inbox is always open.
                </p>
            </div>

            <div className="row g-4 g-lg-5 align-items-start">

                {/* ── Left column ──────────────────────────────────────── */}
                <div className="col-lg-5">
                    <h3 className="h5 fw-bold mb-4" style={{ color: 'var(--text)' }}>Contact Details</h3>

                    <div className="d-flex flex-column gap-4 mb-5">
                        <div className="d-flex align-items-center gap-3">
                            <div className="contact-info-icon">
                                <i className="fas fa-envelope text-danger" />
                            </div>
                            <div>
                                <p className="small mb-0" style={{ color: 'var(--text-sec)' }}>Email</p>
                                <a
                                    href="mailto:mehdimoradzadeh@outlook.com"
                                    className="text-decoration-none fw-medium"
                                    style={{ color: 'var(--text)', wordBreak: 'break-all' }}
                                >
                                    mehdimoradzadeh@outlook.com
                                </a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <div className="contact-info-icon">
                                <i className="fas fa-phone text-danger" />
                            </div>
                            <div>
                                <p className="small mb-0" style={{ color: 'var(--text-sec)' }}>Phone</p>
                                <a
                                    href="tel:+14168581606"
                                    className="text-decoration-none fw-medium"
                                    style={{ color: 'var(--text)' }}
                                >
                                    +1 (416) 858-1606
                                </a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <div className="contact-info-icon">
                                <i className="fas fa-map-marker-alt text-danger" />
                            </div>
                            <div>
                                <p className="small mb-0" style={{ color: 'var(--text-sec)' }}>Location</p>
                                <span className="fw-medium" style={{ color: 'var(--text)' }}>Toronto, ON, Canada</span>
                            </div>
                        </div>
                    </div>

                    {/* Social links */}
                    <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--text)' }}>Find Me Online</h3>
                    <div className="d-flex flex-wrap gap-3">
                        <a
                            href="https://github.com/MMoradzadeh"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link-btn d-flex align-items-center gap-2 text-decoration-none border rounded px-3 py-2"
                            style={{ fontSize: '0.875rem' }}
                        >
                            <i className="fab fa-github" /> GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/mmoradzadeh"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link-btn d-flex align-items-center gap-2 text-decoration-none border rounded px-3 py-2"
                            style={{ fontSize: '0.875rem' }}
                        >
                            <i className="fab fa-linkedin" /> LinkedIn
                        </a>
                    </div>

                    {/* Availability badge */}
                    <div
                        className="mt-5 p-3 rounded-3"
                        style={{ background: 'rgba(220,53,69,0.08)', border: '1px solid rgba(220,53,69,0.2)' }}
                    >
                        <div className="d-flex align-items-center gap-2">
                            <span style={{
                                width: 10, height: 10, borderRadius: '50%',
                                background: '#28a745', display: 'inline-block',
                                boxShadow: '0 0 0 3px rgba(40,167,69,0.25)',
                                flexShrink: 0,
                            }} />
                            <span className="small fw-medium" style={{ color: 'var(--text)' }}>
                                Currently open to new opportunities
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── Right column — form ───────────────────────────────── */}
                <div className="col-lg-7">
                    <ContactFrom />
                </div>

            </div>
        </div>
    </section>
);

export default Contact;
