import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId!);

        if (targetElement) {
            setIsMenuOpen(false);
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className={`dark-bg text-white w-full fixed z-10 transition-shadow ${isScrolled ? 'shadow-xl' : ''}`}>
            <div className="container mx-auto px-4 sm:px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <span className="text-white">Mehdi</span>
                        <span className="text-red-600">Moradzadeh</span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {['#home', '#projects', '#about', '#resume', '#contact'].map(link => (
                            <a
                                key={link}
                                href={link}
                                className="nav-link"
                                onClick={handleLinkClick}
                            >
                                {link.replace('#', '').charAt(0).toUpperCase() + link.slice(2)}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                    </div>

                    <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-2" id="mobile-menu">
                        {['#home', '#projects', '#about', '#resume', '#contact'].map(link => (
                            <a
                                key={link}
                                href={link}
                                onClick={handleLinkClick}
                                className="block py-2 hover:bg-gray-800 px-2 rounded"
                            >
                                {link.replace('#', '').charAt(0).toUpperCase() + link.slice(2)}
                            </a>
                        ))}
                        <div className="flex space-x-4 pt-2">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
