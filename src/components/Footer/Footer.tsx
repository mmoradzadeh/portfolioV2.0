import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <div className="text-2xl font-bold">
                            <span>Mehdi</span><span className="text-red-600"> Moradzadeh</span>
                        </div>
                        <p className="text-gray-400 mt-1">Building digital experiences that matter.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                        <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
                        <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
                        <a href="#about" className="hover:text-red-500 transition-colors">About</a>
                        <a href="#resume" className="hover:text-red-500 transition-colors">Resume</a>
                        <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; 2023 John Doe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};