import { CardProps } from "@/types";
import {
  StyledCard,
  StyledDescription,
  StyledImage,
  StyledName,
  StyledPrice,
  StyledNew,
  StyledRating,
  StyledCart,
  StyledPriceAndCart,
  StyledRatingAndNew,
} from "./Card.styles";
import { useDispatch, useSelector } from "react-redux";
import cartAddIcon from "../../assets/add_to_cart.png";
import cartAdded from "../../assets/added_to_cart.png";
import { removeCart, setCart } from "@/store/bikeSlice";
import { AppDispatch, RootState } from "@/store/store";

const Card: React.FC<CardProps> = ({
  name,
  description,
  price,
  src,
  rating,
  isNew,
  id,
}) => {
  const theme = useSelector((state: RootState) => state.bikes.theme);
  const cart = useSelector((state: RootState) => state.bikes.cart);
  const count = useSelector((state: RootState) => state.bikes.count);
  const newPrice = useSelector((state: RootState) => state.bikes.newPrice);
  const dispatch = useDispatch<AppDispatch>();


  const handleAdd = (id: string, name: string, price: number, src: string) => {
    const productExists = cart.some((product) => product.id === id);
    productExists
      ? dispatch(removeCart(id))
      : dispatch(setCart({ id, name, price, src }));

    let updatedCart;
    let updatedCount: Record<string, number> = { ...count };
    let updatedNewPrice: number = newPrice; // Инициализируем переменную для обновленной цены

    if (productExists) {
      updatedCart = cart.filter((product) => product.id !== id);
      delete updatedCount[id]; // Удаляем счетчик у удаленного товара
      if (updatedCart.length === 0) {
        updatedNewPrice -= count[id] * price;
      }
    } else {
      updatedCart = [...cart, { id, name, price, src }];
      updatedCount[id] = (count[id] || 0) + 1; // Если товара не было, добавляем и ставим 1
      if (cart.length === 0) {
        updatedNewPrice = price;
      }
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("count", JSON.stringify(updatedCount));
    localStorage.setItem("newPrice", updatedNewPrice.toString()); // Сохраняем newPrice в локальное хранилище
  };

  const checkId = (id: string) => {
    const res = cart.some((item) => item.id === id);
    return res ? cartAdded : cartAddIcon;
  };

  return (
    <StyledCard>
      <StyledName>{name}</StyledName>
      <StyledRatingAndNew>
        <StyledRating>Rating {rating}</StyledRating>
        {isNew ? <StyledNew $themeType={theme}>Новинка</StyledNew> : ""}
      </StyledRatingAndNew>
      <StyledDescription>{description}</StyledDescription>
      <StyledImage src={src} alt="bike"></StyledImage>
      <StyledPriceAndCart>
        <StyledPrice>Цена: {price} </StyledPrice>
        <StyledCart
          onClick={() => handleAdd(id, name, price, src)}
          src={checkId(id)}
        />
      </StyledPriceAndCart>
    </StyledCard>
  );
};

export default Card;
