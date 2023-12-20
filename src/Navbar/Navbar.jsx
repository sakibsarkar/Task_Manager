import "./Navbar.css";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user } = useContext(Authcontext)
    return (
        <nav>
            <div className="navWrapper">
                <div className="logo">
                    <img src="https://i.ibb.co/C6Z3sts/task-Manager-LOGO.png" alt="" />
                </div>

                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
                    <li><NavLink to={"/dashboard"}>Contact</NavLink></li>
                    <li><NavLink to={"/dashboard"}>About</NavLink></li>
                </ul>
                {
                    user ?
                        ""
                        :
                        <div className="authButton">
                            <Link to={"/login"} className="authLink">Login</Link>
                            <p>|</p>
                            <Link to={"/register"} className="authLink">Signup</Link>
                        </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;