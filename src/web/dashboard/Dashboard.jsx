import { useState } from "react";
import Button from "../../components/Button.jsx";
import Header from "../../components/Header.jsx";
import RenderResume from "../../components/ResumeOnDashboard.jsx";

let localResumes = []
export default function Dashboard({onEditResume}) {
    const [newResume, setNewResume] = useState(false);
    const [resumeList, setResumeList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [deletedResumeId, setDeletedResumeId] = useState('');

    if (isLoaded === false) {
        const savedResumes = JSON.parse(localStorage.getItem('resumeList'));
        if (savedResumes !== null && savedResumes.length > 0 && savedResumes) {
            setResumeList(...resumeList, savedResumes);
            localResumes = savedResumes;
        }
        setIsLoaded(true);
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
                deletedResumeId={deletedResumeId}
                setDeletedResumeId={setDeletedResumeId}
                onEditResume={onEditResume}
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
        deletedResumeId,
        setDeletedResumeId,
        onEditResume,
    }) {

    function newResumeSubmit(e) {
        e.preventDefault()
        setNewResume(false);

        localResumes.push({name: e.target.childNodes[0].childNodes[1].value, id:crypto.randomUUID()})

        setResumeList([...resumeList, {name: e.target.childNodes[0].childNodes[1].value, id:crypto.randomUUID()}]);

        saveInLocalStorage(localResumes);
    }

    function deleteResumeHandler(e) {
        setDeletedResumeId(e.target.id);
        localResumes.forEach(resume => {
            if(resume.id == deletedResumeId) {
                const DELETED_RESUME_INDEX = localResumes.indexOf(resume);
                return localResumes.splice(DELETED_RESUME_INDEX, 1);
            }
        })
        setResumeList(resumeList.filter(resume => resume.id !== deletedResumeId));
        saveInLocalStorage(localResumes)
    }

    return (
        <div className="resumes">
            <NewResumeDialog 
                newResume={newResume} 
                newResumeSubmit={newResumeSubmit}
            />
            <RenderResumes 
                resumeList={resumeList} 
                deleteResumeHandler={deleteResumeHandler}
                onEditResume={onEditResume}
            />
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
                        <p>Enter resume title</p>
                        <input name="resumeName" type="text" defaultValue="" />
                    </label>
                    <p className="hint">you can enter the post for which you are making</p>
                    <Button name={'Submit'}/>
                </form>
            </dialog>
        )
    }
}

function saveInLocalStorage(resumeList) {
    localStorage.setItem('resumeList', JSON.stringify(resumeList));
}


function RenderResumes({
        resumeList,
        deleteResumeHandler,
        onEditResume
    }) {
    return (
        resumeList.map((resume) => 
            <RenderResume 
                name={resume.name} 
                key={resume.id}
                id={resume.id}
                deleteResumeHandler={deleteResumeHandler}
                onEditResume={onEditResume}
            />
        )
    )
}



