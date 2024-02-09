import React, {useEffect, useState} from "react";
import List from "./components/List/list";
import MovieCard from "./components/MovieCard/movie-card";
import ListPagination from "./components/ListPagination/list-pagination";
import { getNowPlayingMovies, getPopularMovies } from "./services/tmdb.api";

function App() {
    const [nowPlayingMovies, setNowPlayingMovies] = useState(new Array);
    const [nowPlayingMoviesCurrentPage, setNowPlayingMoviesCurrentPage] = useState(1);
    const [nowPlayingMoviesTotalPages, setNowPlayingMoviesTotalPages] = useState(1);

    useEffect(() => {
        getNowPlayingMovies(nowPlayingMoviesCurrentPage).then((response) => {
            setNowPlayingMovies(response.results);
            setNowPlayingMoviesCurrentPage(response.page);
            setNowPlayingMoviesTotalPages(response.total_pages);
        }).catch((error) => console.log(error));
    }, [nowPlayingMoviesCurrentPage]);

    const [popularMovies, setPopularMovies] = useState(new Array);
    const [popularMoviesCurrentPage, setPopularMoviesCurrentPage] = useState(1);
    const [popularMoviesTotalPages, setPopularMoviesTotalPages] = useState(1);

    useEffect(() => {
        getPopularMovies(popularMoviesCurrentPage).then((response) => {
            setPopularMovies(response.results);
            setPopularMoviesCurrentPage(response.page);
            setPopularMoviesTotalPages(response.total_pages);
        }).catch((error) => console.log(error));
    }, [popularMoviesCurrentPage]);

    return (
        <>
            <main className="container">
                <List>
                    {nowPlayingMovies?.map((movie) => {
                        return <MovieCard key={movie?.id} movie={movie} />
                    })}
                </List> 
                <ListPagination 
                    currentPage={nowPlayingMoviesCurrentPage}
                    totalPages={nowPlayingMoviesTotalPages}
                    pageHandler={setNowPlayingMoviesCurrentPage}
                />
            </main>

            <section className="container">
                <List>
                    {popularMovies?.map((movie) => {
                        return <MovieCard key={movie?.id} movie={movie} />
                    })}
                </List>
                <ListPagination 
                    currentPage={popularMoviesCurrentPage}
                    totalPages={popularMoviesTotalPages}
                    pageHandler={setPopularMoviesCurrentPage}
                />
            </section>
        </>
    );
}

export default App;