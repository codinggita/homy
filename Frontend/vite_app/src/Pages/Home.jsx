// // import React from "react";
// // import img from '../assets/Frame 2.png'
// // import './Home.css'

// // const Home=()=>{
// //     return(<>
// // <main>
// // <img src={img} alt="" />
// // <h1>hello world</h1>





// // </main>
   
    
// //     </>)
// // }
// // export default Home;


// import React from "react";
// import img from '../assets/Frame 2.png';
// import './Home.css';

// const Card = ({ image, title }) => {
//   return (
//     <div className="card">
//       <img src={image} alt={title} className="card-image" />
//       <h3 className="card-title">{title}</h3>
//       <button className="card-button">View More</button>
//     </div>
//   );
// };

// const FeatureItem = ({ number, title, description, image }) => {
//   return (
//     <div className="feature-item">
//       <div className="feature-content">
//         <span className="feature-number">{number}</span>
//         <h3 className="feature-title">{title}</h3>
//         <p className="feature-description">{description}</p>
//         <button className="feature-button">View More</button>
//       </div>
//       <img src={image} alt={title} className="feature-image" />
//     </div>
//   );
// };

// const Home = () => {
//   const hostels = [
//     { image: "https://via.placeholder.com/150", title: "PG And Hostel 1" },
//     { image: "https://via.placeholder.com/150", title: "PG And Hostel 2" },
//     { image: "https://via.placeholder.com/150", title: "PG And Hostel 3" },
//   ];

//   const foods = [
//     { image: "https://via.placeholder.com/150", title: "Home Made Food 1" },
//     { image: "https://via.placeholder.com/150", title: "Home Made Food 2" },
//     { image: "https://via.placeholder.com/150", title: "Home Made Food 3" },
//   ];

//   const features = [
//     {
//       number: "1",
//       title: "Explore a unified platform",
//       description: "Offering essential services tailored for students and employees effortlessly.",
//       image: "https://via.placeholder.com/150"
//     },
//     {
//       number: "2",
//       title: "Nutritious and Home Made Meals",
//       description: "Meal plans designed to support the busy lifestyles of students and employees.",
//       image: "https://via.placeholder.com/150"
//     },
//     {
//       number: "3",
//       title: "Join a vibrant community",
//       description: "Where connections, knowledge sharing, and collaboration come together seamlessly.",
//       image: "https://via.placeholder.com/150"
//     },
//     {
//       number: "4",
//       title: "Convenient Transportation",
//       description: "Dependable options crafted to simplify daily commutes for everyone.",
//       image: "https://via.placeholder.com/150"
//     }
//   ];

//   return (
//     <>
//       <main className="main-container">
//         <img src={img} alt="" className="main-image" />
//         <h1 className="main-title">Hello World</h1>
        
//         <div className="box-container">
//           <div className="content-box">
//             <h2 className="section-title">Find The Best Hostel and PG in Your Area</h2>
//             <div className="card-container">
//               {hostels.map((hostel, index) => (
//                 <Card key={index} image={hostel.image} title={hostel.title} />
//               ))}
//             </div>
//           </div>

//           <div className="content-box">
//             <h2 className="section-title">Find The Best Home Made Food in Your Area</h2>
//             <div className="card-container">
//               {foods.map((food, index) => (
//                 <Card key={index} image={food.image} title={food.title} />
//               ))}
//             </div>
//           </div>
//         </div>

//         <section className="features-section">
//           <h2 className="features-title">Our Featured Services</h2>
//           <div className="features-container">
//             {features.map((feature, index) => (
//               <FeatureItem
//                 key={index}
//                 number={feature.number}
//                 title={feature.title}
//                 description={feature.description}
//                 image={feature.image}
//               />
//             ))}
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Home;


// import React from "react";
// import img from '../assets/Frame 2.png';
// import './Home.css';
// import FeatureSection from './feature.jsx'


// const Card = ({ image, title }) => {
//   return (
//     <div className="card">
//       <img src={image} alt={title} className="card-image" />
//       <h3 className="card-title">{title}</h3>
//       <button className="card-button">View More</button>
//     </div>
//   );
// };



// const Home = () => {
//   const hostels = [
//     { image: "https://via.placeholder.com/150", title: "PG And Hostel 1" },
//     { image: "https://via.placeholder.com/150", title: "PG And Hostel 2" },
//     { image: "https://via.placeholder.com/150", title: "PG And Hostel 3" },
//   ];

//   const foods = [
//     { image: "https://via.placeholder.com/150", title: "Home Made Food 1" },
//     { image: "https://via.placeholder.com/150", title: "Home Made Food 2" },
//     { image: "https://via.placeholder.com/150", title: "Home Made Food 3" },
//   ];

//   const features = [
//     {
//       icon: "🏠",
//       title: "Comfortable Accommodation",
//       description: "Find the best PGs and hostels with great amenities."
//     },
//     {
//       icon: "🍽️",
//       title: "Healthy Home Cooked Meals",
//       description: "Nutritious and affordable meal plans for students & professionals."
//     },
//     {
//       icon: "🚌",
//       title: "Easy Transportation",
//       description: "Reliable transport options to make your daily commute hassle-free."
//     },
//     {
//       icon: "📚",
//       title: "Study & Work Spaces",
//       description: "Quiet and comfortable spaces designed for productivity."
//     }
//   ];

//   return (
//     <>
//       <main className="main-container">
//         <img src={img} alt="" className="main-image" />
//         <h1 className="main-title">Hello World</h1>
        
//         <div className="box-container">
//           <div className="content-box">
//             <h2 className="section-title">Find The Best Hostel and PG in Your Area</h2>
//             <div className="card-container">
//               {hostels.map((hostel, index) => (
//                 <Card key={index} image={hostel.image} title={hostel.title} />
//               ))}
//             </div>
//           </div>

//           <div className="content-box">
//             <h2 className="section-title">Find The Best Home Made Food in Your Area</h2>
//             <div className="card-container">
//               {foods.map((food, index) => (
//                 <Card key={index} image={food.image} title={food.title} />
//               ))}
//             </div>
//           </div>
//         </div>

//         <section className="features-section">
//          <FeatureSection/>
       
//         </section>
//       </main>
//     </>
//   );
// };

// export default Home;



import React from "react";
import img from "../assets/Frame 2.png";
import "./Home.css";
import FeatureSection from "./Feature.jsx";
import AccommodationAndFood from "./AccommodationAndFood"; // Import the new section
// import AboutUs from "./About.jsx"

const Home = () => {
  return (
    <>
      <main className="main-container">
        <img src={img} alt="" className="main-image" />
        

        {/* Unified Section for Hostel & Food */}
        <AccommodationAndFood />

        <section className="features-section">
          <FeatureSection />
        </section>

        <section className="AboutUs">
       {/* <AboutUs/> */}
        </section>
      </main>
    </>
  );
};

export default Home;
