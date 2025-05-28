import React from "react";
import { Button } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material/styles";

export type MediaButtonProps = {
  name: string;
  url: string;
  icon: SvgIconComponent;
  variant?: "text" | "outlined" | "contained";
  sx?: SxProps<Theme>;
};

export const MediaButton: React.FC<MediaButtonProps> = ({
  name,
  url,
  icon,
  variant,
  sx,
}) => {
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
        textTransform: "none",
        fontWeight: 500,
        // '&:hover': { color: 'primary.main' },
        fontSize: "1rem",
        whiteSpace: "nowrap",
        width: 180,
        borderRadius: 4,
        ...sx,
      }}
      variant={variant || "outlined"}
      aria-label={name}
      disableElevation
    >
      {name}
    </Button>
  );
};
