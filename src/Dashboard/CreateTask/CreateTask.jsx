import "./CreateTask.css";
import UseAxios from "../../Axios/UseAxios";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const CreateTask = () => {
    const { user } = useContext(Authcontext)


    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [priority, setPriority] = useState("Low")


    const axios = UseAxios()
    const token = getItemFromLS('token')

    const handleCreateTask = async (value) => {

        const taskInfo = { ...value, priority: priority, user_email: user?.email }
        try {
            const { data } = await axios.post(`/addTask?token=${token}`, taskInfo)
            reset()
            toast.success("successfully added")
        }

        catch (err) {
            toast.error("something went wrong please try again")
            console.log(err);
        }


    }


    return (
        <div className="creteTaskContainer">
            <form onSubmit={handleSubmit(handleCreateTask)}>
                <div className="feildBox">
                    <p>Task Title</p>
                    <input type="text" {...register("title")} required />
                </div>

                <div className="brotherBox">
                    <div className="feildBox">
                        <p>Priority</p>
                        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
                            <option value="Low">Low</option>
                            <option value="Meduim">Medium</option>
                            <option value="High">High</option>
                        </select>

                    </div>

                    <div className="feildBox">
                        <p>Deadline</p>
                        <input type="date"   {...register("deadline")} required />
                    </div>

                </div>


                <div className="feildBox">
                    <p>Description</p>
                    <textarea  {...register("description")} required></textarea>
                </div>
                <button>Add Task</button>
            </form>
        </div>
    );
};

export default CreateTask;