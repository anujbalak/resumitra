import EducationDetails from "../web/editor/EducationDetails";
import Experience from "../web/editor/Experience";
import PersonalDetails from "../web/editor/PersonalDetails";
import ButtonWithIcon from "./ButtonWithIcon";
import collapseIcon from "/svg/collapse.svg"

export default function EnterDetails({resumeData, setResumeData, resume, setShowLeftSidebar}) {
    function collapseBtnHandler() {
        setShowLeftSidebar(false)
    }

    return (
        <div className="enter-details">
            <ButtonWithIcon
                label='Collapse'
                imgSource={collapseIcon}
                btnHandler={collapseBtnHandler}
            />
            <div className="enter-details-content">
                <h2 className="group-heading" id="personal-details">Personal Details</h2>
                <PersonalDetails
                    resumeData={resumeData}
                    setResumeData={setResumeData}
                    resume={resume}
                />
                <h2 className="group-heading" id="education-details">Education Details</h2>
                <EducationDetails
                    resumeData={resumeData}
                    setResumeData={setResumeData}
                />
                <h2 className="group-heading" id="experience">
                    Experience
                </h2>
                <Experience
                    resumeData={resumeData}
                    setResumeData={setResumeData}
                />
            </div>
        </div>
    )
}