import { CardsProps } from "@/types";
import Card from "../Card/Card";
import { StyledCards, StyledDeclaration } from "./Cards.styles";

const Cards: React.FC<CardsProps> = ({ products }) => {
  return (
    <StyledCards>
      {products.length > 0 ? (
        products.map((p) => {
          return (
            <Card
              key={p.id}
              id={p.id}
              name={p.name}
              description={p.description}
              price={p.price}
              src={p.images[0]}
              rating={p.rating}
              isNew={p.isNew}
            />
          );
        })
      ) : (
        <StyledDeclaration>
          Извините, данных товаров нет в наличии
        </StyledDeclaration>
      )}
    </StyledCards>
  );
};

export default Cards;
