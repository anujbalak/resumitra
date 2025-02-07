export default function LiveResume({resumeData}) {
    
    return (
        <div className="render-resume">
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
                    {resumeData.personalDetails.github && 
                        <a href={resumeData.personalDetails.github}>Github</a>
                    }
                    {resumeData.personalDetails.linkedin && 
                        <a href={resumeData.personalDetails.linkedin}>Linkedin</a>
                    }
                    <div className="profile-container">
                        <h2 className="profile-label">
                            Profile
                        </h2>
                        <p className="profile">
                            {resumeData.personalDetails.profile}
                        </p>
                    </div>
                </div>
                <div className="education-details">
                    <h2 className="education-label">Education</h2>
                    <hr />
                    <div className="institute1">
                        <p className="name">
                            {resumeData.educationDetails.institute1.name}
                        </p>
                        {
                            resumeData.educationDetails.institute1.startDate &&
                            <p className="startDate">
                                {resumeData.educationDetails.institute1.startDate}
                            </p>
                        }
                        <p className="endDate">
                            {resumeData.educationDetails.institute1.endDate}
                        </p>
                        <p className="course">
                            {resumeData.educationDetails.institute1.course}
                        </p>
                        <p className="score">
                            {resumeData.educationDetails.institute1.score}
                        </p>
                    </div>
                    {resumeData.educationDetails.institute2.activationStatus === 1 && 
                        <div className="institute2">
                            <p className="name">
                                {resumeData.educationDetails.institute2.name}
                            </p>
                            {
                                resumeData.educationDetails.institute2.startDate &&
                                <p className="startDate">
                                    {resumeData.educationDetails.institute2.startDate}
                                </p>
                            }
                            <p className="endDate">
                                {resumeData.educationDetails.institute2.endDate}
                            </p>
                            <p className="course">
                                {resumeData.educationDetails.institute2.course}
                            </p>
                            <p className="score">
                                {resumeData.educationDetails.institute2.score}
                            </p>
                        </div>
                    }
                    {resumeData.educationDetails.institute3.activationStatus === 1 && 
                        <div className="institute3">
                            <p className="name">
                                {resumeData.educationDetails.institute3.name}
                            </p>
                            {
                                resumeData.educationDetails.institute3.startDate &&
                                <p className="startDate">
                                    {resumeData.educationDetails.institute3.startDate}
                                </p>
                            }
                            <p className="endDate">
                                {resumeData.educationDetails.institute3.endDate}
                            </p>
                            <p className="course">
                                {resumeData.educationDetails.institute3.course}
                            </p>
                            <p className="score">
                                {resumeData.educationDetails.institute3.score}
                            </p>
                        </div>
                    }
                </div>
                <div className="experience">
                    <h2 className="experience-label">Experience</h2>
                    <hr />
                    <div className="comp1">
                        <p className="post">
                            {resumeData.experience.comp1.post}
                        </p>
                        <p className="company">
                            {resumeData.experience.comp1.company}
                        </p>
                        <p className="location">
                            {resumeData.experience.comp1.location}
                        </p>
                        {
                            resumeData.experience.comp1.startDate &&
                            <p className="startDate">
                                {resumeData.experience.comp1.startDate}
                            </p>
                        }
                        <p className="endDate">{resumeData.experience.comp1.endDate}</p>
                        <p className="details">
                            {resumeData.experience.comp1.details}
                        </p>
                    </div>
                    {resumeData.experience.comp2.activationStatus === 1 && 
                        <div className="comp2">
                            <p className="post">
                                {resumeData.experience.comp2.post}
                            </p>
                            <p className="company">
                                {resumeData.experience.comp2.company}
                            </p>
                            <p className="location">
                                {resumeData.experience.comp2.location}
                            </p>
                            {
                                resumeData.experience.comp2.startDate &&
                                <p className="startDate">
                                    {resumeData.experience.comp2.startDate}
                                </p>
                            }
                            <p className="endDate">
                                {resumeData.experience.comp2.endDate}
                            </p>
                            <p className="details">
                                {resumeData.experience.comp2.details}
                            </p>
                        </div>
                    }
                    {resumeData.experience.comp3.activationStatus === 1 && 
                        <div className="comp3">
                            <p className="post">
                                {resumeData.experience.comp3.post}
                            </p>
                            <p className="company">
                                {resumeData.experience.comp3.company}
                            </p>
                            <p className="location">
                                {resumeData.experience.comp3.location}
                            </p>
                            {
                                resumeData.experience.comp3.startDate &&
                                <p className="startDate">
                                    {resumeData.experience.comp3.startDate}
                                </p>
                            }
                            <p className="endDate">
                                {resumeData.experience.comp3.endDate}
                            </p>
                            <p className="details">
                                {resumeData.experience.comp3.details}
                            </p>
                        </div>
                    }
                </div>
                <div className="projects">
                    <h2 className="projects-label">Projects</h2>
                    <hr />
                    <div className="project1">
                        <p className="name">
                            {resumeData.projects.project1.name}
                        </p>
                        <p className="details">
                            {resumeData.projects.project1.details}
                        </p>
                    </div>
                    {resumeData.projects.project2.activationStatus === 1 && 
                        <div className="project2">
                            <p className="name">
                                {resumeData.projects.project2.name}
                            </p>
                            <p className="details">
                                {resumeData.projects.project2.details}
                            </p>
                        </div>
                    }
                    {resumeData.projects.project3.activationStatus === 1 && 
                        <div className="project3">
                            <p className="name">
                                {resumeData.projects.project3.name}
                            </p>
                            <p className="details">
                                {resumeData.projects.project3.details}
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}