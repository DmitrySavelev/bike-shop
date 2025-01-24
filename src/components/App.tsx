import Button from "./Button";
import Cards from "./Cards";
import ThemeContext from "../components/ThemeContext";
import { useContext } from "react";

function App() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  
  return (
    // <div className='dark'>
    <div className={theme}>
      <Button />
      <Cards />
    </div>
  );
}

export default App;
