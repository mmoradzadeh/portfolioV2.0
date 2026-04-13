import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../../interfaces/Projects';
import projectData from '../../../../server/data/projects.json';
import { useTheme } from '../../context/ThemeContext';

/* ─── Scroll-in animation hook ────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
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

/* ─── Theme token helpers ──────────────────────────────────────────────────── */
type Tokens = {
    sectionBg: string;
    cardBg: string;
    cardBorder: string;
    cardBorderHover: string;
    cardShadowHover: string;
    text: string;
    textSec: string;
    imgPlaceholderBg: string;
    techBadgeBg: string;
    techBadgeText: string;
    techBadgeBorder: string;
    btnGhostText: string;
    btnGhostBorder: string;
    btnGhostHoverBorder: string;
    btnGhostHoverText: string;
    watermarkColor: string;
    githubBtnText: string;
    githubBtnBorder: string;
};

function useTokens(): Tokens {
    const { theme } = useTheme();
    const dark = theme === 'dark';
    return {
        sectionBg:          dark ? '#0a0a0a' : '#f4f5f7',
        cardBg:             dark ? '#111111' : '#ffffff',
        cardBorder:         dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
        cardBorderHover:    dark ? 'rgba(220,53,69,0.35)'  : 'rgba(220,53,69,0.40)',
        cardShadowHover:    dark ? '0 0 48px rgba(220,53,69,0.08)' : '0 8px 32px rgba(220,53,69,0.12)',
        text:               dark ? '#ffffff' : '#111111',
        textSec:            dark ? 'rgba(255,255,255,0.55)' : '#555555',
        imgPlaceholderBg:   dark ? '#1a1a1a' : '#e8eaed',
        techBadgeBg:        dark ? 'rgba(220,53,69,0.12)' : 'rgba(220,53,69,0.08)',
        techBadgeText:      dark ? 'rgba(255,255,255,0.75)' : '#c0392b',
        techBadgeBorder:    dark ? 'rgba(220,53,69,0.30)' : 'rgba(220,53,69,0.25)',
        btnGhostText:       dark ? 'rgba(255,255,255,0.65)' : '#555',
        btnGhostBorder:     dark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)',
        btnGhostHoverBorder:dark ? 'rgba(220,53,69,0.60)' : 'rgba(220,53,69,0.50)',
        btnGhostHoverText:  dark ? '#fff' : '#111',
        watermarkColor:     dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
        githubBtnText:      dark ? 'rgba(255,255,255,0.5)' : '#666',
        githubBtnBorder:    dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
    };
}

/* ─── Single project feature card ─────────────────────────────────────────── */
function FeatureCard({ project, index }: { project: Project; index: number }) {
    const [imgError, setImgError]   = useState(false);
    const [hovered, setHovered]     = useState(false);
    const [btnHover, setBtnHover]   = useState(false);
    const { ref, visible }          = useInView();
    const tk                        = useTokens();

    const isEven = index % 2 === 0;
    const num    = String(index + 1).padStart(2, '0');

    const slideStyle: React.CSSProperties = {
        opacity:   visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.65s ease ${index * 0.12}s, transform 0.65s ease ${index * 0.12}s`,
    };

    const imgRadius  = isEven ? '16px 0 0 16px' : '0 16px 16px 0';
    const detailRadius = isEven ? '0 16px 16px 0' : '16px 0 0 16px';

    return (
        <div ref={ref} style={slideStyle}>
            <div
                className="feature-card-wrap d-flex flex-column flex-lg-row align-items-stretch"
                style={{
                    flexDirection: (isEven ? 'row' : 'row-reverse') as React.CSSProperties['flexDirection'],
                    background: tk.cardBg,
                    border: `1px solid ${hovered ? tk.cardBorderHover : tk.cardBorder}`,
                    boxShadow: hovered ? tk.cardShadowHover : 'none',
                    transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
                    borderRadius: 16,
                    overflow: 'hidden',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* ── Image pane ─────────────────────────────────────────── */}
                <div
                    style={{
                        flex: '0 0 42%',
                        borderRadius: imgRadius,
                        overflow: 'hidden',
                        position: 'relative',
                        minHeight: 280,
                    }}
                >
                    {project.image && !imgError ? (
                        <img
                            src={`/${project.image}`}
                            alt={project.name}
                            onError={() => setImgError(true)}
                            style={{
                                width: '100%', height: '100%',
                                objectFit: 'cover', objectPosition: 'top', display: 'block',
                                transform: hovered ? 'scale(1.06)' : 'scale(1)',
                                transition: 'transform 0.55s ease',
                            }}
                        />
                    ) : (
                        <div style={{
                            width: '100%', height: '100%', minHeight: 280,
                            background: tk.imgPlaceholderBg,
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center', gap: 12,
                        }}>
                            <i className="fas fa-globe" style={{ fontSize: '3rem', color: 'rgba(220,53,69,0.5)' }} />
                            <span style={{ color: tk.textSec, fontSize: '0.8rem' }}>Preview unavailable</span>
                        </div>
                    )}
                    {/* Gradient overlay */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.45) 100%)',
                        opacity: hovered ? 1 : 0, transition: 'opacity 0.4s ease', pointerEvents: 'none',
                    }} />
                    {/* "View Site" hover label */}
                    <div style={{
                        position: 'absolute', bottom: 20, left: '50%',
                        transform: hovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
                        opacity: hovered ? 1 : 0, transition: 'all 0.35s ease',
                        background: '#dc3545', color: '#fff',
                        padding: '6px 18px', borderRadius: 30,
                        fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.04em',
                        whiteSpace: 'nowrap', pointerEvents: 'none',
                    }}>
                        View Site ↗
                    </div>
                </div>

                {/* ── Details pane ───────────────────────────────────────── */}
                <div
                    className="d-flex flex-column justify-content-center p-4 p-lg-5"
                    style={{
                        flex: '1 1 58%',
                        borderRadius: detailRadius,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* watermark number */}
                    <span aria-hidden="true" style={{
                        position: 'absolute', top: -10,
                        right: isEven ? 24 : 'auto', left: isEven ? 'auto' : 24,
                        fontSize: '7rem', fontWeight: 900, lineHeight: 1,
                        color: tk.watermarkColor, userSelect: 'none', pointerEvents: 'none',
                        fontVariantNumeric: 'tabular-nums',
                    }}>{num}</span>

                    <p style={{ color: '#dc3545', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>
                        Project {num}
                    </p>
                    <div style={{ width: 36, height: 3, background: '#dc3545', borderRadius: 2, marginBottom: 18 }} />
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: tk.text, marginBottom: 14, lineHeight: 1.3 }}>
                        {project.name}
                    </h3>
                    <p style={{ color: tk.textSec, lineHeight: 1.75, marginBottom: 22, fontSize: '0.9rem' }}>
                        {project.description}
                    </p>

                    {/* Tech chips */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                            <span key={tech} style={{
                                background: tk.techBadgeBg, color: tk.techBadgeText,
                                border: `1px solid ${tk.techBadgeBorder}`,
                                borderRadius: 6, padding: '3px 10px',
                                fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.02em',
                            }}>
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
                                    background: '#dc3545', color: '#fff',
                                    border: 'none', borderRadius: 8,
                                    padding: '8px 22px', fontSize: '0.82rem', fontWeight: 600,
                                    textDecoration: 'none', display: 'inline-flex',
                                    alignItems: 'center', gap: 6,
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
                                color: btnHover ? tk.btnGhostHoverText : tk.btnGhostText,
                                border: `1px solid ${btnHover ? tk.btnGhostHoverBorder : tk.btnGhostBorder}`,
                                borderRadius: 8, padding: '8px 22px',
                                fontSize: '0.82rem', fontWeight: 600,
                                textDecoration: 'none', display: 'inline-flex',
                                alignItems: 'center', gap: 6,
                                transition: 'border-color 0.2s, color 0.2s',
                            }}
                            onMouseOver={() => setBtnHover(true)}
                            onMouseOut={() => setBtnHover(false)}
                        >
                            <i className="fab fa-github" /> Source
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Section ──────────────────────────────────────────────────────────────── */
const ProjectList: React.FC = () => {
    const tk = useTokens();
    const [ghHover, setGhHover] = useState(false);

    return (
        <section
            id="projects"
            style={{
                background: tk.sectionBg,
                paddingTop: '5.5rem',
                paddingBottom: '5.5rem',
                transition: 'background 0.3s ease',
            }}
        >
            <div className="container">

                {/* ── Header ── */}
                <div className="text-center mb-5">
                    <span style={{
                        display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
                        letterSpacing: '0.14em', textTransform: 'uppercase',
                        color: '#dc3545', marginBottom: '0.75rem',
                    }}>Portfolio</span>
                    <h2 className="display-5 fw-bold mb-2" style={{ color: tk.text }}>Featured Work</h2>
                    <div style={{ width: 48, height: 3, background: '#dc3545', borderRadius: 2, margin: '0 auto 1.25rem' }} />
                    <p className="lead mx-auto" style={{ maxWidth: 560, color: tk.textSec, fontSize: '0.95rem' }}>
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
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            color: ghHover ? tk.text : tk.githubBtnText,
                            border: `1px solid ${ghHover ? 'rgba(220,53,69,0.5)' : tk.githubBtnBorder}`,
                            borderRadius: 8, padding: '10px 28px',
                            fontSize: '0.85rem', fontWeight: 500,
                            textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s',
                        }}
                        onMouseOver={() => setGhHover(true)}
                        onMouseOut={() => setGhHover(false)}
                    >
                        <i className="fab fa-github" /> View All Projects on GitHub
                    </a>
                </div>
            </div>

            {/* Responsive mobile stacking */}
            <style>{`
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
};

export default ProjectList;
