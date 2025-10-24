import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function JournalDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [journal, setJournal] = useState(null);

    useEffect(() => {
        api.get(`/journals/${id}`).then((res) => setJournal(res.data));
    }, [id]);

    const handleDelete = async () => {
        if (confirm("Delete this journal?")) {
            await api.delete(`/journals/${id}`);
            navigate("/journals");
        }
    };

    if (!journal) return <p>Loading...</p>;

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow">
            {journal.imageUrl && <img src={journal.imageUrl} alt="Journal" className="w-full h-64 object-cover rounded mb-4" />}
            <h1 className="text-3xl font-semibold mb-2">{journal.title}</h1>
            <p className="text-gray-500 mb-4">{new Date(journal.date).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-6 whitespace-pre-line">{journal.content}</p>

            <div className="flex gap-4">
                <Link to={`/journals/edit/${journal._id}`} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</Link>
                <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
                <Link to="/journals" className="bg-gray-400 text-white px-4 py-2 rounded">Back</Link>
            </div>
        </div>
    );
}
