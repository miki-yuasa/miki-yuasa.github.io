import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Header } from './header';
import { Footer } from './footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Box display="flex" flexDirection="column" minHeight="100vh">
        {/* <Header /> */}
        <Container maxWidth="md" sx={{ flex: 1, py: 4 }}>
            {children}
        </Container>
        <Footer />
    </Box>
);

