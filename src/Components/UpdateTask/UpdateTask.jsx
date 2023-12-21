import "./UpdateTask.css";
import Swal from "sweetalert2";
import UseAxios from "../../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const UpdateTask = () => {
    const { id } = useParams()
    const token = getItemFromLS("token")
    const axios = UseAxios()

    const navigate = useNavigate()

    const { data = {}, isLoading } = useQuery({
        queryKey: ["updateTask"],
        queryFn: async () => {
            const { data: task } = await axios.get(`/single/todo?token=${token}&&id=${id}`)
            return task
        }
    })

    const { _id, title, deadline, description, priority, user_email, status } = data || {}



    const handleUpdate = async (e) => {
        e.preventDefault()
        const form = e.target
        const newTitle = form.title.value
        const newDescription = form.description.value
        const newDeadline = form.deadline.value


        const obj = {
            title: newTitle,
            description: newDescription,
            deadline: newDeadline,
            id: _id
        }

        await axios.put(`/task/update?token=${token}`, obj)
        Swal.fire({
            title: "Successfully updated",
            text: "",
            icon: "success"
        })
        navigate("/dashboard/toDo")


    }


    return (
        <div className="taskUpdateContainer">
            {isLoading ?
                ""
                :
                <form onSubmit={handleUpdate}>

                    <div className="updateFeild">
                        <p>Tittle</p>
                        <input type="text" defaultValue={title} name="title" />
                    </div>


                    <div className="updateFeild">
                        <p>Description</p>
                        <textarea defaultValue={description} name="description" />
                    </div>

                    <div className="updateFeild">
                        <p>Deadline</p>
                        <input type="date" defaultValue={deadline} name="deadline" />
                    </div>

                    <button>Submit</button>

                </form>
            }

        </div>
    );
};

export default UpdateTask;