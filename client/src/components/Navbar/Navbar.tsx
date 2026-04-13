import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
            <div className="container">
                {/* ── Brand ─────────────────────────────────────────────────── */}
                <a className="navbar-brand fw-bold" href="/">
                    <span>Mehdi</span><span className="text-danger">.</span>
                </a>

                {/* ── Right-side controls always visible on mobile ────────── */}
                <div className="d-flex align-items-center gap-2 ms-auto me-2 me-lg-0 d-lg-none">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`} />
                    </button>
                </div>

                {/* ── Hamburger ──────────────────────────────────────────────── */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* ── Collapsible menu ───────────────────────────────────────── */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link px-3" href="/#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="/#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="/#about">About</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="/#resume">Resume</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="/#contact">Contact</a></li>
                    </ul>

                    {/* Desktop right group — social + toggle + CTA */}
                    <div className="nav-end-group d-flex ms-lg-4 gap-3 align-items-center">
                        <a
                            href="https://github.com/MMoradzadeh"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github" />
                        </a>
                        <a
                            href="https://linkedin.com/in/mmoradzadeh"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>

                        {/* Theme toggle — visible in collapsed menu on mobile,
                            visible inline on desktop */}
                        <button
                            className="theme-toggle d-none d-lg-flex"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`} />
                        </button>

                        <a href="/#contact" className="btn btn-red btn-sm px-3 ms-2">Hire Me</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
