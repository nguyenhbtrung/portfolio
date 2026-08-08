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
        fontFamily: '"Montserrat Variable", system-ui, -apple-system, sans-serif', 
    },
    breakpoints: {
        values: {
            xs: 0,
            xsPlus: 400,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
  },
};

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#5b6cff' },
        background: { default: '#f2f4f6' },
    },
    ...commonComponents,
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#8FA8FF' },
    },
    ...commonComponents,
});