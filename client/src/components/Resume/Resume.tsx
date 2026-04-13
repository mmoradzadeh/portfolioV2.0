import React from 'react';
import type { Education } from '../../interfaces/Education';
import type { Experiences } from '../../interfaces/Experiences';
import type { Certifications } from '../../interfaces/Certifications';
import educationData from '../../../../server/data/education.json';
import experienceData from '../../../../server/data/experiences.json';
import certificationsData from '../../../../server/data/certifications.json';

const resumePDF = '/Mehdi Moradzadeh - Resume.pdf';

const Resume: React.FC = () => (
    <section id="resume" className="py-5 section-padding bg-light">
        <div className="container">

            {/* ── Header ─────────────────────────────────────────────── */}
            <div className="text-center mb-5">
                <span className="section-label">Career</span>
                <h2 className="display-5 fw-bold mb-2 my-resume-section-heading">My Resume</h2>
                <div className="section-divider" />
                <p className="lead text-muted mx-auto" style={{ maxWidth: '580px' }}>
                    A summary of my professional journey, education, and credentials.
                </p>
            </div>

            {/* ── Identity + Download ─────────────────────────────────── */}
            <div className="resume-header-card bg-white rounded-3 shadow-sm p-4 p-md-5 mb-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                    <div className="flex-grow-1">
                        <h3 className="h2 fw-bold mb-1">Mehdi Moradzadeh</h3>
                        <p className="text-muted mb-2">Full-Stack Software Engineer · Toronto, ON</p>
                        <div className="d-flex flex-wrap gap-2 gap-md-3">
                            <a href="mailto:mehdimoradzadeh@outlook.com" className="text-muted small text-decoration-none">
                                <i className="fas fa-envelope me-1 text-danger" />mehdimoradzadeh@outlook.com
                            </a>
                            <a href="https://linkedin.com/in/mmoradzadeh" target="_blank" rel="noreferrer" className="text-muted small text-decoration-none">
                                <i className="fab fa-linkedin me-1 text-danger" />linkedin.com/in/mmoradzadeh
                            </a>
                            <a href="https://github.com/MMoradzadeh" target="_blank" rel="noreferrer" className="text-muted small text-decoration-none">
                                <i className="fab fa-github me-1 text-danger" />github.com/MMoradzadeh
                            </a>
                        </div>
                    </div>
                    <a
                        href={resumePDF}
                        download
                        className="btn-download btn btn-dark btn-lg px-4 flex-shrink-0 w-100 w-md-auto"
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        <i className="fas fa-download me-2" />Download PDF
                    </a>
                </div>
            </div>

            {/* ── Experience + Education ──────────────────────────────── */}
            <div className="row g-4">

                {/* Experience */}
                <div className="col-lg-6">
                    <div className="resume-card bg-white rounded-3 shadow-sm p-4 h-100">
                        <h4 className="h5 fw-bold mb-4 d-flex align-items-center gap-2">
                            <span className="contact-info-icon">
                                <i className="fas fa-briefcase text-danger small" />
                            </span>
                            Work Experience
                        </h4>
                        {(experienceData as Experiences[]).map((exp, idx) => (
                            <div
                                key={exp.id}
                                className={`d-flex gap-3 ${idx < experienceData.length - 1 ? 'mb-4 pb-4 border-bottom' : ''}`}
                            >
                                <div className="resume-timeline-dot mt-1" />
                                <div className="flex-grow-1">
                                    <h5 className="h6 fw-bold mb-0">{exp.title}</h5>
                                    <p className="text-danger small fw-semibold mb-1">{exp.company}</p>
                                    <p className="text-muted small mb-2">
                                        <i className="fas fa-calendar-alt me-1" />{exp.start} – {exp.finish}
                                        {exp.location && (
                                            <span className="ms-2">
                                                <i className="fas fa-map-marker-alt me-1" />{exp.location}
                                            </span>
                                        )}
                                    </p>
                                    <ul className="ps-3 mb-0" style={{ fontSize: '0.85rem' }}>
                                        {exp.tasks.map((task, i) => (
                                            <li key={i} className="mb-1">{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education + Certifications */}
                <div className="col-lg-6">
                    <div className="resume-card bg-white rounded-3 shadow-sm p-4 mb-4">
                        <h4 className="h5 fw-bold mb-4 d-flex align-items-center gap-2">
                            <span className="contact-info-icon">
                                <i className="fas fa-graduation-cap text-danger small" />
                            </span>
                            Education
                        </h4>
                        {(educationData as Education[]).map((edu, idx) => (
                            <div
                                key={edu.id}
                                className={`d-flex gap-3 ${idx < educationData.length - 1 ? 'mb-4 pb-4 border-bottom' : ''}`}
                            >
                                <div className="resume-timeline-dot mt-1" />
                                <div>
                                    <h5 className="h6 fw-bold mb-0">{edu.degree}</h5>
                                    <p className="text-danger small fw-semibold mb-1">{edu.organization}</p>
                                    <p className="text-muted small mb-1">
                                        <i className="fas fa-calendar-alt me-1" />{edu.start} – {edu.finish}
                                    </p>
                                    <p className="mb-0" style={{ fontSize: '0.85rem' }}>{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="resume-card bg-white rounded-3 shadow-sm p-4">
                        <h4 className="h5 fw-bold mb-4 d-flex align-items-center gap-2">
                            <span className="contact-info-icon">
                                <i className="fas fa-certificate text-danger small" />
                            </span>
                            Certifications
                        </h4>
                        {(certificationsData as Certifications[]).map((cert) => (
                            <div key={cert.id} className="d-flex align-items-start gap-3 mb-3">
                                <div className="resume-timeline-dot mt-1" />
                                <div>
                                    <h5 className="h6 fw-bold mb-0">{cert.title}</h5>
                                    <p className="text-muted small mb-0">
                                        {cert.organization} ·{' '}
                                        {cert.progress
                                            ? <span className="text-success fw-medium">{cert.date}</span>
                                            : <span className="text-warning fw-medium">In Progress</span>
                                        }
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default Resume;
