import { useEffect, useState, useRef, } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { fetchMovies } from "./api";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-12 py-5 fixed w-full z-50 bg-gradient-to-b from-black">

        <div className="flex items-center gap-10">
          <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>

          <div className="hidden md:flex gap-6 text-gray-300 text-sm">
            <p className="hover:text-white cursor-pointer">Home</p>
            <p className="hover:text-white cursor-pointer">TV Shows</p>
            <p className="hover:text-white cursor-pointer">Movies</p>
            <p className="hover:text-white cursor-pointer">New & Popular</p>
            <p className="hover:text-white cursor-pointer">My List</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xl">
          <FaSearch className="cursor-pointer hover:scale-110 transition" />
          <FaBell className="cursor-pointer hover:scale-110 transition" />
          <div className="w-8 h-8 bg-red-600 rounded"></div>
        </div>
      </div>

      {/* HERO */}
      <div
        className="h-[90vh] flex flex-col justify-center px-12 pt-24"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.9), transparent), url('https://image.tmdb.org/t/p/original/yOm993lsJyPmBodlYjgpPwBjXP9.jpg')",
          backgroundSize: "cover",
        }}
      >
        <p className="text-gray-400 mb-2">N SERIES</p>

        <h1 className="text-7xl font-bold mb-4">
          Beyond the Horizon
        </h1>

        <p className="max-w-xl text-gray-300 mb-4">
          An astronaut stranded on an alien world discovers a signal
          that could lead humanity to the stars — or to its extinction.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:scale-105 transition">
            ▶ Play
          </button>
          <button className="bg-gray-700 px-6 py-2 rounded hover:scale-105 transition">
            ℹ More Info
          </button>
        </div>
      </div>

      {/* ROWS */}
      <div className="pb-20">
        <MovieRow title="Trending Neveeeer" type="popular" />
        <MovieRow title="Top Rated" type="top_rated" />
        <MovieRow title="Upcoming" type="upcoming" />
      </div>

    </div>
  );
}

/* MOVIE ROW COMPONENT */
function MovieRow({ title, type }: { title: string; type: string }) {
  const [movies, setMovies] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies(type).then(setMovies);
  }, [type]);

  return (
    <div className="px-12 mt-10">

      <h2 className="text-xl mb-4">{title}</h2>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="min-w-[200px] h-[300px] flex-shrink-0 cursor-pointer"
          >
            <img
              src={movie.poster_path}
              className="w-full h-full object-cover rounded hover:scale-105 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}