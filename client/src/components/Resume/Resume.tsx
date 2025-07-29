import React from 'react';
import type { Education } from '../../interfaces/Education';
import type { Experiences } from '../../interfaces/Experiences';
import type { Certifications } from '../../interfaces/Certifications';
import educationData from '../../../../server/data/education.json';
import experienceData from '../../../../server/data/experiences.json';
import certificationsData from '../../../../server/data/certifications.json';

const resumePDF = "/Mehdi Moradzadeh - Resume.pdf";

function renderExperienceBullets(experienceBullet: string[]) {
    return experienceBullet.map((task, index) => (
        <li key={index}>{task}</li>
    ));
}

const Resume: React.FC = () => (
    <section id="resume" className="py-5 section-padding bg-white">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">My Resume</h2>
                <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                    Download my resume to learn more about my professional experience and education.
                </p>
            </div>
            <div className="bg-light rounded-3 p-4 p-md-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
                    <div className="mb-3 mb-md-0">
                        <h3 className="h2 fw-bold mb-1">Mehdi Moradzadeh</h3>
                        <p className="text-muted mb-0">Software Engineer</p>
                    </div>
                    <div>
                        <a href={resumePDF} download className="btn btn-dark btn-lg">
                            <i className="fas fa-download me-2"></i> Download Resume
                        </a>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-md-6">
                        <h4 className="h4 fw-bold mb-4 pb-2 border-bottom">Experience</h4>
                        {experienceData.map((experience: Experiences) => (
                            <div key={experience.id} className="mb-5">
                                <h5 className="h5 fw-bold">{experience.title}</h5>
                                <p className="text-muted mb-2">{experience.company} • {experience.start} - {experience.finish}</p>
                                <ul className="ps-3">
                                    {renderExperienceBullets(experience.tasks)}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="col-md-6">
                        <h4 className="h4 fw-bold mb-4 pb-2 border-bottom">Education</h4>
                        {educationData.map((education: Education) => (
                            <div className="mb-5" key={education.id}>
                                <h5 className="h5 fw-bold">{education.degree}</h5>
                                <p className="text-muted mb-2">{education.organization} • {education.start} - {education.finish}</p>
                                <p className="mb-0">{education.description}</p>
                            </div>
                        ))}

                        <h4 className="h4 fw-bold mb-4 pb-2 border-bottom">Certifications</h4>
                        {certificationsData.map((certificate: Certifications) => (
                            <div className="mb-2" key={certificate.id}>
                                <h5 className="h5 fw-bold">{certificate.title}</h5>
                                <p className="text-muted mb-0">{certificate.organization} • {certificate.progress ? certificate.date : "In Progress"}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Resume;
