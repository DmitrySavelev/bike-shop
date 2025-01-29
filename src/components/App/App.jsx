import styled from "styled-components";
import TodoList from "../TodoList";
import InputField from "../InputField";

const StyledApp = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <StyledApp>
      <InputField />
      <TodoList />
    </StyledApp>
  );
}

export default App;

// import Cards from "../Cards/Cards";
// import Search from "../Search/Search";
// import { bikeProducts } from "../../api";
// import { useState } from "react";
// import { Filters, Product, Theme } from "@/types";
// import { AppContainer } from "./App.styles";

// function App() {
//   const [theme, setTheme] = useState<Theme>("light");
//   const [filters, setFilters] = useState<Filters>({
//     type: "",
//     brand: "",
//     priceRange: { min: 0, max: Infinity },
//     frameSize: "",
//     inStock: false,
//   });

//   const filteredProducts: Product[] = bikeProducts.filter((product) => {
//     const matchesType = filters.type ? product.type === filters.type : true;
//     const matchesBrand = filters.brand ? product.brand === filters.brand : true;
//     const matchesPrice =
//       product.price >= filters.priceRange.min &&
//       product.price <= filters.priceRange.max
//         ? true
//         : false;
//     const matchesFrameSize = filters.frameSize
//       ? product.specifications.frameSize.includes(filters.frameSize)
//       : true;
//     const matchesInStock = filters.inStock
//       ? product.inStock === filters.inStock
//       : true;

//     return (
//       matchesType &&
//       matchesBrand &&
//       matchesPrice &&
//       matchesFrameSize &&
//       matchesInStock
//     );
//   });

//   const [todos, setTodos] = useState([]);

//   return (
//     <AppContainer $themeType={theme}>
//       <Search
//         filters={filters}
//         setFilters={setFilters}
//         setTheme={setTheme}
//         theme={theme}
//       />
//       <Cards products={filteredProducts} />
//     </AppContainer>
//   );
// }

// export default App;

const myTime = (firstMeal, walking, secondMeal, workedHours = "0:00") => {
  const [hours, minutes] = workedHours.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;

  const date = new Date();
  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();
  const allTime = (23 - currentHours) * 60 - currentMinutes;

  const goal = 360;

  const fm = firstMeal ? 0 : 60;
  const sm = secondMeal ? 0 : 60;
  const w = walking ? 0 : 90;

  const timeIHaveNow = allTime - fm - sm - w; //время для П и отдыха

  const timeForProgramming = goal - totalMinutes;
  const timeForRest = timeIHaveNow - timeForProgramming;

  const hoursR = Math.floor(timeForRest / 60); // Целые часы
  const minutesR = timeForRest % 60; // Оставшиеся минуты
  const hoursP = Math.floor(timeForProgramming / 60); // Целые часы
  const minutesP = timeForProgramming % 60; // Оставшиеся минуты

  console.log(`${hoursR}:${minutesR.toString().padStart(2, "0")} ОТДЫХ`);
  console.log(`${hoursP}:${minutesP.toString().padStart(2, "0")} programming`);
};

// myTime = (firstMeal, walking, secondMeal,  workedHours)
// myTime(1, 1, 1, "5:00");
