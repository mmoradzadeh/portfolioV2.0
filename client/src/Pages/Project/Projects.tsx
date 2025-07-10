import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
// import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer';
import Footer from '../../components/Footer/Footer';
// import ComingSoon from '../../components/ComingSoon/ComingSoon';
import Contact from '../../components/Contact/Contact';
import ProjectsInfiniteMenu from '../../components/ProjectsInfiniteMenu/ProjectsInfiniteMenu'


const Projects: React.FC = () => (
    <>
        <Navbar />
        {/* <main className="container py-5">
            <ComingSoon />
        </main> */}
        <ProjectsInfiniteMenu />
        {/* <ProjectsContainer /> */}
        <Contact />
        <Footer />
    </>

);

export default Projects;