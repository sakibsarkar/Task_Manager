import "./MyTaskCard.css";
import Swal from "sweetalert2";
import UseAxios from "../../Axios/UseAxios";
import toast from "react-hot-toast";
import { FaTrashCan } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const MyTaskCard = ({ todo, refetch, showEdit = true }) => {
    const { _id, title, deadline, description, priority, user_email, status } = todo || {}

    const token = getItemFromLS("token")
    const axios = UseAxios()


    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    if (formattedDate == deadline && showEdit) {
        toast.error(`Today is deadline for "${title}"`)
    }

    const handleDelete = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`/delete/task?token=${token}&&id=${_id}`)
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className="taskContainer">
            <h1>{title}</h1>
            <div className="taskDescription">
                <p>{description}</p>
            </div>
            <p className="taskInfo">Priority : <span>{priority}</span></p>
            <p className="taskInfo">Deadline: <span>{deadline}</span></p>

            <div className="taskAction">
                <p className="taskActionIcon" style={{ background: "#e92424" }} onClick={handleDelete}>
                    <FaTrashCan />
                </p>
                {
                    showEdit ?
                        <Link className="taskActionIcon" to={`/update/${_id}`} style={{ background: "#37b5ff" }}>
                            <MdEdit />
                        </Link>
                        : ""
                }
            </div>
        </div>
    );
};

export default MyTaskCard;