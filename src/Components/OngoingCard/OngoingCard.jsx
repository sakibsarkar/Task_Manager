import "./OngoingCard.css";
import { useDrag } from "react-dnd";

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

        <div className="ongoingCard" ref={drag} style={isDragging ? { display: "none", cursor: 'grab' } : {}}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="taksInfo">
                <p>Deadline : {deadline}</p>
                <p>Priority :{priority}</p>
            </div>

        </div>

    );
};

export default OngoingCard;