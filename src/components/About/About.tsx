import React from 'react';
import backgroundPhoto from '../../assets/backgroundPhoto.jpg';

const About: React.FC = () => (
    <section id="about" className="py-5 section-padding bg-light">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 mb-5 mb-lg-0 text-center">
                    <div className="position-relative">
                        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10 rounded-3 blur"></div>
                        <img
                            src={backgroundPhoto}
                            alt="About"
                            className="img-fluid rounded-3 border border-4 border-white bg-danger"
                        />
                    </div>
                </div>
                <div className="col-lg-8 ps-lg-5">
                    <h2 className="display-5 fw-bold mb-4">About Me</h2>
                    <p className="lead mb-4">
                        I'm a passionate software engineer with 2+ years of experience building web and mobile applications.
                        My journey in tech started when I built my first console app at 14, and I've been hooked ever since.
                    </p>
                    <p className="lead mb-4">
                        I specialize in JavaScript ecosystems (React, Node.js) but I'm always exploring new technologies.
                        What excites me most is solving complex problems with elegant, maintainable solutions.
                    </p>
                    <p className="lead mb-5">
                        When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.
                    </p>

                    <h3 className="h4 fw-bold mb-3">My Skills</h3>
                    <div className="d-flex flex-wrap gap-2">
                        <span className="skill-pill badge bg-danger bg-opacity-10 text-danger px-3 py-2">JavaScript</span>
                        <span className="skill-pill badge bg-danger bg-opacity-10 text-danger px-3 py-2">TypeScript</span>
                        <span className="skill-pill badge bg-danger bg-opacity-10 text-danger px-3 py-2">React</span>
                        <span className="skill-pill badge bg-danger bg-opacity-10 text-danger px-3 py-2">Node.js</span>
                        <span className="skill-pill badge bg-danger bg-opacity-10 text-danger px-3 py-2">Python</span>
                        <span className="skill-pill badge bg-danger bg-opacity-10 text-danger px-3 py-2">AWS</span>
                        <span className="skill-pill badge bg-danger bg-opacity-10 text-danger px-3 py-2">Docker</span>
                        <span className="skill-pill badge bg-danger bg-opacity-10 text-danger px-3 py-2">SQL</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;