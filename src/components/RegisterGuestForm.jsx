import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import axios from "axios";

function Registerguests() {
  const [values, setValues] = useState({
    surname: "",
    givenName: "",
    preferredNames: "",
    age: "",
    maritalStatus: "",
    telephone: "",
    postCode: "",
    religion: "",
    countryOfBirth: "",
    preferredLanguage: "",
  });

  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const url = "http://localhost:3000/residents/create";

  //   axios
  //     .post(url, values)
  //     .then((res) => {
  //       console.log(res);
  //       navigate(`/familyContact/${residentId}`);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:3000/residents/create";

    axios
      .post(url, values)
      .then((res) => {
        const residentId = res.data.insertId;
        console.log("Resident created with ID:", residentId);

        // Navigate to familyContact with residentId in the URL
        navigate(`/familyContact/${residentId}`);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Guest Details
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <FormInput
          label="Surname"
          id="surname"
          value={values.surname}
          placeholder="Enter surname"
          onChange={handleChange}
        />
        <FormInput
          label="Given Name"
          id="givenName"
          value={values.givenName}
          placeholder="Enter given name"
          onChange={handleChange}
        />
        <FormInput
          label="Preferred Names"
          id="preferredNames"
          value={values.preferredNames}
          placeholder="Enter preferred names"
          onChange={handleChange}
        />
        <FormInput
          label="Age"
          id="age"
          type="number"
          value={values.age}
          placeholder="Enter age"
          onChange={handleChange}
        />
        <FormInput
          label="Marital Status"
          id="maritalStatus"
          value={values.maritalStatus}
          placeholder="Enter marital status"
          onChange={handleChange}
        />
        <FormInput
          label="Postcode"
          id="postCode"
          value={values.postCode}
          placeholder="Enter postcode"
          onChange={handleChange}
        />
        <FormInput
          label="Telephone"
          id="telephone"
          type="tel"
          value={values.telephone}
          placeholder="Enter telephone number"
          onChange={handleChange}
        />
        <FormInput
          label="Religion"
          id="religion"
          value={values.religion}
          placeholder="Enter religion"
          onChange={handleChange}
        />
        <FormInput
          label="Country of Birth"
          id="countryOfBirth"
          value={values.countryOfBirth}
          placeholder="Enter country"
          onChange={handleChange}
        />
        <FormInput
          label="Preferred Language"
          id="preferredLanguage"
          value={values.preferredLanguage}
          placeholder="Enter language"
          onChange={handleChange}
        />

        <div className="md:col-span-2 text-right mt-2">
          {/* <Link
            to="/familyContact"
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium transition mr-1"
          >
            Next
          </Link> */}
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

export default Registerguests;
