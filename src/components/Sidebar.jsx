import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [showSubmenu, setShowSubmenu] = useState(true);
  const [activeItem, setActiveItem] = useState("");

  const handleActive = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-900 text-white rounded-xl p-4 flex flex-col justify-between min-h-screen">
      <div>
        <h2 className="text-xl font-bold mb-6">Welcare System</h2>
        <p className="text-sm text-gray-300 mb-2">Main menu</p>
        <ul className="space-y-2">
          {/* Dashboard with Submenu */}
          <li>
            <div
              onClick={() => {
                setShowSubmenu(!showSubmenu);
                handleActive("Dashboard");
              }}
              className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
                activeItem === "Dashboard"
                  ? "bg-purple-700 text-white"
                  : "hover:bg-purple-700"
              }`}
            >
              <Link to="/home" className="flex items-center gap-2">
                Dashboard
              </Link>
              <span>{showSubmenu ? "▾" : "▸"}</span>
            </div>

            {showSubmenu && (
              <ul className="ml-4 mt-4 space-y-2 text-sm text-gray-300">
                {["Guest Details", "Family Contact", "Guardian"].map((item) => (
                  <li
                    key={item}
                    onClick={() => handleActive(item)}
                    className={`cursor-pointer px-2 py-1 rounded-md ${
                      activeItem === item
                        ? "bg-purple-700 text-white"
                        : "hover:text-white hover:bg-purple-700"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Billing */}
          <li
            onClick={() => handleActive("Billing")}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
              activeItem === "Billing"
                ? "bg-purple-700 text-white"
                : "hover:bg-purple-700"
            }`}
          >
            <span>{/*📋*/}</span> <Link to="/viewAllGuest">Billing</Link>
          </li>

          {/* View All Guests */}
          <li
            onClick={() => handleActive("View All Guests")}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
              activeItem === "View All Guests"
                ? "bg-purple-700 text-white"
                : "hover:bg-purple-700"
            }`}
          >
            <span>{/*👥*/}</span> View All Guests
            {/* <Link to="/viewAllGuest">Guest Details</Link> */}
          </li>
        </ul>
      </div>

      {/* User Info */}
      <div className="mt-10 flex items-center gap-3 border-t border-gray-700 pt-4 mb-2">
        <img
          src=""
          alt="User avatar"
          className="w-10 h-10 rounded-full bg-gray-500"
        />
        <div>
          <p className="text-sm text-gray-400">Logged in as:</p>
          <p className="font-semibold">Savishkar T</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
