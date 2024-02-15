import "./style.scss";
import { IoArrowUpOutline } from "react-icons/io5";

function ToTopButton() {
    return (
        <>
            <button className="btn-scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
                <IoArrowUpOutline/>
            </button>
        </>
    );
}

export default ToTopButton;