import "./MyTodos.css";
import MyTaskCard from "../../Components/MyTaskCard/MyTaskCard";
import UseAxios from "../../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const MyTodos = () => {
    const token = getItemFromLS("token")
    const axios = UseAxios()

    const { data = [], refetch } = useQuery({
        queryKey: ["todoList"],
        queryFn: async () => {
            const { data: todo } = await axios.get(`/all/todo?token=${token}`)
            return todo

        }
    })


    return (
        <div className="myTaskContainer">
            {
                data?.map(todo => <MyTaskCard refetch={refetch} key={todo._id} todo={todo}></MyTaskCard>)
            }
        </div>
    );
};

export default MyTodos;