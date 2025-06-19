import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput/FormInput";
import SelectInput from "./FormInput/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { updateField, resetForm } from "../store/guestSlice";
import { useCreateGuestMutation } from "../api/endpoints/ResidentEndpoint";

function Registerguests() {
  const maritalStatus = ["Single", "Married", "Divorced", "Widowed"];
  const values = useSelector((state) => state.guestForm);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(values);

  const [createGuest, { isLoading, isError }] = useCreateGuestMutation();

  const handleChange = (e) => {
    dispatch(updateField({ field: e.target.id, value: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting guest data:", values);

    try {
      const res = await createGuest(values).unwrap();
      const residentId = res.residentId;
      dispatch(resetForm());
      navigate(`/guest`);
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Register Guest
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <FormInput
          label="Surname"
          id="surname"
          value={values.surname}
          onChange={handleChange}
        />
        <FormInput
          label="Given Name"
          id="givenName"
          value={values.givenName}
          onChange={handleChange}
        />
        <FormInput
          label="Preferred Names"
          id="preferredNames"
          value={values.preferredNames}
          onChange={handleChange}
        />
        <FormInput
          label="Age"
          id="age"
          type="number"
          value={values.age}
          onChange={handleChange}
        />
        <SelectInput
          label="Marital Status"
          id="maritalStatus"
          value={values.maritalStatus}
          options={maritalStatus}
          onChange={handleChange}
        />
        <FormInput
          label="Postcode"
          id="postCode"
          value={values.postCode}
          onChange={handleChange}
        />
        <FormInput
          label="Telephone"
          id="telephone"
          type="tel"
          value={values.telephone}
          onChange={handleChange}
        />
        <FormInput
          label="Religion"
          id="religion"
          value={values.religion}
          onChange={handleChange}
        />
        <FormInput
          label="Country of Birth"
          id="countryOfBirth"
          value={values.countryOfBirth}
          onChange={handleChange}
        />
        <FormInput
          label="Preferred Language"
          id="preferredLanguage"
          value={values.preferredLanguage}
          onChange={handleChange}
        />
        <div className="md:col-span-2 text-right mt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium transition"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Registerguests;
