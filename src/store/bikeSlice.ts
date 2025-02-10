import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bikeProducts } from "../api";
import { promotions } from "../api";
import { Product, Filters, Promotion } from "@/types";

interface BikeState {
  theme: "light" | "dark";
  bikes: Product[];
  promotions: Promotion[];
  filters: Filters;
  cart: { id: string; name: string; price: number; src: string }[];
  count: { [key: string]: number };
  totalPrice: number;
  newPrice: number;
}

const initialState: BikeState = {
  theme: "light",
  bikes: bikeProducts,
  promotions: promotions,
  filters: {
    type: "",
    brand: "",
    priceRange: { min: 0, max: Infinity },
    frameSize: "",
    inStock: false,
  },
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  count: JSON.parse(localStorage.getItem("count") || "{}"),
  totalPrice: 0,
  newPrice: JSON.parse(localStorage.getItem("newPrice") || "0"),
};

const bikeSlice = createSlice({
  name: "bikes",
  initialState,
  reducers: {
    toggleTheme(state) {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
    setFilter<K extends keyof Filters>(
      state: BikeState,
      action: PayloadAction<{ key: K; value: Filters[K] }>
    ) {
      state.filters[action.payload.key] = action.payload.value;
    },
    setCart(
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        price: number;
        src: string;
      }>
    ) {
      if (!state.cart.some((item) => item.id === action.payload.id)) {
        state.cart.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          src: action.payload.src,
        });
        if (state.count[action.payload.id] === undefined) {
          state.count[action.payload.id] = 1;
        }
      } else {
        state.cart = state.cart.filter((elem) => elem.id != action.payload.id);
      }
    },
    removeCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      delete state.count[action.payload];
    },
    // setCount(state, action: PayloadAction<{ id: string; delta: number }>) {
    //   const { id, delta } = action.payload;
    //   if (state.count[id] === undefined) {
    //     state.count[id] = 1;
    //   }
    //   state.count[id] = value;
    //   // state.count[id] = Math.max(0, (state.count[id] || 0) + delta);
    // },
    setCount(state, action: PayloadAction<{ id: string; value?: number; delta?: number }>) {
      const { id, value, delta } = action.payload;
    
      if (value !== undefined) {
        state.count[id] = Math.max(0, value); // Устанавливаем конкретное число
      } else if (delta !== undefined) {
        state.count[id] = Math.max(0, (state.count[id] || 0) + delta); // Изменяем текущее значение
      }
    },
    // setCount(state, action: PayloadAction<{ id: string; value: number }>) {
    //   const { id, value } = action.payload;
    //   state.count[id] = Math.max(0, value); // Просто устанавливаем значение
    // },
    setFullPrice(state) {
      let res = state.cart.reduce((sum, product) => {
        if (state.count[product.id] >= 0) {
          return sum + state.count[product.id] * product.price;
        } else {
          return sum + product.price;
        }
      }, 0);

      state.totalPrice = res;
    },
    setPriceWithPromo(state, action) {
      const promo = state.promotions.find((elem) => {
        return elem.code === action.payload.toUpperCase();
      });
      promo && state.totalPrice >= promo?.minAmount
        ? (state.newPrice =
            state.totalPrice - (state.totalPrice * promo.discount) / 100)
        : (state.newPrice = state.totalPrice);
      localStorage.setItem("newPrice", state.newPrice.toString());
    },
  },
});

export const {
  toggleTheme,
  setFilter,
  setCart,
  setCount,
  setFullPrice,
  removeCart,

  setPriceWithPromo,
} = bikeSlice.actions;

export default bikeSlice.reducer;

export type { BikeState };
