import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
    return (
        <Box id="projects" py={8} sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
            <Typography variant="h5" fontWeight={600}>
                Projects
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
