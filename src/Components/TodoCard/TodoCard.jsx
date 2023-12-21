import "./TodoCard.css";
import UseAxios from "../../Axios/UseAxios";
import { useDrag } from "react-dnd";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const TodoCard = ({ todo, setMyRefetch, myRefetch }) => {
    const { _id, title, deadline, description, priority, user_email, status } = todo || {}


    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'div',
        item: { id: _id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))


    const token = getItemFromLS("token")
    const axios = UseAxios()

    const handleDelete = async () => {
        await axios.delete(`/delete/task?token=${token}&&id=${_id}`)
        setMyRefetch(!myRefetch)
    }


    return (
        <div className="todoCard" ref={drag} style={isDragging ? { display: "none", cursor: 'grab' } : {}}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="taksInfo">
                <p>Deadline : {deadline}</p>
                <p>Priority :{priority}</p>
            </div>
            <div className="actions">
                <FaTrashAlt className="actionIcon" onClick={() => handleDelete()} />
                <Link to={`/update/${_id}`}><FaPen className="actionIcon" /></Link>
            </div>


        </div>
    );
};

export default TodoCard;