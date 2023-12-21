import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";

const MainLayout = () => {
    const { myToast } = useContext(Authcontext)

    if (myToast) {
        toast
    }

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;