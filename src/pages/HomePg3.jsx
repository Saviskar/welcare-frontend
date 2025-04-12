import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import GuardianContactForm from "../components/GuardianContactForm.jsx";

function FamilyContact() {
  return (
    <>
      <div className="grid grid-cols-[1fr_2fr_2fr_2fr] gap-4 p-4 min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        <div className="col-span-3 border border-gray-200 bg-white p-6 rounded-xl shadow-md">
          {/* Form */}
          <GuardianContactForm />
        </div>
      </div>
    </>
  );
}

export default FamilyContact;
