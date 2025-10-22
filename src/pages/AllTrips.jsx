import React, { useEffect, useState } from "react";
import api from "../api";
import TripCard from "../components/TripCard";

const AllTrips = () => {
  const [trips, setTrips] = useState([]);

  // Fetch trips from backend
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await api.get("/trips");
        setTrips(res.data);
      } catch (err) {
        console.error("Error fetching trips:", err);
      }
    };
    fetchTrips();
  }, []);

  // 🗑 Handle delete
  const handleDelete = async (id) => {
    try {
      await api.delete(`/trips/${id}`);
      setTrips(trips.filter((trip) => trip._id !== id)); // update UI instantly
    } catch (err) {
      console.error("Error deleting trip:", err);
      alert("Failed to delete trip. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Trips</h1>

      {trips.length === 0 ? (
        <p className="text-gray-600">No trips found. Try adding one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <TripCard key={trip._id} trip={trip} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTrips;
