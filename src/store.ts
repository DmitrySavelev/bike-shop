import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";

type CounterState = {
  counter: number;
};

export type CounterId = string;

type State = {
  counters: Record<CounterId, CounterState | undefined>;
};

export type IncrementAction = {
  type: "increment";
  payload: {
    counterId: CounterId;
  };
};

export type DecrementAction = {
  type: "decrement";
  payload: {
    counterId: CounterId;
  };
};
type Action = IncrementAction | DecrementAction;

const initialCounterState: CounterState = { counter: 0 };

const initialState: State = {
  counters: {},
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "increment": {
      const { counterId } = action.payload;

      // Находим или создаем текущий счетчик
      const currentCounter = state.counters[counterId] ?? initialCounterState;

      // Возвращаем обновленное состояние
      return {
        ...state,
        counters: {
          ...state.counters,
          [counterId]: {
            ...currentCounter,
            counter: currentCounter.counter + 1, // Увеличиваем значение
          },
        },
      };
    }

    case "decrement": {
      const { counterId } = action.payload;

      // Находим или создаем текущий счетчик
      const currentCounter = state.counters[counterId] ?? initialCounterState;

      // Возвращаем обновленное состояние
      return {
        ...state,
        counters: {
          ...state.counters,
          [counterId]: {
            ...currentCounter,
            counter: currentCounter.counter - 1, // Уменьшаем значение
          },
        },
      };
    }

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});

export const selectCounter = (state: AppState, counterId: CounterId) =>
  state.counters[counterId];

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = () => {
  return useStore<typeof store>();
};
