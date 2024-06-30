import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("moviesData")) || [],
  filter: "all", // 'all', 'movie', 'tv', 'bookmarked'
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("moviesData", JSON.stringify(action.payload)); // Update local storage
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setData, setFilter } = moviesSlice.actions;

export const selectFilteredData = (state, currentNav) => {
  switch (currentNav) {
    case "Home":
      return state.movies.data;
    case "Movies":
      return state.movies.data.filter((item) => item.category === "Movie");
    case "TV Series":
      return state.movies.data.filter((item) => item.category === "TV Series");
    case "Bookmarked":
      return state.movies.data.filter((item) => item.isBookmarked);
    default:
      return state.movies.data;
  }
};

export const toggleBookmark = (title) => (dispatch, getState) => {
  // Find the item to toggle bookmark
  const { movies } = getState();
  const updatedData = movies.data.map((item) =>
    item.title === title ? { ...item, isBookmarked: !item.isBookmarked } : item
  );
  console.log("updatedData", updatedData);

  // Update Redux store
  dispatch(setData(updatedData)); 
  // Update local storage
  localStorage.setItem("moviesData", JSON.stringify(updatedData)); // Store updated data
};

export default moviesSlice.reducer;
