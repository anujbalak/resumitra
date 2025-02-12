/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import threeDotsIcon from "/svg/three-dots.svg";
import LiveResume from "./LiveResume";
import preset from "/templates/template_1.png"

export default function RenderResume({
        name,
        id,
        deleteResumeHandler,
        onEditResume,
    }) {
    const [showOptions, setShowOptions] = useState(false);

    const savedResume = JSON.parse(localStorage.getItem(id));
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
        >
        {savedResume ?
         <LiveResume 
            resumeData={savedResume} 
            showProfile={true}
            showEducation={true}
            showExperience={true}
            showProjects={true}
        /> :
         <img src={preset} alt="" className="preset-img-on-dashboard" />   
        }
        </div>
        <div className="resume-properties">
            <h2 className="resume-name">{name}</h2>
            <div className="three-dot-container">
                <button onClick={handleBtnClick}>
                    <img className="three-dots icon" src={threeDotsIcon} alt="" />
                </button>
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