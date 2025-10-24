import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

export default function AddEditJournal() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [journal, setJournal] = useState({
        title: "",
        content: "",
        imageUrl: "",
        date: new Date().toISOString().substring(0, 10), // optional default date
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Fetch journal when editing
    useEffect(() => {
        if (id) {
            const fetchJournal = async () => {
                try {
                    const res = await api.get(`/journals/${id}`);
                    setJournal(res.data);
                } catch (err) {
                    console.error("Error loading journal:", err);
                    setError("Failed to load journal details.");
                }
            };
            fetchJournal();
        }
    }, [id]);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setJournal({ ...journal, [name]: value });
    };

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            if (id) {
                await api.put(`/journals/${id}`, journal);
                alert("Journal updated successfully!");
            } else {
                await api.post("/journals", journal);
                alert("Journal added successfully!");
            }
            navigate("/journals");
        } catch (err) {
            console.error("Error saving journal:", err);
            setError("Failed to save journal. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                {id ? "Edit Journal" : "Add Journal"}
            </h2>

            {error && <p className="text-red-600 mb-3">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={journal.title}
                    onChange={handleChange}
                    required
                    className="w-full border p-2 rounded"
                />

                <textarea
                    name="content"
                    placeholder="Write your journal entry..."
                    value={journal.content}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full border p-2 rounded"
                ></textarea>

                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL (optional)"
                    value={journal.imageUrl}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                {/* 🖼️ Live preview */}
                {journal.imageUrl && (
                    <img
                        src={journal.imageUrl}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded border mb-3"
                    />
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    {loading ? "Saving..." : id ? "Update Journal" : "Add Journal"}
                </button>
            </form>
        </div>
    );
}


