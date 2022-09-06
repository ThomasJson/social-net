import "./footerNav.scss";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { RiHome4Line, RiSearchLine, RiUser3Line } from 'react-icons/ri';

const FooterNav = () => {
  return (
    <Navbar fixed="bottom" bg="light">
      <Container fluid>
        <Nav defaultActiveKey="/home" as="ul" id="bottom-nav-items">
          <Nav.Item as="li">
            <Nav.Link href="/home"><RiHome4Line /></Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1"><RiSearchLine /></Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2"><RiUser3Line /></Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FooterNav;
