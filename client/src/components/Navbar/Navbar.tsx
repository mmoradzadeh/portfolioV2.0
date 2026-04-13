import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => (
    <nav className="navbar navbar-expand-lg navbar-dark dark-bg fixed-top shadow-sm">
        <div className="container">
            <a className="navbar-brand fw-bold" href="/">
                <span>Mehdi</span><span className="text-danger">.</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link px-3" href="/#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="/#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="/#about">About</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="/#resume">Resume</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="/#contact">Contact</a></li>
                </ul>
                <div className="d-flex ms-lg-4 gap-3 align-items-center">
                    <a href="https://github.com/MMoradzadeh" target="_blank" rel="noreferrer" className="text-white social-icon" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/mmoradzadeh" target="_blank" rel="noreferrer" className="text-white social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="/#contact" className="btn btn-red btn-sm px-3 ms-2">Hire Me</a>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;
