import React from "react";
import "./Hostelmain.css"
import HostelSearch from "./Search.jsx";
import Faq from "./faqs.jsx";
import Footer from '../Home/Footer.jsx'
const HostelList=()=>{


    return(<>
    <main className="Hostelmain">
      <section className="mainimg">
        <img src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1739765634/Homy/bzjquwbqnfe3tvva4q3v.png" alt="" />
      </section>
       <section className="HostelSearch">
       <HostelSearch/>

       </section>
       <section className="Faqsection">
<Faq/>
       </section>
        <section className="Footer section">
        <Footer/>

        </section>
    </main>
   
    </>)
};
export default HostelList;