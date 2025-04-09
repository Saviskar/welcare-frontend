import React from "react";

function Sidebar() {
  return (
    <>
      <div className="bg-gray-900 text-white rounded-xl p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">Welcare System</h2>
          <p className="text-sm text-gray-400 mb-2">Main menu</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
              <span>{/*🏠*/}</span> Dashboard
            </li>
            <li className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer">
              <span>{/*📋*/}</span> Billing
            </li>
            <li className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer">
              <span>{/*👥*/}</span> View All Guests
            </li>
            {/* <li className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer">
              <span>➕</span> Create Guests
            </li> */}
          </ul>
        </div>

        <div className="mt-10 flex items-center gap-3 border-t border-gray-700 pt-4">
          <img src="" alt="User avatar" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm text-gray-400">Logged in as:</p>
            <p className="font-semibold">Full Name</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
