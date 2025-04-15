import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdAttachMoney,
  MdPeople,
  MdAccountCircle,
} from "react-icons/md";

function Sidebar() {
  const baseStyle =
    "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all";
  const activeStyle = "bg-purple-700 text-white";
  const inactiveStyle = "hover:bg-purple-700 text-white/80";

  return (
    <div className="bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-900 text-white rounded-xl p-4 flex flex-col justify-between min-h-full">
      <div>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          Welcare System
        </h2>
        <p className="text-sm text-gray-300 mb-2">Main menu</p>
        <ul className="space-y-2">
          {/* Dashboard */}
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              <MdDashboard className="text-lg" />
              Dashboard
            </NavLink>
          </li>

          {/* Billing */}
          <li>
            <NavLink
              to="/billing"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              <MdAttachMoney className="text-lg" />
              Billing
            </NavLink>
          </li>

          {/* View All Guests */}
          <li>
            <NavLink
              to="/viewAllGuest"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              <MdPeople className="text-lg" />
              View All Guests
            </NavLink>
          </li>
        </ul>
      </div>

      {/* User Info */}
      <div className="mt-10 flex items-center gap-3 border-t border-gray-700 pt-4 mb-2">
        <MdAccountCircle className="text-5xl" />
        <div>
          <p className="text-sm text-gray-400">Logged in as:</p>
          <p className="font-semibold">Savishkar T</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
