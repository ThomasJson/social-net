import React, { useContext } from "react";
import "./btnToggle.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { Container } from "react-bootstrap";

const BtnToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <Container onClick={toggleTheme} className={theme ? 'btn-toggle goLight' : 'btn-toggle goDark'} >
      {theme ? "Dark" : "Light"}
    </Container>
  );
};

export default BtnToggle;
