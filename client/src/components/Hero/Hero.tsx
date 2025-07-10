import React from 'react';
import profilePicture from '../../assets/profilePic.jpeg'

const Hero: React.FC = () => (
    <section id="home" className="dark-bg text-white hero-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <h1 className="display-4 fw-bold mb-3">Hi, I'm <span className="text-danger">Mehdi Moradzadeh</span></h1>
                    <h2 className="h3 mb-4">Full Stack Developer</h2>
                    <p className="lead mb-4 text-light">
                        I build exceptional digital experiences with modern technologies.
                        Passionate about creating efficient, scalable solutions that make an impact.
                    </p>
                    <div className="d-flex flex-column flex-sm-row gap-3">
                        <a href="#projects" className="btn btn-red btn-lg px-4">View My Work</a>
                        <a href="#contact" className="btn btn-outline-white btn-lg px-4">Contact Me</a>
                    </div>
                </div>
                <div className="col-lg-6 text-center">
                    <div className="profile-img-container mx-auto floating">
                        <img
                            src={profilePicture}
                            alt="Profile"
                            className="profile-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;