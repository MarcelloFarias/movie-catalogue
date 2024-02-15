import { useState, useEffect } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { getMovie } from "../../services/tmdb.movies";

function Movie() {
    const {movieId} = useParams();

    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        getMovie(movieId).then((response) => {
            setMovie(response);
        }).catch((error) => console.log(error));
    }, [movieId]);

    return (
        <>
            <main className="movie-details-container movie-banner-container">
                <img src={"https://image.tmdb.org/t/p/original" + movie?.poster_path} alt="movie-poster" className="movie-poster" />
                <div className="movie-title">
                    <h1>{movie?.title}</h1>
                    <p>{movie?.tagline}</p>
                </div>
            </main>

            <div className="movie-overview-container">
                <div className="movie-details-row">
                    <h2>Overview</h2>
                </div>
                <p className="movie-overview">
                    {movie?.overview}
                </p>
            </div>

            <section className="movie-details-container">
                
            </section>
        </>
    );
}

export default Movie;