import React, { useEffect, useState } from "react";
import api from "../api";
import JournalCard from "../components/JournalCard";


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
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">All Journals</h1>


            {journals.length === 0 ? (
                <p className="text-gray-500">No journals yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {journals.map((journal) => (
                        <JournalCard key={journal._id} journal={journal} />
                    ))}
                </div>
            )}
        </div>
    );
}
