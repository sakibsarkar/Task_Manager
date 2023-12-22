import "./MyCompleted.css";
import MyTaskCard from "../Components/MyTaskCard/MyTaskCard";
import UseAxios from "../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { getItemFromLS } from "../LocalStorage/localStorage";

const MyCompleted = () => {

    const token = getItemFromLS("token")
    const axios = UseAxios()

    const { data = [], refetch } = useQuery({
        queryKey: ["todoList"],
        queryFn: async () => {
            const { data: todo } = await axios.get(`/all/completed?token=${token}`)
            return todo

        }
    })



    return (
        <div className="completedTaskContainer">
            <h1>Completed Task</h1>
            {
                data?.map(todo => <MyTaskCard showEdit={false} refetch={refetch} key={todo._id} todo={todo}></MyTaskCard>)
            }
        </div>
    );
};

export default MyCompleted;

