import React from "react";
import "./style.scss";

function MovieCard({movie}) {
    return (
        <li className="card">
            <div className="card-badge movie-card-badge">{movie?.vote_average.toFixed(2)}</div>
            <img src={"https://image.tmdb.org/t/p/original" + movie?.poster_path} alt="movie_poster"/>
            <h2>{movie?.title}</h2>
        </li>
    );
}

export default MovieCard;