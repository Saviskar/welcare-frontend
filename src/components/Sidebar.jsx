import React, { useState } from "react";

function Sidebar() {
  const [showSubmenu, setShowSubmenu] = useState(true);

  return (
    <div className="bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-900 text-white rounded-xl p-4 flex flex-col justify-between min-h-screen">
      <div>
        <h2 className="text-xl font-bold mb-6">Welcare System</h2>
        <p className="text-sm text-gray-300 mb-2">Main menu</p>
        <ul className="space-y-2">
          {/* Dashboard with Submenu */}
          <li>
            <div
              onClick={() => setShowSubmenu(!showSubmenu)}
              className={`flex items-center justify-between bg-purple-700 px-3 py-2 rounded-lg cursor-pointer`}
            >
              <span className="flex items-center gap-2">
                {/*🏠*/} Dashboard
              </span>
              <span>{showSubmenu ? "▾" : "▸"}</span>
            </div>

            {/* If showSubMenu is true then show (<ul className> <li> ......</li></ul>) -> these stuff */}
            {showSubmenu && (
              <ul className="ml-4 mt-4 space-y-2 text-sm text-gray-300">
                <li className="hover:text-white cursor-pointer">
                  Guest Details
                </li>
                <li className="hover:text-white cursor-pointer">
                  Family Contact
                </li>
                <li className="hover:text-white cursor-pointer">Guardian</li>
                <li className="hover:text-white cursor-pointer">
                  Medical Details
                </li>
                <li className="hover:text-white cursor-pointer">
                  Living Situation
                </li>
                <li className="hover:text-white cursor-pointer">Care Needs</li>
                <li className="hover:text-white cursor-pointer">
                  Funeral Arrangements1
                </li>
              </ul>
            )}
          </li>

          {/* Other menu items */}
          <li className="flex items-center gap-2 hover:bg-purple-700 px-3 py-2 rounded-lg cursor-pointer">
            <span>{/*📋*/}</span> Billing
          </li>
          <li className="flex items-center gap-2 hover:bg-purple-700 px-3 py-2 rounded-lg cursor-pointer">
            <span>{/*👥*/}</span> View All Guests
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
