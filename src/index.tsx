import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import { createGlobalStyle } from "styled-components";
import ThemeContext from "./components/ThemeContext.tsx";

const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <>
  //   <Global />
  //   <App />
  // </>
  <ThemeContext.Provider value={ThemeContext}>
    <Global />
    <App />
  </ThemeContext.Provider>
);
