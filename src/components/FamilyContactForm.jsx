import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormInput from "./FormInput";
import axios from "axios";

function FamilyContactForm() {
  const [values, setValues] = useState({
    // First Contact
    firstContactSurname: "",
    firstContactGivenName: "",
    firstContactAddress: "",
    firstContactPostcode: "",
    firstContactTelDaily: "",
    firstContactTelAfterhours: "",
    firstContactRelationship: "",
    firstContactEmail: "",

    // Second Contact
    secondContactSurname: "",
    secondContactGivenName: "",
    secondContactAddress: "",
    secondContactPostcode: "",
    secondContactTelDaily: "",
    secondContactTelAfterhours: "",
    secondContactRelationship: "",
    secondContactEmail: "",
  });

  const navigate = useNavigate();

  const { residentId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:3000/residents/create";

    axios
      .post(url, { ...values, residentId })
      .then((res) => {
        console.log(res);
        navigate("/guardianContact");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: [e.target.value] });
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Family Contact Details
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* First Contact */}
        <h3 className="md:col-span-2 text-lg font-medium text-gray-600">
          First Contact
        </h3>

        <FormInput
          label="Surname"
          id="firstContactSurname"
          value={values.firstContactSurname}
          placeholder="Enter surname"
          onChange={handleChange}
        />
        <FormInput
          label="Given Name"
          id="firstContactGivenName"
          value={values.firstContactGivenName}
          placeholder="Enter given name"
          onChange={handleChange}
        />
        <FormInput
          label="Address"
          id="firstContactAddress"
          value={values.firstContactAddress}
          placeholder="Enter address"
          onChange={handleChange}
        />
        <FormInput
          label="Postcode"
          id="firstContactPostcode"
          value={values.firstContactPostcode}
          placeholder="Enter postcode"
          onChange={handleChange}
        />
        <FormInput
          label="Telephone Daily"
          id="firstContactTelDaily"
          value={values.firstContactTelDaily}
          type="tel"
          placeholder="Enter daily phone"
          onChange={handleChange}
        />
        <FormInput
          label="Telephone Afterhours"
          id="firstContactTelAfterhours"
          value={values.firstContactTelAfterhours}
          type="tel"
          placeholder="Enter afterhours phone"
          onChange={handleChange}
        />
        <FormInput
          label="Relationship to Guest"
          id="firstContactRelationship"
          value={values.firstContactRelationship}
          placeholder="Enter relationship"
          onChange={handleChange}
        />
        <FormInput
          label="Email Address"
          id="firstContactEmail"
          value={values.firstContactEmail}
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
        />

        {/* Second Contact */}
        <h3 className="md:col-span-2 text-lg font-medium text-gray-600 mt-4">
          Second Contact
        </h3>

        <FormInput
          label="Surname"
          id="secondContactSurname"
          value={values.secondContactSurname}
          placeholder="Enter surname"
          onChange={handleChange}
        />
        <FormInput
          label="Given Name"
          id="secondContactGivenName"
          value={values.secondContactGivenName}
          placeholder="Enter given name"
          onChange={handleChange}
        />
        <FormInput
          label="Address"
          id="secondContactAddress"
          value={values.secondContactAddress}
          placeholder="Enter address"
          onChange={handleChange}
        />
        <FormInput
          label="Postcode"
          id="secondContactPostcode"
          value={values.secondContactPostcode}
          placeholder="Enter postcode"
          onChange={handleChange}
        />
        <FormInput
          label="Telephone Daily"
          id="secondContactTelDaily"
          value={values.secondContactTelDaily}
          type="tel"
          placeholder="Enter daily phone"
          onChange={handleChange}
        />
        <FormInput
          label="Telephone Afterhours"
          id="secondContactTelAfterhours"
          value={values.secondContactTelAfterhours}
          type="tel"
          placeholder="Enter afterhours phone"
          onChange={handleChange}
        />
        <FormInput
          label="Relationship to Guest"
          id="secondContactRelationship"
          value={values.secondContactRelationship}
          placeholder="Enter relationship"
          onChange={handleChange}
        />
        <FormInput
          label="Email Address"
          id="secondContactEmail"
          value={values.secondContactEmail}
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
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
