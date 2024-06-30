import { useEffect, useState } from "react";
import { setData } from "./redux/movieSlice";
import dataEl from "../data.json";
import Navbar from "./components/Navbar/index";
import Home from "./components/Content/Home/index";
import SearchBar from "./components/Navbar/SearchBar";

function Layout() {
  const [currentNav, setCurrentNav] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex w-screen h-screen ">
      <div
        className="hidden lg:bg-semiDarkBlue lg:flex lg:justify-center 
      lg:w-[150px] lg:mx-9 lg:my-8 "
      >
        <Navbar currentNav={currentNav} setCurrentNav={setCurrentNav} />
      </div>
      <div className="flex flex-col w-full lg:w-10/12 lg:mt-4">
        <div className="lg:hidden">
          <Navbar currentNav={currentNav} setCurrentNav={setCurrentNav} />
        </div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Home
          currentNav={currentNav}
          setCurrentNav={setCurrentNav}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}

export default Layout;
