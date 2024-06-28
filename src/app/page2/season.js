"use client";
// components/EpisodeList.js
import { useState } from "react";

const EpisodeList = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  const episodes = [
    { id: 1, title: "Episode 1: Freedom Day" },
    { id: 2, title: "Episode 2: Holston's Pick" },
    { id: 3, title: "Episode 3: Machines" },
    { id: 4, title: "Episode 4: Truth" },
    { id: 5, title: "Episode 5: The Janitor's Boy" },
    { id: 6, title: "Episode 6: The Relic" },
  ];

  return (
    <div className="p-4 bg-black text-white max-w-md mx-auto">
      <h2 className="text-xl mb-4">Season 1</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto">
        {episodes.map((episode) => (
          <button
            key={episode.id}
            className={`w-full p-3 text-left rounded ${
              selectedEpisode === episode.id
                ? "bg-red-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setSelectedEpisode(episode.id)}
          >
            {episode.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
