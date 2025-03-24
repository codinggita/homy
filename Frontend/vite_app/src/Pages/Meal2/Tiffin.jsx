import {React} from "react";
import {useNavigate } from "react-router-dom";
import './Tiffin.css'
import Menu from "./Menu";


const Tiffin =()=>{
const navigate=useNavigate();
const handelclick=()=>{
  navigate("/tiffin");
};

    const MealCard = ({ image, name, type, reviews, details, price,mreview }) => {



        return (
          <div className="meal-card">
            <img src={image} alt={name} className="meal-image" />
            <div className="meal-info">
              <h3>{name}</h3>
              <span className={`meal-type ${type.toLowerCase()}`}>{type}</span>
              <p className="reviews"> {mreview}⭐ ({reviews} reviews) </p>
              <p className="details">{details}</p>
              <p className="price">₹{price}/meal</p>
              <button className="subscribe-btn" onClick={handelclick}>Subscribe Now</button>
            </div>
          </div>
        );
      };


      const meals = [
        {
          image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1740505824/10787b1f-b07a-4b05-8519-b07d030d719f_4be790f6-c9d7-4ae9-bd51-0c2ccff01cef_ynpm0h.png",
          name: "Veg Thali",
          type: "Veg",
          reviews: "128",
          details: "4 Rotis, Dal, Rice, 2 Sabzi, Salad, Papad",
          price: "120",
           mreview:"4.4",
          path:'/tiffin' 

        },
        {
          image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1740505768/img_qm9zkf.png",
          name: "Punjabi Thali",
          type: "Veg",
          reviews: "156",
          details: "3 Rotis, Chicken/Mutton, Dal, Rice, Salad",
          price: "180",
           mreview:"4.3"
        },
        {
          image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1740505769/img-2_s47qfw.png",
          name: "South Indian",
          type: "Veg",
          reviews: "203",
          details: "Idli/Dosa, Sambar, Chutney, Coffee",
          price: "150",
          mreview:"4.5"
        },
        {
            image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1740505768/img-1_fp5abi.png",
            name: "Diet Special",
            type: "Veg",
            reviews: "203",
            details: "Healthy and nutritious meal for fitness enthusiast",
            price: "150",
             mreview:"4.9"
          }
      ];
    return(<>
    <main className="tiffinmain">
     <h1>Find the best tiffin service in your area.</h1>
     <div className="bannerimg" >
            <img src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1740400809/Cloudinary%20images/mgmqqs6gr61wuubej3te.png" alt=""  className="img"/>
            <button className="button">Buy 3 Day Free trial</button>
            <button className="button2">Buy Meal Subscription</button>
        </div>
        <div className="menu">
      <h1>Daily Tiffin Service</h1>
      <div className="tifincontainer">
        {meals.map((meal, index) => (
          <MealCard key={index} {...meal} />
        ))}
      </div>
    </div>
     <Menu/>


    </main>
      
    
    
    </>)
};
export default Tiffin;