import Cards from "../Cards/Cards";
import Search from "../Search/Search";
import { bikeProducts } from "../../api";
import { useState } from "react";
import { Filters, Product, Theme } from "@/types";
import { AppContainer } from "./App.styles";
import {
  AppState,
  CounterId,
  DecrementAction,
  IncrementAction,
  selectCounter,
  store,
  useAppSelector,
} from "@/store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [filters, setFilters] = useState<Filters>({
    type: "",
    brand: "",
    priceRange: { min: 0, max: Infinity },
    frameSize: "",
    inStock: false,
  });

  const filteredProducts: Product[] = bikeProducts.filter((product) => {
    const matchesType = filters.type ? product.type === filters.type : true;
    const matchesBrand = filters.brand ? product.brand === filters.brand : true;
    const matchesPrice =
      product.price >= filters.priceRange.min &&
      product.price <= filters.priceRange.max
        ? true
        : false;
    const matchesFrameSize = filters.frameSize
      ? product.specifications.frameSize.includes(filters.frameSize)
      : true;
    const matchesInStock = filters.inStock
      ? product.inStock === filters.inStock
      : true;

    return (
      matchesType &&
      matchesBrand &&
      matchesPrice &&
      matchesFrameSize &&
      matchesInStock
    );
  });

  return (
    <AppContainer $themeType={theme}>
      <Counter counterId="first" />
      <Counter counterId="second" />
      <Search
        filters={filters}
        setFilters={setFilters}
        setTheme={setTheme}
        theme={theme}
      />
      <Cards products={filteredProducts} />
    </AppContainer>
  );
}

export function Counter({ counterId }: { counterId: CounterId }) {
  const dispatch = useDispatch();
  const counterState = useAppSelector((state) =>
    selectCounter(state, counterId)
  );

  // const [, forceUpdate] = useReducer((x) => x + 1, 0);

  // const lastStateRef = useRef<ReturnType<typeof selectCounter>>();

  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     const currentState = selectCounter(store.getState(), counterId);
  //     const lastState = lastStateRef.current;
  //     if (currentState !== lastState) {
  //       forceUpdate();
  //     }
  //     lastStateRef.current = lastState;
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <>
      counter {counterState?.counter}
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            payload: { counterId },
          } satisfies IncrementAction)
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: { counterId },
          } satisfies DecrementAction)
        }
      >
        decrement
      </button>
    </>
  );
}

export default App;
