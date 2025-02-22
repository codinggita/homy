import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import HostelList from './Pages/Hostel/Hostelmain.jsx'
import Community from './Pages/Community.jsx'
import Meal from './Pages/Meal/Meal.jsx'
import Login from './Components/LogIn.jsx'


// import Navbar from "./Components/Navbar.jsx";

const App = () => {
  return (


    <div>
    <BrowserRouter>
    {/* <Navbar/> */}
    <div className="content"></div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hostel" element={<HostelList />} >
          
          </Route>
          <Route path="/community" element={<Community />} />
          <Route path='/meal' element={<Meal />} />
          <Route path="/login" element={<Login/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
    </div>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;