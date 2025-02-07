import { AppContainer } from "./App.styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import Order from "../Order/Order";

function App() {
  const theme = useSelector((state: any) => state.bikes.theme);

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

const myTime = (
  workedHours = "0:00",
  firstMeal: any,
  walking: any,
  secondMeal: any,
  addedRest = "0:00"
) => {
  const func = (type: any) => {
    const [hours, minutes] = type.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const date = new Date();
  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();
  const allTime = (23 - currentHours) * 60 - currentMinutes;

  const goal = 300; //////////////////////////////////////////////////////////////////////////////////

  const fm = firstMeal ? 0 : 60;
  const sm = secondMeal ? 0 : 60;
  const w = walking ? 0 : 90;

  const timeIHaveNow = allTime - fm - sm - w; //время для П и отдыха

  const timeForProgramming = goal - func(workedHours);
  const timeForRest = timeIHaveNow - timeForProgramming - func(addedRest);

  const hoursR = Math.floor(timeForRest / 60); // Целые часы
  const minutesR = timeForRest % 60; // Оставшиеся минуты
  const hoursP = Math.floor(timeForProgramming / 60); // Целые часы
  const minutesP = timeForProgramming % 60; // Оставшиеся минуты

  console.log(`${hoursR}:${minutesR.toString().padStart(2, "0")} ОТДЫХ`);
  console.log(`${hoursP}:${minutesP.toString().padStart(2, "0")} programming`);
};

// myTime("3:18 ", 1, 0, 0, "0:00");