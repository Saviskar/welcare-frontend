import React from "react";
import Sidebar from "../components/Layout/Layout.jsx";
import ContactDetailsTables from "../components/ContactDetailsTables.jsx";

function ContactDetailsPage() {
  return (
        <div className="col-span-3 border border-gray-200 bg-white p-6 rounded-xl shadow-md">
          {/* Form */}
          <ContactDetailsTables />
        </div>
  );
}

export default ContactDetailsPage;
