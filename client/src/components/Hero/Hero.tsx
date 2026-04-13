import React from 'react';
import profilePicture from '../../assets/profilePic.jpeg';

const Hero: React.FC = () => (
    <section id="home" className="dark-bg hero-section">
        <div className="container">
            <div className="row align-items-center">

                {/* ── Left column ───────────────────────────────────────── */}
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <p className="text-danger fw-semibold mb-2 text-uppercase letter-spacing-wide">
                        Available for opportunities
                    </p>
                    <h1 className="display-4 fw-bold mb-3" style={{ color: 'var(--text)' }}>
                        Hi, I'm <span className="text-danger">Mehdi Moradzadeh</span>
                    </h1>
                    <h2 className="h3 mb-4 fw-light" style={{ color: 'var(--text-sec)' }}>
                        Full-Stack Software Engineer
                    </h2>
                    <p className="lead mb-4" style={{ color: 'var(--text-sec)' }}>
                        Full-stack engineer specializing in{' '}
                        <strong style={{ color: 'var(--text)' }}>Java Spring Boot</strong> and{' '}
                        <strong style={{ color: 'var(--text)' }}>TypeScript</strong> ecosystems.
                        Expert in microservices, Next.js applications, and GCP-based CI/CD pipelines.
                    </p>

                    {/* Tech badge pills — explicit inline styles so they always show correctly */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {['Spring Boot', 'React / Next.js', 'Docker / GKE', 'TypeScript'].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-2 rounded-pill fw-medium"
                                style={{
                                    fontSize: '0.78rem',
                                    background: 'rgba(220, 53, 69, 0.15)',
                                    color: 'var(--text)',
                                    border: '1px solid rgba(220, 53, 69, 0.45)',
                                    letterSpacing: '0.02em',
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="d-flex flex-column flex-sm-row gap-3">
                        <a href="#projects" className="btn btn-red btn-lg px-4">View My Work</a>
                        <a href="#contact" className="btn btn-outline-white btn-lg px-4">Contact Me</a>
                    </div>
                </div>

                {/* ── Right column ──────────────────────────────────────── */}
                <div className="col-lg-6 text-center">
                    <div className="profile-img-container mx-auto floating">
                        <img
                            src={profilePicture}
                            alt="Mehdi Moradzadeh — Full-Stack Software Engineer"
                            className="profile-img"
                        />
                    </div>

                    {/* Stats row */}
                    <div className="d-flex justify-content-center gap-4 mt-4 hero-stats-row">
                        <div className="text-center">
                            <div className="h4 fw-bold text-danger mb-0">3+</div>
                            <small style={{ color: 'var(--text-sec)' }}>Years Experience</small>
                        </div>
                        <div className="vr opacity-25" style={{ background: 'var(--text-sec)' }} />
                        <div className="text-center">
                            <div className="h4 fw-bold text-danger mb-0">10+</div>
                            <small style={{ color: 'var(--text-sec)' }}>Projects Shipped</small>
                        </div>
                        <div className="vr opacity-25" style={{ background: 'var(--text-sec)' }} />
                        <div className="text-center">
                            <div className="h4 fw-bold text-danger mb-0">2</div>
                            <small style={{ color: 'var(--text-sec)' }}>Companies</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default Hero;
