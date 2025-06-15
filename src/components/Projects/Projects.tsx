import React from 'react';

const Projects: React.FC = () => (
    <section id="projects" className="py-5 section-padding bg-white">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">My Projects</h2>
                <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                    Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
                </p>
            </div>
            <div className="row g-4">
                {/* Project 1 */}
                <div className="col-md-6 col-lg-4">
                    <div className="project-card card h-100 border-0 shadow-sm">
                        <div className="project-img rounded-top">
                            <i className="fas fa-project-diagram text-white fa-4x"></i>
                        </div>
                        <div className="card-body">
                            <h3 className="h5 card-title fw-bold">E-Commerce Platform</h3>
                            <p className="card-text text-muted mb-3">
                                A full-featured e-commerce solution with payment processing, inventory management, and analytics.
                            </p>
                            <div className="d-flex flex-wrap gap-2 mb-3">
                                <span className="skill-pill badge bg-light text-dark">React</span>
                                <span className="skill-pill badge bg-light text-dark">Node.js</span>
                                <span className="skill-pill badge bg-light text-dark">MongoDB</span>
                                <span className="skill-pill badge bg-light text-dark">Stripe API</span>
                            </div>
                            <div className="d-flex flex-column flex-sm-row gap-2">
                                <a href="#" className="btn btn-dark btn-sm">Live Demo</a>
                                <a href="#" className="btn btn-outline-dark btn-sm">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="col-md-6 col-lg-4">
                    <div className="project-card card h-100 border-0 shadow-sm">
                        <div className="project-img rounded-top">
                            <i className="fas fa-mobile-alt text-white fa-4x"></i>
                        </div>
                        <div className="card-body">
                            <h3 className="h5 card-title fw-bold">Task Management App</h3>
                            <p className="card-text text-muted mb-3">
                                A cross-platform productivity app with real-time sync, reminders, and team collaboration features.
                            </p>
                            <div className="d-flex flex-wrap gap-2 mb-3">
                                <span className="skill-pill badge bg-light text-dark">Flutter</span>
                                <span className="skill-pill badge bg-light text-dark">Firebase</span>
                                <span className="skill-pill badge bg-light text-dark">Dart</span>
                            </div>
                            <div className="d-flex flex-column flex-sm-row gap-2">
                                <a href="#" className="btn btn-dark btn-sm">Live Demo</a>
                                <a href="#" className="btn btn-outline-dark btn-sm">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="col-md-6 col-lg-4">
                    <div className="project-card card h-100 border-0 shadow-sm">
                        <div className="project-img rounded-top">
                            <i className="fas fa-chart-line text-white fa-4x"></i>
                        </div>
                        <div className="card-body">
                            <h3 className="h5 card-title fw-bold">Data Visualization Dashboard</h3>
                            <p className="card-text text-muted mb-3">
                                Interactive dashboard for analyzing large datasets with customizable visualizations and reporting.
                            </p>
                            <div className="d-flex flex-wrap gap-2 mb-3">
                                <span className="skill-pill badge bg-light text-dark">D3.js</span>
                                <span className="skill-pill badge bg-light text-dark">Python</span>
                                <span className="skill-pill badge bg-light text-dark">Flask</span>
                                <span className="skill-pill badge bg-light text-dark">Pandas</span>
                            </div>
                            <div className="d-flex flex-column flex-sm-row gap-2">
                                <a href="#" className="btn btn-dark btn-sm">Live Demo</a>
                                <a href="#" className="btn btn-outline-dark btn-sm">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <a href="https://github.com/MMoradzadeh" target="_blank" className="btn btn-link text-danger text-decoration-none">
                    View more on GitHub <i className="fas fa-arrow-right ms-2"></i>
                </a>
            </div>
        </div>
    </section>
);

export default Projects;
