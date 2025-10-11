import React from 'react'
import { Card, CardContent, CardMedia, Typography, Stack, Link, Box } from '@mui/material'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { publicPath } from '../utils/path';

const MotionCard = motion.create(Card)

export default function ProjectCard({ p }) {
    const navigate = useNavigate();

    const handleCardClick = (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
        navigate(`/project/${p.id}`);
    };

    return (
        <MotionCard
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            elevation={2}
            sx={{
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                minWidth: 0,
                cursor: 'pointer',
            }}
            onClick={handleCardClick}
        >
            {/* phần ảnh */}
            <Box
                sx={{
                    height: 160,
                    bgcolor: 'grey.100',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                {p.coverImage ? (
                    <CardMedia
                        component="img"
                        image={publicPath(p.coverImage)}
                        alt={p.title}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        No Preview
                    </Typography>
                )}
            </Box>

            {/* phần nội dung */}
            <CardContent sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                        {p.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        mt={1}
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {p.description}
                    </Typography>
                </Box>

                <Stack direction="row" alignItems="center" justifyContent="space-between" mt={2}>
                    <Typography variant="caption" color="text.secondary" noWrap>
                        {p.tech.slice(0, 2).join(' • ')}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        {p.demo && (
                            <Link
                                href={p.demo}
                                underline="hover"
                                variant="body2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Demo
                            </Link>
                        )}
                        {p.github?.[0] && (
                            <Link
                                href={p.github[0]}
                                underline="hover"
                                variant="body2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Code
                            </Link>
                        )}
                    </Stack>
                </Stack>
            </CardContent>
        </MotionCard>
    )
}
