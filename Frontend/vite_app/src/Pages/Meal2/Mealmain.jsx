import React from "react";
import './mealmain.css'
import Snacks from './Snacks.jsx'
import Tiffin from "./Tiffin.jsx";
import Footer from "./Footer.jsx";
const Mealmain=()=>{
    return(<>
    <main className="mealmain">
     <section className="Snacks">
      <Snacks/>
     </section>
     <section>
    <Tiffin/>
     </section>
     <section>
     <Footer/> 
     </section>
    </main>
    
    </>)
};
export default Mealmain;

