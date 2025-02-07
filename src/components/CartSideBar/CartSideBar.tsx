import { useDispatch, useSelector } from "react-redux";
import {
  StyledApplyPromo,
  StyledArticle,
  StyledContent,
  StyledFirstRow,
  StyledFlex,
  StyledMakeOrder,
  StyledPriceNoPromotion,
  StyledProducts,
  StyledPromotionText,
  StyledPromotionValue,
  StyledSecondRow,
  StyledTextArea,
  StyledThirdRow,
  StyledTotalText,
  StyledTotalValue,
} from "./CartSideBar.styles";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { setPriceWithPromo, setFullPrice } from "@/store/bikeSlice";
import { useNavigate } from "react-router-dom";

const CartSideBar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.bikes.cart);
  const count = useSelector((state: RootState) => state.bikes.count);
  const newPrice = useSelector((state: RootState) => state.bikes.newPrice);
  const totalPrice = useSelector((state: RootState) => state.bikes.totalPrice);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const applyPromo = () => dispatch(setPriceWithPromo(inputValue));

  const amountProducts = useSelector((state: RootState) =>
    Object.values(state.bikes.count).reduce((acc, value) => acc + value, 0)
  );

  useEffect(() => {
    dispatch(setFullPrice());
    applyPromo();
  }, [cart, count]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      applyPromo();
    }
  };

  return (
    <StyledContent>
      <StyledArticle>Ваш заказ</StyledArticle>
      <StyledFlex>
        <StyledFirstRow>
          <StyledProducts>Товары, {amountProducts} шт</StyledProducts>
          <StyledPriceNoPromotion>
            {totalPrice.toLocaleString()}₽
          </StyledPriceNoPromotion>
        </StyledFirstRow>
        <StyledSecondRow>
          <StyledPromotionText>Скидки и акции </StyledPromotionText>
          <StyledPromotionValue>
            −
            {Math.floor(
              totalPrice > 0 ? totalPrice - newPrice : 0
            ).toLocaleString()}
            ₽
          </StyledPromotionValue>
        </StyledSecondRow>
        <StyledThirdRow>
          <StyledTotalText>Итого </StyledTotalText>
          <StyledTotalValue>
            {Math.floor(newPrice).toLocaleString()}₽
          </StyledTotalValue>
        </StyledThirdRow>
      </StyledFlex>
      <StyledTextArea
        onChange={(e) => setInputValue(e.target.value)}
        type="textarea"
        onKeyDown={(e) => handleKeyDown(e)}
        value={inputValue}
        placeholder="Введите промокод"
      ></StyledTextArea>
      <StyledApplyPromo
        onClick={() => applyPromo()}
        type="button"
        value="Применить промокод"
      />
      <StyledMakeOrder
        onClick={() => navigate("/order")}
        type="button"
        value="Перейти к оформлению"
      />
    </StyledContent>
  );
};

export default CartSideBar;
