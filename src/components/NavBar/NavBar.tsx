import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const underline = {
  "&.active": { textDecoration: "underline" },
};

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography color="white" component={Link} to="/">
          FAKE STORE
        </Typography>

        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <Button sx={underline} color="inherit" component={NavLink} to="/">
            Home
          </Button>

          <Button
            sx={underline}
            color="inherit"
            component={NavLink}
            to="/products"
          >
            Products
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
