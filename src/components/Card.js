import React from "react";

const Card = ({ movie, genres }) => {
  return (
    <li className="card">
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt={"movie : " + movie.title}
      />
      <h2>{movie.title}</h2>
      <h5>{movie.release_date}</h5>
      <h4>
        {movie.vote_average} <span>★</span>
      </h4>
      <ul>
        {/* Affichage d'un <li> par genre */}
        {movie.genre_ids
          .map((id) => genres[id])
          .filter(Boolean)
          .map((genreName, index) => (
            <li key={index}>{genreName}</li>
          ))}
      </ul>
      <h3>Synopsis</h3>
      <p>{movie.overview}</p> 
    </li>
  );
};

export default Card;
