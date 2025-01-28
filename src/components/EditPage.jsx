import { useState } from "react";
import EnterDetails from "./EnterDetails";
import Header from "./header";
import LeftSidebar from "./LeftSidebar";
import ResumeScreen from "./ResumeScreen";
import RightSidebar from "./RightSidebar";
import Resume from "../module/resume.mjs";

export default function EditPage({resumeDetails, backBtnHandler}) {
    const [resumeData, setResumeData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    let resume = new Resume();
    if (isLoaded === false) {
        const savedResume = JSON.parse(localStorage.getItem(resumeDetails.id));
        if (savedResume !== null) {
            resume = savedResume;
            setResumeData(savedResume)
            resume.name = savedResume.name
            resume.id = savedResume.id
        } else {
            resume.name = resumeDetails.title;
            resume.id = resumeDetails.id;
            localStorage.setItem(resume.id, JSON.stringify(resume));
        }
        setIsLoaded(true);
    }

    return (
        <>
        <Header title={resumeDetails.title}/>
        <LeftSidebar backBtnHandler={backBtnHandler}/>
        <EnterDetails 
            resumeData={resumeData} 
            setResumeData={setResumeData}
        />
        <ResumeScreen resumeData={resumeData}/>
        <RightSidebar />
        </>
    )
}