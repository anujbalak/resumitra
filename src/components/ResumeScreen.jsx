import LiveResume from "./LiveResume";

export default function ResumeScreen({resumeData}) {
    return (
        <div className="resume-screen">
            <LiveResume resumeData={resumeData}/>
        </div>
    )
}