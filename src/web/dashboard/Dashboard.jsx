import { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/header";

export default function Dashboard() {
    const [newResume, setNewResume] = useState(false);
    const [resumeList, setResumeList] = useState([]);
    
    const savedResumes = JSON.parse(localStorage.getItem('resumeList'));
    window.onload = function() {
        console.log(true);
        // if (savedResumes) {
        //     setResumeList(...resumeList, savedResumes);
        // }
    }
    
    function btnEventHandler() {
        setNewResume(true);
    }
    
    return (
        <>
            <Header title={'Dashboard'} />
            <Resumes 
                newResume={newResume} 
                setNewResume={setNewResume} 
                btnEventHandler={btnEventHandler} 
                resumeList={resumeList}
                setResumeList={setResumeList}
            />
        </>
    )
}

function Resumes(
    {   newResume, 
        setNewResume,
        btnEventHandler,
        resumeList,
        setResumeList,
    }) {

    function newResumeSubmit(e) {
        e.preventDefault()
        setNewResume(false);
        setResumeList([...resumeList, {name: e.target.childNodes[0].childNodes[1].value, id:crypto.randomUUID()}]);
        saveInLocalStorage(resumeList);
    }

    return (
        <div className="resumes">
            <NewResumeDialog 
                newResume={newResume} 
                newResumeSubmit={newResumeSubmit}
            />
            <RenderResumes resumeList={resumeList} />
            <Button 
                name={'New Resume'} 
                btnEventHandler={btnEventHandler}
            />
        </div>
    )
}

function NewResumeDialog(
    {   newResume, 
        newResumeSubmit,
    }) {
    if (newResume === true) {
        return (
            <dialog className="dialog" open>
                <form method="dialog" onSubmit={newResumeSubmit}>
                    <label className="new-resume-label">
                        <p>Enter you name</p>
                        <input name="resumeName" type="text" defaultValue="" />
                        <p className="hint">you can enter the post for which you are making</p>
                        <Button name={'Submit'}/>
                    </label>
                </form>
            </dialog>
        )
    }
}

function saveInLocalStorage(resumeList) {
    localStorage.setItem('resumeList', JSON.stringify(resumeList));
}


function RenderResumes({resumeList}) {
    return (
        resumeList.map((resume) => <RenderResume name={resume.name} key={resume.id} />)
    )
}

function RenderResume({name}) {
    return (
        <div className="resume-container">
            <div className="resume-preview-small"></div>
            <div className="resumeProperties">
                <h2 className="resume-name">{name}</h2>
                <div className="three-dot-container">
                    <p>:</p>
                </div>
            </div>
        </div>
    )
}
