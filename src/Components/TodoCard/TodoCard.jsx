import "./TodoCard.css";
import { useDrag } from "react-dnd";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

const TodoCard = ({ todo }) => {
    const { _id, title, deadline, description, priority, user_email, status } = todo || {}


    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'div',
        item: { id: _id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div className="todoCard" ref={drag} style={isDragging ? { display: "none", cursor: 'grab' } : {}}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="taksInfo">
                <p>Deadline : {deadline}</p>
                <p>Priority :{priority}</p>
            </div>
            <div className="actions">
                <FaTrashAlt className="actionIcon" />
                <FaPen className="actionIcon" />
            </div>


        </div>
    );
};

export default TodoCard;