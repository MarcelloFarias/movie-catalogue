import React, {useEffect, useState} from "react";
import List from "./components/List/list";
import MovieCard from "./components/MovieCard/movie-card";
import ListPagination from "./components/ListPagination/list-pagination";
import { getNowPlayingMovies } from "./services/tmdb.api";

function App() {
    const [nowPlayingMovies, setNowPlayingMovies] = useState(new Array);
    const [nowPlayingMoviesCurrentPage, setNowPlayingMoviesCurrentPage] = useState(1);
    const [nowPlayingMoviesTotalPages, setNowPlayingMoviesTotalPages] = useState(1);

    useEffect(() => {
        getNowPlayingMovies(nowPlayingMoviesCurrentPage)
        .then((response) => {
            setNowPlayingMovies(response.results);
            setNowPlayingMoviesCurrentPage(response.page);
            setNowPlayingMoviesTotalPages(response.total_pages);
        }).catch((error) => console.log(error));
    }, [nowPlayingMoviesCurrentPage]);

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
        </>
    );
}

export default App;