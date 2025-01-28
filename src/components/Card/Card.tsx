import { CardProps } from "@/types";
import {
  StyledCard,
  StyledDescription,
  StyledImage,
  StyledName,
  StyledPrice,
} from "./Card.styles";

const Card: React.FC<CardProps> = ({ name, description, price, src }) => {
  return (
    <StyledCard>
      <StyledName>{name}</StyledName>
      <StyledDescription>{description}</StyledDescription>
      <StyledImage src={src} alt="bike"></StyledImage>
      <StyledPrice>Цена: {price} </StyledPrice>
    </StyledCard>
  );
};

export default Card;
