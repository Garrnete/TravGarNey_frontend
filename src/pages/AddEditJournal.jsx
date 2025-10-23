import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

export default function AddEditJournal() {
    const [journal, setJournal] = useState({ title: "", content: "", date: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            api.get(`/journals/${id}`)
                .then((res) => setJournal(res.data))
                .catch(() => setError("Failed to load journal."));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJournal({ ...journal, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await api.put(`/journals/${id}`, journal);
            } else {
                await api.post("/journals", journal);
            }
            navigate("/journals");
        } catch (err) {
            console.error(err);
            setError("Failed to save journal.");
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">
                {id ? "Edit Journal" : "Add New Journal"}
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
                    className="w-full p-2 border rounded"
                />
                <input
                    type="date"
                    name="date"
                    value={journal.date?.substring(0, 10)}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <textarea
                    name="content"
                    placeholder="Write about your trip..."
                    value={journal.content}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-2 border rounded"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    {id ? "Update Journal" : "Save Journal"}
                </button>
            </form>
        </div>
    );
}
