import React from 'react'
import { Typography, Box } from '@mui/material'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <Box id="about" py={8} component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Typography variant="h4" >About Me</Typography>
            <Typography mt={2} color="text.secondary">
                I’m a passionate web developer who loves building modern, high-performance web applications.
                My main focus is on <strong>frontend development with React</strong> and <strong>backend development with Node.js and ASP.NET Core</strong>.
                I enjoy learning new technologies, writing clean and scalable code, and contributing to projects that create real value.
                My goal is to become a <strong>Full-Stack Developer</strong> capable of delivering seamless and impactful web experiences.
            </Typography>

        </Box>
    )
}
