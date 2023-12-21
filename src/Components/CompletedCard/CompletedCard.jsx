import "./CompletedCard.css";
import { useDrag } from "react-dnd";
import { FaTrashAlt } from "react-icons/fa";

const CompletedCard = ({ completed }) => {


    const { _id, title, deadline, description, priority, user_email, status } = completed || {}


    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'div',
        item: { id: _id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div className="completedCard" ref={drag} style={isDragging ? { display: "none", cursor: 'grab' } : {}}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="taksInfo">
                <p>Deadline : {deadline}</p>
                <p>Priority :{priority}</p>
            </div>
        </div>
    );
};

export default CompletedCard;

