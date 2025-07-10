import React from 'react';

const Footer: React.FC = () => (
    <footer className="bg-black text-white py-5">
        <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                <div className="mb-3 mb-md-0">
                    <div className="h3 fw-bold">
                        <span>Mehdi</span><span className="text-danger">Moradzadeh</span>
                    </div>
                    <p className="text-muted mb-0">Building digital experiences that matter.</p>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4">
                    <a href="#home" className="text-white text-decoration-none footer-link">Home</a>
                    <a href="#projects" className="text-white text-decoration-none footer-link">Projects</a>
                    <a href="#about" className="text-white text-decoration-none footer-link">About</a>
                    <a href="#resume" className="text-white text-decoration-none footer-link">Resume</a>
                    <a href="#contact" className="text-white text-decoration-none footer-link">Contact</a>
                </div>
            </div>
            <div className="border-top border-dark pt-4 text-center text-muted">
                <p className="mb-0">&copy; 2025 Mehdi Moradzadeh. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
