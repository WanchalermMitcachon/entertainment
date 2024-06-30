import React, { useEffect, useState } from "react";
import Trending from "./Trending";
import All from "./All";
import { useSelector } from "react-redux";
import { selectFilteredData } from "../../../redux/movieSlice";

function index({ currentNav, setCurrentNav, searchQuery }) {
  const data = useSelector((state) => state.movies.data);

  const filteredData = useSelector((state) =>
    selectFilteredData(state, currentNav)
  );

  const searchFilteredData = filteredData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const bookmarkedMovies = searchFilteredData.filter(
    (item) => item.category === "Movie" && item.isBookmarked
  );
  const bookmarkedSeries = searchFilteredData.filter(
    (item) => item.category === "TV Series" && item.isBookmarked
  );

  return (
    <div className="bg-darkBlue px-6 min-h-screen">
      <p className={`${searchQuery === "" && "hidden"} pb-12 md:text-2xl`}>
        Found {searchFilteredData.length} result for '{searchQuery}'
      </p>{" "}
      {currentNav === "Home" && searchFilteredData.length === data.length && (
        <Trending />
      )} 
      <All
        currentNav={currentNav}
        searchFilteredData={searchFilteredData}
        bookmarkedMovies={bookmarkedMovies}
        bookmarkedSeries={bookmarkedSeries}
      />
    </div>
  );
}

export default index;

{
  /* // <p>
        //   Found {queryData.length} result for '{searchQuery}'
        // </p> */
}
