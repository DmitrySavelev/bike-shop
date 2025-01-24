import styled from "styled-components";

interface CardProps {
  name: string;
  description: string;
  price: number;
  src: string;
}

const StyledCard = styled.div`
  width: 30%;
  margin: 20px auto 0;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
const StyledName = styled.p`
  font-size: 27px;
  font-weight: 500;
  text-align: center;
`;

const StyledDescription = styled.p`
  margin: 20px 0;
`;

const StyledImage = styled.img`
  width: 200px;
`;

const StyledPrice = styled.p`
  background-color: #fdfa5b;
  margin-top: 40px;
  border-radius: 15px;
  padding: 0 10px;
  cursor: pointer;
`;

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
