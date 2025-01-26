import Cards from "./Cards";
import Search from "./Search";
import { bikeProducts } from "../api";
import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [filters, setFilters] = useState({
    type: "",
    brand: "",
    priceRange: { min: 0, max: Infinity },
    frameSize: "",
    inStock: false,
  });

  const filteredProducts = bikeProducts.filter((product) => {
    const matchesType = filters.type ? product.type === filters.type : true;
    const matchesBrand = filters.brand ? product.brand === filters.brand : true;
    const matchesPrice =
      product.price >= filters.priceRange.min &&
      product.price <= filters.priceRange.max
        ? true
        : false;
    const matchesFrameSize = filters.frameSize
      ? product.specifications.frameSize.includes(filters.frameSize)
      : true;
    const matchesInStock = filters.inStock
      ? product.inStock === filters.inStock
      : true;

    return (
      matchesType &&
      matchesBrand &&
      matchesPrice &&
      matchesFrameSize &&
      matchesInStock
    );
  });

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <Search
        filters={filters}
        setFilters={setFilters}
        setTheme={setTheme}
        theme={theme}
      />
      <Cards products={filteredProducts} />
    </div>
  );
}

export default App;
