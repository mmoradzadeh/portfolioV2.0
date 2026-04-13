import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../../interfaces/Projects';
import projectData from '../../../../server/data/projects.json';

/* ─── Animated visibility hook (pure CSS-class approach, no deps) ─────────── */
function useInView(threshold = 0.18) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, visible };
}

/* ─── Single project feature card ─────────────────────────────────────────── */
function FeatureCard({ project, index }: { project: Project; index: number }) {
    const [imgError, setImgError] = useState(false);
    const [hovered, setHovered] = useState(false);
    const { ref, visible } = useInView();

    const isEven = index % 2 === 0;
    const num = String(index + 1).padStart(2, '0');

    const slideStyle: React.CSSProperties = {
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.65s ease ${index * 0.12}s, transform 0.65s ease ${index * 0.12}s`,
    };

    return (
        <div ref={ref} style={slideStyle}>
            <div
                className={`d-flex flex-column flex-lg-row align-items-stretch gap-0 feature-card-wrap ${hovered ? 'feature-card-hovered' : ''}`}
                style={{ flexDirection: isEven ? 'row' : 'row-reverse' } as React.CSSProperties}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* ── Image pane ─────────────────────────────────────────────── */}
                <div
                    className="col-lg-5 feature-img-pane"
                    style={{
                        borderRadius: isEven ? '16px 0 0 16px' : '0 16px 16px 0',
                        overflow: 'hidden',
                        position: 'relative',
                        minHeight: 280,
                        flexShrink: 0,
                    }}
                >
                    {project.image && !imgError ? (
                        <img
                            src={`/${project.image}`}
                            alt={project.name}
                            onError={() => setImgError(true)}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top',
                                display: 'block',
                                transform: hovered ? 'scale(1.06)' : 'scale(1)',
                                transition: 'transform 0.55s ease',
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                minHeight: 280,
                                background: 'linear-gradient(135deg, #111, #1e1e1e)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 12,
                            }}
                        >
                            <i className="fas fa-globe" style={{ fontSize: '3rem', color: 'rgba(220,53,69,0.5)' }} />
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>Preview unavailable</span>
                        </div>
                    )}

                    {/* hover overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.55) 100%)',
                            opacity: hovered ? 1 : 0,
                            transition: 'opacity 0.4s ease',
                            pointerEvents: 'none',
                        }}
                    />
                    {/* "View Site" label on hover */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: hovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(12px)',
                            opacity: hovered ? 1 : 0,
                            transition: 'all 0.35s ease',
                            background: '#dc3545',
                            color: '#fff',
                            padding: '6px 18px',
                            borderRadius: 30,
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            letterSpacing: '0.04em',
                            whiteSpace: 'nowrap',
                            pointerEvents: 'none',
                        }}
                    >
                        View Site ↗
                    </div>
                </div>

                {/* ── Details pane ───────────────────────────────────────────── */}
                <div
                    className="col-lg-7 d-flex flex-column justify-content-center p-4 p-lg-5"
                    style={{
                        background: '#111',
                        borderRadius: isEven ? '0 16px 16px 0' : '16px 0 0 16px',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* large muted number watermark */}
                    <span
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            top: -10,
                            right: isEven ? 24 : 'auto',
                            left: isEven ? 'auto' : 24,
                            fontSize: '7rem',
                            fontWeight: 900,
                            lineHeight: 1,
                            color: 'rgba(255,255,255,0.04)',
                            userSelect: 'none',
                            pointerEvents: 'none',
                            fontVariantNumeric: 'tabular-nums',
                        }}
                    >
                        {num}
                    </span>

                    {/* project counter */}
                    <p style={{ color: '#dc3545', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>
                        Project {num}
                    </p>

                    {/* red accent line */}
                    <div style={{ width: 36, height: 3, background: '#dc3545', borderRadius: 2, marginBottom: 18 }} />

                    {/* title */}
                    <h3
                        style={{
                            fontSize: '1.35rem',
                            fontWeight: 700,
                            color: '#fff',
                            marginBottom: 14,
                            lineHeight: 1.3,
                        }}
                    >
                        {project.name}
                    </h3>

                    {/* description */}
                    <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 22, fontSize: '0.9rem' }}>
                        {project.description}
                    </p>

                    {/* tech chips */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                style={{
                                    background: 'rgba(220,53,69,0.12)',
                                    color: 'rgba(255,255,255,0.75)',
                                    border: '1px solid rgba(220,53,69,0.3)',
                                    borderRadius: 6,
                                    padding: '3px 10px',
                                    fontSize: '0.72rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.02em',
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="d-flex flex-wrap gap-2">
                        {project.deployed && (
                            <a
                                href={project.deployed}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    background: '#dc3545',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: 8,
                                    padding: '8px 22px',
                                    fontSize: '0.82rem',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    transition: 'background 0.2s, transform 0.2s',
                                }}
                                onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#c82333'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                                onMouseOut={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#dc3545'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
                            >
                                <i className="fas fa-external-link-alt" style={{ fontSize: '0.72rem' }} />
                                Live Demo
                            </a>
                        )}
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                background: 'transparent',
                                color: 'rgba(255,255,255,0.65)',
                                border: '1px solid rgba(255,255,255,0.18)',
                                borderRadius: 8,
                                padding: '8px 22px',
                                fontSize: '0.82rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                transition: 'border-color 0.2s, color 0.2s',
                            }}
                            onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(220,53,69,0.6)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                            onMouseOut={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.18)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)'; }}
                        >
                            <i className="fab fa-github" />
                            Source
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Section ──────────────────────────────────────────────────────────────── */
const ProjectList: React.FC = () => (
    <section id="projects" style={{ background: '#0a0a0a', paddingTop: '5.5rem', paddingBottom: '5.5rem' }}>
        <div className="container">

            {/* ── Header ── */}
            <div className="text-center mb-5">
                <span
                    style={{
                        display: 'inline-block',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#dc3545',
                        marginBottom: '0.75rem',
                    }}
                >
                    Portfolio
                </span>
                <h2 className="display-5 fw-bold mb-2" style={{ color: '#fff' }}>Featured Work</h2>
                <div style={{ width: 48, height: 3, background: '#dc3545', borderRadius: 2, margin: '0 auto 1.25rem' }} />
                <p className="lead mx-auto" style={{ maxWidth: 560, color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem' }}>
                    Selected projects built for real users and shipped to production — from full-stack platforms to responsive portals.
                </p>
            </div>

            {/* ── Cards ── */}
            <div className="d-flex flex-column gap-4">
                {(projectData as Project[]).map((project, i) => (
                    <FeatureCard key={project.id} project={project} index={i} />
                ))}
            </div>

            {/* ── GitHub CTA ── */}
            <div className="text-center mt-5">
                <a
                    href="https://github.com/MMoradzadeh"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        color: 'rgba(255,255,255,0.5)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: 8,
                        padding: '10px 28px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'color 0.2s, border-color 0.2s',
                    }}
                    onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(220,53,69,0.5)'; }}
                    onMouseOut={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
                >
                    <i className="fab fa-github" />
                    View All Projects on GitHub
                </a>
            </div>
        </div>

        {/* card border glow style */}
        <style>{`
            .feature-card-wrap {
                border-radius: 16px;
                border: 1px solid rgba(255,255,255,0.07);
                overflow: hidden;
                transition: border-color 0.35s ease, box-shadow 0.35s ease;
            }
            .feature-card-hovered {
                border-color: rgba(220, 53, 69, 0.35) !important;
                box-shadow: 0 0 40px rgba(220, 53, 69, 0.08);
            }
            @media (max-width: 991px) {
                .feature-card-wrap {
                    flex-direction: column !important;
                }
                .feature-card-wrap > div:first-child {
                    border-radius: 16px 16px 0 0 !important;
                    min-height: 220px !important;
                }
                .feature-card-wrap > div:last-child {
                    border-radius: 0 0 16px 16px !important;
                }
            }
        `}</style>
    </section>
);

export default ProjectList;
