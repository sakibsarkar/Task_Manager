import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bannerContainer">
            <div className="bannerTxt">
                <h1>Let's manage <br />Your Task</h1>
                <p>Elevate your productivity with our task management website. Organize, prioritize, and collaborate seamlessly. Stay on top of your tasks effortlessly!</p>
                <Link to={"/dashboard"} className="exploreBtn">Let’s Explore</Link>
            </div>
            <div className="bannerImg">
                <img src="https://i.ibb.co/H70mYvx/taskBG.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;