import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AllTrips from "./pages/AllTrips";
import TripDetails from "./pages/TripDetails";
import AddEditTrip from "./pages/AddEditTrip";

export default function App() {
  return (
    <>
      <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <Link to="/" className="font-bold text-xl">
          TravGarNey
        </Link>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/trips">All Trips</Link>
          <Link to="/add">Add Trip</Link>
        </div>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<AllTrips />} />
          <Route path="/trips/:id" element={<TripDetails />} />
          <Route path="/add" element={<AddEditTrip />} />
          <Route path="/edit-trip/:id" element={<AddEditTrip />} />
        </Routes>
      </main>
    </>
  );
}

