import { useState, useEffect } from "react";
import "./style.scss";
import { useParams, useNavigate } from "react-router-dom";
import { getMovie } from "../../services/tmdb.movies";
import { MdKeyboardBackspace } from "react-icons/md";
import Button from "../../components/Button/button";
import ToTopButton from "../../components/ToTopButton/to-top-button";

function Movie() {
    const {movieId} = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);

        getMovie(movieId).then((response) => {
            setMovie(response);
        }).then(() => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }).catch((error) => console.log(error));
    }, [movieId]);

    return (
        <>
            {isLoading ? (
                <main className="movie-details-container loading-movie-container">
                    <h1 className="loading">Loading...</h1>
                </main>
            ) : (
                <>
                    <div className="button-row">
                        <Button onClick={() => navigate("/")}>
                            <MdKeyboardBackspace/> Back to Home
                        </Button>
                    </div>

                    <main className="movie-details-container movie-banner-container">
                        <img src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path} alt="movie-poster" className="movie-backdrop" />
                        <div className="movie-title">
                            <h1 className="movie-name">{movie?.title}</h1>
                            <p>{movie?.tagline}</p>
                        </div>
                    </main>

                    <section className="movie-details-container movie-overview-container">
                        <h1>Overview</h1>
                        <p className="movie-overview">
                            {movie?.overview}
                        </p>
                    </section>

                    <section className="movie-details movie-details-container">
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
                            <Button onClick={() => navigate("/")} style={{marginTop: "50px", marginBottom: "50px"}}>
                                <MdKeyboardBackspace/> Back to Home
                            </Button>     
                         </div>
                    </section>

                    <ToTopButton />
                </>
            )}
        </>
    );
}

export default Movie;