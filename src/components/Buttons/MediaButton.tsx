import React from "react";
import { Button } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";


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
                // color: 'text.primary',
                // borderColor: 'text.primary',
                textTransform: 'none',
                fontWeight: 500,
                // '&:hover': { color: 'primary.main' },
                fontSize: '1rem',
                whiteSpace: 'nowrap',
                width: 180,
                borderRadius: 4,
            }}
            variant="outlined"
            aria-label={name}
            disableElevation
        >
            {name}
        </Button>
    );
};