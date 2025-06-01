import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import FamilyContact from "./pages/FamilyContact";
import Guardian from "./pages/Guardian";
import Layout from "./components/Layout/Layout";
import ViewAllGuest from "./pages/ViewAllGuest";
import BillingPage from "./pages/BillingPage";
import ContactDetailsPage from "./pages/ContactDetailsPage";
import ContactDetailsTables from "./components/ContactDetailsTables";
import { useSelector } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route Path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Guest Details Page*/}
          <Route path="/family" element={<FamilyContact />} />
          {/* Family Contacts Details Page*/}
          <Route path="/guardian" element={<Guardian />} />
          {/* Guardian Contact Details Page */}
          <Route path="/guest" element={<ViewAllGuest />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/contact/:id" element={<ContactDetailsPage />} />
          {/* <Route path="/contactDetails/:id" element={<ContactDetailsTables />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
