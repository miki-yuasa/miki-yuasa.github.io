import React from "react";
import { Button } from "@mui/material";
import { GitHub, LinkedIn, School, SvgIconComponent } from "@mui/icons-material";

export type MediaButtonProps = {
    name: string;
    url: string;
    icon: SvgIconComponent;
};

export const MediaButton: React.FC<MediaButtonProps> = ({ name, url, icon }) => {
    const IconComponent = icon;

    return (
        <Button
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<IconComponent fontSize="large" />}
            sx={{
                color: 'text.primary',
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': { color: 'primary.main' },
                fontSize: '1rem',
            }}
            variant="outlined"
            aria-label={name}
        >
            {name}
        </Button>
    );
};
