import axios from "axios";

const options = {
    headers: {
        Accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_ACCESS_TOKEN
    }
};

export async function getNowPlayingMovies(currentPage) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`, options);
    return response.data;
}

export async function getPopularMovies(currentPage) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`, options);
    return response.data;
}

export async function getTopRatedMovies(currentPage) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${currentPage}`, options);
    return response.data;
}

export async function getUpcomingMovies(currentPage) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${currentPage}`, options);
    return response.data;
}

export async function getMovie(movieId) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    return response.data;
}