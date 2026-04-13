import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Projects: React.FC = () => (
    <>
        <Navbar />
        <ProjectsContainer />
        <Contact />
        <Footer />
    </>
);

export default Projects;
