import DateInput from "../../components/DateInput"
import Input from "../../components/Input"

export default function EducationDetails({resumeData, setResumeData}) {
    
    const savedResume = JSON.parse(localStorage.getItem(resumeData.id))
    return (
        <div className="education-details-container" id="education-container">
            <Institute
                resumeData={savedResume}
            />
        </div>
    )
}

function Institute({resumeData}) {
    return (
        <div className="institute-container">
            <Input
                label="Institute Name"
                // value={resumeData.EducationDetails.Institute.name}
                // inputHandler={instituteNameHandler}
                placeHolder=''
                className='institute-name'
            />
            <Input
                label="Course Name"
                // value={resumeData.EducationDetails.Institute.course}
                placeHolder="...such as bachler of science"
                className="course"
            />
            <DateInput label="Start Date"/>
        </div>
    )
}