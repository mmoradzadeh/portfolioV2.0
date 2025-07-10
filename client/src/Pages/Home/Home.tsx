import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import ProjectList from '../../components/ProjectsContainer/ProjectsContainer';
import About from '../../components/About/About';
import Resume from '../../components/Resume/Resume';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';


const Home: React.FC = () => (
    <>
        <Navbar />
        <Hero />
        <ProjectList />
        <About />
        <Resume />
        <Contact />
        <Footer />
    </>

);

export default Home;