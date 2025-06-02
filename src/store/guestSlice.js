import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

const guestSlice = createSlice({
  name: "guestForm",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = guestSlice.actions;
export default guestSlice.reducer;
