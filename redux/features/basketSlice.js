import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // find the index of the removed item
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      //copy the basket
      let newBasket = [...state.items];
      //remove the item
      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      //replace the existing basket with the new basket
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

//Helper Functions
export const selectBasketItems = (state) => state?.basket?.items;

export const selectBasketItemsWithId = (state, id) =>
  state?.basket?.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) =>
  state?.basket?.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
