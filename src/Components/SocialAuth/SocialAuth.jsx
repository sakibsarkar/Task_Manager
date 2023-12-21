import "./SocialAuth.css";
import toast from "react-hot-toast";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const SocialAuth = ({ marginT = 0 }) => {

    const { googleAuthentication, gitHubAuthentication, naviGateLocation, myToast, setMyToast } = useContext(Authcontext)

    const adress = naviGateLocation.state ? naviGateLocation.state : "/"
    const navigate = useNavigate()

    const handleMeadiaLogin = async (media) => {

        await media()
        setMyToast(toast.success("successfully loged in"))
        navigate(adress)


    }

    return (
        <div className="socialAuthContainer" style={{ marginTop: `${marginT}px` }}>
            <div className="or">
                <p className="orAuth">Or try this</p>
            </div>
            <div className="socialBox" onClick={() => handleMeadiaLogin(googleAuthentication)}>
                <FcGoogle /> <p>Google</p>
            </div>
            <div className="socialBox" onClick={() => handleMeadiaLogin(gitHubAuthentication)}>
                <IoLogoGithub /> <p>Github</p>
            </div>

        </div>
    );
};

export default SocialAuth;