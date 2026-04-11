import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TrailerModal from "./components/TrailerModal";

export default function MoviePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<any>(null);
    const [showTrailer, setShowTrailer] = useState(false);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((res) => res.json())
            .then(setMovie);
    }, [id]);

    if (!movie) return <div className="text-white p-10">Loading...</div>;

    return (
        <div className="relative text-white">

            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${movie.image?.original})`,
                }}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/70" />

            {/* GRADIENT FADE */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            {/* CONTENT */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center px-10 md:px-20">

                {/* BACK BUTTON */}
                <button
                    onClick={() => navigate("/")}
                    className="absolute top-6 left-6 bg-black/60 hover:bg-black px-4 py-2 rounded-lg backdrop-blur"
                >
                    ⬅ Back
                </button>

                {/* TITLE */}
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
                    {movie.name}
                </h1>

                {/* META INFO */}
                <div className="flex items-center gap-4 mb-4 text-sm md:text-base">
                    <span className="text-green-400 font-semibold">
                        ⭐ {movie.rating?.average || "N/A"}
                    </span>
                    <span className="border px-2 py-1 text-xs">HD</span>
                </div>

                {/* DESCRIPTION */}
                <p className="max-w-xl text-gray-300 mb-6 text-lg">
                    {movie.summary?.replace(/<[^>]+>/g, "")}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4">

                    <button
                        onClick={() => setShowTrailer(true)}
                        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300"
                    >
                        ▶ Play
                    </button>

                    <button className="bg-gray-600/70 px-6 py-3 rounded-lg backdrop-blur hover:bg-gray-500">
                        ℹ More Info
                    </button>
                    {showTrailer && (
                        <TrailerModal
                            title={movie.name}
                            onClose={() => setShowTrailer(false)}
                        />
                    )}

                </div>

            </div>
        </div>
    );
}