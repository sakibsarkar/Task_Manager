import "./Register.css";
import SocialAuth from "../SocialAuth/SocialAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { uploadImage } from "../../Hooks & Functions/uploadImage";

const Register = () => {
    const { createAccountWithEmail, naviGateLocation, waitForUser, setWaitForUser } = useContext(Authcontext)

    const [userType, setUserType] = useState("none")


    const handleRegister = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        const image = form.image.files[0]


        // regex
        const capital = /[A-Z]/;
        const special = /[\W_]/

        if (userType === "none") {
            return toast.error("please select your account type")
        }

        if (password.length < 6) {
            toast.error("password should be atleat 6 character")
            return
        }


        if (password !== confirm) {
            return toast.error("password didn't matched")
        }

        if (!capital.test(password)) {
            return toast.error("password should have atleast one capital letter")
        }
        if (!special.test(password)) {
            return toast.error("password should have atleast one special character")
        }

        const toastLoading = toast.loading("Creating your account")
        try {
            const { user } = await createAccountWithEmail(email, password)
            const { data } = await uploadImage(image)
            await updateProfile(user, {
                photoURL: data?.display_url,
                displayName: name
            })
            toast.dismiss(toastLoading)
            toast.success("successfuly created account")
            setWaitForUser(!waitForUser)
        }

        catch {
            toast.dismiss(toastLoading)
            toast.error("something went wrong please try again")
        }

    }

    return (
        <div className="registerContainer">
            <h1>Let's become friends</h1>
            <p>Create your account and try to make your tasks more accurate</p>
            <form onSubmit={handleRegister}>
                <h1>Register</h1>
                <div className="registerFeild">
                    <p>Name</p>
                    <input type="text" name="name" required />
                </div>
                <div className="registerFeild">
                    <p>Email</p>
                    <input type="email" name="email" required />
                </div>
                <div className="brother">
                    <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="none">Select Your Type</option>
                        <option value="Banker">Banker</option>
                        <option value="Professionals">Professionals</option>
                        <option value="Developer">Developer</option>
                    </select>
                    <input type="file" accept="image/*" name="image" required />
                </div>

                <div className="registerFeild">
                    <p>Password</p>
                    <input type="password" name="password" required />
                </div>
                <div className="registerFeild">
                    <p>Confrim Password</p>
                    <input type="password" name="confirm" required />
                </div>

                <button>Register</button>


                <p className="goToLogin">Already have an account ? <Link to={"/login"}>Login</Link></p>

                <SocialAuth marginT={20} />

            </form>
        </div>
    );
};

export default Register;