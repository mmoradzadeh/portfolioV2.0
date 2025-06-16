import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
// import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer';
import Footer from '../../components/Footer/Footer';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Projects: React.FC = () => (
    <>
        <Navbar />
        <main className="container py-5">
            <ComingSoon />
        </main>
        {/* <ProjectsContainer /> */}
        <Footer />
    </>

);

export default Projects;