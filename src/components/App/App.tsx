import { AppContainer } from "./App.styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import Order from "../Order/Order";
import { RootState } from "@/store/store";

function App() {
  const theme = useSelector((state: RootState) => state.bikes.theme);

  return (
    <BrowserRouter>
      <AppContainer $themeType={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
