import { bikeProducts as products } from "../api";
import Card from "./Card";

const Cards = () => {
  const getElements = () => {
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

  return <div className="cards-container">{getElements()}</div>;
};

export default Cards;
