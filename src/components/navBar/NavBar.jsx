import "./navBar.scss";
import React, { useContext }  from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiMessageRounded, BiPlus } from "react-icons/bi";

import { ThemeContext } from "../../context/ThemeContext";

const NavBar = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <Navbar fixed="top" bg={theme ? "transition lightMode" : "transition darkMode"} expand="lg" className={theme ? "transition lightMode" : "transition darkMode"} >
      <Container className="flex-row">
        <Navbar.Brand href="#home" className={theme ? "transition lightMode" : "transition darkMode"}>@itstompearson</Navbar.Brand>

        <Container fluid id="top-nav-items">
          <Container className="icons-container">
            <BiPlus />
          </Container>
          <Container className="icons-container">
            <BiMessageRounded />
          </Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            id="burger-menu"
            className={theme ? "transition lightMode" : "transition darkMode"}
          />
        </Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link" className={theme ? "transition lightMode" : "transition darkMode"}>Paramètres</Nav.Link>
            <Nav.Link href="#link" className={theme ? "transition lightMode" : "transition darkMode"}>Déconnexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
