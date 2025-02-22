import React from "react";
import './mealmain.css'
import Snacks from './snacks.jsx'
const Meal=()=>{
    return(
        <>
    <main className="mealmain">
        <section className="title"> 
        <h1>Find The Best Home Made Food and Tiffin Service in your area.</h1>
        </section>
   
    <section className="mainimg">
    <img src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1740137495/Food_Front_page_k72nv7.png" alt="" />
    </section>

    <section className="snacks">
<Snacks/>
    </section>
    </main>
    

        </>
    )
};

export default Meal;
