import "./OngoingCard.css";
import { useDrag } from "react-dnd";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const OngoingCard = ({ ongoing }) => {
    const { _id, title, deadline, description, priority, user_email, status } = ongoing || {}
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'div',
        item: { id: _id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div>
            <div className="ongoingCard" ref={drag} style={isDragging ? { display: "none", cursor: 'grab' } : {}}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="taksInfo">
                    <p>Deadline : {deadline}</p>
                    <p>Priority :{priority}</p>
                </div>

            </div>
        </div>
    );
};

export default OngoingCard;