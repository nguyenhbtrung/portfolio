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
} from '@mui/material'
import { GitHub, LinkedIn, Email, Menu as MenuIcon, Close } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Header({ darkMode, setDarkMode }) {
    const [openDrawer, setOpenDrawer] = useState(false)
    const theme = useTheme()
    const location = useLocation()
    const navigate = useNavigate()

    // 🔍 Nếu đường dẫn là /project/... thì hiển thị 2 nút khác
    const isProjectDetail = location.pathname.startsWith('/project/')
    const sections = isProjectDetail
        ? ['Home', 'Projects']
        : ['About', 'Skills', 'Projects', 'Contact']

    const getHref = (section) => {
        if (isProjectDetail) {
            if (section === 'Home') return '/'
            if (section === 'Projects') return '/#projects'
        }
        return `/#${section.toLowerCase()}`
    }

    return (
        <AppBar
            position="sticky"
            color="default"
            elevation={1}
            sx={{
                backdropFilter: 'blur(8px)',
                backgroundColor: theme.palette.background.paper + 'CC',
                transition: 'background-color 0.3s ease',
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* --- Mạng xã hội --- */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Tooltip title="Gmail">
                        <IconButton
                            color="inherit"
                            component="a"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=nguyenhbtrung1907@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Email />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="GitHub">
                        <IconButton
                            color="inherit"
                            component="a"
                            href="https://github.com/nguyenhbtrung"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHub />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="LinkedIn">
                        <IconButton
                            color="inherit"
                            component="a"
                            href="https://www.linkedin.com/in/trung-nguy%E1%BB%85n-ab7289387/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedIn />
                        </IconButton>
                    </Tooltip>
                </Box>

                {/* --- Điều hướng (desktop) --- */}
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    {sections.map((s) => (
                        <Button
                            key={s}
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
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', gap: 1 }}>
                    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>

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
                                © 2025 Trung Nguyen
                            </motion.div>
                        </motion.div>
                    </Drawer>
                )}
            </AnimatePresence>
        </AppBar>
    )
}
