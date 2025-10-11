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
}

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#5b6cff' },
        background: { default: '#fdfdfd' },
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
