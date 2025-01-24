import { createContext, useState } from "react";
import "./Button.css";

export const themeContext = createContext('light');

const Button = () => {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme}>
      <button onClick={handleClick}>{theme} mode</button>
    </div>
  );
};

export default Button;
