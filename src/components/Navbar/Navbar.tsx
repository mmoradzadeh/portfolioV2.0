import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => (
    <nav className="navbar navbar-expand-lg navbar-dark dark-bg fixed-top shadow-sm">
        <div className="container">
            <a className="navbar-brand fw-bold" href="#">
                <span>Mehdi</span><span className="text-danger">Moradzadeh</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link px-3" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="/Projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#resume">Resume</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#contact">Contact</a></li>
                </ul>
                <div className="d-flex ms-lg-4">
                    <a href="https://github.com" target="_blank" className="text-white mx-2 social-icon"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com" target="_blank" className="text-white mx-2 social-icon"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://twitter.com" target="_blank" className="text-white mx-2 social-icon"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;