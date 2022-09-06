import "./main.scss";
import React, {useContext} from "react";
import BtnToggle from "../btnToggle/BtnToggle";
import { ThemeContext } from "../../context/ThemeContext";

const Main = () => {

  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme ? "transition lightMode" : "transition darkMode"}>
      <BtnToggle />
    </main>
  );
};

export default Main;
