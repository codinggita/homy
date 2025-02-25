import React from "react";
import './mealmain.css'
import Snacks from './Snacks.jsx'
import Tiffin from "./Tiffin.jsx";
const Mealmain=()=>{
    return(<>
    <main className="mealmain">
     <section className="Snacks">
      <Snacks/>
     </section>
     <section>
    <Tiffin/>
     </section>
    </main>
    
    </>)
};
export default Mealmain;

