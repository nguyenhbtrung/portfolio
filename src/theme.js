import { createTheme } from '@mui/material/styles'

const commonComponents = {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                },
            },
        },
    },
    shape: { borderRadius: 8 },
    typography: {
        fontFamily: '"Inter", system-ui, -apple-system, sans-serif', 
    },
}

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#5b6cff' },
        background: { default: '#f2f4f6' },
    },
    ...commonComponents,
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#5b6cff' },
    },
    ...commonComponents,
})
