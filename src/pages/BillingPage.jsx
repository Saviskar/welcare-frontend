import React from "react";
import Sidebar from "../components/Layout/Layout.jsx";
import BillingForm from "../components/BillingForm.jsx";

function BillingPage() {
  return (
        <div className="col-span-3 border border-gray-200 bg-white p-6 shadow-md">
          {/* Form */}
          <BillingForm />
        </div>
  );
}

export default BillingPage;
