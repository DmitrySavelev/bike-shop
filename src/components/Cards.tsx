import Card from "./Card";
import styled from "styled-components";

const StyledDeclaration = styled.div`
  text-align: center;
  margin-top: 150px;
  font-size: 25px;
`;

const Cards = ({ products }: any) => {
  const getElements = () => {
    return products.map((p: any) => {
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
