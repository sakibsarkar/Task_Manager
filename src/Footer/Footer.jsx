import "./Footer.css";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <footer>
            <div className="footerTop">
                <h1>Task Manager</h1>
                <p>Our task management website caters to a diverse audience, providing valuable features and benefits tailored to various professions and lifestyles. </p>
                <div className="footerSocailLinks">
                    <a href="/">
                        <FaGoogle />
                    </a>
                    <a href="https://www.facebook.com/me.facebook.id" target="_blank" rel="noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="/" rel="noreferrer">
                        <FaXTwitter />
                    </a>
                    <a href="/" rel="noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>

            <div className="footerBottom">
                <p>Copyrighted by <span>@taskmanager</span>. All right reserved {year}</p>
            </div>
        </footer>
    );
};

export default Footer;

