"use client"; // Ensure this is here to use client-side features
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { fetchMovies } from "../lib/api"; // Adjust the import path as necessary

const Recomandedmovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false); // State to manage visibility

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchMovies("action"); // Fetch action movies
        setMovies(moviesData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const handleViewAll = () => {
    setShowAll(!showAll); // Toggle the state to show/hide all movies
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  // Determine the number of movies to show based on the showAll state
  const moviesToShow = showAll ? movies : movies.slice(0, 4);

  return (
    <main className="flex flex-col gap-10 px-20 bg-black py-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <h1 className="text-white font-bold">Recommended</h1>
          <button className="bg-red-500 hover:bg-red-300 text-white py-1 px-3 rounded">
            Action
          </button>
          <button className="bg-transparent ring-1 ring-orange-700 ring-inset hover:bg-red-300 text-white py-1 px-3 rounded">
            Drama
          </button>
          <button className="bg-transparent ring-1 ring-orange-700 ring-inset hover:bg-red-300 text-white py-1 px-3 rounded">
            Comedy
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <h4 className="text-white font-bold">
            View {showAll ? "less" : "all"}
          </h4>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            className="text-white w-8 h-8 cursor-pointer"
            onClick={handleViewAll} // Attach event handler to the icon
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-between">
        {moviesToShow.map((movie) => (
          <div key={movie.imdbID} className="w-52 rounded-lg items-center">
            <div>
              <img
                className="rounded-lg w-full h-64 object-cover"
                src={movie.Poster}
                alt={movie.Title}
              />
            </div>
            <div className="flex flex-col mt-2">
              <h3 className="text-white">{movie.Title}</h3>
              <div className="flex justify-between mt-2">
                <button className="bg-red-500 hover:bg-red-300 text-white py-1 px-2 rounded">
                  HD
                </button>
                <button className="bg-transparent hover:bg-red-300 ring-1 ring-orange-700 ring-inset text-white py-1 px-2 rounded flex items-center">
                  {movie.Year}
                  <FontAwesomeIcon
                    icon={faClock}
                    className="ml-2 h-4 w-4 text-green-50"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Recomandedmovies;
