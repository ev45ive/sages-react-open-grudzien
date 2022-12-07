import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Immer library
      //   return {
      //     ...state, value: state.value + 1
      //   }
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { decrement, increment, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
