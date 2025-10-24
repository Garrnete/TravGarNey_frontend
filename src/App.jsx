import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AllTrips from "./pages/AllTrips";
import AddEditTrip from "./pages/AddEditTrip";
import TripDetails from "./pages/TripDetails";
import AllJournals from "./pages/AllJournals";
import AddEditJournal from "./pages/AddEditJournal";
import JournalDetails from "./pages/JournalDetails";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<AllTrips />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="/trips/add" element={<AddEditTrip />} />
        <Route path="/trips/edit/:id" element={<AddEditTrip />} />

        {/* Journal routes */}
        <Route path="/journals" element={<AllJournals />} />
        <Route path="/journals/add" element={<AddEditJournal />} />
        <Route path="/journals/edit/:id" element={<AddEditJournal />} />
        <Route path="/journals/:id" element={<JournalDetails />} />
      </Routes >
    </>
  );
}

