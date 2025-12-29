import { useState } from 'react';
import styles from './MovieCard.module.css';

function MovieCard({ movie }) {
  const hasPoster = movie?.Poster && movie.Poster !== 'N/A';

  return (
    <div className={styles.card}>
      {hasPoster ? (
        <img
          className={styles.pic}
          src={movie.Poster}
          alt={movie.Title}
          onError={(e) => {
            e.currentTarget.src =
              'https://ih1.redbubble.net/image.4905811447.8675/raf,360x360,075,t,fafafa:ca443f4786.jpg';
          }}
        />
      ) : (
        <div className={styles.noPoster}>No poster</div>
      )}
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
