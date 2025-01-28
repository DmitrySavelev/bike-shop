import { CardProps, CardsProps, Product } from "@/types";
import Card from "../Card/Card";
import { JSX } from "react";
import { StyledDeclaration } from "./Cards.styles";

const Cards: React.FC<CardsProps> = ({ products }) => {
  const getElements = (): JSX.Element[] => {
    return products.map((p) => {
      return (
        <Card
          key={p.id}
          name={p.name}
          description={p.description}
          price={p.price}
          src={p.images[0]}
        />
      );
    });
  };

  return (
    <div className="cards-container">
      {products && products.length > 0 ? (
        getElements()
      ) : (
        <StyledDeclaration>
          Извините, данных товаров нет в наличии
        </StyledDeclaration>
      )}
    </div>
  );
};

export default Cards;
