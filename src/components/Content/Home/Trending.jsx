import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import bookmarkEmpty from "/assets/icon-bookmark-empty.svg";
import bookmarkFull from "/assets/icon-bookmark-full.svg";
import bookmarkYellow from "/assets/icon-nav-bookmarkYellow.svg";
import movieCategory from "/assets/icon-category-movie.svg";
import seriesCategory from "/assets/icon-category-tv.svg";
import playLogo from "/assets/icon-play.svg";
import { toggleBookmark } from "../../../redux/movieSlice";

function Trending() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.movies);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredPlay, setHoveredPlay] = useState(null);
  const [tredningData, setTrendingData] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 768 ? 1.5 : 3
  );

  const filterTrending = () => {
    const trendingDataEl = data.filter((item) => item.isTrending === true);
    setTrendingData(trendingDataEl);
  };

  useEffect(() => {
    filterTrending();
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1.5 : 3);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBookmarkClick = (index, title) => {
    dispatch(toggleBookmark(title));
  };

  return (
    <div>
      <h1 className="font-light text-[20px] py-3 md:text-2xl">Trending</h1>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={15}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {tredningData.map((item, idx) => (
          <SwiperSlide key={idx + 1}>
            <img
              src={item.thumbnail.trending.small}
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
            <button
              className={`absolute top-0 right-0 p-3 m-2 rounded-full 
                cursor-pointer transition-all ${
                  hoveredIndex === idx ? "bg-white" : "bg-opacity"
                }`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleBookmarkClick(idx, item.title)}
            >
              {item.isBookmarked ? (
                <img
                  src={bookmarkYellow}
                  alt="bookmark"
                  className="object-fit"
                />
              ) : (
                <img
                  src={hoveredIndex === idx ? bookmarkFull : bookmarkEmpty}
                  alt="bookmark"
                  className="object-fit"
                />
              )}
            </button>
            <div className="absolute bottom-0 left-5 w-full pr-8">
              <div className="flex items-center justify-between md:justify-start">
                <div>
                  <div className="flex items-center space-x-3 text-[13px] font-extralight opacity-90 md:text-xl">
                    <p>{item.year}</p>
                    <div className="w-[4px] h-[4px] bg-white rounded-full opacity-50"></div>
                    <div className="flex space-x-1 items-center">
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
                  </div>
                  <div className="mb-3 mt-[0.5px] md:text-xl">
                    <h1>{item.title}</h1>
                  </div>
                </div>
                <div className="bg-opacity px-3 py-[0.5px] rounded-full md:bg-transparent md:text-2xl md:mb-10 md:flex md:items-center">
                  <div className="hidden w-[4px] h-[4px] bg-white rounded-full opacity-50 md:flex md:mr-3"></div>
                  <p className="text-white font-light text-[12px] md:text-xl md:opacity-70">
                    {item.rating}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Trending;
