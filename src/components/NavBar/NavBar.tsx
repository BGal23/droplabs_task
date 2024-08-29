import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <Typography color="white">FAKE STORE</Typography>
        </Link>

        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
