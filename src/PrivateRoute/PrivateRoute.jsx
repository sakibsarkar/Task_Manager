import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(Authcontext)
    if (user) {
        return children
    }
    if (loading) {
        return "loading"
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;