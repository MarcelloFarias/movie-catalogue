import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Movie from "../pages/Movie/movie";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/movie/:movieId" element={<Movie/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;