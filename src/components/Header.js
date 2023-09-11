import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { cacheResult } from "../utils/SearchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestions, setshowsuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery, searchCache]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between p-2 bg-white shadow-md">
      <div className="flex items-center">
        <img
          onClick={toggleMenuHandler}
          className="h-6 w-6 p-1 cursor-pointer"
          alt="menu"
          src="./images/hamburger.png"
        />

        <a href="/">
          <img
            className="h-8 ml-2 cursor-pointer px-1"
            alt="youtube logo"
            src="./images/mainlogo.png"
          />
        </a>
      </div>

      <div className="relative flex-grow max-w-[20rem]">
        <input
          className="w-full px-4 py-2 pr-12 text-sm text-black bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setshowsuggestions(true)}
          onBlur={() => setshowsuggestions(false)}
        />
        <button
          className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-white bg-red-600 rounded-r-full hover:bg-red-700"
          onClick={() => {
            /* My search function here */
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M22 22L15.5 15.5M10 16H8a6 6 0 006-6V2a2 2 0 00-2-2 2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 012 2v0a2 2 0 01-2 2h-2"
            />
          </svg>
        </button>

        {showsuggestions && (
          <div className="absolute z-10 w-full py-1 mt-1 bg-white border border-gray-300 rounded shadow-md">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <img
          className="h-8 ml-2 cursor-pointer"
          alt="user icon"
          src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
        />
      </div>
    </div>
  );
};

export default Header;
