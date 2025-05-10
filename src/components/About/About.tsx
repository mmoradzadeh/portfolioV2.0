import React from 'react'
import './About.css'
import '../../styles/global.css'

function About() {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row items-center about-content">
                    <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 bg-red-600 rounded-lg opacity-20 blur-xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
                                alt="About"
                                className="relative w-full h-full rounded-lg object-cover border-4 border-white"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3 md:pl-12">
                        <h2 className="text-3xl font-bold mb-6">About Me</h2>
                        <p className="text-lg mb-6">
                            I'm a passionate software engineer with 5+ years of experience building web and mobile applications.
                            My journey in tech started when I built my first website at 15, and I've been hooked ever since.
                        </p>
                        <p className="text-lg mb-6">
                            I specialize in JavaScript ecosystems (React, Node.js) but I'm always exploring new technologies.
                            What excites me most is solving complex problems with elegant, maintainable solutions.
                        </p>
                        <p className="text-lg mb-8">
                            When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.
                        </p>
                        <h3 className="text-xl font-semibold mb-4">My Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'SQL'].map((skill, index) => (
                                <span key={index} className="skill-pill bg-red-100 text-red-800 px-4 py-2 rounded-full font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;