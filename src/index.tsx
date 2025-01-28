import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.tsx";
import { createGlobalStyle } from "styled-components";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store.ts";

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
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </React.StrictMode>
);
