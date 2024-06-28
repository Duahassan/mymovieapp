// utils/api.js
export const fetchMovies = async (query, type = 'search') => {
    const API_KEY = '16d251ac'; // Replace with your actual API key
    const OMDB_API_URL = 'http://www.omdbapi.com/';
  
    try {
      if (type === 'title') {
        const response = await fetch(`${OMDB_API_URL}?apikey=${API_KEY}&t=${query}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        if (data.Response === 'False') throw new Error(data.Error);
        return data; // Return a single movie object
      } else if (type === 'search') {
        const response = await fetch(`${OMDB_API_URL}?apikey=${API_KEY}&s=${query}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        if (data.Response === 'False') throw new Error(data.Error);
        return data.Search; // Return search results array
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  