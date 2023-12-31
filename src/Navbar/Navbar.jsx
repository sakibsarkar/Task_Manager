import "./Navbar.css";
import { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(Authcontext)
    const [showUserMoadal, setShowUserModal] = useState(false)

    const [showMobileNav, setShowMobileNav] = useState(false)

    return (
        <nav>
            <div className="navWrapper">
                <div className="logo">
                    <img src="https://i.ibb.co/C6Z3sts/task-Manager-LOGO.png" alt="" />
                </div>

                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    {
                        user ?
                            <li><NavLink to={"/dashboard/manageTask"}>Dashboard</NavLink></li>
                            : ""
                    }
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    <li><NavLink to={"/faq"}>FAQ</NavLink></li>
                </ul>
                {
                    user ?
                        <div className="userBox" >

                            <div className="userImg" onClick={() => setShowUserModal(!showUserMoadal)} >
                                <img src={user?.photoURL} alt="" />
                            </div>

                            {
                                showUserMoadal ?
                                    <div className="userModal">
                                        <Link to={"/dashboard/manageTask"} onClick={() => setShowUserModal(!showUserMoadal)} >Dashboard</Link>

                                        <button onClick={logOut}>LogOut</button>
                                    </div>
                                    : ""
                            }

                        </div>
                        :
                        <div className="authButton">
                            <Link to={"/login"} className="authLink">Login</Link>
                            <p>|</p>
                            <Link to={"/register"} className="authLink">Signup</Link>
                        </div>
                }
            </div>

            <div className="mobileNav">
                <IoMenu className={"menuIcon"} onClick={() => setShowMobileNav(!showMobileNav)} />

                {
                    showMobileNav ?
                        <div className="navModal">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/faq"}>FAQ</NavLink>
                            <NavLink to={"/contact"}>Contact</NavLink>
                            <NavLink to={"/dashboard/manageTask"}>Dashboard</NavLink>
                        </div>

                        : ""
                }
            </div>
        </nav>
    );
};

export default Navbar;