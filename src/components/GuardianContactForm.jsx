import React from "react";
import FormInput from "./FormInput";

function GuardianContactForm() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Register Guests
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Guest Fields */}
        <FormInput label="Surname" id="surname" placeholder="Enter surname" />
        <FormInput
          label="Given Names"
          id="givenNames"
          placeholder="Enter given names"
        />
        <FormInput
          label="Preferred Names"
          id="preferredNames"
          placeholder="Enter preferred names"
        />
        <FormInput label="Age" id="age" type="number" placeholder="Enter age" />
        <FormInput
          label="Marital Status"
          id="maritalStatus"
          placeholder="Enter marital status"
        />
        <FormInput
          label="Current Location"
          id="currentLocation"
          placeholder="Enter location"
        />
        <FormInput
          label="Postcode"
          id="postcode"
          placeholder="Enter postcode"
        />
        <FormInput
          label="Telephone"
          id="telephone"
          type="tel"
          placeholder="Enter telephone number"
        />
        <FormInput
          label="Religion"
          id="religion"
          placeholder="Enter religion"
        />
        <FormInput
          label="Country of Birth"
          id="countryOfBirth"
          placeholder="Enter country"
        />
        <FormInput
          label="Preferred Language"
          id="preferredLanguage"
          placeholder="Enter language"
        />

        {/* Submit Buttons */}
        <div className="md:col-span-2 text-right mt-2">
          <Link
            to="/familyContact"
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

export default GuardianContactForm;
