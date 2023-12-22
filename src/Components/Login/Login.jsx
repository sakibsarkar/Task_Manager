import "./Login.css";
import SocialAuth from "../SocialAuth/SocialAuth";
import UseAxios from "../../Axios/UseAxios";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { SlEye } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { addtoLS } from "../../LocalStorage/localStorage";

const Login = () => {


    const [showPass, setShowPass] = useState(false)

    const { loginWithEmail, loading, setNaviGateLocation, myToast, setMyToast } = useContext(Authcontext)

    const location = useLocation()
    const adress = location.state ? location.state : "/"
    setNaviGateLocation(location)

    const axios = UseAxios()

    const navigate = useNavigate()

    // login
    const handleLogin = async (e) => {
        e.preventDefault()

        const { email, password } = e.target

        const toastLoader = toast.loading("trying to login")
        try {
            await loginWithEmail(email.value, password.value)
            const { data } = await axios.post("/user/token")
            addtoLS(data)
            navigate(location.state ? location.state : "/")
            toast.dismiss(toastLoader)
            setMyToast(toast.success("successfully loged in"))
        }
        catch (err) {
            console.log(err)
            toast.dismiss(toastLoader)
            toast.error("please check your email or password again")

        }

    }

    return (
        <div className="logInContainer">
            <h1>Welcome Back</h1>
            <p>Stay connected and finish your Task on time</p>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="formFeild">
                    <p>Email</p>
                    <input required type="email" placeholder="Email" name="email" />
                </div>
                <div className="formFeild">
                    <p>Password</p>
                    <div className="eyeIcon" onClick={() => setShowPass(!showPass)}>
                        {
                            showPass ?
                                <AiOutlineEyeInvisible className="loginEye" />
                                :
                                <SlEye className="loginEye" />
                        }
                    </div>
                    <input required type={showPass ? "text" : "password"} placeholder="Password" name="password" />
                </div>
                <button>Login</button>
                <div className="authActions">
                    <p>New Here? <Link to={"/register"}>Register</Link></p>
                </div>
                <SocialAuth marginT={20} />
            </form>
        </div>
    );
};

export default Login;