import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Aboutus from "./pages/aboutus"
import Contacts from "./pages/contacts"
import Prices from "./pages/prices"
import Services from "./pages/services"
import Tutoring from "./pages/tutoring"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Aboutus/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/prices" element={<Prices/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
  )
}

export default App
