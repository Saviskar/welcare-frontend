import React, { useState } from "react";
import FormInput from "./FormInput";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function GuardianContactForm() {
  const [values, setValues] = useState({
    guardianSurname: "",
    guardianGivenName: "",
    guardianAddress: "",
    guardianPostcode: "",
    guardianMobile: "",
    guardianEmail: "",
    guardianRelationshipToGuest: "",
  });

  const navigate = useNavigate();

  const { residentId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:3000/guardians/create";

    axios
      .post(url, { ...values, residentId })
      .then((res) => {
        // console.log(res);
        navigate(`/home`);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Guardian Contact Details
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <FormInput
          label="Guardian Surname"
          id="guardianSurname"
          value={values.guardianSurname}
          placeholder="Enter surname"
          onChange={handleChange}
        />
        <FormInput
          label="Guardian Given Name"
          id="guardianGivenName"
          value={values.guardianGivenName}
          placeholder="Enter given name"
          onChange={handleChange}
        />
        <FormInput
          label="Guardian Address"
          id="guardianAddress"
          value={values.guardianAddress}
          placeholder="Enter address"
          onChange={handleChange}
        />
        <FormInput
          label="Guardian Postcode"
          id="guardianPostcode"
          value={values.guardianPostcode}
          placeholder="Enter postcode"
          onChange={handleChange}
        />
        <FormInput
          label="Guardian Mobile"
          id="guardianMobile"
          value={values.guardianMobile}
          type="tel"
          placeholder="Enter mobile number"
          onChange={handleChange}
        />
        <FormInput
          label="Guardian Email"
          id="guardianEmail"
          value={values.guardianEmail}
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <FormInput
          label="Guardian Relationship to Guest"
          id="guardianRelationshipToGuest"
          value={values.guardianRelationshipToGuest}
          placeholder="Enter relationship"
          onChange={handleChange}
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
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium transition cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default GuardianContactForm;
