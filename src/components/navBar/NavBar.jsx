import "./navBar.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiMessageRounded, BiPlus } from "react-icons/bi";

const NavBar = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container className="flex-row">
        <Navbar.Brand href="#home">@itstompearson</Navbar.Brand>

        <Container fluid id="top-nav-items">
          <Container className="icons-container">
            <BiPlus />
          </Container>
          <Container className="icons-container">
            <BiMessageRounded />
          </Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="burger-menu"
          />
        </Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Paramètres</Nav.Link>
            <Nav.Link href="#link">Déconnexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
