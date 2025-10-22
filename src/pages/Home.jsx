import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-fixed flex flex-col justify-center items-center text-center text-white"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')",
            }}
        >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* ✅ Navigation inside the hero */}
            <nav className="absolute top-6 right-10 z-20 flex gap-6 text-lg">
                <Link
                    to="/"
                    className="text-white hover:text-blue-300 transition font-semibold"
                >
                    TravGarney
                </Link>
                <Link
                    to="/trips"
                    className="text-white hover:text-blue-300 transition font-semibold"
                >
                    All Trips
                </Link>
                <Link
                    to="/add"
                    className="text-white hover:text-green-300 transition font-semibold"
                >
                    Add Trip
                </Link>
            </nav>

            {/* Content */}
            <div className="relative z-10 px-6 py-20 animate-fadeIn max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                    🌍 Welcome to <span className="text-blue-300">TravGarney</span>
                </h1>

                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                    Your digital travel companion — record your journeys, capture beautiful
                    moments, and relive your adventures from anywhere in the world.
                </p>

                <div className="flex gap-4 flex-wrap justify-center">
                    <Link
                        to="/trips"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-md transition transform hover:scale-105"
                    >
                        ✈️ View All Trips
                    </Link>
                    <Link
                        to="/add"
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium shadow-md transition transform hover:scale-105"
                    >
                        🗺️ Add New Trip
                    </Link>
                </div>
            </div>
        </div>
    );
}

