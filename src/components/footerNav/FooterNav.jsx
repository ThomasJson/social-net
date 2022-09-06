import "./footerNav.scss";
import React, {useContext} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { RiHome4Line, RiSearchLine, RiUser3Line } from 'react-icons/ri';
import { ThemeContext } from "../../context/ThemeContext";

const FooterNav = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <Navbar fixed="bottom" bg={theme ? "transition lightMode" : "transition darkMode"} className={theme ? "transition lightMode" : "transition darkMode"}>
      <Container fluid>
        <Nav defaultActiveKey="/home" as="ul" id="bottom-nav-items">
          <Nav.Item as="li">
            <Nav.Link href="/home"><RiHome4Line className={theme ? "transition lightMode" : "transition darkMode"}/></Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1"><RiSearchLine className={theme ? "transition lightMode" : "transition darkMode"}/></Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2"><RiUser3Line className={theme ? "transition lightMode" : "transition darkMode"}/></Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FooterNav;
