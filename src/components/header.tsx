import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ModeToggleButton } from "./Buttons/ThemeToggleButton";

export type PageProps = {
  name: string;
  url: string;
};
const pages: PageProps[] = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "Articles", url: "/articles" },
];

export const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const siteName: string = "";
  const compactTrigger = { xs: "flex", md: "none" };
  const fullTrigger = { xs: "none", md: "flex" };

  return (
    <AppBar
      color="transparent"
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(30px)",
        backgroundColor: "background",
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            // variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: compactTrigger,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {siteName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: fullTrigger }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                href={page.url}
                onClick={handleCloseNavMenu}
                sx={{ display: "block", textTransform: "none" }}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, justifyContent: "flex-end" }}>
            <ModeToggleButton />
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: compactTrigger,
              justifyContent: "flex-end",
            }}
          >
            <Button
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              variant="outlined"
              sx={{
                color: "primary.main",
                borderColor: "grey.500",
                minWidth: 0,
                px: 0.5,
                py: 0.5,
                ml: 1,
                justifyContent: "center",
                borderRadius: 3.2,
                "&:hover": {
                  color: "primary.main",
                  borderColor: "primary.main",
                },
              }}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              slotProps={{
                paper: {
                  sx: {
                    borderRadius: 3.2,
                  },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component="a"
                  href={page.url}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
