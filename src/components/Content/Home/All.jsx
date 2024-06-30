import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bookmarkEmpty from "/assets/icon-bookmark-empty.svg";
import bookmarkFull from "/assets/icon-bookmark-full.svg";
import bookmarkYellow from "/assets/icon-nav-bookmarkYellow.svg";
import movieCategory from "/assets/icon-category-movie.svg";
import seriesCategory from "/assets/icon-category-tv.svg";
import playLogo from "/assets/icon-play.svg";
import { selectFilteredData, toggleBookmark } from "../../../redux/movieSlice";

function All({
  currentNav,
  searchFilteredData,
  bookmarkedMovies,
  bookmarkedSeries,
}) {
  const dispatch = useDispatch();

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndexMovies, setHoveredIndexMovies] = useState(null);
  const [hoveredIndexSeries, setHoveredIndexSeries] = useState(null);

  const [hoveredPlay, setHoveredPlay] = useState(null);
  const [hoveredPlayMovies, setHoveredPlayMovies] = useState(null);
  const [hoveredPlaySeries, setHoveredPlaySeries] = useState(null);

  const handleBookmarkClick = (index, title) => {
    dispatch(toggleBookmark(title));
  };
  return (
    <div className={`${currentNav === "Home" && "mt-8"} `}>
      {currentNav === "Home" ? (
        <h1
          className={`mb-5 ${
            searchFilteredData.length === 0 && "hidden"
          } md:text-2xl`}
        >
          Recommended for you
        </h1>
      ) : currentNav === "Movies" ? (
        <h1
          className={`mb-5 ${
            searchFilteredData.length === 0 && "hidden "
          } md:text-2xl`}
        >
          Movies
        </h1>
      ) : currentNav === "TV Series" ? (
        <h1
          className={`mb-5 ${
            searchFilteredData.length === 0 && "hidden"
          } md:text-2xl`}
        >
          TV Series
        </h1>
      ) : currentNav === "Bookmarked" ? (
        <>
          <h1
            className={`mb-5 ${
              bookmarkedMovies.length === 0 && "hidden"
            } md:text-2xl`}
          >
            Movies
          </h1>
          <div
            className="grid grid-cols-2 gap-x-4 gap-y-4 space-y-0 md:grid-cols-3
          lg:grid-cols-4"
          >
            {bookmarkedMovies.map((item, idx) => (
              <div key={idx} className="relative">
                <img
                  src={item.thumbnail.regular.small}
                  alt="trending"
                  className={`rounded-md w-full h-auto max-h-[400px] ${
                    hoveredPlayMovies === idx && "opacity-80"
                  }`}
                  onMouseEnter={() => setHoveredPlayMovies(idx)}
                  onMouseLeave={() => setHoveredPlayMovies(null)}
                />
                <div
                  className={`${
                    hoveredPlayMovies === idx &&
                    "lg:flex lg:absolute top-[32%] left-[32.5%] cursor-pointer"
                  } hidden `}
                  onMouseEnter={() => setHoveredPlayMovies(idx)}
                >
                  <div className="flex items-center space-x-4 bg-opacity p-3 rounded-full">
                    <img src={playLogo} alt="" />
                    <p className="text-2xl">Play</p>
                  </div>
                </div>
                <div
                  className={`absolute top-0 right-0 p-3 m-2 rounded-full cursor-pointer transition-all ${
                    hoveredIndexMovies === idx ? "bg-white" : "bg-opacity"
                  }`}
                  onMouseEnter={() => setHoveredIndexMovies(idx)}
                  onMouseLeave={() => setHoveredIndexMovies(null)}
                  onClick={() => handleBookmarkClick(idx, item.title)} // Handle bookmark click
                >
                  <img
                    src={
                      hoveredIndexMovies === idx ? bookmarkFull : bookmarkYellow
                    }
                    alt="bookmark"
                    className="object-fit"
                  />
                </div>
                <div className="block my-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2 text-[11px] font-extralight opacity-75 md:text-xl">
                        <p>{item.year}</p>
                        <div className="w-[4px] h-[4px] bg-white rounded-full opacity-50"></div>
                        <div className="flex w-full space-x-1 items-center">
                          <img
                            src={movieCategory}
                            alt="category"
                            className="h-3"
                          />
                          <p>{item.category}</p>
                        </div>
                        <div className="w-[4px] h-[4px] bg-white rounded-full opacity-50"></div>
                        <p className="text-white font-light text-[11px] md:text-xl">
                          {item.rating}
                        </p>
                      </div>
                      <div className="mb-3 mt-[0.5px] text-[14px] md:text-xl">
                        <h1>{item.title}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1
            className={`mb-5 mt-8 md:text-2xl ${bookmarkedSeries.length === 0 && "hidden"}`}
          >
            TV Series
          </h1>
          <div
            className="grid grid-cols-2 gap-x-4 gap-y-4 space-y-0 md:grid-cols-3
          lg:grid-cols-4"
          >
            {bookmarkedSeries.map((item, idx) => (
              <div key={idx} className="relative">
                <img
                  src={item.thumbnail.regular.small}
                  alt="trending"
                  className={`rounded-md w-full h-auto max-h-[400px] ${
                    hoveredPlaySeries === idx && "opacity-80"
                  }`}
                  onMouseEnter={() => setHoveredPlaySeries(idx)}
                  onMouseLeave={() => setHoveredPlaySeries(null)}
                />
                <div
                  className={`${
                    hoveredPlaySeries === idx &&
                    "lg:flex lg:absolute top-[32%] left-[32.5%] cursor-pointer"
                  } hidden `}
                  onMouseEnter={() => setHoveredPlaySeries(idx)}
                >
                  <div className="flex items-center space-x-4 bg-opacity p-3 rounded-full">
                    <img src={playLogo} alt="" />
                    <p className="text-2xl">Play</p>
                  </div>
                </div>
                <div
                  className={`absolute top-0 right-0 p-3 m-2 rounded-full cursor-pointer transition-all ${
                    hoveredIndexSeries === idx ? "bg-white" : "bg-opacity"
                  }`}
                  onMouseEnter={() => setHoveredIndexSeries(idx)}
                  onMouseLeave={() => setHoveredIndexSeries(null)}
                  onClick={() => handleBookmarkClick(idx, item.title)} // Handle bookmark click
                >
                  <img
                    src={
                      hoveredIndexSeries === idx ? bookmarkFull : bookmarkYellow
                    }
                    alt="bookmark"
                    className="object-fit"
                  />
                </div>
                <div className="block my-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2 text-[11px] font-extralight opacity-75 md:text-xl">
                        <p>{item.year}</p>
                        <div className="w-[4px] h-[4px] bg-white rounded-full opacity-50"></div>
                        <div className="flex w-full space-x-1 items-center">
                          <img
                            src={seriesCategory}
                            alt="category"
                            className="h-3 md:h-5"
                          />
                          <p>{item.category}</p>
                        </div>
                        <div className="w-[4px] h-[4px] bg-white rounded-full opacity-50"></div>
                        <p className="text-white font-light text-[11px] md:text-xl">
                          {item.rating}
                        </p>
                      </div>
                      <div className="mb-3 mt-[0.5px] text-[14px] md:text-xl">
                        <h1>{item.title}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p></p>
      )}
      {currentNav !== "Bookmarked" && (
        <div
          className="grid grid-cols-2 gap-x-4 gap-y-4 space-y-0 h-full md:grid-cols-3
        lg:grid-cols-4
        "
        >
          {searchFilteredData.map((item, idx) => (
            <div key={idx} className="relative">
              <img
                src={item.thumbnail.regular.small}
                alt="trending"
                className={`rounded-md w-full h-auto max-h-[400px] ${
                  hoveredPlay === idx && "opacity-80"
                }`}
                onMouseEnter={() => setHoveredPlay(idx)}
                onMouseLeave={() => setHoveredPlay(null)}
              />
              <div
                className={`${
                  hoveredPlay === idx &&
                  "lg:flex lg:absolute top-[32%] left-[32.5%] cursor-pointer"
                } hidden `}
                onMouseEnter={() => setHoveredPlay(idx)}
              >
                <div className="flex items-center space-x-4 bg-opacity p-3 rounded-full">
                  <img src={playLogo} alt="" />
                  <p className="text-2xl">Play</p>
                </div>
              </div>
              <div
                className={`absolute top-0 right-0 p-3 m-2 rounded-full cursor-pointer transition-all ${
                  hoveredIndex === idx ? "bg-white" : "bg-opacity"
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleBookmarkClick(idx, item.title)} // Handle bookmark click
              >
                {item.isBookmarked ? (
                  <>
                    <img
                      src={bookmarkYellow}
                      alt="bookmarkEmpty"
                      className="object-fit "
                    />
                  </>
                ) : (
                  <img
                    src={hoveredIndex === idx ? bookmarkFull : bookmarkEmpty}
                    alt="bookmarkEmpty"
                    className="object-fit "
                  />
                )}
              </div>
              <div className="block my-3">
                <div className="flex items-center justify-between">
                  <div className="">
                    <div className="flex items-center space-x-2 text-[11px] font-extralight opacity-75 md:text-xl">
                      <p>{item.year}</p>
                      <div className="w-[4px] h-[4px] bg-white rounded-full opacity-50"></div>
                      <div className="flex w-full space-x-1 items-center">
                        <img
                          src={
                            item.category === "Movie"
                              ? movieCategory
                              : seriesCategory
                          }
                          alt="category"
                          className="h-3 md:h-5"
                        />
                        <p>{item.category}</p>
                      </div>
                      <div className="w-[4px] h-[4px] bg-white rounded-full opacity-50"></div>
                      <p className="text-white font-light text-[11px] md:text-xl">
                        {item.rating}
                      </p>
                    </div>
                    <div className="mb-3 mt-[0.5px] text-[14px] md:text-xl">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default All;
