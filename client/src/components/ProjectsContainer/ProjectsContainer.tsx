import React from 'react';
import type { Project } from '../../interfaces/Projects';
import projectData from '../../../../server/data/projects.json';

function renderTechPills(technologies: string[]) {
    return technologies.map((tech, index) => (
        <span className="skill-pill badge bg-light text-dark" key={index}>{tech}</span>
    ));
}


const ProjectList: React.FC = () => (
    <section id="projects" className="py-5 section-padding bg-white">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">My Projects</h2>
                <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                    Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
                </p>
            </div>
            <div className="row g-4">
                {projectData.map((project: Project) => (
                    <div className="col-md-6 col-lg-4" key={project.id}>
                        <div className="project-card card h-100 border-0 shadow-sm">
                            <div className="project-img rounded-top">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="img-fluid w-100 rounded-top shadow-sm"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <i className="fas fa-project-diagram text-white fa-4x"></i>
                                )}
                            </div>
                            <div className="card-body">
                                <h3 className="h5 card-title fw-bold">{project.name}</h3>
                                <p className="card-text text-muted mb-3">
                                    {project.description}
                                </p>
                                <div className="d-flex flex-wrap gap-2 mb-3">
                                    {renderTechPills(project.technologies)}
                                </div>
                                <div className="d-flex flex-column flex-sm-row gap-2">
                                    <a href={project.deployed} target='_blank' className="btn btn-dark btn-sm">Live Demo</a>
                                    <a href={project.github} target='_blank' className="btn btn-outline-dark btn-sm">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-5">
                <a href="https://github.com/MMoradzadeh" target="_blank" className="btn btn-link text-danger text-decoration-none">
                    View more on GitHub <i className="fas fa-arrow-right ms-2"></i>
                </a>
            </div>
        </div>
    </section>
);

export default ProjectList;
