import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import guestReducer from "./guestSlice";
import { welcareAPI } from "../api/welcareAPI";

const rootReducer = combineReducers({
  [welcareAPI.reducerPath]: welcareAPI.reducer,
  user: userReducer,
  guestForm: guestReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(welcareAPI.middleware),
});
