import React from "react";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";

function GuardianContactForm() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Guardian Contact Details
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput
          label="Guardian Surname"
          id="guardianSurname"
          placeholder="Enter surname"
        />
        <FormInput
          label="Guardian Given Name"
          id="guardianGivenName"
          placeholder="Enter given name"
        />
        <FormInput
          label="Guardian Address"
          id="guardianAddress"
          placeholder="Enter address"
        />
        <FormInput
          label="Guardian Postcode"
          id="guardianPostcode"
          placeholder="Enter postcode"
        />
        <FormInput
          label="Guardian Mobile"
          id="guardianMobile"
          type="tel"
          placeholder="Enter mobile number"
        />
        <FormInput
          label="Guardian Email"
          id="guardianEmail"
          type="email"
          placeholder="Enter email"
        />
        <FormInput
          label="Guardian Relationship to Guest"
          id="guardianRelationship"
          placeholder="Enter relationship"
        />

        {/* Submit Buttons */}
        <div className="md:col-span-2 text-right mt-2">
          <Link
            to="/familyContact"
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium transition mr-1"
          >
            Back
          </Link>
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium transition"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default GuardianContactForm;
