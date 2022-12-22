import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  isSignedIn: false,
  favorites: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isSignedIn = true;
    },
    loginError: (state, action) => {
      state.error = action.payload;
    },
    register: (state, action) => {
      state.user = action.payload;
      state.isSignedIn = true;
    },
    registerError: (state, action) => {
      state.error = action.payload;
    },
    addToFavorites : (state, action) => {
      state.favorites.unshift(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites.splice(
        state.favorites.findIndex((item) => item.id === action.payload),
        1
      );
    },
    logout: (state) => {
      state.user = null;
      state.isSignedIn = false;
      state.favorites = [];
    },
  },
});

export const { register, login, loginError, registerError, addToFavorites, removeFromFavorites, logout } =
  userSlice.actions;

//Helper Functions
export const selectUser = (state) => state?.user?.user;

export default userSlice.reducer;
