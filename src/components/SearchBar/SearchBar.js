import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => (
  <input
    {...props}
    className="SearchBar"
    type="text"
    placeholder="Enter movie here.."
  />
);

export default SearchBar;
