import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Header } from './Header';
import { Footer } from './Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import { Button } from '@mui/material';

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
    colorSchemes: {
        light: {
            palette: {
                primary: { main: '#007bbb' },
                secondary: { main: '#a22041' },
                warning: { main: '#f8b500' },
                info: { main: '#59b9c6' },
                success: { main: '#028760' },
            }
        },
        dark: {
            palette: {
                primary: { main: '#a0d8ef ' },
                secondary: { main: '#a22041' },
                warning: { main: '#f8b500' },
                info: { main: '#59b9c6' },
                success: { main: '#028760' },
            }
        }
    }
});

function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    return (
        <Button
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            {mode === 'light' ? 'Turn dark' : 'Turn light'}
        </Button>
    );
}

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <ThemeProvider theme={theme}   >
            <CssBaseline />
            <Box display="flex" flexDirection="column" minHeight="100vh">
                <Header />
                <Container maxWidth="md" sx={{ flex: 1, py: 4 }}>
                    {children}
                </Container>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

