import "./SocialAuth.css";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";

const SocialAuth = ({ marginT = 0 }) => {
    return (
        <div className="socialAuthContainer" style={{ marginTop: `${marginT}px` }}>
            <div className="or">
                <p className="orAuth">Or try this</p>
            </div>
            <div className="socialBox">
                <FcGoogle /> <p>Google</p>
            </div>
            <div className="socialBox">
                <IoLogoGithub /> <p>Github</p>
            </div>

        </div>
    );
};

export default SocialAuth;