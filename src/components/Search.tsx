import "./Search.css";
import styled from "styled-components";

const ThemeToggle = styled.button<{ themeType: string }>`
  ${({ themeType }) =>
    themeType === "light"
      ? `
          background-color: #c2eced;
          color: #262621;
        `
      : `
          background-color: #252528;
          color: #c6e31e;
        `};
  padding: 4px;
  border-radius: 7px;
  font-weight: bolder;
`;

const Search = ({ filters, setFilters, setTheme, theme }: any) => {
  const changeHandler = (key: string, value: any) => {
    setFilters((prev: any) => {
      return { ...prev, [key]: value };
    });
  };

  const changePriceHandler = (e: any) => {
    setFilters((prev: any) => ({
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
        <span>Тип:</span>
        <label>
          <select
            onChange={(e) => {
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
        <span>Бренд:</span>
        <label>
          <select
            onChange={(e) => {
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
        <span>Цена:</span>
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
        <span>Размер рамы:</span>
        <label>
          <select
            onChange={(e) => {
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
          Только в наличии
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => {
              changeHandler("inStock", e.target.checked);
            }}
          />
        </label>
      </div>
      <div>
        <ThemeToggle onClick={changeTheme} themeType={theme}>
          mode {theme}
        </ThemeToggle>
      </div>
    </div>
  );
};

export default Search;
