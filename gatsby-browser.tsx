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
});

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
    </ThemeProvider>
);

