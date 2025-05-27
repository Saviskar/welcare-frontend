import { createSlice } from "@reduxjs/toolkit";

const guestSlice = createSlice({
  name: "guest",
  initialState: {
    selectedGuestId: null,
  },
  reducers: {
    setSelectedGuestId(state, action) {
      state.selectedGuestId = action.payload;
    },
    clearSelectedGuestId(state) {
      state.selectedGuestId = null;
    },
  },
});

export const { setSelectedGuestId, clearSelectedGuestId } = guestSlice.actions;
export default guestSlice.reducer;
