import React from 'react';
import './Contact.css';

export const Contact = () => {
    return (
        <section id="contact" className="py-20 dark-bg text-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 contact-grid">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <i className="fas fa-envelope mt-1 mr-4 text-red-500"></i>
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-gray-300">john.doe@example.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-phone-alt mt-1 mr-4 text-red-500"></i>
                                        <div>
                                            <p className="font-medium">Phone</p>
                                            <p className="text-gray-300">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-map-marker-alt mt-1 mr-4 text-red-500"></i>
                                        <div>
                                            <p className="font-medium">Location</p>
                                            <p className="text-gray-300">San Francisco, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                                <div className="flex space-x-6">
                                    <a href="https://github.com" target="_blank" className="text-2xl hover:text-red-500 transition-colors">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" className="text-2xl hover:text-red-500 transition-colors">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://twitter.com" target="_blank" className="text-2xl hover:text-red-500 transition-colors">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://medium.com" target="_blank" className="text-2xl hover:text-red-500 transition-colors">
                                        <i className="fab fa-medium-m"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 text-gray-800">
                            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
                                </div>
                                <button type="submit" className="dark-bg text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors w-full">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

