import { FaLocationDot } from "react-icons/fa6";
import "./Search.css"; // Import external CSS

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="search-container">
      <span className="location-icon">
        <FaLocationDot />
      </span>
      <input
        type="text"
        className="search-box"
        placeholder="Search Best Homemade food in your area"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
