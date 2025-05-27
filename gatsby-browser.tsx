import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    // You can add palette, typography, etc. here as needed
    // Color palette example
    palette: {
        mode: 'light', // or 'dark'
        primary: {
            main: '#0095d9', // Ao blue
            light: "'#0094c8'"
        },
        secondary: {
            main: '#a22041', // Shinku red
        },
        warning: {
            main: '#f8b500', // Yamabuki yellow
        },
        info: {
            main: '#59b9c6', // Shimbashi blue
        },
        success: {
            main: '#028760', // Tokiwa midori green
        },
    },
});

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
    </ThemeProvider>
);

