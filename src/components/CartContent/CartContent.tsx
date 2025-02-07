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
import { RootState } from "@/store/store";
import { removeCart, setCount } from "@/store/bikeSlice";
import { CartContentProps } from "@/types";

const CartContent: React.FC<CartContentProps> = ({ src, name, id, price }) => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.bikes.count);

  const handleCountChange = (id: string, delta: number) => {
    dispatch(setCount({ id, delta }));
  };

  return (
    <StyledProduct>
      <StyledImage src={src} />
      <div>
        <StyledName>{name}</StyledName>
        <StyledButtons>
          <StyledButton onClick={() => handleCountChange(id, -1)}>
            -
          </StyledButton>
          <StyledMiddleInput
            type="number"
            onChange={(e) => {
              const newValue: any =
                e.target.value === ""
                  ? ""
                  : Math.max(0, Number(e.target.value));
              dispatch(
                setCount({
                  id: id,
                  delta: newValue - (count[id] || 1),
                })
              );
            }}
            value={count[id] === undefined ? 1 : count[id]}
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

//  <StyledImage src={product.src} />
//             <div>
//               <StyledName>{product.name}</StyledName>
//               <StyledButtons>
//                 <StyledButton onClick={() => handleCountChange(product.id, -1)}>
//                   -
//                 </StyledButton>
//                 <StyledMiddleInput
//                   type="number"
//                   onChange={(e) => {
//                     const newValue: any =
//                       e.target.value === ""
//                         ? ""
//                         : Math.max(0, Number(e.target.value));
//                     dispatch(
//                       setCount({
//                         id: product.id,
//                         delta: newValue - (count[product.id] || 1),
//                       })
//                     );
//                   }}
//                   value={
//                     count[product.id] === undefined ? 1 : count[product.id]
//                   }
//                 />
//                 <StyledButton onClick={() => handleCountChange(product.id, +1)}>
//                   +
//                 </StyledButton>
//               </StyledButtons>
//             </div>

//             <StyledPrice>{product.price.toLocaleString()} ₽</StyledPrice>
//             <StyledRemove
//               src={remove}
//               onClick={() => dispatch(removeCart(product.id))}
//             />
