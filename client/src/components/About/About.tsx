import React from 'react';
import profilePicture from '../../assets/profilePic.jpeg';

const skills = [
    { label: 'Java', category: 'lang' },
    { label: 'JavaScript (ES6+)', category: 'lang' },
    { label: 'TypeScript', category: 'lang' },
    { label: 'Python', category: 'lang' },
    { label: 'SQL', category: 'lang' },
    { label: 'Spring Boot', category: 'backend' },
    { label: 'Spring Security / JWT', category: 'backend' },
    { label: 'Node.js / Express', category: 'backend' },
    { label: 'RESTful APIs', category: 'backend' },
    { label: 'React', category: 'frontend' },
    { label: 'Next.js', category: 'frontend' },
    { label: 'React Native', category: 'frontend' },
    { label: 'Tailwind CSS', category: 'frontend' },
    { label: 'Docker', category: 'devops' },
    { label: 'Kubernetes (GKE)', category: 'devops' },
    { label: 'GCP / Cloud Run', category: 'devops' },
    { label: 'GitLab CI/CD', category: 'devops' },
    { label: 'JUnit 5 / Playwright', category: 'testing' },
];

const About: React.FC = () => (
    <section id="about" className="py-5 section-padding bg-light">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">About Me</h2>
                <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                    The story behind the code.
                </p>
            </div>
            <div className="row align-items-start g-5">
                <div className="col-lg-4 text-center">
                    <div className="about-img-wrapper mx-auto mb-4">
                        <img
                            src={profilePicture}
                            alt="Mehdi Moradzadeh"
                            className="img-fluid rounded-3 shadow about-photo"
                        />
                    </div>
                    <div className="d-flex flex-column gap-2 text-start about-info-card p-3 rounded-3 bg-white shadow-sm">
                        <div className="d-flex align-items-center gap-2">
                            <i className="fas fa-map-marker-alt text-danger"></i>
                            <span className="small">Toronto, ON</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <i className="fas fa-envelope text-danger"></i>
                            <a href="mailto:mehdimoradzadeh@outlook.com" className="small text-dark text-decoration-none">mehdimoradzadeh@outlook.com</a>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <i className="fab fa-github text-danger"></i>
                            <a href="https://github.com/MMoradzadeh" target="_blank" rel="noreferrer" className="small text-dark text-decoration-none">github.com/MMoradzadeh</a>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <i className="fab fa-linkedin text-danger"></i>
                            <a href="https://linkedin.com/in/mmoradzadeh" target="_blank" rel="noreferrer" className="small text-dark text-decoration-none">linkedin.com/in/mmoradzadeh</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <h3 className="h4 fw-bold mb-3">Who I Am</h3>
                    <p className="mb-3 text-secondary">
                        I'm a full-stack software engineer with <strong className="text-dark">3+ years of experience</strong>, including FinTech consulting at FDM Group.
                        I hold a <strong className="text-dark">Master of Applied Science</strong> from Toronto Metropolitan University and a
                        Full-Stack Development Certificate from the <strong className="text-dark">University of Toronto</strong>.
                    </p>
                    <p className="mb-3 text-secondary">
                        My core specialization is in <strong className="text-dark">Java Spring Boot microservices</strong> and <strong className="text-dark">TypeScript-based front-ends</strong> (React / Next.js),
                        backed by cloud-native deployments on GCP using Docker and Kubernetes. I apply the same analytical precision I developed
                        during my graduate research to building secure, scalable production systems.
                    </p>
                    <p className="mb-5 text-secondary">
                        Outside of engineering, I enjoy following technology trends, playing chess, and exploring global cultures through travel.
                    </p>

                    <h3 className="h5 fw-bold mb-3">Technical Skills</h3>
                    <div className="d-flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                            <span key={i} className="skill-pill badge bg-danger bg-opacity-10 text-danger px-3 py-2">
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
