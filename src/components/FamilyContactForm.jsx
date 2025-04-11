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
        <FormInput
          label="First Contact Surname"
          id="firstContactSurname"
          placeholder="Enter surname"
        />
        <FormInput
          label="First Contact Given Name"
          id="firstContactGivenName"
          placeholder="Enter given name"
        />
        <FormInput
          label="First Contact Address"
          id="firstContactAddress"
          placeholder="Enter address"
        />
        <FormInput
          label="First Contact Postcode"
          id="firstContactPostcode"
          placeholder="Enter postcode"
        />
        <FormInput
          label="First Contact Telephone (Daily)"
          id="firstContactTelephoneDaily"
          type="tel"
          placeholder="Enter daily phone"
        />
        <FormInput
          label="First Contact Telephone (After Hours)"
          id="firstContactTelephoneAfterHours"
          type="tel"
          placeholder="Enter after-hours phone"
        />
        <FormInput
          label="First Contact Relationship to Guest"
          id="relationshipToGuest"
          placeholder="Enter relationship"
        />
        <FormInput
          label="First Contact Email"
          id="firstContactEmail"
          type="email"
          placeholder="Enter email"
        />

        {/* Second Contact */}
        <FormInput
          label="Second Contact Surname"
          id="secondContactSurname"
          placeholder="Enter surname"
        />
        <FormInput
          label="Second Contact Given Name"
          id="secondContactGivenName"
          placeholder="Enter given name"
        />
        <FormInput
          label="Second Contact Address"
          id="secondContactAddress"
          placeholder="Enter address"
        />
        <FormInput
          label="Second Contact Postcode"
          id="secondContactPostcode"
          placeholder="Enter postcode"
        />
        <FormInput
          label="Second Contact Telephone (Daily)"
          id="secondContactTelephoneDaily"
          type="tel"
          placeholder="Enter daily phone"
        />
        <FormInput
          label="Second Contact Telephone (After Hours)"
          id="secondContactTelephoneAfterHours"
          type="tel"
          placeholder="Enter after-hours phone"
        />
        <FormInput
          label="Second Contact Relationship to Guest"
          id="relationshipToGueet"
          placeholder="Enter relationship"
        />
        <FormInput
          label="Second Contact Email"
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
            to=""
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
