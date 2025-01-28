export default function LiveResume({resumeData}) {
    
    return (
        <div className="live-resume preset1">
            <div className="personal-details">
                <h1 className="name">
                    {resumeData.personalDetails.name}
                </h1>
                <p className="email">
                    {resumeData.personalDetails.email}
                </p>
                <p className="mobile">
                    {resumeData.personalDetails.mobile}
                </p>
                <a href={resumeData.personalDetails.website} target="__blank">
                    {resumeData.personalDetails.website}
                </a>
                <p className="profile">
                    {resumeData.personalDetails.profile}
                </p>
            </div>
            <hr />
        </div>
    )
}