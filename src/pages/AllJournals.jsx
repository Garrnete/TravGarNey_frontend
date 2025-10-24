import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function AllJournals() {
    const [journals, setJournals] = useState([]);

    useEffect(() => {
        const fetchJournals = async () => {
            try {
                const res = await api.get("/journals");
                setJournals(res.data);
            } catch (err) {
                console.error("Error fetching journals:", err);
            }
        };
        fetchJournals();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">My Journals</h1>
            <Link to="/journals/add" className="bg-blue-600 text-white px-4 py-2 rounded">+ Add Journal</Link>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {journals.map((j) => (
                    <Link key={j._id} to={`/journals/${j._id}`} className="block p-4 border rounded shadow hover:shadow-md">
                        <h2 className="font-semibold text-lg">{j.title}</h2>
                        <p className="text-gray-600 text-sm">{new Date(j.date).toLocaleDateString()}</p>
                        <p className="text-gray-700 mt-2 line-clamp-3">{j.content}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
