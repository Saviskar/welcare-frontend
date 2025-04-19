import React from "react";
import ViewAllGuestTable from "../components/ViewGuestTable";
import Sidebar from "../components/Layout/Layout";

function ViewAllGuest() {
  return (
    <>
        <div className="col-span-3 border border-gray-200 bg-white p-6 shadow-md">
          {/* Form */}
          <ViewAllGuestTable />
        </div>
    </>
  );
}

export default ViewAllGuest;
