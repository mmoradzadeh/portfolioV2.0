import React from 'react';
import ContactFrom from '../ContactForm/ContactFrom';

const Contact: React.FC = () => (
    <section id="contact" className="py-5 section-padding dark-bg text-white">
        <div className="container">

            {/* ── Header ── */}
            <div className="text-center mb-5">
                <span className="section-label">Let's Talk</span>
                <h2 className="display-5 fw-bold mb-2">Get In Touch</h2>
                <div className="section-divider"></div>
                <p className="text-secondary mx-auto" style={{ maxWidth: '560px' }}>
                    Have a project in mind, a role to discuss, or just want to connect?
                    My inbox is always open.
                </p>
            </div>

            <div className="row g-5 align-items-start">

                {/* ── Left column ── */}
                <div className="col-lg-5">
                    <h3 className="h5 fw-bold mb-4 text-white">Contact Details</h3>
                    <div className="d-flex flex-column gap-4 mb-5">

                        <div className="d-flex align-items-center gap-3">
                            <div className="contact-info-icon">
                                <i className="fas fa-envelope text-danger"></i>
                            </div>
                            <div>
                                <p className="text-secondary small mb-0">Email</p>
                                <a href="mailto:mehdimoradzadeh@outlook.com" className="text-white text-decoration-none fw-medium">
                                    mehdimoradzadeh@outlook.com
                                </a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <div className="contact-info-icon">
                                <i className="fas fa-phone text-danger"></i>
                            </div>
                            <div>
                                <p className="text-secondary small mb-0">Phone</p>
                                <a href="tel:+14168581606" className="text-white text-decoration-none fw-medium">
                                    +1 (416) 858-1606
                                </a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <div className="contact-info-icon">
                                <i className="fas fa-map-marker-alt text-danger"></i>
                            </div>
                            <div>
                                <p className="text-secondary small mb-0">Location</p>
                                <span className="text-white fw-medium">Toronto, ON, Canada</span>
                            </div>
                        </div>

                    </div>

                    {/* Social links */}
                    <h3 className="h5 fw-bold mb-3 text-white">Find Me Online</h3>
                    <div className="d-flex gap-3">
                        <a
                            href="https://github.com/MMoradzadeh"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link-btn d-flex align-items-center gap-2 text-white text-decoration-none border border-secondary rounded px-3 py-2"
                            style={{ fontSize: '0.875rem' }}
                        >
                            <i className="fab fa-github"></i> GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/mmoradzadeh"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link-btn d-flex align-items-center gap-2 text-white text-decoration-none border border-secondary rounded px-3 py-2"
                            style={{ fontSize: '0.875rem' }}
                        >
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>

                    {/* Availability badge */}
                    <div className="mt-5 p-3 rounded-3" style={{ background: 'rgba(220,53,69,0.08)', border: '1px solid rgba(220,53,69,0.2)' }}>
                        <div className="d-flex align-items-center gap-2">
                            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28a745', display: 'inline-block', boxShadow: '0 0 0 3px rgba(40,167,69,0.25)' }}></span>
                            <span className="text-white small fw-medium">Currently open to new opportunities</span>
                        </div>
                    </div>
                </div>

                {/* ── Right column — form ── */}
                <div className="col-lg-7">
                    <ContactFrom />
                </div>

            </div>
        </div>
    </section>
);

export default Contact;
