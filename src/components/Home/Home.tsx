import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { Product } from "@/types";

const Home = () => {
  const filters = useSelector((state: RootState) => state.bikes.filters);
  const bikes = useSelector((state: RootState) => state.bikes.bikes);

  const [sort, setSort] = useState("popular");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filteredProducts: Product[] = bikes.filter((product) => {
      const matchesType = filters.type ? product.type === filters.type : true;
      const matchesBrand = filters.brand
        ? product.brand === filters.brand
        : true;
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

    if (sort === "cheap") {
      setFilteredProducts(filteredProducts.sort((a, b) => a.price - b.price));
    } else if (sort === "expensive") {
      setFilteredProducts(filteredProducts.sort((a, b) => b.price - a.price));
    } else if (sort === "popular") {
      setFilteredProducts(
        filteredProducts.sort((a, b) => a.reviews - b.reviews)
      );
    } else if (sort === "rate") {
      setFilteredProducts(filteredProducts.sort((a, b) => b.rating - a.rating));
    } else if (sort === "new") {
      setFilteredProducts(
        filteredProducts.sort((a, b) => Number(b.isNew) - Number(a.isNew))
      );
    }
  }, [sort, bikes, filters]);

  return (
    <div>
      <Header />
      <Search filters={filters} setSort={setSort} />
      <Cards products={filteredProducts} />
    </div>
  );
};

export default Home;
