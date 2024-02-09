import { useEffect, useState } from "react";
import "./style.scss";
import { 
    MdLocalMovies, 
    MdOutlineTrendingUp, 
    MdPlayArrow, 
    MdOutlineStarPurple500, 
    MdUpcoming 
} from "react-icons/md";

function SideMenu() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        console.log(windowWidth)
    }, [windowWidth]);

    const moviesMenu = [
        {label: "Now playing", icon: <MdPlayArrow/>, href: "#now-playing-movies"},
        {label: "Popular movies", icon: <MdOutlineTrendingUp/>, href: "#popular-movies"},
        {label: "Top rated", icon: <MdOutlineStarPurple500/>, href: "#top-rated-movies"},
        {label: "Upcoming movies", icon: <MdUpcoming/>, href: "#upcoming-movies"}
    ];

    return (
        <div className="side-menu-container">
            <h1 className="side-menu-category">
                <MdLocalMovies/>
            </h1>
            <ul className="side-nav">
                {moviesMenu.map((menuItem) => {
                    return (
                        <li className="side-nav-item" key={menuItem.label}>
                            <a href={menuItem.href}>
                                {menuItem.icon}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideMenu;