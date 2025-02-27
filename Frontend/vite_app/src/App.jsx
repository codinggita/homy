import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import HostelList from "./Pages/Hostel/Hostelmain.jsx";
import Community from "./Pages/Community.jsx";
import Mealmain from "./Pages/Meal2/Mealmain.jsx";
import Login from "./Components/LogIn.jsx";
import ProductPage from './Pages/Subpages/Detail.jsx'; // Import Meal Detail Page

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hostel" element={<HostelList />} />
          <Route path="/community" element={<Community />} />
          <Route path="/meal" element={<Mealmain />} />
          <Route path="/meal/:mealName" element={<ProductPage  />} /> {/* Meal Detail Page */}
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
