import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";
import HomePg2 from "./HomePg2";
import HomePg3 from "./HomePg3";
import ViewAllGuest from "./ViewAllGuest";
import BillingPage from "./BillingPage";
import ContactDetailsPage from "./ContactDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} /> {/* Guest Details Page*/}
        <Route path="/familyContact/:residentId" element={<HomePg2 />} />
        {/* Family Contacts Details Page*/}
        <Route path="/guardianContact/:residentID" element={<HomePg3 />} />
        {/* Guardian Contact Details Page */}
        <Route path="/viewAllGuest" element={<ViewAllGuest />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/contactDetails/:id" element={<ContactDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
