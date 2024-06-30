import React from "react";
import searchIcon from "/assets/icon-search.svg";
function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="bg-darkBlue py-8">
      <div className="max-w-container px-6 ">
        <div className="relative ">
          <img
            src={searchIcon}
            alt="searchIcon"
            className="absolute w-6 h-6 object-fit "
          />
          <input
            type="text"
            className="bg-darkBlue w-[80%] ml-10 focus:outline-none	
            placeholder:font-light md:text-2xl"
            placeholder="Search for movies or TV serires"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
