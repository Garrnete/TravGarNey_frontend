import React from "react";
import { Link } from "react-router-dom";
import api from "../api";

const TripCard = ({ trip, onDelete }) => {
    const handleDelete = async () => {
        if (confirm("Are you sure you want to delete this trip?")) {
            try {
                await api.delete(`/trips/${trip._id}`);
                onDelete(trip._id);
            } catch (err) {
                console.error("Error deleting trip:", err);
                alert("Failed to delete trip.");
            }
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <img
                src={trip.imageUrl || "/placeholder.jpg"}
                alt={trip.title}
                className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h2 className="text-xl font-semibold mb-1">{trip.title}</h2>
            <p className="text-gray-600 mb-2">
                📍 {trip.location} — {trip.startDate?.substring(0, 10)} to{" "}
                {trip.endDate?.substring(0, 10)}
            </p>
            <p className="text-gray-700 line-clamp-2">{trip.description}</p>

            <div className="mt-3 flex justify-between items-center">
                <Link
                    to={`/trips/${trip._id}`}
                    className="text-blue-500 hover:underline"
                >
                    View Details →
                </Link>
                <button
                    onClick={handleDelete}
                    className="text-red-500 hover:text-red-700 text-sm"
                >
                    🗑 Delete
                </button>
            </div>
        </div>
    );
};

export default TripCard;

