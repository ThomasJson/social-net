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
    <Navbar fixed="top" bg={theme ? "navbar-light" : "navbar-dark"} expand="lg" className={theme ? "navbar-light" : "navbar-dark"} >
      <Container className="flex-row">
        <Navbar.Brand href="#home" className={theme ? "transition lightMode" : "transition darkMode"}>@itstompearson</Navbar.Brand>

        <Container fluid id="top-nav-items">
          <Container className="icons-container">
            <BiPlus className={theme ? "transition lightMode" : "transition darkMode"}/>
          </Container>
          <Container className="icons-container">
            <BiMessageRounded className={theme ? "transition lightMode" : "transition darkMode"}/>
          </Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            id="burger-menu"
            className={theme ? "burger-light" : "burger-dark"}
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
