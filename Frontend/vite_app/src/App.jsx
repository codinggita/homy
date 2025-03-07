import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import HostelList from "./Pages/Hostel/Hostelmain.jsx";
import Community from "./Pages/Community.jsx";
import Mealmain from "./Pages/Meal2/Mealmain.jsx";
import Login from "./Components/LogIn.jsx";
import MealDetails from './Pages/Subpages/Detail.jsx'; // Import Meal Detail Page

import store from "./Components/store.jsx";
import Cart from "./Components/cart.jsx"

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hostel" element={<HostelList />} />
          <Route path="/community" element={<Community />} />
          <Route path="/meals" element={<Mealmain />} />
          <Route path="/meals/:id" element={<MealDetails />} /> {/* Meal Detail Page */}
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} /> {/* Add Cart Route */}
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;