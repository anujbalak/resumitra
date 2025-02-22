import { useState } from "react";
import EnterDetails from "./EnterDetails.jsx";
import Header from "./Header.jsx";
import LeftSidebar from "./LeftSidebar.jsx";
import ResumeScreen from "./ResumeScreen.jsx";
import RightSidebar from "./RightSidebar.jsx";
import Resume from "../module/resume.mjs";
import ButtonWithIcon from "./ButtonWithIcon.jsx";
import tabIcon from "/svg/tab.svg";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export default function EditPage({ resumeDetails, backBtnHandler }) {
  const [resumeData, setResumeData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);

  const [showProfile, setShowProfile] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(true);
  const [showProjects, setShowProjects] = useState(true);

  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  let resume = new Resume();
  if (isLoaded === false) {
    const savedResume = JSON.parse(localStorage.getItem(resumeDetails.id));
    if (savedResume !== null) {
      resume = savedResume;
      setResumeData(savedResume);
      resume.name = savedResume.name;
      resume.id = savedResume.id;
    } else {
      resume.name = resumeDetails.title;
      resume.id = resumeDetails.id;
      localStorage.setItem(resume.id, JSON.stringify(resume));
    }
    setIsLoaded(true);
  }

  function rightSidebarExpandHanler() {
    setShowRightSidebar(true);
  }

  function leftSidebarEpandHandler() {
    setShowLeftSidebar(true);
  }

  return (
    <>
      <Header>
        {!showLeftSidebar && (
          <ButtonWithIcon
            label="Expand Sidebar"
            imgSource={tabIcon}
            btnHandler={leftSidebarEpandHandler}
            className="left"
          />
        )}
        <p className="title">{resumeDetails.title}</p>
        {!showRightSidebar && (
          <ButtonWithIcon
            label="Expand Sidebar"
            imgSource={tabIcon}
            btnHandler={rightSidebarExpandHanler}
            className="right"
          />
        )}
      </Header>
      <LeftSidebar
        backBtnHandler={backBtnHandler}
        showFieldHandler={leftSidebarEpandHandler}
        handlePrint={handlePrint}
      />
      {showLeftSidebar && (
        <>
          <EnterDetails
            resumeData={resumeData}
            setResumeData={setResumeData}
            setShowLeftSidebar={setShowLeftSidebar}
          />
        </>
      )}
      <ResumeScreen
        resumeData={resumeData}
        contentRef={contentRef}
        showProfile={showProfile}
        showEducation={showEducation}
        showExperience={showExperience}
        showProjects={showProjects}
      />
      {showRightSidebar && (
        <RightSidebar
          setShowRightSidebar={setShowRightSidebar}
          showProfile={showProfile}
          setShowProfile={setShowProfile}
          showEducation={showEducation}
          setShowEducation={setShowEducation}
          showExperience={showExperience}
          setShowExperience={setShowExperience}
          showProjects={showProjects}
          setShowProjects={setShowProjects}
          handlePrint={handlePrint}
        />
      )}
    </>
  );
}
