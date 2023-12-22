import "./DashboardBar.css";
import { useState } from "react";
import { BiTask } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { LiaTasksSolid } from "react-icons/lia";
import { LuFileClock } from "react-icons/lu";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { MdTask } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const DashboardBar = () => {


    const [showMoadl, setShowModal] = useState(false)


    return (
        <>
            <div className="dashBarContainer">
                <img src="https://i.ibb.co/C6Z3sts/task-Manager-LOGO.png" alt="" className="dashLogo" />


                <div className="dashLinks">
                    <NavLink to={"/dashboard/manageTask"}><LiaTasksSolid />Manage Task</NavLink>
                    <NavLink to={"/dashboard/createTask"}><MdOutlineCreateNewFolder />Create task</NavLink>
                    <NavLink to={"/dashboard/toDo"}><BiTask />To-do Task</NavLink>
                    <NavLink to={"/dashboard/ongoing"}><LuFileClock />OnGoing Task</NavLink>
                    <NavLink to={"/dashboard/completed"}><MdTask />Completed Task</NavLink>
                    <NavLink to={"/dashboard/profile"}><FaRegUser />My profile</NavLink>
                    <NavLink to={"/"}><IoIosHome />Home</NavLink>
                </div>


            </div>

            <div className="mobileDashbar">

                {
                    showMoadl ?
                        <RxCross2 onClick={() => setShowModal(!showMoadl)} /> :
                        <IoMenu onClick={() => setShowModal(!showMoadl)} />
                }

                
                {
                    showMoadl ?
                        <div className="dashbarModal">

                            <NavLink to={"/dashboard/manageTask"}><LiaTasksSolid />Manage Task</NavLink>
                            <NavLink to={"/dashboard/createTask"}><MdOutlineCreateNewFolder />Create task</NavLink>
                            <NavLink to={"/dashboard/toDo"}><BiTask />To-do Task</NavLink>
                            <NavLink to={"/dashboard/ongoing"}><LuFileClock />OnGoing Task</NavLink>
                            <NavLink to={"/dashboard/completed"}><MdTask />Completed Task</NavLink>
                            <NavLink to={"/dashboard/profile"}><FaRegUser />My profile</NavLink>
                            <NavLink to={"/"}><IoIosHome />Home</NavLink>
                        </div>

                        : ""
                }
            </div>
        </>
    );
};

export default DashboardBar;