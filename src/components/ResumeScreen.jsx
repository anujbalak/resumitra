import LiveResume from "./LiveResume";

export default function ResumeScreen({resumeData, contentRef}) {
    return (
        <div className="resume-screen">
            <LiveResume resumeData={resumeData} contentRef={contentRef}/>
        </div>
    )
}