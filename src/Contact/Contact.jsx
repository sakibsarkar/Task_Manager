import "./Contact.css";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { Authcontext } from "../AuthProvider/AuthProvider";

const Contact = () => {

    const { user } = useContext(Authcontext)

    return (
        <div className="contactContainer">
            <div className="contactLeft">
                <h1>Contact Us</h1>
                <p>For any questions or inquiries, drop us an <span>email</span> or <span>visit</span>. Your feedback is important to us, and we're here to assist you with any information you need</p>
                <div className="contactLinks">
                    <a href="/">
                        <FaGoogle />
                    </a>
                    <a href="https://www.facebook.com/me.facebook.id" target="_blank" rel="noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="/" rel="noreferrer">
                        <FaXTwitter />
                    </a>
                    <a href="/" rel="noreferrer">
                        <FaInstagram />
                    </a>
                </div>
                <button>Call</button>
            </div>

            <div className="contactRight">
                <div className="contactFeild">
                    <p>Name</p>
                    <input type="text" defaultValue={user?.displayName ? user?.displayName : ""} />
                </div>
                <div className="contactFeild">
                    <p>Email</p>
                    <input type="text" defaultValue={user?.email ? user?.email : ""} />
                </div>
                <div className="contactFeild">
                    <p>Massege</p>
                    <textarea placeholder="Your Message" />
                </div>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Contact;