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
import { RootState } from "@/store/store";
import { toggleTheme } from "@/store/bikeSlice";

const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.bikes.cart);
  const theme = useSelector((state: RootState) => state.bikes.theme);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <StyledLogo src={logo} />
      <StyledThemeToggle
        onClick={() => dispatch(toggleTheme())}
        $themeType={theme}
      >
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
