import { ThemeProvider, CssBaseline, Container, Divider, Box } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import BackgroundDecoration from '../components/BackgroundDecoration';

const HomePage = () => {
    const location = useLocation();
    const projectsRef = useRef(null)

    useEffect(() => {
        if (location.state?.scrollTo === 'projects' && projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [location])
    return (
        <>
            <BackgroundDecoration/>
            <Hero />
            <Divider sx={{ my: 6 }} />
            <About />
            <Divider sx={{ my: 6 }} />
            <Skills />
            <Divider sx={{ my: 6 }} />
            <div ref={projectsRef}>
                <Projects />
            </div>
            <Divider sx={{ my: 6 }} />
            <Contact />
        </>

    );
};

export default HomePage;