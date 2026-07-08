import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeader'

export default function Projects() {
    return (
        <Box id="projects" py={8} sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
            <SectionHeading align='center'>Projects</SectionHeading>
            <Typography variant='subtitle1' align='center' color="text.secondary" mb={3} gutterBottom>
                There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
            </Typography>

            <Grid
                container
                spacing={3}
                mt={3}
            >
                {projects.map((p) => (
                    <Grid
                        size={{ xs: 12, md: 4 }}
                        key={p.id}
                    >
                        <ProjectCard p={p} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
