import axios from "axios";

const options = {
    headers: {
        Accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_ACCESS_TOKEN
    }
};

export async function getAiringTodaySeries(currentPage) {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${currentPage}`, options);
    console.log(response.data);
    return response.data;
}