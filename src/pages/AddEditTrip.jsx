import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

export default function AddEditTrip() {
  const navigate = useNavigate();
  const { id } = useParams(); // detect edit mode
  const [trip, setTrip] = useState({
    title: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    coverImage: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🧩 If editing, fetch the existing trip
  useEffect(() => {
    if (id) {
      const fetchTrip = async () => {
        try {
          const res = await api.get(`/trips/${id}`);
          setTrip(res.data);
        } catch (err) {
          console.error("Error loading trip:", err);
          setError("Failed to load trip details.");
        }
      };
      fetchTrip();
    }
  }, [id]);

  // 🧩 Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Automatically fix postimg.cc links to direct links
    let fixedValue = value;
    if (name === "coverImage" && value.includes("postimg.cc/")) {
      fixedValue = value
        .replace("postimg.cc/", "i.postimg.cc/")
        .replace(/\/$/, "") + ".jpg";
    }

    setTrip({ ...trip, [name]: fixedValue });
  };

  // 🧩 Handle submit (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (id) {
        // EDIT MODE
        await api.put(`/trips/${id}`, trip);
        alert("Trip updated successfully!");
      } else {
        // ADD MODE
        await api.post("/trips", trip);
        alert("Trip added successfully!");
      }
      navigate("/trips");
    } catch (err) {
      console.error(err);
      setError("Failed to save trip. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        {id ? "Edit Trip" : "Add New Trip"}
      </h2>

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Trip Title"
          value={trip.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={trip.location}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <div className="flex gap-2">
          <input
            type="date"
            name="startDate"
            value={trip.startDate ? trip.startDate.substring(0, 10) : ""}
            onChange={handleChange}
            required
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="date"
            name="endDate"
            value={trip.endDate ? trip.endDate.substring(0, 10) : ""}
            onChange={handleChange}
            required
            className="w-1/2 p-2 border rounded"
          />
        </div>

        <textarea
          name="description"
          placeholder="Trip Description"
          value={trip.description}
          onChange={handleChange}
          rows="3"
          className="w-full p-2 border rounded"
        ></textarea>

        <input
          type="text"
          name="coverImage"
          placeholder="Image URL (optional)"
          value={trip.coverImage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* 🖼️ Live image preview */}
        {trip.coverImage && (
          <img
            src={trip.coverImage}
            alt="Trip Preview"
            className="w-full h-48 object-cover rounded-md border mb-2"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Saving..." : id ? "Update Trip" : "Add Trip"}
        </button>
      </form>
    </div>
  );
}

