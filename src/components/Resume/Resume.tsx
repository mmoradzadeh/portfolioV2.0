import React from 'react';
import './Resume.css';

export const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">My Resume</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Download my resume to learn more about my professional experience and education.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                            <p className="text-gray-600">Full Stack Developer</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <a
                                href="#"
                                className="dark-bg text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block"
                            >
                                <i className="fas fa-download mr-2"></i> Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Experience</h4>
                            <div className="mb-6">
                                <h5 className="font-bold">Senior Software Engineer</h5>
                                <p className="text-gray-600">Tech Solutions Inc. • 2020 - Present</p>
                                <ul className="list-disc pl-5 mt-2 text-gray-700">
                                    <li>Led development of customer portal serving 50k+ users</li>
                                    <li>Implemented CI/CD pipeline reducing deployment time by 70%</li>
                                    <li>Mentored 3 junior developers</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-bold">Software Developer</h5>
                                <p className="text-gray-600">Digital Innovations • 2018 - 2020</p>
                                <ul className="list-disc pl-5 mt-2 text-gray-700">
                                    <li>Built REST APIs for mobile applications</li>
                                    <li>Optimized database queries improving performance by 40%</li>
                                    <li>Implemented automated testing suite</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Education</h4>
                            <div className="mb-6">
                                <h5 className="font-bold">MSc in Computer Science</h5>
                                <p className="text-gray-600">Stanford University • 2016 - 2018</p>
                                <p className="mt-2 text-gray-700">Specialization in Artificial Intelligence</p>
                            </div>
                            <div>
                                <h5 className="font-bold">BSc in Software Engineering</h5>
                                <p className="text-gray-600">MIT • 2012 - 2016</p>
                                <p className="mt-2 text-gray-700">Graduated with Honors</p>
                            </div>

                            <h4 className="text-xl font-semibold mt-8 mb-4 border-b border-gray-300 pb-2">Certifications</h4>
                            <div>
                                <h5 className="font-bold">AWS Certified Developer</h5>
                                <p className="text-gray-600">Amazon Web Services • 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

