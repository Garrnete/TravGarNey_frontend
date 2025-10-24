import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md text-gray-800"
                    : "bg-transparent text-white"
                }`}
        >
            <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                <Link to="/" className="text-2xl font-bold hover:text-yellow-400">
                    TravGarNey
                </Link>
                <div className="flex gap-6 text-lg">
                    <Link to="/" className="hover:text-yellow-400 transition">
                        Home
                    </Link>
                    <Link to="/trips" className="hover:text-yellow-400 transition">
                        Trips
                    </Link>
                    <Link to="/journals" className="hover:text-yellow-400 transition">
                        Journals
                    </Link>
                    <Link
                        to="/trips/add"
                        className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 transition"
                    >
                        + Add Trip
                    </Link>
                </div>
            </div>
        </nav>
    );
}


