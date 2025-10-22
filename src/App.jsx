import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AllTrips from "./pages/AllTrips";
import TripDetails from "./pages/TripDetails";
import AddEditTrip from "./pages/AddEditTrip";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Simple Navigation */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <Link to="/" className="font-semibold text-lg">TravGarney</Link>
        <div className="space-x-4">
          <Link to="/trips" className="hover:underline">All Trips</Link>
          <Link to="/add" className="hover:underline">Add Trip</Link>
        </div>
      </nav>

      {/* ✅ Define Routes */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<AllTrips />} />
          <Route path="/trips/:id" element={<TripDetails />} />
          <Route path="/add" element={<AddEditTrip />} />
          <Route path="/edit/:id" element={<AddEditTrip />} />
        </Routes>
      </div>
    </div>
  );
}
