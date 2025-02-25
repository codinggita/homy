import React from "react";
import './mealmain.css'
import Snacks from './snacks.jsx'
import Tiffin from "./Tiffin.jsx";
const Meal=()=>{
    return(
        <>
    <main className="mealmain">

    <section className="snacks">
    <Snacks/>
    </section> 

    {/* <section className="Tiffin">
      <Tiffin/>
    </section> */}

    </main>
    

        </>
    )
};

export default Meal;
