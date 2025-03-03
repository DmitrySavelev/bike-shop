import { useDispatch, useSelector } from "react-redux";
import {
  StyledPrice,
  StyledName,
  StyledButtons,
  StyledButton,
  StyledImage,
  StyledMiddleInput,
  StyledRemove,
  StyledProduct,
} from "./CartContent.styles";

import remove from "../../assets/remove.png";
import { AppDispatch, RootState } from "@/store/store";
import { removeCart, setCount } from "@/store/bikeSlice";
import { CartContentProps } from "@/types";
import React, { useEffect, useState } from "react";

const CartContent: React.FC<CartContentProps> = ({ src, name, id, price }) => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.bikes.theme);
  const count = useSelector((state: RootState) => state.bikes.count) as {
    [key: string]: number;
  };

  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setInputValue(count[id] !== undefined ? String(count[id]) : "0");
  }, [count[id]]);

  const handleCountChange = (id: string, delta: number) => {
    const newCount = Math.max(0, (count[id] || 0) + delta);
    dispatch(setCount({ id, value: newCount }));
    setInputValue(String(newCount));
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (newValue !== "") {
      dispatch(setCount({ id, value: Math.max(0, Number(newValue)) }));
    }
  };

  const blurHandler = () => {
    if (inputValue === "" || isNaN(Number(inputValue))) {
      setInputValue("0");
      dispatch(setCount({ id, value: 0 }));
    }
  };

  return (
    <StyledProduct $themeType={theme}>
      <StyledImage src={src} alt="image of product" />
      <div>
        <StyledName>{name}</StyledName>
        <StyledButtons>
          <StyledButton onClick={() => handleCountChange(id, -1)}>
            -
          </StyledButton>
          <StyledMiddleInput
            type="number"
            value={inputValue}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
          <StyledButton onClick={() => handleCountChange(id, +1)}>
            +
          </StyledButton>
        </StyledButtons>
      </div>
      <StyledPrice>{price.toLocaleString()} ₽</StyledPrice>
      <StyledRemove src={remove} onClick={() => dispatch(removeCart(id))} />
    </StyledProduct>
  );
};

export default CartContent;
