import React from "react";

export default function JournalCard({ journal }) {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-blue-700">
                {new Date(journal.date).toLocaleDateString()}
            </h3>
            <p className="text-gray-700 mt-2">{journal.notes}</p>

            {journal.image && (
                <img
                    src={journal.image}
                    alt="Journal"
                    className="mt-3 w-full h-48 object-cover rounded-md"
                />
            )}
        </div>
    );
}
