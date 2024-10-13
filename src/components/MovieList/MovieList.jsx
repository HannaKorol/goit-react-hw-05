import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  /*     const [movies, setMovies] = useState([]); /* State для збереження данних */
  /*     useEffect(() => {  */
  /* useEffect - ініціює запит на сервер для отримання данних і записує в стейт setMovies(data)*/
  /*       const getAllMovies = async () => {
        const data = await fetchMovies();
        setMovies(data);
      };
      getAllMovies();
    }, []); */

  return (
    <div>
      <ul>
        {movies.map((movie /* відмальовуємо данні отримані з бекенду */) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id.toString()}`}>
              {/* to - має бути завжди строкою! */}
              {/* Make sure the URL is dynamic */}
              <p>{movie.title}</p> {/* Display the movie title */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
