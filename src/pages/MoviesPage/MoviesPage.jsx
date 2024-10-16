import MovieList from "../../components/MovieList/MovieList";
import MovieSearchBar from "../../components/MovieSearchBar/MovieSearchBar";

const MoviesPage = () => {
  const [query, setQuery] = useState('');

  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
}

  return (
    <div>
      <MovieSearchBar handleChangeQuery={handleChangeQuery} />
      <MovieList />
    </div>
  );
};

export default MoviesPage;
