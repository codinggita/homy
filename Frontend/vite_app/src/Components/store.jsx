import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.jsx";  // Importing cart reducer
import authReducer from "../authentication/authSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartReducer, // Registering the cart reducer
    auth: authReducer, // Registering the auth reducer
  },
});

export default store;
