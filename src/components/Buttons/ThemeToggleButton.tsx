import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useColorScheme } from '@mui/material/styles';

export const ModeToggleButton: React.FC = () => {
    const { mode, setMode } = useColorScheme();
    const isDark = mode === 'dark';

    return (
        <Tooltip title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
            <IconButton
                color="inherit"
                onClick={() => setMode(isDark ? 'light' : 'dark')}
                aria-label="toggle color mode"
                sx={{ ml: 1 }}
            >
                {isDark ? <LightMode /> : <DarkMode />}
            </IconButton>
        </Tooltip>
    );
};
