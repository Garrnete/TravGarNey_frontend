import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function AllJournals() {
    const [journals, setJournals] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchJournals = async () => {
            try {
                const res = await api.get("/journals");
                setJournals(res.data);
            } catch (err) {
                console.error("Error fetching journals:", err);
                setError("Failed to load journals.");
            }
        };
        fetchJournals();
    }, []);

    return (
        <div className="max-w-5xl mx-auto mt-10 px-6">
            <h1 className="text-3xl font-bold text-center mb-6">My Travel Journals</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {journals.map((journal) => (
                    <div key={journal._id} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-2">{journal.title}</h2>
                        <p className="text-gray-600 mb-3">{journal.date?.substring(0, 10)}</p>
                        <p className="text-gray-700 line-clamp-3">{journal.content}</p>
                        <Link
                            to={`/journals/${journal._id}`}
                            className="text-blue-500 hover:underline mt-3 inline-block"
                        >
                            Read More →
                        </Link>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <Link
                    to="/journals/add"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    ➕ Add New Journal
                </Link>
            </div>
        </div>
    );
}
