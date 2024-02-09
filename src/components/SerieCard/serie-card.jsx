import React from "react";
import "./style.scss";

function SerieCard({serie}) {
    return (
        <li className="card">
            <div className="card-badge serie-card-badge">{serie?.vote_average.toFixed(2)}</div>
            <img src={"https://image.tmdb.org/t/p/original" + serie?.poster_path} alt="movie_poster"/>
            <h2>{serie?.name}</h2>
        </li>
    );
}

export default SerieCard;