import React from 'react';
import ContactFrom from '../ContactForm/ContactFrom';

const emailUser = "morad97mm";
const emailDomain = "gmail.com";
const phoneParts = ["+1", "(416)", "858", "1606"];
const obfuscatedEmail = `${emailUser}@${emailDomain}`;
const obfuscatedPhone = `${phoneParts[0]} ${phoneParts[1]} ${phoneParts[2]}-${phoneParts[3]}`;

const Contact: React.FC = () => (
    <section id="contact" className="py-5 section-padding dark-bg text-white">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
                <p className="lead text-light mx-auto" style={{ maxWidth: '600px' }}>
                    Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
                </p>
            </div>
            <div className="row g-4">
                <div className="col-lg-5">
                    <div className="mb-5">
                        <h3 className="h4 fw-bold mb-4">Contact Information</h3>
                        <div className="d-flex flex-column gap-4">
                            {/* Email */}
                            <div className="d-flex align-items-start">
                                <i className="fas fa-envelope mt-1 me-3 text-danger"></i>
                                <div>
                                    <p className="fw-bold mb-1">Email</p>
                                    <p className="text-light mb-0">
                                        <a href={`mailto:${emailUser}@${emailDomain}`} className="text-light text-decoration-none">
                                            {obfuscatedEmail}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="d-flex align-items-start">
                                <i className="fas fa-phone-alt mt-1 me-3 text-danger"></i>
                                <div>
                                    <p className="fw-bold mb-1">Phone</p>
                                    <p className="text-light mb-0">
                                        <a href={`tel:${phoneParts.join("").replace(/[^0-9+]/g, "")}`} className="text-light text-decoration-none">
                                            {obfuscatedPhone}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="d-flex align-items-start">
                                <i className="fas fa-map-marker-alt mt-1 me-3 text-danger"></i>
                                <div>
                                    <p className="fw-bold mb-1">Location</p>
                                    <p className="text-light mb-0">Toronto, ON</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="h4 fw-bold mb-4">Follow Me</h3>
                        <div className="d-flex gap-3">
                            <a href="https://github.com/MMoradzadeh" target="_blank" className="text-white social-icon">
                                <i className="fab fa-github fa-lg"></i>
                            </a>
                            <a href="https://linkedin.com/in/mmoradzadeh" target="_blank" className="text-white social-icon">
                                <i className="fab fa-linkedin-in fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <ContactFrom />
            </div>
        </div>
    </section>
);

export default Contact;
