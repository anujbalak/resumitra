import LiveResume from "./LiveResume";

export default function ResumeScreen({
        resumeData, 
        contentRef,
        showProfile, 
        showEducation, 
        showExperience, 
        showProjects,
    }) {
    return (
        <div className="resume-screen">
            <LiveResume 
                resumeData={resumeData} 
                contentRef={contentRef}
                showProfile={showProfile}
                showEducation={showEducation}
                showExperience={showExperience}
                showProjects={showProjects}
            />
        </div>
    )
}