import React from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import Home from "../pages/Home";

function FamilyContactForm() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Family Contact Details
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* First Contact */}
        <h3 className="md:col-span-2 text-lg font-medium text-gray-600">
          First Contact
        </h3>

        <FormInput
          label="Surname"
          id="firstContactSurname"
          placeholder="Enter surname"
        />
        <FormInput
          label="Given Name"
          id="firstContactGivenName"
          placeholder="Enter given name"
        />
        <FormInput
          label="Address"
          id="firstContactAddress"
          placeholder="Enter address"
        />
        <FormInput
          label="Postcode"
          id="firstContactPostcode"
          placeholder="Enter postcode"
        />
        <FormInput
          label="Telephone Daily"
          id="firstContactTelDaily"
          type="tel"
          placeholder="Enter daily phone"
        />
        <FormInput
          label="Telephone Afterhours"
          id="firstContactTelAfterhours"
          type="tel"
          placeholder="Enter afterhours phone"
        />
        <FormInput
          label="Relationship to Guest"
          id="firstContactRelationship"
          placeholder="Enter relationship"
        />
        <FormInput
          label="Email Address"
          id="firstContactEmail"
          type="email"
          placeholder="Enter email"
        />

        {/* Second Contact */}
        <h3 className="md:col-span-2 text-lg font-medium text-gray-600 mt-4">
          Second Contact
        </h3>

        <FormInput
          label="Surname"
          id="secondContactSurname"
          placeholder="Enter surname"
        />
        <FormInput
          label="Given Name"
          id="secondContactGivenName"
          placeholder="Enter given name"
        />
        <FormInput
          label="Address"
          id="secondContactAddress"
          placeholder="Enter address"
        />
        <FormInput
          label="Postcode"
          id="secondContactPostcode"
          placeholder="Enter postcode"
        />
        <FormInput
          label="Telephone Daily"
          id="secondContactTelDaily"
          type="tel"
          placeholder="Enter daily phone"
        />
        <FormInput
          label="Telephone Afterhours"
          id="secondContactTelAfterhours"
          type="tel"
          placeholder="Enter afterhours phone"
        />
        <FormInput
          label="Relationship to Guest"
          id="secondContactRelationship"
          placeholder="Enter relationship"
        />
        <FormInput
          label="Email Address"
          id="secondContactEmail"
          type="email"
          placeholder="Enter email"
        />

        {/* Submit Buttons */}
        <div className="md:col-span-2 text-right mt-2">
          <Link
            to="/Home"
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium transition mr-1"
          >
            Back
          </Link>
          <Link
            to="/guardianContact"
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium transition mr-1"
          >
            Next
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

export default FamilyContactForm;
