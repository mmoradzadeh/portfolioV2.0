import React from 'react';

const Footer: React.FC = () => (
    <footer className="bg-black text-white py-5">
        <div className="container">
            <div className="row align-items-center mb-4 g-4">
                <div className="col-md-4">
                    <div className="h4 fw-bold mb-1">
                        <span>Mehdi</span><span className="text-danger">.</span>
                    </div>
                    <p className="text-secondary small mb-0">
                        Full-Stack Software Engineer · Toronto, ON
                    </p>
                </div>
                <div className="col-md-4 text-md-center">
                    <div className="d-flex flex-wrap justify-content-md-center gap-3">
                        {[
                            { label: 'Home',     href: '/#home' },
                            { label: 'Projects', href: '/#projects' },
                            { label: 'About',    href: '/#about' },
                            { label: 'Resume',   href: '/#resume' },
                            { label: 'Contact',  href: '/#contact' },
                        ].map(link => (
                            <a key={link.label} href={link.href} className="text-secondary text-decoration-none footer-link small">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="col-md-4 text-md-end">
                    <div className="d-flex gap-3 justify-content-md-end">
                        <a href="https://github.com/MMoradzadeh" target="_blank" rel="noreferrer" className="text-secondary social-icon" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/mmoradzadeh" target="_blank" rel="noreferrer" className="text-secondary social-icon" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="mailto:mehdimoradzadeh@outlook.com" className="text-secondary social-icon" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-top pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2" style={{ borderColor: 'rgba(255,255,255,0.08) !important' }}>
                <p className="text-secondary small mb-0">&copy; {new Date().getFullYear()} Mehdi Moradzadeh. All rights reserved.</p>
                <p className="text-secondary small mb-0">Built with React · TypeScript · Bootstrap</p>
            </div>
        </div>
    </footer>
);

export default Footer;
