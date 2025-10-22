import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function TripDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [trip, setTrip] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrip = async () => {
            try {
                const res = await api.get(`/trips/${id}`);
                setTrip(res.data);
            } catch (err) {
                console.error("Error fetching trip details:", err);
                setError("Failed to load trip details.");
            } finally {
                setLoading(false);
            }
        };

        fetchTrip();
    }, [id]);

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this trip?")) return;
        try {
            await api.delete(`/trips/${id}`);
            alert("Trip deleted successfully!");
            navigate("/trips");
        } catch (err) {
            console.error("Error deleting trip:", err);
            alert("Failed to delete trip.");
        }
    };

    if (loading) return <p className="text-center mt-10">Loading trip...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
    if (!trip) return <p className="text-center mt-10">Trip not found.</p>;

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            {trip.coverImage && (
                <img
                    src={trip.coverImage}
                    alt={trip.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
            )}

            <h1 className="text-3xl font-semibold mb-2">{trip.title}</h1>
            <p className="text-gray-600 mb-4">
                📍 {trip.location} — {trip.startDate?.substring(0, 10)} to{" "}
                {trip.endDate?.substring(0, 10)}
            </p>

            <p className="text-gray-700 mb-6">{trip.description}</p>

            <div className="flex gap-3">
                {/* ✏️ Edit Button */}
                <Link
                    to={`/edit/${trip._id}`}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                    Edit Trip
                </Link>

                {/* 🗑️ Delete Button */}
                <button
                    onClick={handleDelete}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    Delete Trip
                </button>

                {/* 🔙 Back Button */}
                <Link
                    to="/trips"
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                    Back to All Trips
                </Link>
            </div>
        </div>
    );
}


