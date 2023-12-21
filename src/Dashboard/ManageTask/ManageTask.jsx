import "./ManageTask.css";
import CompletedCard from "../../Components/CompletedCard/CompletedCard";
import OngoingCard from "../../Components/OngoingCard/OngoingCard";
import Swal from "sweetalert2";
import TodoCard from "../../Components/todoCard/TodoCard";
import UseAxios from "../../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const ManageTask = () => {
    const token = getItemFromLS("token")
    const axios = UseAxios()
    const [myRefetch, setMyRefetch] = useState(false)

    const [data, SetData] = useState({})
    const [isLoading, setIsloading] = useState(false)
    // const { data = {}, refetch, isLoading } = useQuery({
    //     queryKey: ['manageTask', myRefetch],
    //     queryFn: async () => {
    //         const { data: tasks } = await axios.get(`/all/task?token=${token}`)
    //         return tasks
    //     }
    // })


    useEffect(() => {
        setIsloading(true)
        axios.get(`/all/task?token=${token}`)
            .then(({ data: taskData }) => {
                SetData(taskData)
                setIsloading(false)
            })

    }, [myRefetch, token, axios])


    // -------------------todo to onGoing drop ----------------------

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "div",
        drop: async (item) => await handleOngoing(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    // change the status into onGoing
    const handleOngoing = async (id) => {
        await axios.put(`/change/ongoing?token=${token}&&id=${id}`)
        Swal.fire({
            title: "Successful",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        });

    }


    // ----------------ongoing to complete drop---------------

    const [{ isOver: isGoing }, dropTocompleted] = useDrop(() => ({
        accept: "div",
        drop: async (item) => await handleComleted(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    // change the status into Completed
    const handleComleted = async (id) => {
        await axios.put(`/change/completed?token=${token}&&id=${id}`)
        Swal.fire({
            title: "Successful",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        });

    }



    // ----------------chnage to todo---------------

    const [{ isOver: isTodo }, dropToTodo] = useDrop(() => ({
        accept: "div",
        drop: async (item) => await handleTodo(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    // change the status into Completed
    const handleTodo = async (id) => {
        await axios.put(`/change/todo?token=${token}&&id=${id}`)
        Swal.fire({
            title: "Successful",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        });

    }

    



    return (
        <div className="taskManageContainer">
            {
                isLoading ?
                    ""
                    :
                    <>
                        <div className="todoContainer taskBox" ref={dropToTodo} style={isTodo ? { background: "#37b5ff2b" } : {}}>
                            <h1>To-do Task</h1>
                            <div className="todoCards" >
                                {
                                    data?.toDo?.map(todo => <TodoCard key={todo._id} todo={todo} myRefetch={myRefetch} setMyRefetch={setMyRefetch} />)

                                }
                            </div>
                        </div>

                        <div className="ongoingContainer taskBox" ref={drop} style={isOver ? { background: "#37b5ff2b" } : {}}>
                            <h1>Ongoing Task</h1>
                            <div className="ongoingCards">
                                {
                                    data?.onGoing?.map(ongoing => <OngoingCard key={ongoing._id} ongoing={ongoing} />)

                                }
                            </div>
                        </div>

                        <div className="completedContainer taskBox" ref={dropTocompleted} style={isGoing ? { background: "#37b5ff2b" } : {}}>
                            <h1>Completed Task</h1>
                            <div className="completedCards">
                                {
                                    data?.completed?.map(todo => <CompletedCard key={todo._id} completed={todo} />)

                                }
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default ManageTask;