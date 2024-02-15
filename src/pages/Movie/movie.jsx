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
                <img src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path} alt="movie-poster" className="movie-backdrop" />
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
                <div className="movie-poster-container">
                    <img src={"https://image.tmdb.org/t/p/original" + movie?.poster_path} alt="movie-poster" className="movie-poster"/>                                         
                </div>
                <div className="movie-details">
                    <p className="movie-detail">Duration - {movie?.runtime} min</p>
                    <p className="movie-detail">Release - {movie?.release_date.replaceAll("-", "/")}</p>
                    <p className="movie-detail">Rating - {movie?.vote_average.toFixed(2)}</p>
                    <div className="movie-genres">
                        <span>Genres</span>
                        {movie?.genres.map((genre) => {
                            return <p className="movie-detail" key={genre.id}>{genre.name}</p>
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Movie;