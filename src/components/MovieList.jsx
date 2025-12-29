import { useState } from 'react';
import styles from './MovieList.module.css';
import MovieCard from './MovieCard'


function MovieList({movies, isLoading, error}) {
  
  return (
    <div>
      {isLoading && <h2>Завантаження...</h2>}
      {error && <h2 style={{color: 'red'}}>{error}</h2>}
      {movies.length === 0 && <h2>Фільми не знайдено.</h2>}

      <div className={styles.wrapper}>
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
    
  )
}

export default MovieList;
