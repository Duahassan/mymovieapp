"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { fetchMovies } from "../lib/api"; // Adjust the import path as needed

const Newreleasemovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false); // State to manage visibility

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchMovies('new'); // Fetch new release movies using your API function
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
    setShowAll(true); // Update state to show all movies
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  // Determine the number of movies to show based on the showAll state
  const moviesToShow = showAll ? movies : movies.slice(0, 4);

  return (
    <main className="flex justify-center gap-10 flex-col px-20 bg-black py-10">
      <div className="flex justify-between">
        <h1 className="text-white font-bold">New Release Movies</h1>
        <div className="flex gap-4">
          <h4 className="flex text-white items-center font-bold">View all</h4>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            className="flex fa-solid fa-arrow-right text-white w-8 h-8 cursor-pointer"
            onClick={handleViewAll} // Attach event handler to the icon
          />
        </div>
      </div>

      <div className="flex justify-between gap-10 flex-wrap">
        {moviesToShow.map((movie) => (
          <div key={movie.imdbID} className="rounded-lg items-center justify-between">
            <div>
              <img
                className="rounded-lg w-52 h-64"
                src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'} // Use a placeholder image if no poster is available
                alt={movie.Title}
              />
            </div>
            <div className="flex justify-between mt-2">
              <h3 className="flex text-sm text-slate-600">
                {movie.Title}
              </h3>
              <div className="flex justify-end gap-2">
                <button className="bg-red-500 flex hover:bg-red-300 items-center text-white rounded">
                  HD
                </button>
                <button className="bg-transparent flex hover:bg-red-300 ring-1 ring-orange-700 ring-inset text-white rounded">
                  {movie.Year}
                  <FontAwesomeIcon
                    icon={faClock}
                    className="fa-regular fa-circle-play flex mt-1 ml-2 h-4 w-4 text-green-50"
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

export default Newreleasemovies;
