import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Typography,
    Button,
    Stack,
    IconButton,
    Grid,
    Paper,
    alpha,
} from '@mui/material';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TerminalIcon from '@mui/icons-material/Terminal';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import SettingsEthernetOutlinedIcon from '@mui/icons-material/SettingsEthernetOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditDocumentIcon from '@mui/icons-material/EditDocument'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUpOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'; 

import Lightbox from "yet-another-react-lightbox";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import SectionHeading from '../components/SectionHeader';

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { projectDetails, projects } from '../data/projects';


const overviewIcon = {
    analytics: AnalyticsOutlinedIcon,
}

const featureIcons = {
    school: SchoolOutlinedIcon,
    edit: EditOutlinedIcon,
    editDocument: EditDocumentIcon,
    autoAwesome: AutoAwesomeOutlinedIcon,
    trendingUp: TrendingUpIcon,
    adminPanelSettings: AdminPanelSettingsOutlinedIcon,
    cloudUpload: CloudUploadOutlinedIcon,
    security: SecurityOutlinedIcon,
    hub: HubOutlinedIcon,
    bolt: BoltOutlinedIcon,
    shoppingCart: ShoppingCartOutlinedIcon,
    shield: ShieldOutlinedIcon,
    payments: PaymentsOutlinedIcon,
    chat: ChatOutlinedIcon,
    inventory: Inventory2OutlinedIcon,
    phoneAndroid: PhoneAndroidOutlinedIcon,
    search: SearchOutlinedIcon,
    star: StarBorderOutlinedIcon, 
};

export default function ProjectDetail() {
    const [activeImage, setActiveImage] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const thumbnailRefs = useRef([]);

    const { slug } = useParams();
    const overview = projects.find(p => p.slug.toString() === slug);
    const detail = projectDetails[overview.slug];
    const project = {
        ...overview,
        ...detail
    }

    useEffect(() => {
        const target = thumbnailRefs.current[activeImage];
        if (!target) return;

        const container = target.parentElement; 
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const isVisible = (
            targetRect.left >= containerRect.left &&
            targetRect.right <= containerRect.right
        );

        if (!isVisible) {
            target.scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest"
            });
        }
    }, [activeImage]);


    if (!project) {
        return (
            <Box py={10} textAlign="center">
                <Typography variant="h5">Project not found.</Typography>

                <Button
                    href="/"
                    variant="contained"
                    sx={{ mt: 3 }}
                >
                    Back to Home
                </Button>
            </Box>
        );
    }

    const OverviewIcon = overviewIcon[project.overview.icon];

    const changeImage = (direction) => {
        const total = project.gallery.length;

        setActiveImage((prev) => {
            if (direction === 1) {
                return (prev + 1) % total;
            }

            return (prev - 1 + total) % total;
        });
    };

    return (
        <Box py={{ xs: 8, md: 10 }}>
            {/* --- Hero Section --- */}
            <Box>
                <Stack
                    spacing={5}
                    alignItems="center"
                    textAlign="center"
                >
                    <Box>
                        <Typography
                            variant='h2'
                            component="h1"
                            sx={{
                                fontWeight: 700,
                                color: 'primary.main',
                                letterSpacing: '-0.04em',
                            }}
                        >
                            {project.title}
                        </Typography>

                        <Typography
                            sx={{
                                mt: 3,
                                fontSize: {
                                    xs: '1rem',
                                    md: '1.25rem'
                                },
                                lineHeight: 1.8,
                                color: 'text.secondary',
                                // maxWidth: 760,
                                mx: 'auto'
                            }}
                        >
                            {project.description}
                        </Typography>
                    </Box>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={3}
                        justifyContent="center"
                        sx={{ pt: 1 }}
                    >
                        {project.demoUrl && (
                            <Button
                                variant="contained"
                                size="large"
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                endIcon={<OpenInNewIcon />}
                                sx={{
                                    px: 5,
                                    py: 1.8,
                                    letterSpacing: '0.08em',
                                    transition: 'all .3s',
                                    boxShadow: 'none',
                                    fontFamily: 'monospace',
                                    '&:hover': {
                                        boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}`,
                                        bgcolor: 'primary.main'
                                    },
                                    '&:active': {
                                        transform: 'scale(.97)'
                                    }
                                }}
                            >
                                VIEW LIVE DEMO
                            </Button>
                        )}

                        {project.sourceUrl && (
                            <Button
                                variant="outlined"
                                size="large"
                                href={project.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                endIcon={<TerminalIcon />}
                                sx={{
                                    px: 5,
                                    py: 1.8,
                                    letterSpacing: '0.08em',
                                    borderColor: 'divider',
                                    fontFamily: 'monospace',    
                                    '&:hover': {
                                        bgcolor: 'action.hover'
                                    },
                                    '&:active': {
                                        transform: 'scale(.97)'
                                    }
                                }}
                            >
                                VIEW SOURCE CODE
                            </Button>
                        )}
                    </Stack>
                </Stack>
            </Box>

            {/* --- Project Gallery Section --- */}
            <Box
                sx={{
                    maxWidth: 1100,
                    mx: 'auto',
                    mt: { xs: 8, md: 12 }
                }}
            >
                {/* Main Image */}

                <Paper
                    sx={{
                        borderRadius: 1,
                        overflow: 'hidden',
                        border: 1,
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        boxShadow: 'none'
                    }}
                >
                    {/* Fake Window Header */}

                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        px={2}
                        py={1.5}
                        borderBottom={1}
                        borderColor="divider"
                    >
                        <Stack direction="row" spacing={1}>
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    bgcolor: 'error.main',
                                    opacity: .35
                                }}
                            />

                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    bgcolor: 'warning.main',
                                    opacity: .35
                                }}
                            />

                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    bgcolor: 'success.main',
                                    opacity: .35
                                }}
                            />
                        </Stack>

                        <Typography
                            flex={1}
                            textAlign="center"
                            variant="caption"
                            color="text.secondary"
                            sx={{
                                fontFamily: 'monospace'
                            }}
                        >
                            {project.gallery[activeImage].name}
                        </Typography>
                    </Stack>

                    {/* Image */}

                    <Box
                        onClick={() => setLightboxOpen(true)}
                        sx={{
                            position: "relative",
                            aspectRatio: "16 / 9",
                            overflow: "hidden",
                            cursor: "zoom-in",

                            "&:hover img": {
                                transform: "scale(1.02)"
                            },

                            "&:hover .zoom": {
                                opacity: 1
                            }
                        }}
                    >
                        <Box
                            component="img"
                            src={project.gallery[activeImage].image}
                            alt={project.gallery[activeImage].name}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: '.45s'
                            }}
                        />

                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,.35), transparent)'
                            }}
                        />

                        <Box
                            className="zoom"
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                bgcolor: 'rgba(0,0,0,.2)',
                                opacity: 0,
                                transition: '.3s'
                            }}
                        >
                            <ZoomInIcon
                                sx={{
                                    fontSize: 48,
                                    color: 'primary.main'
                                }}
                            />
                        </Box>
                    </Box>
                </Paper>

                {/* Thumbnails */}

                <Box
                    sx={{
                        position: 'relative',
                        mt: 4,

                        '&:hover .nav': {
                            opacity: 1
                        }
                    }}
                >
                    <IconButton
                        className="nav"
                        onClick={() => changeImage(-1)}
                        sx={{
                            position: 'absolute',
                            left: -20,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            opacity: 0,
                            transition: '.3s',
                            border: 1,
                            borderColor: 'divider',
                            bgcolor: 'background.paper',
                            zIndex: 2,

                            '&:hover': {
                                bgcolor: 'action.hover'
                            }
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton
                        className="nav"
                        onClick={() => changeImage(1)}
                        sx={{
                            position: 'absolute',
                            right: -20,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            opacity: 0,
                            transition: '.3s',
                            border: 1,
                            borderColor: 'divider',
                            bgcolor: 'background.paper',
                            zIndex: 2,

                            '&:hover': {
                                bgcolor: 'action.hover'
                            }
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>

                    <Stack
                        direction="row"
                        spacing={2}
                        sx={(theme) => ({
                            overflowX: 'auto',
                            pb: 1,

                            scrollbarColor: theme.palette.mode === 'dark' 
                                ? `${theme.palette.grey[700]} ${theme.palette.grey[900]}` 
                                : `${theme.palette.grey[400]} ${theme.palette.grey[100]}`,

                            '&::-webkit-scrollbar': {
                                height: 10,
                            },

                            '&::-webkit-scrollbar-track': {
                                background:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.grey[900]
                                        : theme.palette.grey[100],
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.grey[700]
                                        : theme.palette.grey[400],
                                borderRadius: 0.5,
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                                background:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.grey[600]
                                        : theme.palette.grey[500],
                            },

                        })}
                    >
                        {project.gallery.map((item, index) => (
                            <Box
                                key={item.name}
                                ref={(el) => (thumbnailRefs.current[index] = el)}
                                onClick={() => setActiveImage(index)}
                                sx={{
                                    flex: '0 0 auto',
                                    width: 190,
                                    aspectRatio: '16 / 9',
                                    borderRadius: 1,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    border: 3,
                                    borderColor:
                                        activeImage === index
                                            ? 'primary.main'
                                            : 'transparent',
                                    transition: '.25s',

                                    '&:hover': {
                                        transform: 'translateY(-3px)'
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.image}
                                    alt={item.name}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Box>
            <Lightbox
                open={lightboxOpen}
                controller={{
                    closeOnBackdropClick: true
                }}
                close={() => setLightboxOpen(false)}
                index={activeImage}
                slides={project.gallery.map((image) => ({
                    src: image.image
                }))}
                plugins={[
                    Zoom,
                    Fullscreen,
                    Thumbnails
                ]}
                on={{
                    view: ({ index }) => setActiveImage(index)
                }}
                animation={{
                    fade: 250,
                    swipe: 300
                }}
                styles={{
                    container: {
                        backgroundColor: "rgba(0,0,0,.72)",
                        backdropFilter: "blur(10px)"
                    }
                }}
            />

            {/* --- Overview Section --- */}
            <Box
                sx={{
                    mt: { xs: 10, md: 14 }
                }}
            >
                <Grid
                    container
                    spacing={{ xs: 6, md: 8 }}
                    alignItems="flex-start"
                >
                    {/* Left */}

                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box>
                            <SectionHeading
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    mb: 4,
                                }}
                            >
                                <OverviewIcon />

                                {project.overview.title}
                            </SectionHeading>

                            <Box>
                                {project.overview.paragraphs.map((paragraph, index) => (
                                    <Typography
                                        key={index}
                                        sx={{
                                            mb: 3,
                                            color: "text.secondary",
                                            lineHeight: 1.9,
                                            fontSize: "1.05rem"
                                        }}
                                    >
                                        {paragraph}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right */}

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Paper
                            sx={{
                                position: "relative",
                                p: 4,
                                borderRadius: 1,
                                bgcolor: "background.paper",
                                border: 1,
                                borderColor: "divider",
                                overflow: "hidden",
                                boxShadow: 'none',
                                transition: 'all .35s ease',
                                '&:hover': {
                                    borderColor: 'primary.main',
                                    boxShadow: (theme) => `0 0px 45px ${theme.palette.primary.main}20`,
                                },
                            }}
                        >
                            <SettingsEthernetOutlinedIcon
                                sx={{
                                    position: "absolute",
                                    top: 20,
                                    right: 20,
                                    fontSize: 72,
                                    opacity: 0.08
                                }}
                            />

                            <Typography
                                component="h3"
                                sx={{
                                    mb: 4,
                                    fontSize: ".8rem",
                                    fontWeight: 700,
                                    letterSpacing: ".25em",
                                    color: "primary.main"
                                }}
                            >
                                SYSTEM_SPECS
                            </Typography>

                            <Box>
                                {project.overview.specs.map((item, index) => (
                                    <Box
                                        key={item.label}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            py: 1.5,
                                            borderBottom:
                                                index !== project.overview.specs.length - 1
                                                    ? 1
                                                    : 0,
                                            borderColor: "divider"
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "text.secondary",
                                                fontFamily: "monospace"
                                            }}
                                        >
                                            {item.label}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: "monospace",
                                                fontWeight: 500
                                            }}
                                        >
                                            {item.value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            <Paper
                                elevation={4}
                                sx={{
                                    mt: 4,
                                    p: 3,
                                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                    border: 1,
                                    borderColor: "divider",
                                    opacity: .92,
                                    borderRadius: 0,
                                    boxShadow: 'none',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "monospace",
                                        fontStyle: "italic",
                                        lineHeight: 1.8
                                    }}
                                >
                                    "{project.overview.highlight}"
                                </Typography>
                            </Paper>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            {/* --- Key Features Section --- */}
            <Box
                sx={{
                    mt: { xs: 10, md: 14 }
                }}
            >
                <SectionHeading
                    textAlign="center"
                    sx={{
                        mb: 6
                    }}
                >
                    Key Features
                </SectionHeading>

                <Grid
                    container
                    spacing={3}
                >
                    {project.features.map((feature) => {
                        const Icon = featureIcons[feature.icon];

                        return (
                            <Grid
                                key={feature.title}
                                size={{ xs: 12, md: 4 }}    
                            >
                                <Paper
                                    sx={{
                                        height: "100%",
                                        p: 4,
                                        borderRadius: 1,
                                        bgcolor: "background.paper",
                                        border: 1,
                                        borderColor: "divider",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 3,
                                        transition: "all .3s",
                                        boxShadow: 'none',  

                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            borderColor: 'primary.main',
                                            boxShadow: (theme) => `0 20px 45px ${theme.palette.primary.main}20`,
                                        },

                                        "&:hover .feature-icon": {
                                            bgcolor: "primary.main", 
                                            color: "primary.contrastText"
                                        }
                                    }}
                                >
                                    <Paper
                                        className="feature-icon"
                                        elevation={4}
                                        sx={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: 1,
                                            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                            color: 'primary.light',
                                            boxShadow: 'none',
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: ".3s"
                                        }}
                                    >
                                        <Icon fontSize="medium" />
                                    </Paper>

                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 500
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "text.secondary",
                                            lineHeight: 1.8,
                                            flexGrow: 1
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>

            {/* --- Tech Stack Section --- */}
            <Paper
                sx={{
                    mt: { xs: 10, md: 14 },
                    p: { xs: 4, md: 6 },
                    borderRadius: 1,
                    bgcolor: "background.paper",
                    border: 1,
                    borderColor: "divider",
                    boxShadow: 'none',
                    overflow: "hidden",
                    position: "relative",
                    '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: (theme) => `0 0px 45px ${theme.palette.primary.main}20`,
                    },
                }}
            >
                {/* Background Glow */}

                <Box
                    sx={{
                        position: "absolute",
                        right: -120,
                        bottom: -120,
                        width: 280,
                        height: 280,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                        opacity: 0.06,
                        filter: "blur(80px)"
                    }}
                />

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", md: "center" }}
                    spacing={6}
                    sx={{
                        position: "relative",
                        zIndex: 1
                    }}
                >
                    {/* Left */}

                    <Box
                        sx={{
                            maxWidth: 340
                        }}
                    >
                        <SectionHeading
                            variant="h4"
                            sx={{
                                mb: 2
                            }}
                        >
                            {project.techStack.title}
                        </SectionHeading>

                        <Typography
                            sx={{
                                color: "text.secondary",
                                lineHeight: 1.8
                            }}
                        >
                            {project.techStack.description}
                        </Typography>
                    </Box>

                    {/* Right */}

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: {
                                xs: "flex-start",
                                md: "center"
                            },
                            gap: 2,
                            maxWidth: 650
                        }}
                    >
                        {project.techStack.technologies.map((tech) => (
                            <Box
                                key={tech}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    px: 2.5,
                                    py: 1.2,
                                    borderRadius: 999,
                                    border: 1,
                                    borderColor: "divider",
                                    bgcolor: "background.default",
                                    transition: ".25s",
                                    cursor: "default",

                                    "&:hover": {
                                        borderColor: "primary.main",
                                        transform: "translateY(-2px)"
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        bgcolor: "primary.main",
                                        boxShadow: (theme) =>
                                            `0 0 10px ${theme.palette.primary.main}`
                                    }}
                                />

                                <Typography
                                    component='span'
                                    sx={{
                                        fontFamily: "monospace",
                                        fontWeight: 500
                                    }}
                                >
                                    {tech}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Stack>
            </Paper>

            {/* --- Performance Metrics Section --- */}
            <Box
                sx={{
                    mt: { xs: 10, md: 14 }
                }}
            >
                <Grid container spacing={3}>
                    {project.metrics.map((metric) => (
                        <Grid
                            key={metric.label}
                            size={{ xs: 12, md: 4 }}
                        >
                            <Paper
                                sx={{
                                    height: "100%",
                                    p: 5,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1,
                                    bgcolor: "background.paper",
                                    borderLeft: 4,
                                    borderColor: "primary.main",
                                    borderRadius: 0,
                                    boxShadow: 'none',
                                    transition: "all .3s",

                                    "&:hover": {
                                        bgcolor: "action.hover"
                                    },

                                    "&:hover .metric-value": {
                                        transform: "scale(1.05)"
                                    }
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: ".78rem",
                                        letterSpacing: ".18em",
                                        fontWeight: 700,
                                        color: "text.secondary",
                                        opacity: .65
                                    }}
                                >
                                    {metric.label}
                                </Typography>

                                <Typography
                                    className="metric-value"
                                    sx={{
                                        fontSize: {
                                            xs: "1.5rem",
                                            md: "2.25rem"
                                        },
                                        lineHeight: 1,
                                        fontWeight: 800,
                                        color: "primary.main",
                                        transformOrigin: "left center",
                                        transition: "transform .3s"
                                    }}
                                >
                                    {metric.value}
                                </Typography>

                                <Typography
                                    sx={{
                                        mt: .5,
                                        color: "text.secondary",
                                        fontFamily: "monospace"
                                    }}
                                >
                                    {metric.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* --- Secondary CTA Section --- */}
            <Box
                sx={{
                    py: { xs: 10, md: 14 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    textAlign: "center"
                }}
            >
                <Box
                    // sx={{
                    //     maxWidth: 720
                    // }}
                >
                    <Typography
                        variant='h3'
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            lineHeight: 1.05,
                            letterSpacing: "-0.04em",
                            mb: 2
                        }}
                    >
                        {project.secondaryCTA.title}
                    </Typography>

                    <Typography
                        sx={{
                            color: "text.secondary",
                            fontSize: "1.05rem",
                            lineHeight: 1.8
                        }}
                    >
                        {project.secondaryCTA.description}
                    </Typography>
                </Box>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={3}
                >
                    {project.demoUrl && (
                        <Button
                            variant="contained"
                            size="large"
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            endIcon={<OpenInNewIcon />}
                            sx={{
                                px: 5,
                                py: 1.8,
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                transition: "all .3s",
                                fontFamily: 'monospace',

                                "&:hover": {
                                    boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}`,
                                    bgcolor: 'primary.main'
                                },

                                "&:active": {
                                    transform: "scale(.97)"
                                }
                            }}
                        >
                            VIEW LIVE DEMO
                        </Button>
                    )}

                    {project.sourceUrl && (
                        <Button
                            variant="outlined"
                            size="large"
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            endIcon={<TerminalIcon />}
                            sx={{
                                px: 5,
                                py: 1.8,
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                borderColor: "divider",
                                fontFamily: 'monospace',

                                "&:hover": {
                                    bgcolor: "action.hover"
                                },

                                "&:active": {
                                    transform: "scale(.97)"
                                }
                            }}
                        >
                            VIEW SOURCE CODE
                        </Button>
                    )}
                </Stack>
            </Box>
        </Box>
    );
}