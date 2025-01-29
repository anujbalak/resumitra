import { useState } from "react";
import EnterDetails from "./EnterDetails.jsx";
import Header from "./Header.jsx";
import LeftSidebar from "./LeftSidebar.jsx";
import ResumeScreen from "./ResumeScreen.jsx";
import RightSidebar from "./RightSidebar.jsx";
import Resume from "../module/resume.mjs";
import ButtonWithIcon from "./ButtonWithIcon.jsx"
import tabIcon from "/svg/tab.svg"

export default function EditPage({resumeDetails, backBtnHandler}) {
    const [resumeData, setResumeData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [showRightSidebar, setShowRightSidebar] = useState(true);
    const [showLeftSidebar, setShowLeftSidebar] = useState(true);

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

    function rightSidebarExpandHanler() {
        setShowRightSidebar(true)
    }

    function leftSidebarEpandHandler() {
        setShowLeftSidebar(true);
    }

    return (
        <>
        <Header>
            {!showLeftSidebar &&
                <ButtonWithIcon
                    label='Expand Sidebar'
                    imgSource={tabIcon}
                    btnHandler={leftSidebarEpandHandler}
                />

            }
            <p className="title">
                {resumeDetails.title}
            </p>
            {!showRightSidebar && 
                <ButtonWithIcon
                    label='Expand Sidebar'
                    imgSource={tabIcon}
                    btnHandler={rightSidebarExpandHanler}
                />
            }
        </Header>
        <LeftSidebar backBtnHandler={backBtnHandler} />
        {showLeftSidebar &&
            <>
                <EnterDetails
                    resumeData={resumeData}
                    setResumeData={setResumeData}
                    setShowLeftSidebar={setShowLeftSidebar} 
                />
            </>
        
        }
        <ResumeScreen resumeData={resumeData}/>
        {showRightSidebar && <RightSidebar setShowRightSidebar={setShowRightSidebar}/>}
        </>
    )
}