import "./style.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button/button";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <p>Built with ❤️ by Marcello Farias</p>
                <div>
                    <Link to="https://github.com/MarcelloFarias">
                        <Button style={{fontSize: "1.2rem"}}>
                            <FaGithub/>
                        </Button>
                    </Link>

                    <Link to="https://www.linkedin.com/in/marcello-rocha-381572231/">
                        <Button style={{marginLeft: "10px", fontSize: "1.2rem"}}>
                            <FaLinkedin/>
                        </Button>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;