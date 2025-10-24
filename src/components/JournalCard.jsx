import React from "react";

export default function JournalCard({ journal }) {
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
            <h3 className="font-semibold text-lg text-blue-700 mb-1">
                {new Date(journal.date).toLocaleDateString()}
            </h3>
            <p className="text-gray-700 mb-2">{journal.notes}</p>

            {journal.image ? (
                <img
                    src={journal.image}
                    alt="Journal"
                    className="w-full h-48 object-cover rounded-md"
                />
            ) : (
                <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                    No Image
                </div>
            )}
        </div>
    );
}

