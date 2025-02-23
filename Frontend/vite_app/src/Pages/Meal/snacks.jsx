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
    const [count,setCount]=useState(0);


    const increaseCount = () => setCount(count + 1);
const decreaseCount = () => setCount(count >= 1 ? count - 1 : 0);
  
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
            <div className="Quantity">
      <button  onClick={decreaseCount} className="sub" >−</button>

        <span >{count}</span>
        <button  onClick={increaseCount} className="add" >+</button>
            </div>
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
  const [searchQuery, setSearchQuery] = useState("");

  

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

 // Adding A option for finding the sancks by its name
 const FilteredHostels=meals.filter(
  (meal)=>meal.name.toLowerCase().includes(searchQuery.toLowerCase())
 );




  return (
    <main className="mainsnacks">
      <h1>Find The Best Snacks and Food in Your Area</h1>
    

    {/*Searchbar*/}
    <input
    type="text"
    placeholder="Find the best snacks in your area"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="search-bar"
    
    />

      <div className="snacks-container">
        {FilteredHostels.length > 0 ? (
          FilteredHostels.map((meal) => <MealCard key={meal.id} meal={meal} />)
        ) : (
          <p>Loading snacks...</p>
        )}
      </div>
    </main>
  );
};



export default Snacks;
