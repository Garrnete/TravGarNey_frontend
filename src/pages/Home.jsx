import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleGetStarted = (e) => {
        e.preventDefault();
        // Smooth scroll animation before navigating
        document.body.classList.add("fade-out");
        setTimeout(() => {
            navigate("/trips");
        }, 500);
    };

    return (
        <div
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`, // light ocean/beach photo
            }}
        >
            {/* Softer overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-20"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-2xl px-4 animate-fadeIn">
                <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
                    Welcome to TravGarney
                </h1>
                <p className="text-2xl font-medium mb-6 text-gray-100 leading-relaxed italic">
                    “Your Story. Your Journey. TravGarney.”
                </p>

                <Link
                    to="/trips"
                    onClick={handleGetStarted}
                    className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg text-lg shadow-md hover:bg-yellow-300 transition"
                >
                    🌍 Get Started
                </Link>
            </div>
        </div>
    );
}


