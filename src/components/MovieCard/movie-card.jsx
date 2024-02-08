import React from "react";

function MovieCard({movie}) {
    return (
        <div className="card">
            <div className="card-badge">{movie?.vote_average.toFixed(2)}</div>
            <img src={"https://image.tmdb.org/t/p/original" + movie?.poster_path} alt="movie_poster"/>
            <h2>{movie?.title}</h2>
        </div>
    );
}

export default MovieCard;