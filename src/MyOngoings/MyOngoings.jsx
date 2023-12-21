import "./MyOngoings.css";
import MyTaskCard from "../Components/MyTaskCard/MyTaskCard";
import UseAxios from "../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { getItemFromLS } from "../LocalStorage/localStorage";

const MyOngoings = () => {

    const token = getItemFromLS("token")
    const axios = UseAxios()

    const { data = [], refetch } = useQuery({
        queryKey: ["todoList"],
        queryFn: async () => {
            const { data: todo } = await axios.get(`/all/ongoing?token=${token}`)
            return todo

        }
    })

    return (
        <div className="ongoingTaskContainer">
            <h1>Ongoing Task</h1>
            {
                data?.map(todo => <MyTaskCard refetch={refetch} key={todo._id} todo={todo}></MyTaskCard>)
            }
        </div>
    );
};

export default MyOngoings;