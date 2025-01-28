import PersonalDetails from "../web/editor/PersonalDetails";

export default function EnterDetails({resumeData, setResumeData, resume}) {
    return (
        <div className="enter-details">
            <PersonalDetails
                resumeData={resumeData} 
                setResumeData={setResumeData}
                resume={resume}
            /> 
        </div>
    )
}