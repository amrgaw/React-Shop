import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  cartList: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state,{ payload: id }) => {
      state.cartList = state.cartList.map(e=>{
        e.id == id && e.count++;
        return e;
      })
    },
    decrement: (state,{ payload: id }) => {
      state.cartList = state.cartList.map(e=>{
        e.id == id && e.count--;
        return e;
      })
    },
    DelProduct: (state, { payload: id }) => {
      console.log(id);

      state.cartList = state.cartList.filter((e) => e.id != id);
      state.value = state.cartList.length;
    },
    AddToCart: (state, product) => {
      let isAdded = false;

      state.cartList.forEach((e) => {
        e.id === product.payload.id && (isAdded = true);
      });

      if (!isAdded) {
        state.cartList.push(product.payload);
        state.value = state.cartList.length;
      }
    },
  },
});

export const { increment, decrement, DelProduct, AddToCart } =
  counterSlice.actions;

export default counterSlice.reducer;
