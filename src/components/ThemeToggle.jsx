import React from 'react'
import { IconButton } from '@mui/material'
import { LightMode, DarkMode } from '@mui/icons-material'

export default function ThemeToggle({ darkMode, setDarkMode }) {
    return (
        <IconButton onClick={() => setDarkMode((d) => !d)} color="inherit">
            {darkMode ? <DarkMode /> : <LightMode />}
        </IconButton>
    )
}
