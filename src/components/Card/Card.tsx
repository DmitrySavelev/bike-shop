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
import { setCart } from "@/store/bikeSlice";
import { RootState } from "@/store/store";

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
  const dispatch = useDispatch();

  const handleAdd = (id: string, name: string, price: number, src: string) => {
    dispatch(setCart({ id, name, price, src }));
  };

  const checkId = (id: string) => {
    if (
      cart.some((item) => {
        return item.id === id;
      })
    ) {
      return cartAdded;
    } else {
      return cartAddIcon;
    }
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
