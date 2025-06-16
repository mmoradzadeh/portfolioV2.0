import React from 'react';

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
                                            {emailUser}@{emailDomain}
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
                            <a href="https://github.com" target="_blank" className="text-white social-icon">
                                <i className="fab fa-github fa-lg"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" className="text-white social-icon">
                                <i className="fab fa-linkedin-in fa-lg"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" className="text-white social-icon">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="https://medium.com" target="_blank" className="text-white social-icon">
                                <i className="fab fa-medium-m fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="bg-white rounded-3 p-4 p-md-5 text-dark">
                        <h3 className="h4 fw-bold mb-4">Send Me a Message</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows={4} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark w-100 py-3">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
