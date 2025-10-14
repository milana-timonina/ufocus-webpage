import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Aboutus from "./pages/aboutus";
import Services from "./pages/services";
import Prices from "./pages/prices";
import Contacts from "./pages/contacts";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<div style={{padding:"8rem 1rem"}}>Not found</div>} />
      </Route>
    </Routes>
  );
}
