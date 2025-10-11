import React, { useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
    Box, Typography, Button, Stack, Chip, Divider, Grid, Paper, Stepper, Step, StepLabel,
    Container
} from '@mui/material'
import { GitHub, Language, ArrowBack, KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material'
import { projects } from '../data/projects'
import { publicPath } from '../utils/path'

export default function ProjectDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const project = projects.find(p => p.id.toString() === id)

    const [selectedImage, setSelectedImage] = useState(null)
    const thumbnailRef = useRef(null)

    const scrollThumbnails = (direction) => {
        if (!thumbnailRef.current) return
        const scrollAmount = 200
        thumbnailRef.current.scrollBy({
            top: direction === 'up' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        })
    }

    if (!project) {
        return (
            <Box py={10} textAlign="center">
                <Typography variant="h5">Project not found.</Typography>
                <Button variant="contained" sx={{ mt: 3 }} onClick={() => navigate('/')}>
                    Back to Home
                </Button>
            </Box>
        )
    }

    return (
        <Box py={8}>
            {/* --- Hero Section --- */}
            <Box textAlign="center" mb={6}>
                <Typography variant="h3" fontWeight={700} gutterBottom>
                    {project.title}
                </Typography>
                <Typography variant="h6" color="text.secondary" mb={3}>
                    {project.description}
                </Typography>

                <Stack direction="row" spacing={2} justifyContent="center">
                    {project.demo && (
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<Language />}
                            href={project.demo}
                            target="_blank"
                        >
                            Live Demo
                        </Button>
                    )}
                    {project.github?.[0] && (
                        <Button
                            variant="outlined"
                            startIcon={<GitHub />}
                            href={project.github[0]}
                            target="_blank"
                        >
                            Source Frontend
                        </Button>
                    )}

                    {project.github?.[1] && (
                        <Button
                            variant="outlined"
                            startIcon={<GitHub />}
                            href={project.github[1]}
                            target="_blank"
                        >
                            Source Backend
                        </Button>
                    )}

                </Stack>
            </Box>

            {/* --- Image Gallery (Optimized Responsive) --- */}
            {project.images && project.images.length > 0 && (
                <Box
                    mb={6}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 2, md: 3 },
                    }}
                >
                    {/* Main Image Container */}
                    <Box
                        flex={1}
                        sx={{
                            position: 'relative',
                            width: '100%',
                            maxHeight: { xs: '50vh', md: '70vh' },
                            minHeight: { xs: 300, md: 400 },
                            borderRadius: 3,
                            overflow: 'hidden',
                            boxShadow: 3,
                            backgroundColor: 'grey.100',
                        }}
                    >
                        <Box
                            component="img"
                            src={publicPath(selectedImage || project.images[0])}
                            alt={project.title}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                transition: 'opacity 0.3s ease-in-out',
                            }}
                        />
                    </Box>

                    {/* Thumbnail Container */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'row', md: 'column' },
                            alignItems: 'center',
                            position: 'relative',
                            width: { xs: '100%', md: 'auto' },
                        }}
                    >
                        {/* Desktop: Scroll Up Button */}
                        {project.images.length > 4 && (
                            <Box
                                onClick={() => scrollThumbnails('up')}
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    height: 40,
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    color: 'white',
                                    borderRadius: '8px 8px 0 0',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s',
                                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
                                }}
                            >
                                <KeyboardArrowUp />
                            </Box>
                        )}

                        {/* Thumbnails List */}
                        <Box
                            ref={thumbnailRef}
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'row', md: 'column' },
                                gap: 1.5,
                                overflowX: { xs: 'auto', md: 'hidden' },
                                overflowY: { xs: 'hidden', md: 'auto' },
                                scrollBehavior: 'smooth',
                                maxHeight: { xs: 'auto', md: 'calc(70vh - 100px)' },
                                width: { xs: '100%', md: 'auto' },
                                px: { xs: 0, md: 0 },
                                py: { xs: 0, md: 1 },
                                // Hide scrollbar
                                scrollbarWidth: 'none',
                                '&::-webkit-scrollbar': { display: 'none' },
                                // Mobile: gradient fade effect
                                maskImage: {
                                    xs: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                                    md: 'none',
                                },
                                WebkitMaskImage: {
                                    xs: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                                    md: 'none',
                                },
                            }}
                        >
                            {project.images.map((img, index) => (
                                <Box
                                    key={index}
                                    component="img"
                                    src={publicPath(img)}
                                    alt={`${project.title} ${index + 1}`}
                                    onClick={() => setSelectedImage(img)}
                                    sx={{
                                        // Mobile: Fixed width, auto height
                                        width: { xs: 120, sm: 140, md: 180 },
                                        height: { xs: 80, sm: 90, md: 120 },
                                        borderRadius: 2,
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                        flexShrink: 0,
                                        opacity: selectedImage === img || (!selectedImage && index === 0) ? 1 : 0.6,
                                        border: selectedImage === img || (!selectedImage && index === 0)
                                            ? '3px solid'
                                            : '3px solid transparent',
                                        borderColor: 'primary.main',
                                        transition: 'all 0.3s ease',
                                        transform: selectedImage === img || (!selectedImage && index === 0)
                                            ? 'scale(1.02)'
                                            : 'scale(1)',
                                        boxShadow: selectedImage === img || (!selectedImage && index === 0)
                                            ? 3
                                            : 1,
                                        '&:hover': {
                                            opacity: 1,
                                            transform: 'scale(1.05)',
                                            boxShadow: 4,
                                        },
                                    }}
                                />
                            ))}
                        </Box>

                        {/* Desktop: Scroll Down Button */}
                        {project.images.length > 4 && (
                            <Box
                                onClick={() => scrollThumbnails('down')}
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    height: 40,
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    color: 'white',
                                    borderRadius: '0 0 8px 8px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s',
                                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
                                }}
                            >
                                <KeyboardArrowDown />
                            </Box>
                        )}
                    </Box>
                </Box>
            )}

            {/* --- Overview --- */}
            <Box mb={6}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Overview
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
                    {project.fullDescription || project.description}
                </Typography>
            </Box>

            {/* --- Tech Stack --- */}
            {project.tech && (
                <Box mb={6}>
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                        Tech Stack
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                        {project.tech.map((tech) => (
                            <Chip key={tech} label={tech} variant="outlined" color="primary" />
                        ))}
                    </Stack>
                </Box>
            )}

            {/* --- Features --- */}
            {project.features && (
                <Box mb={6}>
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                        Key Features
                    </Typography>
                    <Grid container spacing={2}>
                        {project.features.map((feature, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                                    <Typography variant="subtitle1" fontWeight={600}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {feature.detail}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}

            {/* --- Timeline --- */}
            {project.timeline && (
                <Box mb={6}>
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                        Development Timeline
                    </Typography>
                    <Stepper orientation="vertical" sx={{ mt: 2 }}>
                        {project.timeline.map((step, index) => (
                            <Step key={index} active completed>
                                <StepLabel>
                                    <Typography variant="subtitle1" fontWeight={600}>
                                        {step.date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {step.event}
                                    </Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            )}

            {/* --- Back button --- */}
            <Divider sx={{ my: 6 }} />
            <Button
                startIcon={<ArrowBack />}
                variant="text"
                onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
            >
                Back to Projects
            </Button>
        </Box>
    )
}