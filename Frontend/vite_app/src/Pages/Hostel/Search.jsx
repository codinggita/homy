// // import React, { useState, useEffect } from "react";
// // import "./searchbar.css";

// // const HostelList = () => {
// //   const [hostels, setHostels] = useState([]);

// //   useEffect(() => {
// //     fetchHostels(); // Fetch all hostels when the page loads
// //   }, []);

// //   const fetchHostels = async () => {
// //     try {
// //       const response = await fetch("http://localhost:3000/hostels"); // Ensure this fetches the schema data
// //       const data = await response.json();

// //       // Flatten the hostels array from different areas
// //       const allHostels = data.reduce((acc, area) => {
// //         return [...acc, ...area.hostels]; // Flatten the hostels from all areas
// //       }, []);

// //       setHostels(allHostels); // Set the flattened list of hostels
// //     } catch (error) {
// //       console.error("Error fetching hostels:", error);
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <h2 className="title">Best Hostels</h2>
// //       <div className="hostel-grid">
// //         {hostels.length > 0 ? (
// //           hostels.map((hostel, index) => (
// //             <div key={index} className="hostel-card">
// //               <div>
// //               <img
// //                 src={hostel.image}
// //                 alt={hostel.name}
// //                 className="hostel-image"
// //               />
// //               </div>
// // <div>
// // <h3>{hostel.name}</h3>
// //               <p>
// //                 <strong>Location:</strong> {hostel.area || "Unknown Area"}
// //               </p>
// //               <p>
// //                 <strong>Price:</strong> ₹{hostel.price} per month
// //               </p>
// //               <p>
// //                 <strong>Ratings:</strong> ⭐ {hostel.rating}
// //               </p>
// //               <p>
// //                 <strong>Occupancy:</strong> {hostel.occupancy} people
// //               </p>
// //               <div className="buttons">
// //                 <a href={hostel.visitUrl} className="visit-btn">
// //                   Visit
// //                 </a>
// //                 <a href={hostel.viewMoreUrl} className="view-more-btn">
// //                   View More
// //                 </a>
// //               </div>
// // </div>

// //             </div>
// //           ))
// //         ) : (
// //           <p className="no-results">No hostels available.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HostelList;


// import React, { useState, useEffect } from "react";
// import "./searchbar.css";

// const HostelList = () => {
//   const [hostels, setHostels] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchHostels();
//   }, []);

//   const fetchHostels = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/hostels");
//       const data = await response.json();

//       const allHostels = data.reduce((acc, area) => {
//         return [...acc, ...area.hostels];
//       }, []);

//       setHostels(allHostels);
//     } catch (error) {
//       console.error("Error fetching hostels:", error);
//     }
//   };

//   // Filter hostels based on search query (by name or area)
//   const filteredHostels = hostels.filter(
//     (hostel) =>
//       hostel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (hostel.area && hostel.area.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   return (
//     <div className="container">
//       <h2 className="title">Best Hostels</h2>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search by hostel name or area..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="search-bar"
//       />

//       <div className="hostel-grid">
//         {filteredHostels.length > 0 ? (
//           filteredHostels.map((hostel, index) => (
//             <div key={index} className="hostel-card">
//               <div>
//                 <img src={hostel.image} alt={hostel.name} className="hostel-image" />
//               </div>
//               <div>
//                 <h3>{hostel.name}</h3>
//                 <p>
//                   <strong>Location:</strong> {hostel.area || "Unknown Area"}{console.log(hostel.area)}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> ₹{hostel.price} per month
//                 </p>
//                 <p>
//                   <strong>Ratings:</strong> ⭐ {hostel.rating}
//                 </p>
//                 <p>
//                   <strong>Occupancy:</strong> {hostel.occupancy} people
//                 </p>
//                 <div className="buttons">
//                   <a href={hostel.visitUrl} className="visit-btn">
//                     Visit
//                   </a>
//                   <a href={hostel.viewMoreUrl} className="view-more-btn">
//                     View More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No hostels found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HostelList;


import React, { useState, useEffect } from "react";
import "./searchbar.css";

const HostelList = () => {
  const [allHostels, setAllHostels] = useState([]); // Store all hostels
  const [displayedHostels, setDisplayedHostels] = useState([]); // Manage what is displayed
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchHostels();
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await fetch("http://localhost:3000/hostels");
      const data = await response.json();

      // Flatten hostels and add area information
      const hostels = data.reduce((acc, area) => {
        return [...acc, ...area.hostels.map(hostel => ({ ...hostel, area: area.area }))];
      }, []);

      setAllHostels(hostels); // Store all hostels
      setDisplayedHostels(hostels.slice(-8).reverse()); // Show latest 8 by default
    } catch (error) {
      console.error("Error fetching hostels:", error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      // Show latest 8 hostels when there's no search input
      setDisplayedHostels(allHostels.slice(-8).reverse());
    } else {
      // Filter from all hostels when searching
      const filtered = allHostels.filter(
        (hostel) =>
          hostel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hostel.area.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setDisplayedHostels(filtered);
    }
  }, [searchQuery, allHostels]);

  return (
    <div className="container">
      <h2 className="title">Find The Best Hostels and PG's in your area.</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by hostel name or area..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      <div className="hostel-grid">
        {displayedHostels.length > 0 ? (
          displayedHostels.map((hostel, index) => (
            <div key={index} className="hostel-card">
              <div>
                <img src={hostel.image} alt={hostel.name} className="hostel-image" />
              </div>
              <div>
                <h3>{hostel.name}</h3>
                <p>
                  <strong>Location:</strong> {hostel.area}
                </p>
                {/* <p>
                  <strong>Address:</strong> {hostel.address}
                </p> */}
                <p>
                  <strong>Price:</strong> ₹{hostel.price} per month
                </p>
                <p>
                  <strong>Ratings:</strong> ⭐ {hostel.rating}
                </p>
                <p>
                  <strong>Occupancy:</strong> {hostel.occupancy} people
                </p>
                <div className="buttons">
                  <a href={hostel.viewMoreUrl} className="view-more-btn">
                    View More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No hostels found.</p>
        )}
      </div>
    </div>
  );
};

export default HostelList;



