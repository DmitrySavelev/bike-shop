import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  StyledCart,
  StyledArticle, 
  StyledBack,
  StyledBackImage,
  StyledAbsentProducts,
} from "./Cart.styles";

import turnBack from "../../assets/turnBack.png";
import { RootState } from "@/store/store";
import CartSideBar from "../CartSideBar/CartSideBar";
import CartContent from "../CartContent/CartContent";
import { CartContentProps } from "@/types"; 

const Cart = () => {
  const navigate = useNavigate();
  const cart: CartContentProps[] = useSelector((state: RootState) => state.bikes.cart);

  return (
    <StyledCart>
      <StyledBack onClick={() => navigate("/")}>
        <StyledBackImage src={turnBack} alt="turnBack" />
      </StyledBack>
      <StyledArticle>Корзина</StyledArticle>
      <CartSideBar />
      {cart.length > 0 ? (
        cart.map((product) => (
          <CartContent
            key={product.id}
            src={product.src}
            name={product.name}
            id={product.id}
            price={product.price}
          />
        ))
      ) : (
        <StyledAbsentProducts>В корзине пока ничего нет</StyledAbsentProducts>
      )}
    </StyledCart>
  );
};

export default Cart;
