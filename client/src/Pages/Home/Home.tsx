import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import ProjectList from '../../components/ProjectsContainer/ProjectsContainer';
import About from '../../components/About/About';
import Resume from '../../components/Resume/Resume';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import ProjectsInfiniteMenu from '../../components/ProjectsInfiniteMenu/ProjectsInfiniteMenu'



const Home: React.FC = () => (
    <>
        <Navbar />
        <Hero />
        <ProjectList />
        <ProjectsInfiniteMenu />
        <About />
        <Resume />
        <Contact />
        <Footer />
    </>

);

export default Home;