// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//         console.log("📦 Redux Action Received:", action.payload); 
      
//         const { id, weight } = action.payload;
//         if (!id) {
//           console.error("🚨 ERROR: Missing Meal ID!");
//           return;
//         }
      
//         const existingItem = state.items.find((item) => item.id === id && item.weight === weight);
      
//         if (existingItem) {
//           console.log("🔄 Updating Quantity:", existingItem.quantity + action.payload.quantity);
//           existingItem.quantity += action.payload.quantity;
//         } else {
//           console.log("🆕 Adding New Item:", action.payload);
//           // ✅ Spread items into a new array (Fix for Immer Proxy issue)
//           state.items = [...state.items, action.payload]; 
//         }
      
//         console.log("🛒 Updated Cart:", JSON.parse(JSON.stringify(state.items))); // ✅ Debugging Fix
//       },
      
//     removeFromCart: (state, action) => {
//       // Fix: Ensure removal is based on both `id` and `weight`
//       state.items = state.items.filter(
//         (item) => !(item.id === action.payload.id && item.weight === action.payload.weight)
//       );
//     },
//     updateQuantity: (state, action) => {
//       const { id, weight, quantity } = action.payload;
//       const item = state.items.find((item) => item.id === id && item.weight === weight);
//       if (item) {
//         item.quantity = quantity;
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage initially
const loadCartFromStorage = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

// Save cart to localStorage
const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(), // Load cart on initial state
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("📦 Redux Action Received:", action.payload);
      const { id, weight } = action.payload;
      
      if (!id) {
        console.error("🚨 ERROR: Missing Meal ID!");
        return;
      }
      
      const existingItem = state.items.find((item) => item.id === id && item.weight === weight);
      
      if (existingItem) {
        console.log("🔄 Updating Quantity:", existingItem.quantity + action.payload.quantity);
        existingItem.quantity += action.payload.quantity;
      } else {
        console.log("🆕 Adding New Item:", action.payload);
        state.items.push(action.payload);
      }
      
      saveCartToStorage(state.items); // ✅ Save updated cart to localStorage
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => !(item.id === action.payload.id && item.weight === action.payload.weight)
      );

      saveCartToStorage(state.items); // ✅ Save updated cart to localStorage
    },

    updateQuantity: (state, action) => {
      const { id, weight, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id && item.weight === weight);
      if (item) {
        item.quantity = quantity;
      }

      saveCartToStorage(state.items); // ✅ Save updated cart to localStorage
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
