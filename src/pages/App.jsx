import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";
import HomePg2 from "./HomePg2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} /> {/* Guest Details Page*/}
        <Route path="/familyContact" element={<HomePg2 />} />{" "}
        {/* Family Contacts Details Page*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
