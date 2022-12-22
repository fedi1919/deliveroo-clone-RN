import { configureStore } from "@reduxjs/toolkit";

import basketReducer from "./features/basketSlice";
import restaurantSlice from "./features/restaurantSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantSlice,
    user: userSlice,
  },
});
