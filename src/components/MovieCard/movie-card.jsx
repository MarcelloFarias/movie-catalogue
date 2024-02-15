import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function MovieCard({movie}) {
    return (
        <li className="card">
            <div className="card-badge movie-card-badge">{movie?.vote_average.toFixed(2)}</div>
            <Link to={`/movie/${movie?.id}`}>
                <img src={"https://image.tmdb.org/t/p/original" + movie?.poster_path} alt="movie_poster"/>
            </Link>
            <h2>{movie?.title}</h2>
        </li>
    );
}

export default MovieCard;