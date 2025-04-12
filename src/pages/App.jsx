import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";
import HomePg2 from "./HomePg2";
import HomePg3 from "./HomePg3";
import ViewAllGuest from "./ViewAllGuest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} /> {/* Guest Details Page*/}
        <Route path="/familyContact" element={<HomePg2 />} />
        {/* Family Contacts Details Page*/}
        <Route path="/guardianContact" element={<HomePg3 />} />
        {/* Guardian Contact Details Page */}
        <Route path="/viewAllGuest" element={<ViewAllGuest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
