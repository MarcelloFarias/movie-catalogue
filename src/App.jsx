import React, {useEffect, useState} from "react";
import List from "./components/List/list";
import MovieCard from "./components/MovieCard/movie-card";
import ListPagination from "./components/ListPagination/list-pagination";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "./services/tmdb.movies";

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

    const [topRatedMovies, setTopRatedMovies] = useState(new Array);
    const [topRatedMoviesCurrentPage, setTopRatedMoviesCurrentPage] = useState(1);
    const [topRatedMoviesTotalPages, setTopRatedMoviesTotalPages] = useState(1);

    useEffect(() => {
        getTopRatedMovies(topRatedMoviesCurrentPage).then((response) => {
            setTopRatedMovies(response.results);
            setTopRatedMoviesCurrentPage(response.page);
            setTopRatedMoviesTotalPages(response.total_pages);
        }).catch((error) => console.log(error));
    }, [topRatedMoviesCurrentPage]);

    const [upcomingMovies, setUpcomingMovies] = useState(new Array);
    const [upcomingMoviesCurrentPage, setUpcomingMoviesCurrentPage] = useState(1);
    const [upcomingMoviesTotalPages, setUpcomingMoviesTotalPages] = useState(1);

    useEffect(() => {
        getUpcomingMovies(upcomingMoviesCurrentPage).then((response) => {
            setUpcomingMovies(response.results);
            setUpcomingMoviesCurrentPage(response.page);
            setUpcomingMoviesTotalPages(response.total_pages);
        }).catch((error) => console.log(error));
    }, [upcomingMoviesCurrentPage]);

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

            <section className="container">
                <List>
                    {topRatedMovies?.map((movie) => {
                        return <MovieCard key={movie?.id} movie={movie} />
                    })}
                </List>
                <ListPagination 
                    currentPage={topRatedMoviesCurrentPage}
                    totalPages={topRatedMoviesTotalPages}
                    pageHandler={setTopRatedMoviesCurrentPage}
                />
            </section>

            <section className="container">
                <List>
                    {upcomingMovies?.map((movie) => {
                        return <MovieCard key={movie?.id} movie={movie} />
                    })}
                </List>
                <ListPagination 
                    currentPage={upcomingMoviesCurrentPage}
                    totalPages={upcomingMoviesTotalPages}
                    pageHandler={setUpcomingMoviesCurrentPage}
                />
            </section>
        </>
    );
}

export default App;