/* eslint-disable react/no-unknown-property */
import { useState } from "react";

export default function RenderResume({
        name,
        id,
        deleteResumeHandler,
    }) {
    const [showOptions, setShowOptions] = useState(false);

    function handleBtnClick(e) {
        e.stopPropagation();
        if (showOptions) {
            setShowOptions(false);
        } else {
            setShowOptions(true);
        }
    }

    window.onclick = () => {
        setShowOptions(false);
    }

    return (
    <div className="resume-container">
        <div className="resume-preview-small"></div>
        <div className="resume-properties">
            <h2 className="resume-name">{name}</h2>
            <div className="three-dot-container">
                <button onClick={handleBtnClick}>┇</button>
            </div>
        </div>
        {showOptions === true 
        && <ResumeOptions 
            deleteResumeHandler={deleteResumeHandler}
            id={id}
        />}
    </div>
)
}

function ResumeOptions({deleteResumeHandler, id}) {
    return (
        <div className="resume-options" onClick={(e) => e.stopPropagation()}>
            <button className="edit-resume-btn" id={id}>
                Edit
            </button>
            <button 
                className="delete-resume-btn"
                onClick={deleteResumeHandler} 
                id={id}
            >
                Delete
            </button>
        </div>
    )
}