import React from "react";
import Sidebar from "../components/Layout/Layout.jsx";
import Registerguests from "../components/RegisterGuestForm.jsx";

function Home() {
  return (
        <div className="col-span-3 border border-gray-200 bg-white p-6 shadow-md">
          {/* Form */}
          <Registerguests />
        </div>
  );
}

export default Home;
