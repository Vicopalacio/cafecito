import { Navbar, Nav , Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Login from "../views/Login";
import Registrar from "../views/Registrar";

const Menu = () => {
    return (
        <>
        <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Cafecito</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={"nav-item nav-link"}>Inicio</NavLink>
            <NavLink to="/administrar" className={"nav-item nav-link"}>Administrador</NavLink>
            <Login></Login>
            <Registrar></Registrar>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default Menu;