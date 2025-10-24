import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api";


export default function JournalDetails() {
    const { id } = useParams();
    const [journal, setJournal] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        api
            .get(`/journals/${id}`)
            .then((res) => setJournal(res.data))
            .catch(() => setError("Failed to load journal."));
    }, [id]);


    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this journal?")) return;
        try {
            await api.delete(`/journals/${id}`);
            navigate("/journals");
        } catch {
            alert("Failed to delete journal.");
        }
    };


    if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;
    if (!journal) return <p className="text-center mt-10">Loading...</p>;


    return (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-2">{journal.title}</h1>
            <p className="text-gray-500 mb-4">{journal.date?.substring(0, 10)}</p>
            <p className="text-gray-700 mb-6 whitespace-pre-line">{journal.content}</p>
            <div className="flex gap-4">
                <Link
                    to={`/journals/edit/${journal._id}`}
                    className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
                >
                    ✏️ Edit
                </Link>
                <button
                    onClick={handleDelete}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    🗑 Delete
                </button>
                <Link
                    to="/journals"
                    className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                >
                    🔙 Back
                </Link>
            </div>
        </div>
    );
}
