import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";
// import { useAuthenticateQuery } from "../../api/welcareAPI";
import { useAuthenticateQuery } from "../../api/endpoints/AuthEndpoint";

function Layout() {
  const { data, isLoading, isError } = useAuthenticateQuery();

  if (isError) return <Navigate to="/login" replace />;

  return (
    data && (
      <div className="grid grid-cols-[1fr_4fr] min-h-screen bg-gray-100">
        <div className="bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-900 text-white p-4 flex flex-col justify-between">
          <SideMenu />
          <UserInfo />
        </div>
        <div className="p-4 min-h-screen">
          <Outlet />
        </div>
      </div>
    )
  );
}

export default Layout;
