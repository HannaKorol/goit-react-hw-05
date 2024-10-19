import { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom"; // Import useSearchParams
import MovieList from "../../components/MovieList/MovieList";
import MovieSearchBar from "../../components/MovieSearchBar/MovieSearchBar";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // Initialize searchParams
  const [movies, setMovies] = useState([]); // State for storing movie data
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  console.log(location);


  // Get the search query from URL parameters
  const query =
    searchParams.get("query") ||
    ""; /* searchParams може мати get - отримує обект чи set-закидує обект до URL безпосередньо -  35.00 lection 2 */

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTcwYWFlNjYwODI1YTU5ZGVmNjBlMWYwM2MwOGIyZCIsIm5iZiI6MTcyODc2MjMwMi4xMzQ3NjQsInN1YiI6IjY3MGFjYmQ5ZjU4YTkyMDZhYTQwOTc4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ogl8ey4EF5XdNcoYpaavREbQWy_H8qjfJH9JJEDbMaM", // Replace with your actual API key
    },
  };

  const fetchMovies = async (searchQuery) => {
    setLoading(true); // Встановлюємо loading в true на початку
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
    } finally {
      setLoading(false); // Завжди встановлюємо loading в false наприкінці
    }
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query); // Завантажуємо фільми
    } else {
      setMovies([]); // Очищуємо фільми, якщо запит пустий
    }
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    if (newQuery) {
      setSearchParams({ query: newQuery }); // запдейтуємо URL з newquery
    } else {
      setSearchParams({}); // Якщо URL пустий, очищаємо query
    }
  };

  // Зфільтруємо данні за допомогою useMemo *лекція 2
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
      {loading ? ( // Відображаємо лоадер, якщо loading true
        <p className={s.paragraph}>Loading...</p> // Текст лоадера
      ) : query ? ( // Якщо є запит
        filteredData.length > 0 ? ( // Якщо є фільми в filteredData
          <MovieList movies={filteredData} /* location={location} */ />
        ) : (
          // Якщо фільмів немає
          <p className={s.paragraph}>No movies available</p> // Повідомлення про відсутність фільмів
        )
      ) : (
        // Якщо запиту немає
        <p className={s.paragraph}>Please enter a movie title to search.</p> // Повідомлення про необхідність вводу
      )}
    </div>
  );
};

export default MoviesPage;
