import "./DashboardBar.css";
import { BiTask } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { LiaTasksSolid } from "react-icons/lia";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { NavLink } from "react-router-dom";

const DashboardBar = () => {
    return (
        <div className="dashBarContainer">
            <img src="https://i.ibb.co/C6Z3sts/task-Manager-LOGO.png" alt="" className="dashLogo" />


            <div className="dashLinks">
                <NavLink to={"/dashboard/manageTask"}><LiaTasksSolid />Manage Task</NavLink>
                <NavLink to={"/dashboard/createTask"}><MdOutlineCreateNewFolder />Create task</NavLink>
                <NavLink to={"/dashboard/toDo"}><BiTask />To-do Task</NavLink>
                <NavLink to={"/dashboard/ongoing"}><BiTask />OnGoing Task</NavLink>
                <NavLink to={"/"}><IoIosHome />Home</NavLink>
            </div>


        </div>
    );
};

export default DashboardBar;