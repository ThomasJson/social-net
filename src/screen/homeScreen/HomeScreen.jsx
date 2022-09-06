import "./homeScreen.scss";
import React from "react";
import FooterNav from "../../components/footerNav/FooterNav";
import Main from "../../components/main/Main";
import NavBar from "../../components/navBar/NavBar";
import { Container } from "react-bootstrap";

const HomeScreen = () => {

  return (
    <>
      <Container>
        <NavBar />
        <Main />
        <FooterNav />
      </Container>
    </>
  );
};

export default HomeScreen;
