import "./Benefit.css";

const Benefit = () => {
    return (
        <div className="benefitWrapper">
            <h1>User Benefits</h1>
            <div className="benefitContainer">
                <div className="benefitBox">
                    <h1>Developers</h1>
                    <p><span>Benefit:</span>Streamline project development and collaboration with a centralized task management system.</p>
                    <p><span>Feature:</span>Code repository integration, issue tracking, sprint planning</p>
                </div>
                <div className="benefitBox">
                    <h1>Professionals</h1>
                    <p><span>Benefit:</span> Enhance productivity and organization within corporate settings.</p>
                    <p><span>Feature:</span>Shared calendars, project timelines, document collaboration.</p>
                </div>
                <div className="benefitBox" style={{ borderBottom: "1px solid #d0d0d0" }}>
                    <h1>Bankers</h1>
                    <p><span>Benefit:</span> Meet deadlines, manage financial tasks, and ensure compliance.</p>
                    <p><span>Feature:</span>Budget tracking, financial report scheduling, deadline reminders.</p>
                </div>
            </div>
        </div>
    );
};

export default Benefit;