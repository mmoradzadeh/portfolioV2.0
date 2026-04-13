import React from 'react';
import profilePicture from '../../assets/profilePic.jpeg';

const skills = [
    { label: 'Java' },
    { label: 'JavaScript (ES6+)' },
    { label: 'TypeScript' },
    { label: 'Python' },
    { label: 'SQL' },
    { label: 'Spring Boot' },
    { label: 'Spring Security / JWT' },
    { label: 'Node.js / Express' },
    { label: 'RESTful APIs' },
    { label: 'React' },
    { label: 'Next.js' },
    { label: 'React Native' },
    { label: 'Tailwind CSS' },
    { label: 'Docker' },
    { label: 'Kubernetes (GKE)' },
    { label: 'GCP / Cloud Run' },
    { label: 'GitLab CI/CD' },
    { label: 'JUnit 5 / Playwright' },
];

const About: React.FC = () => (
    <section id="about" className="py-5 section-padding bg-light">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3 about-section-heading">About Me</h2>
                <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                    The story behind the code.
                </p>
            </div>

            <div className="row align-items-start g-4 g-lg-5">

                {/* ── Photo + contact card ──────────────────────────────── */}
                <div className="col-lg-4 text-center">
                    <div className="about-img-wrapper mx-auto mb-4">
                        <img
                            src={profilePicture}
                            alt="Mehdi Moradzadeh"
                            className="img-fluid rounded-3 shadow about-photo"
                        />
                    </div>
                    <div className="d-flex flex-column gap-2 text-start about-info-card p-3 rounded-3 shadow-sm">
                        <div className="d-flex align-items-center gap-2">
                            <i className="fas fa-map-marker-alt text-danger flex-shrink-0" />
                            <span className="small">Toronto, ON</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <i className="fas fa-envelope text-danger flex-shrink-0" />
                            <a
                                href="mailto:mehdimoradzadeh@outlook.com"
                                className="small text-dark text-decoration-none"
                                style={{ wordBreak: 'break-all' }}
                            >
                                mehdimoradzadeh@outlook.com
                            </a>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <i className="fab fa-github text-danger flex-shrink-0" />
                            <a
                                href="https://github.com/MMoradzadeh"
                                target="_blank"
                                rel="noreferrer"
                                className="small text-dark text-decoration-none"
                            >
                                github.com/MMoradzadeh
                            </a>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <i className="fab fa-linkedin text-danger flex-shrink-0" />
                            <a
                                href="https://linkedin.com/in/mmoradzadeh"
                                target="_blank"
                                rel="noreferrer"
                                className="small text-dark text-decoration-none"
                            >
                                linkedin.com/in/mmoradzadeh
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Bio + skills ──────────────────────────────────────── */}
                <div className="col-lg-8">
                    <h3 className="h4 fw-bold mb-3 about-section-heading">Who I Am</h3>
                    <p className="mb-3 about-section-text">
                        I'm a full-stack software engineer with{' '}
                        <strong>3+ years of experience</strong>, including FinTech consulting at FDM Group.
                        I hold a <strong>Master of Applied Science</strong> from Toronto Metropolitan University and a
                        Full-Stack Development Certificate from the <strong>University of Toronto</strong>.
                    </p>
                    <p className="mb-3 about-section-text">
                        My core specialization is in{' '}
                        <strong>Java Spring Boot microservices</strong> and{' '}
                        <strong>TypeScript-based front-ends</strong> (React / Next.js),
                        backed by cloud-native deployments on GCP using Docker and Kubernetes. I apply the same
                        analytical precision I developed during my graduate research to building secure, scalable
                        production systems.
                    </p>
                    <p className="mb-5 about-section-text">
                        Outside of engineering, I enjoy following technology trends, playing chess, and exploring
                        global cultures through travel.
                    </p>

                    <h3 className="h5 fw-bold mb-3 about-section-heading">Technical Skills</h3>
                    <div className="d-flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                            <span
                                key={i}
                                className="skill-pill badge px-3 py-2"
                                style={{
                                    background: 'rgba(220,53,69,0.10)',
                                    color: '#dc3545',
                                    border: '1px solid rgba(220,53,69,0.25)',
                                }}
                            >
                                {skill.label}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default About;
