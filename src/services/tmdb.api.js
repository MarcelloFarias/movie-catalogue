import axios from "axios";

export async function getNowPlayingMovies(currentPage) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`, {
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + import.meta.env.VITE_TMDB_ACCESS_TOKEN
        }
    });
    return response.data;
}