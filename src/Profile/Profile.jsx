import "./Profile.css";
import UseAxios from "../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";
import { getItemFromLS } from "../LocalStorage/localStorage";

const Profile = () => {

    const { user, logOut } = useContext(Authcontext)

    const token = getItemFromLS("token")
    const axios = UseAxios()

    const { data = {} } = useQuery({
        queryKey: ['userProfile'],
        queryFn: async () => {
            const { data: profileData } = await axios.get(`/user?token=${token}`)
            return profileData
        }
    })




    return (
        <div className="profileContainer">
            <div className="profileCard">
                <div className="userImage">
                    <img src={user?.photoURL} alt="" />
                </div>

                <h1>{user?.displayName}</h1>
                <p>{user?.email || "not found"}</p>
                <p>Account type: {data?.userType || "not-selected"}</p>
                <div className="shape"></div>
                <button onClick={logOut}>Logout</button>
            </div>
        </div>
    );
};

export default Profile;