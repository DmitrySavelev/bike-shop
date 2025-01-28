import { FilterKeys, Filters, SearchProps } from "@/types";
import { StyledSpan, ThemeToggle } from "./Search.styles";

const Search = ({ filters, setFilters, setTheme, theme }: SearchProps) => {
  const changeHandler = (key: FilterKeys, value: any) => {
    setFilters((prev: Filters) => {
      return { ...prev, [key]: value };
    });
  };

  const changePriceHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev: Filters) => ({
      ...prev,
      priceRange: JSON.parse(e.target.value),
    }));
  };

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <div>
        <StyledSpan>Тип:</StyledSpan>
        <label>
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              changeHandler("type", e.target.value);
            }}
          >
            <option value="">all</option>
            <option value="mountain">Mountain</option>
            <option value="road">Road</option>
            <option value="city">City</option>
          </select>
        </label>
        <br />
        <StyledSpan>Бренд:</StyledSpan>
        <label>
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              changeHandler("brand", e.target.value);
            }}
          >
            <option value="">all</option>
            <option value="TrekStar">TrekStar</option>
            <option value="UrbanRide">UrbanRide</option>
            <option value="SpeedTech">SpeedTech</option>
          </select>
        </label>
        <br />
        <StyledSpan>Цена:</StyledSpan>
        <label>
          <select onChange={changePriceHandler}>
            <option value={JSON.stringify({ min: 0, max: "Infinity" })}>
              all
            </option>
            <option value={JSON.stringify({ min: 0, max: 50000 })}>
              До 50 000 ₽
            </option>
            <option value={JSON.stringify({ min: 50000, max: 100000 })}>
              50 000 ₽ - 100 000 ₽
            </option>
            <option value={JSON.stringify({ min: 100000, max: 150000 })}>
              100 000 ₽ - 150 000 ₽
            </option>
            <option value={JSON.stringify({ min: 150000, max: "Infinity" })}>
              Более 150 000 ₽
            </option>
          </select>
        </label>
        <br />
        <StyledSpan>Размер рамы:</StyledSpan>
        <label>
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              changeHandler("frameSize", e.target.value);
            }}
          >
            <option value="">all</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </label>
        <br />
        <label>
          <StyledSpan>Только в наличии</StyledSpan>
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              changeHandler("inStock", e.target.checked);
            }}
          />
        </label>
      </div>
      <div>
        <ThemeToggle onClick={changeTheme} $themeType={theme}>
          mode {theme}
        </ThemeToggle>
      </div>
    </div>
  );
};

export default Search;
