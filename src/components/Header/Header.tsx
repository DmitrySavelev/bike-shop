import {
  StyledCartIcon,
  StyledHeader,
  StyledLogo,
  StyledSpan,
  StyledThemeToggle,
} from "./Header.styles";
import cartIcon from "./../../assets/cart.png";
import logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { toggleTheme } from "@/store/bikeSlice";
import { ThemeType } from "@/types";

const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.bikes.cart);
  const theme = useSelector((state: RootState) => state.bikes.theme);
  const dispatch = useDispatch<AppDispatch>();

  const changeThemeClicker = () => {
    dispatch(toggleTheme());
    if (theme === ThemeType.Light) {
      localStorage.setItem("theme", JSON.stringify(ThemeType.Dark));
    } else {
      localStorage.setItem("theme", JSON.stringify(ThemeType.Light));
    }
  };

  return (
    <StyledHeader $themeType={theme}>
      <StyledLogo src={logo} alt="logo" />
      <StyledThemeToggle onClick={changeThemeClicker} $themeType={theme}>
        mode {theme}
      </StyledThemeToggle>
      <div></div>
      <div>
        <StyledSpan>{cart.length}</StyledSpan>
        <StyledCartIcon
          onClick={() => navigate("/cart")}
          src={cartIcon}
          alt="cart"
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
