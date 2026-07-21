import { ThemeProvider, CssBaseline, Container, Divider, Box } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'

import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import { Hero } from '../components/hero';
import { Contact } from '../components/contact';

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