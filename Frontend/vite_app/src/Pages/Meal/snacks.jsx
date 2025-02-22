// import React, { useEffect, useState } from "react";
// import './snacks.css'
// import { useNavigate } from "react-router-dom";


// const Snacks = () => {

//     const [meals,setmeals]=useState([])

// useEffect(()=>{
//     fetchmeals();
// },[]);

// const fetchmeals=async()=>{
//     try{
//         const response=await fetch("http://localhost:5000/meals")
//         const data=await response.json();
         
//         setmeals(data);
//     } catch(error){
//         console.log("Error for fetching the data:",error);
//     }
// };

//   const navigate = useNavigate();

// const mealcard=({meal})=>{
//     return(

//             <div className="mealcard">
//              <img src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1740137496/Thepla-231x300_edl9q5.png" alt="" className="snackimg"/>
//              <div className="maindesc">
//                 <h1>Methi Khakhara</h1>
//                 <div className="Pricing">
//                 <span>₹50</span>
//                  <span>Count</span>
//                 </div>

//                 <div className="Buying">
                
//                         <button onClick={()=>navigate('/')}>
//                             Buy Now
//                         </button>
//                         <button onClick={()=>navigate('/')}>Add To Cart</button>
//                 </div>

//              </div>

//           </div>

//     )
// };

//     return(
//         <>
//         <main className="mainsnacks">
//         <h1>Find The Best Snacks and Food in your area.</h1>
//         {meals.map((meal)=>(
//             <mealcard key={meal.id} meal={meal}/>
//         ))}
//         </main>
//         </>
//     )
// };
// export default Snacks;


import React, { useEffect, useState } from "react";
import "./snacks.css";
import { useNavigate } from "react-router-dom";

const MealCard = ({ meal }) => {
    const navigate = useNavigate();
  
    return (
      <div className="mealcard">
        <img
          src={meal.image || "https://res.cloudinary.com/doqzxuxb1/image/upload/v1740137496/Thepla-231x300_edl9q5.png"} 
          alt={meal.name}
          className="snackimg"
        />
        <div className="maindesc">
          <h1>{meal.name}</h1>
          <div className="Pricing">
            <span>₹{meal.price}</span>
            <span>Count: {meal.count || 1}</span>
          </div>
          <div className="Buying">
            <button onClick={() => navigate("/")}>Buy Now</button>
            <button onClick={() => navigate("/")}>Add To Cart</button>
          </div>
        </div>
      </div>
    );
  };


const Snacks = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await fetch("http://localhost:5000/meals");
      const data = await response.json();
      setMeals(data); // Updating the meals state
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  };

  return (
    <main className="mainsnacks">
      <h1>Find The Best Snacks and Food in Your Area</h1>
      <div className="snacks-container">
        {meals.length > 0 ? (
          meals.map((meal) => <MealCard key={meal.id} meal={meal} />)
        ) : (
          <p>Loading snacks...</p>
        )}
      </div>
    </main>
  );
};



export default Snacks;
