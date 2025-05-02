// src/components/Navbar/Navbar.tsx
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, target: string) => {
        e.preventDefault();
        setIsMobileOpen(false);
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - 80,
                behavior: "smooth",
            });
        }
    };

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Resume", href: "#resume" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className={`dark-bg text-white fixed w-full z-10 transition-shadow ${hasShadow ? "shadow-xl" : "shadow-lg"}`}>
            <div className="container mx-auto px-4 sm:px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <span className="text-white">Mehdi</span><span className="text-red-600"> Moradzadeh</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="hidden md:flex space-x-4">
                        <a href="https://github.com/MMoradzadeh" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a href="https://linkedin.com/in/mmoradzadeh" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden focus:outline-none" onClick={toggleMobileMenu}>
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileOpen && (
                    <div className="md:hidden mt-4 pb-2 space-y-2">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block py-2 px-2 hover:bg-gray-800 rounded"
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.name}
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
