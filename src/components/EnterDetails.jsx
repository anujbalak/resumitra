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
                <PersonalDetails
                    resumeData={resumeData}
                    setResumeData={setResumeData}
                    resume={resume}
                />
            </div>
        </div>
    )
}