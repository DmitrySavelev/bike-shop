import { useState } from "react";
import "./Button.css";

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
