import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, extendTheme } from '@mui/material/styles';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

const theme = extendTheme({
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
    colorSchemes: {
        light: {
            palette: { // mode: 'dark',// or 'dark'
                primary: {
                    main: '#007bbb', // Tsuyukusa blue
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
            }
        },
        dark: {
            palette: { // mode: 'dark',// or 'dark'
                primary: {
                    main: '#a0d8ef ', // Tsuyukusa blue
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
            }
        }
    }
});

export const wrapRootElement = ({ element }) => (
    <CssVarsProvider theme={theme} defaultMode="system">
        <CssBaseline />
        {element}
    </CssVarsProvider>
);

