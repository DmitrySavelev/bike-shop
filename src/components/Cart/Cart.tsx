import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  StyledCart,
  StyledArticle,
  StyledBack,
  StyledBackImage,
  StyledAbsentProducts,
} from "./Cart.styles";

import turnBack from "../../assets/turnBack.png";
import { RootState } from "@/store/store";
import CartSideBar from "../CartSideBar/CartSideBar";
import CartContent from "../CartContent/CartContent";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.bikes.cart);

  return (
    <StyledCart>
      <StyledBack onClick={() => navigate("/")}>
        <StyledBackImage src={turnBack} />
      </StyledBack>
      <StyledArticle>Корзина</StyledArticle>
      <CartSideBar />
      {cart.length > 0 ? (
        cart.map((product: any) => (
          <CartContent
            key={product.id}
            src={product.src}
            name={product.name}
            id={product.id}
            price={product.price}
          />
        ))
      ) : (
        <StyledAbsentProducts>В корзине пока ничего нет</StyledAbsentProducts>
      )}
    </StyledCart>
  );
};

export default Cart;

// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   StyledCart,
//   StyledArticle,
//   StyledPrice,
//   StyledName,
//   StyledButtons,
//   StyledButton,
//   StyledImage,
//   StyledMiddleInput,
//   StyledProduct,
//   StyledBack,
//   StyledBackImage,
//   StyledRemove,
//   StyledAbsentProducts,
// } from "./Cart.styles";

// import turnBack from "../../assets/turnBack.png";
// import remove from "../../assets/remove.png";
// import { RootState } from "@/store/store";
// import CartSideBar from "../CartSideBar/CartSideBar";
// import { removeCart, setCount } from "@/store/bikeSlice";

// const Cart = () => {
//   const navigate = useNavigate();
//   const cart = useSelector((state: RootState) => state.bikes.cart);
//   const dispatch = useDispatch();
//   const count = useSelector((state: RootState) => state.bikes.count);

//   const handleCountChange = (id: string, delta: number) => {
//     dispatch(setCount({ id, delta }));
//   };

//   return (
//     <StyledCart>
//       <StyledBack onClick={() => navigate("/")}>
//         <StyledBackImage src={turnBack} />
//       </StyledBack>
//       <StyledArticle>Корзина</StyledArticle>
//       <CartSideBar />
//       {cart.length > 0 ? (
//         cart.map((product: any) => (
//           <StyledProduct key={product.id}>
//             <StyledImage src={product.src} />
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
//           </StyledProduct>
//         ))
//       ) : (
//         <StyledAbsentProducts>В корзине пока ничего нет</StyledAbsentProducts>
//       )}
//     </StyledCart>
//   );
// };

// export default Cart;
