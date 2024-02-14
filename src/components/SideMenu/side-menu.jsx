import "./style.scss";
import {  
    MdOutlineTrendingUp, 
    MdPlayArrow, 
    MdOutlineStarPurple500, 
    MdUpcoming 
} from "react-icons/md";

function SideMenu() {
    const moviesMenu = [
        {label: "Now playing", icon: <MdPlayArrow/>, href: "#now-playing-movies"},
        {label: "Popular movies", icon: <MdOutlineTrendingUp/>, href: "#popular-movies"},
        {label: "Top rated", icon: <MdOutlineStarPurple500/>, href: "#top-rated-movies"},
        {label: "Upcoming movies", icon: <MdUpcoming/>, href: "#upcoming-movies"}
    ];

    return (
        <div className="side-menu-container">
            <ul className="side-nav">
                {moviesMenu.map((menuItem) => {
                    return (
                        <li className="side-nav-item" key={menuItem.label}>
                            <a href={menuItem.href} className="side-nav-link">
                                {menuItem.icon}
                                <p className="side-nav-label">{menuItem.label}</p>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideMenu;