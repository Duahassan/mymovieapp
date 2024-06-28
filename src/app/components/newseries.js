"use client"; // Ensure this is here to use client-side features
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { fetchMovies } from "../lib/api"; // Adjust the import path to your actual location

const Newreleaseseries = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false); // State to manage visibility

  useEffect(() => {
    const loadSeries = async () => {
      try {
        const seriesData = await fetchMovies("new"); // Fetch new release series
        setSeries(seriesData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadSeries();
  }, []);

  const handleViewAll = () => {
    setShowAll(true); // Update state to show all series
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  // Determine the number of series to show based on the showAll state
  const seriesToShow = showAll ? series : series.slice(0, 4);

  return (
    <div className="flex gap-10 justify-center flex-col px-20 py-10 bg-black">
      <div className="flex justify-between">
        <h1 className="text-white font-bold">New Release Series</h1>
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
        {seriesToShow.map((seriesItem) => (
          <div
            key={seriesItem.imdbID}
            className="rounded-lg items-center justify-between"
          >
            <div>
              <img
                className="rounded-lg w-52 h-64"
                src={
                  seriesItem.Poster !== "N/A"
                    ? seriesItem.Poster
                    : "/placeholder.jpg"
                } // Use a placeholder image if no poster is available
                alt={seriesItem.Title}
              />
            </div>
            <div className="flex justify-between mt-2">
              <h3 className="flex text-normal text-slate-600 text-sm">
                {seriesItem.Title}
              </h3>
              <div className="flex justify-end gap-2">
                <button className="bg-red-500 flex hover:bg-red-300 items-center text-white rounded">
                  HD
                </button>
                <button className="bg-transparent flex hover:bg-red-300 ring-1 ring-orange-700 ring-inset text-white rounded">
                  3:12:00
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
    </div>
  );
};

export default Newreleaseseries;
