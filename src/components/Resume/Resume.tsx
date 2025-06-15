import React from 'react';

const resumePDF = "/Mehdi Moradzadeh - Resume.pdf";

const Resume: React.FC = () => (
    <section id="resume" className="py-5 section-padding bg-white">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">My Resume</h2>
                <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                    Download my resume to learn more about my professional experience and education.
                </p>
            </div>
            <div className="bg-light rounded-3 p-4 p-md-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
                    <div className="mb-3 mb-md-0">
                        <h3 className="h2 fw-bold mb-1">Mehdi Moradzadeh</h3>
                        <p className="text-muted mb-0">Full Stack Developer</p>
                    </div>
                    <div>
                        <a href={resumePDF} download className="btn btn-dark btn-lg">
                            <i className="fas fa-download me-2"></i> Download Resume
                        </a>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-md-6">
                        <h4 className="h4 fw-bold mb-4 pb-2 border-bottom">Experience</h4>
                        <div className="mb-5">
                            <h5 className="h5 fw-bold">Senior Software Engineer</h5>
                            <p className="text-muted mb-2">Tech Solutions Inc. • 2020 - Present</p>
                            <ul className="ps-3">
                                <li>Led development of customer portal serving 50k+ users</li>
                                <li>Implemented CI/CD pipeline reducing deployment time by 70%</li>
                                <li>Mentored 3 junior developers</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="h5 fw-bold">Software Developer</h5>
                            <p className="text-muted mb-2">Digital Innovations • 2018 - 2020</p>
                            <ul className="ps-3">
                                <li>Built REST APIs for mobile applications</li>
                                <li>Optimized database queries improving performance by 40%</li>
                                <li>Implemented automated testing suite</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h4 className="h4 fw-bold mb-4 pb-2 border-bottom">Education</h4>
                        <div className="mb-5">
                            <h5 className="h5 fw-bold">MSc in Computer Science</h5>
                            <p className="text-muted mb-2">Stanford University • 2016 - 2018</p>
                            <p className="mb-0">Specialization in Artificial Intelligence</p>
                        </div>
                        <div className="mb-5">
                            <h5 className="h5 fw-bold">BSc in Software Engineering</h5>
                            <p className="text-muted mb-2">MIT • 2012 - 2016</p>
                            <p className="mb-0">Graduated with Honors</p>
                        </div>

                        <h4 className="h4 fw-bold mb-4 pb-2 border-bottom">Certifications</h4>
                        <div>
                            <h5 className="h5 fw-bold">AWS Certified Developer</h5>
                            <p className="text-muted mb-0">Amazon Web Services • 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Resume;
