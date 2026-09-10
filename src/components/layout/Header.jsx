import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    IconButton,
    Tooltip,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    useTheme,
    Link,
    Container,
    Typography,
} from '@mui/material'
import { GitHub, LinkedIn, Email, Menu as MenuIcon, Close } from '@mui/icons-material'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle'
import { publicPath } from '../../utils/path'
import { ElevationScrollWrapper } from './ElevationScrollWrapper'

export function Header({ darkMode, setDarkMode }) {
    const [openDrawer, setOpenDrawer] = useState(false)
    const theme = useTheme()
    const location = useLocation()
    const navigate = useNavigate()

    const isProjectDetail = location.pathname.startsWith('/project/')
    const sections = isProjectDetail
        ? ['Home', 'Projects']
        : ['About', 'Projects', 'Skills', 'Contact']

    const year = new Date().getFullYear()

    const getHref = (section) => {
        if (isProjectDetail) {
            if (section === 'Home') return '/'
            if (section === 'Projects') return '/#projects'
        }
        return publicPath(`/#${section.toLowerCase()}`)
    }

    return (
        <ElevationScrollWrapper>
            <AppBar
                position="sticky"
                color="paper"
                elevation={1}    
                sx={{
                    backdropFilter: 'blur(8px)',
                    backgroundColor: theme.palette.background.paper + 'CC',
                    transition: 'background-color 0.3s ease',
                }}
            >
                <Container maxWidth='lg'>
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        {/* --- Logo + Name --- */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Link href="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}>
                                {/* <Box 
                                    component="img" 
                                    src="/logo.png" 
                                    alt="Logo" 
                                    sx={{ height: 42, width: 'auto' }} 
                                /> */}
                                <Typography 
                                    component='span' 
                                    variant='h6' 
                                    sx={{ 
                                        fontFamily: '"Satisfy", cursive', 
                                        fontSize: '1.8rem', 
                                        fontWeight: 700,
                                        color: 'text.primary',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Box component="span" sx={{
                                        padding: '0 0.15em',
                                        background: 
                                            'linear-gradient(90deg, #549df8 0%, #549df8 15%, #ae65e9 45%, #ae65e9 65%, #6759e6 85%, #6759e6 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>N</Box>guyen 
                                    
                                    <Box component="span" sx={{ width: '6px' }} /> 
                                    
                                    <Box component="span" sx={{
                                        padding: '0 0.15em',
                                        background: 'linear-gradient(90deg, #6759e6 0%, #6759e6 25%, #a761f7 55%, #a761f7 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>T</Box>rung  
                                </Typography>

                            </Link>
                        </Box>

                        {/* --- Điều hướng (desktop) --- */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            {sections.map((s) => (
                                <Button
                                    key={s}
                                    component='a'
                                    onClick={() => {
                                        if (isProjectDetail && s === 'Projects') {
                                            navigate('/', { state: { scrollTo: 'projects' } })
                                        } else if (isProjectDetail && s === 'Home') {
                                            navigate('/')
                                        } else {
                                            window.location.href = getHref(s)
                                        }
                                    }}
                                    sx={{
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            color: theme.palette.primary.main,
                                            transform: 'translateY(-1px)',
                                        },
                                    }}
                                >
                                    {s}
                                </Button>
                            ))}
                            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                        </Box>

                        {/* --- Menu Icon (mobile) --- */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
                            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                            <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>

                {/* --- Drawer + Hiệu ứng Framer Motion --- */}
                <AnimatePresence>
                    {openDrawer && (
                        <Drawer
                            anchor="right"
                            open={openDrawer}
                            onClose={() => setOpenDrawer(false)}
                            PaperProps={{
                                sx: {
                                    width: 240,
                                    backgroundColor: theme.palette.background.default,
                                    color: theme.palette.text.primary,
                                    overflow: 'hidden',
                                    position: 'relative',
                                },
                            }}
                        >
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 25,
                                }}
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: 16,
                                }}
                            >
                                {/* Nút đóng */}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                                    <IconButton onClick={() => setOpenDrawer(false)}>
                                        <Close />
                                    </IconButton>
                                </Box>

                                {/* Danh sách điều hướng */}
                                <List>
                                    {sections.map((s, index) => (
                                        <motion.div
                                            key={s}
                                            initial={{ x: 30, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 * index }}
                                        >
                                            <ListItemButton
                                                component='a'
                                                onClick={() => {
                                                    if (isProjectDetail && s === 'Projects') {
                                                        navigate('/', { state: { scrollTo: 'projects' } })
                                                    } else if (isProjectDetail && s === 'Home') {
                                                        navigate('/')
                                                    } else {
                                                        window.location.href = getHref(s)
                                                    }
                                                    setOpenDrawer(false)
                                                }}
                                                sx={{
                                                    borderRadius: 1,
                                                    mb: 0.5,
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        backgroundColor: theme.palette.action.hover,
                                                        pl: 3,
                                                    },
                                                }}
                                            >
                                                <ListItemText primary={s} />
                                            </ListItemButton>
                                        </motion.div>
                                    ))}
                                </List>

                                {/* Footer Drawer */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.7 }}
                                    transition={{ delay: 0.5 }}
                                    style={{
                                        marginTop: 'auto',
                                        textAlign: 'center',
                                        fontSize: 13,
                                    }}
                                >
                                    © {year} Trung Nguyen
                                </motion.div>
                            </motion.div>
                        </Drawer>
                    )}
                </AnimatePresence>
            </AppBar>
        </ElevationScrollWrapper>
    )
}
