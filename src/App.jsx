import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AllTrips from "./pages/AllTrips";
import AddEditTrip from "./pages/AddEditTrip";
import TripDetails from "./pages/TripDetails";
import AllJournals from "./pages/AllJournals";
import AddEditJournal from "./pages/AddEditJournal";
import JournalDetails from "./pages/JournalDetails";

export default function App() {
  return (
    <Router>
      {/* 🌍 Navbar */}
      <nav className="flex justify-between items-center bg-gradient-to-r from-blue-700 to-indigo-800 text-white px-8 py-4 shadow-md">
        <Link to="/" className="text-2xl font-bold hover:text-yellow-300 transition">TravGarney</Link>
        <div className="flex gap-6 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/trips" className="hover:text-yellow-300 transition">Trips</Link>
          <Link to="/journals" className="hover:text-yellow-300 transition">Journals</Link>
          <Link to="/trips/add" className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 transition">
            + Add Trip
          </Link>
        </div>
      </nav>

      {/* 🌐 Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<AllTrips />} />
        <Route path="/trips/add" element={<AddEditTrip />} />
        <Route path="/trips/edit/:id" element={<AddEditTrip />} />
        <Route path="/trips/:id" element={<TripDetails />} />

        {/* Journal routes */}
        <Route path="/journals" element={<AllJournals />} />
        <Route path="/journals/add" element={<AddEditJournal />} />
        <Route path="/journals/edit/:id" element={<AddEditJournal />} />
        <Route path="/journals/:id" element={<JournalDetails />} />

      </Routes>
    </Router>
  );
}


