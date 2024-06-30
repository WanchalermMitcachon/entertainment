import React, { useState } from "react";
import logo from "/assets/logo.svg";
import home from "/assets/icon-nav-home.svg";
import homeWhite from "/assets/icon-nav-homeWhite.svg";
import bookmark from "/assets/icon-nav-bookmark.svg";
import bookmarkWhite from "/assets/icon-nav-bookmarkwhite.svg";
import series from "/assets/icon-nav-tv-series.svg";
import seriesWhite from "/assets/icon-nav-tv-seriesWhite.svg";
import movies from "/assets/icon-nav-movies.svg";
import moviesWhite from "/assets/icon-nav-moviesWhite.svg";
import avatar from "/assets/image-avatar.png";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

function index({ currentNav, setCurrentNav }) {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const [isLogoutMenuOpen, setIsLogoutMenuOpen] = useState(false);

  function handleLogout() {
    dispatch(logout());
    navigate("/login")
  }
  return (
    <div>
      <div
        className="max-w-container mx-auto flex justify-between items-center px-6 py-4 
     lg:flex-col lg:space-y-[7rem]"
      >
        <img
          src={logo}
          alt="logo"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        />
        <div
          className="flex space-x-5 md:space-x-8 lg:flex-col lg:items-center 
        lg:space-y-16 lg:space-x-0"
        >
          <img
            src={currentNav === "Home" ? homeWhite : home}
            alt="home"
            className="w-4 h-4 cursor-pointer hover:scale-125 transition transition-all duration-500 transform 
            md:w-6 md:h-6 lg:w-8 lg:h-8"
            onClick={() => setCurrentNav("Home")}
          />
          <img
            src={currentNav === "Movies" ? moviesWhite : movies}
            alt="movies"
            className="w-4 h-4 cursor-pointer hover:scale-125 transition transition-all duration-500 transform
            md:w-6 md:h-6 lg:w-8 lg:h-8"
            onClick={() => setCurrentNav("Movies")}
          />{" "}
          <img
            src={currentNav === "TV Series" ? seriesWhite : series}
            alt="series"
            className="w-4 h-4 cursor-pointer hover:scale-125 transition transition-all duration-500 transform
            md:w-6 md:h-6 lg:w-8 lg:h-8"
            onClick={() => setCurrentNav("TV Series")}
          />
          <img
            src={currentNav === "Bookmarked" ? bookmarkWhite : bookmark}
            alt="bookmark"
            className="w-4 h-4 cursor-pointer hover:scale-125 transition transition-all duration-500 transform
            md:w-6 md:h-6 lg:w-8 lg:h-8"
            onClick={() => setCurrentNav("Bookmarked")}
          />
        </div>
        <div className="lg:absolute lg:bottom-12">
          <img
            src={avatar}
            alt="avatar"
            className="w-9 h-9 cursor-pointer
           lg:w-16 lg:h-16 "
            onClick={() => setIsLogoutMenuOpen(!isLogoutMenuOpen)}
          />
          {isLogoutMenuOpen && (
            <div
              className="absolute right-4 lg:left-[-1.5
          rem] mt-2  bg-white rounded-md shadow-lg py-1 "
            >
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default index;
