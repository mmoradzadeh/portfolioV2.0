import React from 'react';

const Footer: React.FC = () => (
    <footer className="portfolio-footer py-5">
        <div className="container">
            <div className="row align-items-center mb-4 g-3">

                {/* Brand */}
                <div className="col-md-4">
                    <div className="h4 fw-bold mb-1">
                        <span className="text-white">Mehdi</span>
                        <span className="text-danger">.</span>
                    </div>
                    <p className="mb-0" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem' }}>
                        Full-Stack Software Engineer · Toronto, ON
                    </p>
                </div>

                {/* Nav links */}
                <div className="col-md-4 text-md-center">
                    <div className="d-flex flex-wrap justify-content-md-center gap-3">
                        {[
                            { label: 'Home',     href: '/#home' },
                            { label: 'Projects', href: '/#projects' },
                            { label: 'About',    href: '/#about' },
                            { label: 'Resume',   href: '/#resume' },
                            { label: 'Contact',  href: '/#contact' },
                        ].map(link => (
                            <a key={link.label} href={link.href} className="footer-link">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Social icons */}
                <div className="col-md-4 text-md-end">
                    <div className="d-flex gap-3 justify-content-md-end">
                        <a
                            href="https://github.com/MMoradzadeh"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-link"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github" />
                        </a>
                        <a
                            href="https://linkedin.com/in/mmoradzadeh"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-link"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a
                            href="mailto:mehdimoradzadeh@outlook.com"
                            className="footer-link"
                            aria-label="Email"
                        >
                            <i className="fas fa-envelope" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div
                className="pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>
                    &copy; {new Date().getFullYear()} Mehdi Moradzadeh. All rights reserved.
                </p>
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>
                    Built with React · TypeScript · Bootstrap
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
