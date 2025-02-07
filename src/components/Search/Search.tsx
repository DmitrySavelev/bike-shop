import { FilterKeys, SearchProps } from "@/types";
import {
  StyledLabel,
  StyledLabels,
  StyledSearch,
  StyledSelect,
  StyledSpan,
} from "./Search.styles";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/store/bikeSlice";

const Search = ({ filters, setSort }: SearchProps) => {
  const theme = useSelector((state: any) => state.bikes.theme);
  const dispatch = useDispatch();

  const changeHandler = (key: FilterKeys, value: any) => {
    dispatch(setFilter({ key, value }));
  };

  return (
    <StyledSearch>
      <div>
        <StyledLabels>
          <StyledLabel>
            <StyledSpan>Тип:</StyledSpan>
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
          </StyledLabel>
          <StyledLabel>
            <StyledSpan>Бренд:</StyledSpan>
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
          </StyledLabel>
          <StyledLabel>
            <StyledSpan>Цена:</StyledSpan>
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                changeHandler("priceRange", JSON.parse(e.target.value));
              }}
            >
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
          </StyledLabel>
          <StyledLabel>
            <StyledSpan>Размер рамы:</StyledSpan>
            <StyledSelect
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                changeHandler("frameSize", e.target.value);
              }}
            >
              <option value="">all</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </StyledSelect>
          </StyledLabel>
          <StyledLabel>
            <StyledSpan>Только в наличии</StyledSpan>
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                changeHandler("inStock", e.target.checked);
              }}
            />
          </StyledLabel>
        </StyledLabels>
      </div>
      <div>
        <label>
          <select
            defaultValue={"popular"}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value={"cheap"}>Сначала дешевле</option>
            <option value={"expensive"}>Сначала дороже</option>
            <option value={"popular"}>Самые популярные</option>
            <option value={"rate"}>По рейтингу</option>
            <option value={"new"}>Сначала новые</option>
          </select>
        </label>
      </div>
    </StyledSearch>
  );
};

export default Search;
