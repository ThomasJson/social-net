import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <HomeScreen />
    </ThemeContextProvider>
  );
}

export default App;
