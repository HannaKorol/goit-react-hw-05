import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom"; // Import useSearchParams
import MovieList from "../../components/MovieList/MovieList";
import MovieSearchBar from "../../components/MovieSearchBar/MovieSearchBar";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // Initialize searchParams
  const [movies, setMovies] = useState([]); // State for storing movie data

  // Get the search query from URL parameters
  const query =
    searchParams.get("query") || ""; /* searchParams може мати get чи set-закидує обект 35.00 lection 2 */

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTcwYWFlNjYwODI1YTU5ZGVmNjBlMWYwM2MwOGIyZCIsIm5iZiI6MTcyODc2MjMwMi4xMzQ3NjQsInN1YiI6IjY3MGFjYmQ5ZjU4YTkyMDZhYTQwOTc4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ogl8ey4EF5XdNcoYpaavREbQWy_H8qjfJH9JJEDbMaM", // Replace with your actual API key
    },
  };

  const fetchMovies = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          searchQuery
        )}&include_adult=false&language=en-US&page=1`,
        options
      );

      const data = await response.json();
      setMovies(data.results); // Update the movies state with the results
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query); // Fetch movies based on query from URL
    } else {
      setMovies([]); // Clear movies if no query
    }
  }, [query]); // Effect runs when query changes

  const handleChangeQuery = (newQuery) => {
    if (newQuery) {
      setSearchParams({ query: newQuery }); // Update URL with new query
    } else {
      setSearchParams({}); // Clear query from URL if empty
    }
  };

  // You can filter the data here if needed
  const filteredData = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, movies]
  );

  return (
    <div>
      <MovieSearchBar handleChangeQuery={handleChangeQuery} />
      <MovieList movies={filteredData} />
    </div>
  );
};

export default MoviesPage;
