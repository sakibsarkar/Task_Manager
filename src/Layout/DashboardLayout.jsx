import "./DashboardLayout.css";
import DashboardBar from "../Dashboard/DashboardBar/DashboardBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="dashoboardContainer">
            <DashboardBar />
            <div className="dashOutlet">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;