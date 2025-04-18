import React from "react";
import Sidebar from "../components/Layout/Layout.jsx";
import FamilyContactForm from "../components/FamilyContactForm.jsx";

function FamilyContact() {
  return (
        <div className="col-span-3 border border-gray-200 bg-white p-6 shadow-md">
          {/* Form */}
          <FamilyContactForm />
        </div>
  );
}

export default FamilyContact;
