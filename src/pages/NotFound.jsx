import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { MotionConfig, motion } from 'framer-motion'

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <MotionConfig transition={{ duration: 0.6, ease: 'easeOut' }}>
            <Box
                minHeight="80vh"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                px={2}
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Typography
                        variant="h1"
                        fontWeight={700}
                        color="primary"
                        sx={{ fontSize: { xs: '5rem', sm: '7rem', md: '9rem' }, mb: -2 }}
                    >
                        404
                    </Typography>

                    <Typography variant="h5" fontWeight={600} gutterBottom>
                        Oops! Page not found.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" mb={4} maxWidth={400}>
                        The page you are looking for does not exist or has been moved.
                        Go back to the home page to see other projects and information.
                    </Typography>

                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate('/')}
                        >
                            🏠 Back to Home
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
                        >
                            🚀 See Projects
                        </Button>
                    </Stack>
                </motion.div>
            </Box>
        </MotionConfig>
    )
}
