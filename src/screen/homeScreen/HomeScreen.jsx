import "./homeScreen.scss";
import React from "react";
import FooterNav from "../../components/footerNav/FooterNav";
import Main from "../../components/main/Main";
import NavBar from "../../components/navBar/NavBar";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <Main />
      <FooterNav />
    </>
  );
};

export default HomeScreen;
