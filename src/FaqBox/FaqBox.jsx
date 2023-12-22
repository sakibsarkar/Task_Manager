import "./FaqBox.css";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FaqBox = ({ faqData }) => {

    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <div className="box">
            <div className="question" onClick={() => setShowAnswer(!showAnswer)}>
                <p>{faqData?.question}</p>
                <MdKeyboardArrowDown className={showAnswer ? "UpDownarrow" : "arrow"} />
            </div>


            <div className="answer" style={showAnswer ? { height: "fit-content" } : { height: "0px", padding: "0" }}>
                <p>{faqData?.answer}</p>
            </div>


        </div>
    );
};

export default FaqBox;