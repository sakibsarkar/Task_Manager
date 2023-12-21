import "./DashboardBar.css";
import { NavLink } from "react-router-dom";

const DashboardBar = () => {
    return (
        <div className="dashBarContainer">
            <img src="https://i.ibb.co/C6Z3sts/task-Manager-LOGO.png" alt="" className="dashLogo" />


            <div className="dashLinks">
                <NavLink to={"/dashboard/manageTask"}>Manage Task</NavLink>
                <NavLink to={"/dashboard/createTask"}>Create task</NavLink>
                <NavLink to={"/dashboard/toDo"}>To-do</NavLink>
            </div>


        </div>
    );
};

export default DashboardBar;