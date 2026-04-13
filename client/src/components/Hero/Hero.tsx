import React from 'react';
import profilePicture from '../../assets/profilePic.jpeg'

const Hero: React.FC = () => (
    <section id="home" className="dark-bg text-white hero-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <p className="text-danger fw-semibold mb-2 text-uppercase letter-spacing-wide">Available for opportunities</p>
                    <h1 className="display-4 fw-bold mb-3">Hi, I'm <span className="text-danger">Mehdi Moradzadeh</span></h1>
                    <h2 className="h3 mb-4 text-light fw-light">Full-Stack Software Engineer</h2>
                    <p className="lead mb-4 text-secondary">
                        Full-stack engineer specializing in <strong className="text-light">Java Spring Boot</strong> and <strong className="text-light">TypeScript</strong> ecosystems.
                        Expert in microservices, Next.js applications, and GCP-based CI/CD pipelines.
                    </p>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {['Spring Boot', 'React / Next.js', 'Docker / GKE', 'TypeScript'].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-2 rounded-pill fw-medium"
                                style={{
                                    fontSize: '0.78rem',
                                    background: 'rgba(220, 53, 69, 0.15)',
                                    color: '#fff',
                                    border: '1px solid rgba(220, 53, 69, 0.45)',
                                    letterSpacing: '0.02em',
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="d-flex flex-column flex-sm-row gap-3">
                        <a href="#projects" className="btn btn-red btn-lg px-4">View My Work</a>
                        <a href="#contact" className="btn btn-outline-white btn-lg px-4">Contact Me</a>
                    </div>
                </div>
                <div className="col-lg-6 text-center">
                    <div className="profile-img-container mx-auto floating">
                        <img
                            src={profilePicture}
                            alt="Mehdi Moradzadeh — Full-Stack Software Engineer"
                            className="profile-img"
                        />
                    </div>
                    <div className="d-flex justify-content-center gap-4 mt-4">
                        <div className="text-center">
                            <div className="h4 fw-bold text-danger mb-0">3+</div>
                            <small className="text-secondary">Years Experience</small>
                        </div>
                        <div className="vr bg-secondary opacity-25"></div>
                        <div className="text-center">
                            <div className="h4 fw-bold text-danger mb-0">10+</div>
                            <small className="text-secondary">Projects Shipped</small>
                        </div>
                        <div className="vr bg-secondary opacity-25"></div>
                        <div className="text-center">
                            <div className="h4 fw-bold text-danger mb-0">2</div>
                            <small className="text-secondary">Companies</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
