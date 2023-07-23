import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { useAuth0 } from "@auth0/auth0-react";

const pages = [
  { label: "Home", link: "/#/", special: false },
  { label: "About", link: "/about", special: false },
  { label: "Courses", link: "/courses", special: false },
  { label: "Blog", link: "/blog", special: false },
  { label: "Partner >", link: "/partner", special: true },
];

function ResponsiveAppBar({ Logo }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ background: "rgb(13 17 22)", padding: "15px", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <span style={{ color: "rgb(127 176 255)" }}>Kube</span>Kode
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ label, link }) => (
                <MenuItem key={label} onClick={handleCloseNavMenu}>
                  <Link to={link} style={{ textDecoration: "none" }}>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: "PT Sans, sans-serif",
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      {label}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
              {isAuthenticated ? (
                <Button
                  color="inherit"
                  href="/login"
                  onClick={() => logoutWithRedirect()}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  color="inherit"
                  href="/login"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </Button>
              )}
            </Menu>
          </Box>
          <Logo sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KubeKode
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.link}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  backgroundColor: page.special ? "#2f74e5" : "transparent",
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    fontFamily: "PT Sans, sans-serif",
                    fontWeight: 700,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {page.label}
                </Typography>
              </Button>
            ))}
            {isAuthenticated ? (
                <Button
                  color="inherit"
                  href="/login"
                  onClick={() => logoutWithRedirect()}
                  sx={{
                    my: 2,
                    ml: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                 <Typography
                  textAlign="center"
                  sx={{
                    fontFamily: "PT Sans, sans-serif",
                    fontWeight: 700,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Log Out
                </Typography>
                </Button>
              ) : (
                <Button
                  color="inherit"
                  href="/login"
                  onClick={() => loginWithRedirect()}
                  sx={{
                    my: 2,
                    ml: 2,
                    color: "white",
                    display: "block",
                    backgroundColor:  "#362dbb",
                  }}
                >
                 <Typography
                  textAlign="center"
                  sx={{
                    fontFamily: "PT Sans, sans-serif",
                    fontWeight: 700,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Login
                </Typography>
                </Button>
              )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
