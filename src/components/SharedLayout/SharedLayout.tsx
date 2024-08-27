import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default SharedLayout;
