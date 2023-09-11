import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Slidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-64 bg-white">
      <div className="flex items-center mb-6">
        <img
          className="w-10 h-10 rounded-full mr-3"
          src="./images/youtube.png"
          alt="YouTube Logo"
        />
        <h1 className="text-xl font-bold">YouTube</h1>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Explore</h2>
        <ul className="text-base">
          <li className="mb-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mb-2">Shots</li>
          <li className="mb-2">Videos</li>
          <li className="mb-2">Live One</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Subscriptions</h2>
        <ul className="text-base">
          <li className="mb-2">Home</li>
          <li className="mb-2">About</li>
          <li className="mb-2">Movies</li>
          <li className="mb-2">Good One</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Watch Later</h2>
        <ul className="text-base">
          <li className="mb-2">Menu</li>
          <li className="mb-2">Menu</li>
          <li className="mb-2">Menu</li>
          <li className="mb-2">Good One</li>
        </ul>
      </div>
    </div>
  );
};

export default Slidebar;
