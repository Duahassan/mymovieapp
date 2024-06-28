"use client"

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { fetchMovies } from "../lib/api"; // Adjust the import path to match your project structure

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTrendingMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const trendingMovies = await fetchMovies('trending'); // Fetch trending movies from API
        setMovies(trendingMovies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTrendingMovies();
  }, []);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex flex-col gap-10 justify-center bg-black px-20">
      <div className="flex justify-between py-5">
        <h1 className="text-white font-bold">Trending</h1>
        <div className="flex gap-4">
          <h4 className="flex text-white items-center font-bold">View all</h4>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            className="flex fa-solid fa-arrow-right text-white w-8 h-8"
          />
        </div>
      </div>

      <div className="flex justify-between space-x-10">
        {movies.slice(0, 3).map((movie) => (
          <div key={movie.imdbID} className="shadow-lg rounded-lg relative">
            <div>
              <img
                className="rounded-lg h-[325px] w-[455px]"
                src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'} // Use a placeholder image if no poster is available
                alt={movie.Title}
              />
              <div className="absolute top-32 left-48	">
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="fa-regular fa-circle-play flex mt-1 ml-2 h-10 w-10 text-green-50"
                />
              </div>
            </div>
            <div className="flex gap-5 py-5">
              <h3 className="flex mb-3 text-xl font-bold text-slate-600">
                {movie.Title}
              </h3>
              <div className="flex ml-auto gap-2">
                {/* Ensure Genre is defined and split it, else fallback to an empty array */}
                {(movie.Genre ? movie.Genre.split(', ') : []).slice(0, 3).map((genre, index) => (
                  <button
                    key={index}
                    className="bg-red-500 flex hover:bg-red-300 text-white py-1 px-3 rounded"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;


//     <div className="flex flex-col gap-10 justify-center bg-black px-20">
//       <div className="flex justify-between py-5">
//         <h1 className="text-white font-bold">Trending</h1>
//         <div className="flex gap-4">
//           <h4 className="flex text-white items-center font-bold">View all</h4>
//           <FontAwesomeIcon
//             icon={faArrowCircleRight}
//             className="flex fa-solid fa-arrow-right text-white w-8 h-8"
//           />
//         </div>
//       </div>

//       <div className="flex justify-between space-x-10">
//         {movies.slice(0, 3).map((movie) => (
//           <div key={movie.imdbID} className="shadow-lg rounded-lg relative">
//             <div>
//               <img
//                 className="rounded-lg"
//                 src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'} // Use a placeholder image if no poster is available
//                 alt={movie.Title}
//               />
//               <div className="absolute top-32 left-48">
//                 <FontAwesomeIcon
//                   icon={faPlayCircle}
//                   className="fa-regular fa-circle-play flex mt-1 ml-2 h-10 w-10 text-green-50"
//                 />
//               </div>
//             </div>
//             <div className="flex gap-5 py-5">
//               <h3 className="flex mb-3 text-xl font-bold text-slate-600">
//                 {movie.Title}
//               </h3>
//               <div className="flex ml-auto
