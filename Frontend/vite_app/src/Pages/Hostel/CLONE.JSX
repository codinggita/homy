// import React, { useState, useEffect } from "react";
// import "./searchbar.css";

// const HostelList = () => {
//   const [allHostels, setAllHostels] = useState([]); // Store all hostels
//   const [displayedHostels, setDisplayedHostels] = useState([]); // Manage what is displayed
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchHostels();
//   }, []);

//   const fetchHostels = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/hostels");
//       const data = await response.json();

//       // Flatten hostels and add area information
//       const hostels = data.reduce((acc, area) => {
//         return [...acc, ...area.hostels.map(hostel => ({ ...hostel, area: area.area }))];
//       }, []);

//       setAllHostels(hostels); // Store all hostels
//       setDisplayedHostels(hostels.slice(-8).reverse()); // Show latest 8 by default
//     } catch (error) {
//       console.error("Error fetching hostels:", error);
//     }
//   };

//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       // Show latest 8 hostels when there's no search input
//       setDisplayedHostels(allHostels.slice(-8).reverse());
//     } else {
//       // Filter from all hostels when searching
//       const filtered = allHostels.filter(
//         (hostel) =>
//           hostel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           hostel.area.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setDisplayedHostels(filtered);
//     }
//   }, [searchQuery, allHostels]);

//   return (
//     <div className="container">
//       <h2 className="title">Find The Best Hostels and PG's in your area.</h2>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search by hostel name or area..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="search-bar"
//       />

//       <div className="hostel-grid">
//         {displayedHostels.length > 0 ? (
//           displayedHostels.map((hostel, index) => (
//             <div key={index} className="hostel-card">
//               <div>
//                 <img src={hostel.image} alt={hostel.name} className="hostel-image" />
//               </div>
//               <div>
//                 <h3>{hostel.name}</h3>
//                 <p>
//                   <strong>Location:</strong> {hostel.area}
//                 </p>
//                 {/* <p>
//                   <strong>Address:</strong> {hostel.address}
//                 </p> */}
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



//Filter Option
import React, { useState, useEffect } from "react";
import "./searchbar.css";

const HostelList = () => {
  const [allHostels, setAllHostels] = useState([]);
  const [displayedHostels, setDisplayedHostels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filters
  const [selectedLocality, setSelectedLocality] = useState("");
  const [selectedRent, setSelectedRent] = useState("");
  const [selectedOccupancy, setSelectedOccupancy] = useState("");

  // Flag to track when search is triggered
  const [searchTriggered, setSearchTriggered] = useState(false);

  useEffect(() => {
    fetchHostels();
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await fetch("http://localhost:3000/hostels");
      const data = await response.json();

      const hostels = data.reduce((acc, area) => {
        return [...acc, ...area.hostels.map(hostel => ({ ...hostel, area: area.area }))];
      }, []);

      setAllHostels(hostels);
      setDisplayedHostels(hostels.slice(-8).reverse());
    } catch (error) {
      console.error("Error fetching hostels:", error);
    }
  };

  // Function to filter hostels when search is triggered
  const handleSearch = () => {
    let filteredHostels = allHostels;

    if (searchQuery.trim()) {
      filteredHostels = filteredHostels.filter(
        (hostel) =>
          hostel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hostel.area.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedLocality) {
      filteredHostels = filteredHostels.filter((hostel) => hostel.area === selectedLocality);
    }

    if (selectedRent) {
      const [min, max] = selectedRent.split("-").map(Number);
      filteredHostels = filteredHostels.filter((hostel) => hostel.price >= min && hostel.price <= max);
    }

    if (selectedOccupancy) {
      filteredHostels = filteredHostels.filter((hostel) => hostel.occupancy === Number(selectedOccupancy));
    }

    setDisplayedHostels(filteredHostels);
    setSearchTriggered(true);
  };

  return (
    <div className="container">
      <h2 className="title">Find The Best Hostels and PG's in Your Area.</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by hostel name or area..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      {/* Filters Section */}
      <div className="filters">
        {/* Locality Filter */}
        <select value={selectedLocality} onChange={(e) => setSelectedLocality(e.target.value)} className="filter-select">
          <option value="">Select Locality</option>
          {[...new Set(allHostels.map((hostel) => hostel.area))].map((area, index) => (
            <option key={index} value={area}>
              {area}
            </option>
          ))}
        </select>

        {/* Rent Filter */}
        <select value={selectedRent} onChange={(e) => setSelectedRent(e.target.value)} className="filter-select">
          <option value="">Select Rent</option>
          <option value="3000-5000">₹4000 - ₹5000</option>
          <option value="5000-7000">₹5000 - ₹7000</option>
          <option value="7000-10000">₹7000 - ₹10000</option>
          <option value="10000-12000">₹10000 - ₹12000</option>
          <option value="12000-15000">₹12000 - ₹15000</option>
        </select>

        {/* Occupancy Filter (1 to 10) */}
        <select value={selectedOccupancy} onChange={(e) => setSelectedOccupancy(e.target.value)} className="filter-select">
          <option value="">Select Occupancy</option>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} People
            </option>
          ))}
        </select>

        {/* Search Button */}
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>

        {/* Reset Filters Button */}
        <button onClick={() => {
          setSelectedLocality("");
          setSelectedRent("");
          setSelectedOccupancy("");
          setSearchQuery("");
          setDisplayedHostels(allHostels.slice(-8).reverse());
          setSearchTriggered(false);
        }} className="reset-btn">
          Reset Filters
        </button>
      </div>

      {/* Hostels Grid */}
      <div className="hostel-grid">
        {searchTriggered && displayedHostels.length === 0 ? (
          <p className="no-results">No hostels found.</p>
        ) : (
          displayedHostels.map((hostel, index) => (
            <div key={index} className="hostel-card">
              <div>
                <img src={hostel.image} alt={hostel.name} className="hostel-image" />
              </div>
              <div>
                <h3>{hostel.name}</h3>
                <p><strong>Location:</strong> {hostel.area}</p>
                <p><strong>Price:</strong> ₹{hostel.price} per month</p>
                <p><strong>Ratings:</strong> ⭐ {hostel.rating}</p>
                <p><strong>Occupancy:</strong> {hostel.occupancy} people</p>
                <div className="buttons">
                  <button className="details-btn" onClick={() => alert(`Details for ${hostel.name}`)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HostelList;