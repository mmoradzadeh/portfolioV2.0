import './Projects.css';

export const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 project-grid">
                    {[1, 2, 3].map((project, index) => (
                        <div
                            key={index}
                            className="project-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-200 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="h-48 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
                                <i
                                    className={`text-white text-6xl ${index === 0
                                        ? 'fas fa-project-diagram'
                                        : index === 1
                                            ? 'fas fa-mobile-alt'
                                            : 'fas fa-chart-line'
                                        }`}
                                ></i>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    {index === 0
                                        ? 'E-Commerce Platform'
                                        : index === 1
                                            ? 'Task Management App'
                                            : 'Data Visualization Dashboard'}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {index === 0
                                        ? 'A full-featured e-commerce solution with payment processing, inventory management, and analytics.'
                                        : index === 1
                                            ? 'A cross-platform productivity app with real-time sync, reminders, and team collaboration features.'
                                            : 'Interactive dashboard for analyzing large datasets with customizable visualizations and reporting.'}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {(index === 0
                                        ? ['React', 'Node.js', 'MongoDB', 'Stripe API']
                                        : index === 1
                                            ? ['Flutter', 'Firebase', 'Dart']
                                            : ['D3.js', 'Python', 'Flask', 'Pandas']
                                    ).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="skill-pill bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-red-600 hover:text-white transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                                    <a
                                        href="#"
                                        className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors text-center"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors text-center"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com"
                        target="_blank"
                        className="inline-flex items-center text-red-600 hover:text-red-800"
                        rel="noopener noreferrer"
                    >
                        <span>View more on GitHub</span>
                        <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};