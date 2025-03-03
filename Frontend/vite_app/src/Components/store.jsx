import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.jsx";  // Importing cart reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Registering the cart reducer
  },
});

export default store;
