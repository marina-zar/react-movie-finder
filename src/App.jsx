import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('batman');

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);

        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${process.env.KEY}`
        );

        if (!response.ok) {
          throw new Error(`Помилка HTTP! Статус: ${response.status}`);
        }

        const data = await response.json();

        if (data.Response === 'True') {
          const seen = new Set();
          const uniqueMovies = data.Search.filter((movie) => {
            if (seen.has(movie.imdbID)) return false;
            seen.add(movie.imdbID);
            return true;
          });

          setMovies(uniqueMovies);
          // console.log(data);
        } else {
          throw new Error(data.Error);
        }

        setError(null);
      } catch (err) {
        setError(err.message);
        setMovies([]);
        
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  return (
    <div className="container">
      <h2>Пошук фільмів по запиту</h2>
      <SearchBar onSearch={setQuery} />
      <MovieList movies={movies} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
