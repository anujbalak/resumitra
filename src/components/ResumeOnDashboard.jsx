/* eslint-disable react/no-unknown-property */
import { useState } from "react";

export default function RenderResume({
        name,
        id,
        deleteResumeHandler,
        onEditResume,
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
        <div 
            className="resume-preview-small" 
            onClick={onEditResume} 
            data-title= {name} 
            id={id}
        ></div>
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
            onEditResume={onEditResume}
            value= {name} 
        />}
    </div>
)
}

function ResumeOptions({
        deleteResumeHandler, 
        id,
        onEditResume,
        value
    }) {
    return (
        <div className="resume-options" onClick={(e) => e.stopPropagation()}>
            <button 
                className="edit-resume-btn" 
                id={id} 
                onClick={onEditResume}
                data-title={value}
            >
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