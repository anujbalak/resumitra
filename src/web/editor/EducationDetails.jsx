import { useState } from "react"
import Button from "../../components/Button.jsx"
import DateInput from "../../components/DateInput.jsx"
import Input from "../../components/Input.jsx"
import { format } from "date-fns";
import { EducationInstitute } from "../../module/resume.mjs"

export default function EducationDetails({resumeData, setResumeData}) {

    let activatedInstitute = []
    Object.entries(resumeData.educationDetails).forEach((key) => {
        return activatedInstitute.push(key[1].activationStatus);
    })

    function addInstituteHandler() {
        if (activatedInstitute[0] === 1 && activatedInstitute[1] === 0) {
            activatedInstitute.splice(1, 1, 1)
            setResumeData({
                ...resumeData,
                educationDetails: {
                    ...resumeData.educationDetails,
                    institute2: {
                        ...resumeData.educationDetails.institute2,
                        activationStatus: 1
                    }
                }
            })
        } else if (activatedInstitute[1] === 1) {
            activatedInstitute.splice(2, 1, 1)
            setResumeData({
                ...resumeData,
                educationDetails: {
                    ...resumeData.educationDetails,
                    institute3: {
                        ...resumeData.educationDetails.institute3,
                        activationStatus: 1
                    }
                }
            })
        }
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData)); 
    }

    return (
        <div className="education-details-container" id="education-container">
            <>
                <Institute1 
                    setResumeData={setResumeData}
                    resumeData={resumeData}     
                />
                {activatedInstitute[1] === 1 && 
                <>
                <hr />
                    <Institute2
                        setResumeData={setResumeData}
                        resumeData={resumeData} 
                    />
                </>}
                {activatedInstitute[2] === 1 && 
                <>
                <hr />
                <Institute3
                    setResumeData={setResumeData}
                    resumeData={resumeData} 
                />
                </>
                }
                {activatedInstitute.some(code => code === 0) &&
                <Button 
                    name="Another Institute"
                    btnEventHandler={addInstituteHandler}
                />
                }
            </>
        </div>
    )
}

function Institute1({resumeData, setResumeData}) {
    
    function nameHandler(e) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute1: {
                    ...resumeData.educationDetails.institute1,
                    name: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function courseHandler(e) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute1: {
                    ...resumeData.educationDetails.institute1,
                    course: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function startDateHandler(date) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute1: {
                    ...resumeData.educationDetails.institute1,
                    startDate: format(date, "MMMM/yyyy")
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function endDateHandler(date) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute1: {
                    ...resumeData.educationDetails.institute1,
                    endDate: format(date, "MMMM/yyyy")
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function scoreHandler(e) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute1: {
                    ...resumeData.educationDetails.institute1,
                    score: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }


    const savedResume = JSON.parse(localStorage.getItem(resumeData.id))
    return (
        <div className="institute-container">
            <Input
                label="Institute Name"
                inputHandler={nameHandler}
                placeHolder=''
                className='institute-name'
                value={savedResume.educationDetails.institute1.name}
            />
            <Input
                inputHandler={courseHandler}
                label="Course Name"
                // value={resumeData.EducationDetails.Institute.course}
                placeHolder="...such as bachler of science"
                className="course"
                value={savedResume.educationDetails.institute1.course}
            />
            <DateInput 
                label="Start Date" 
                islimit={true}
                valueHandler={startDateHandler}
                defaultDate={savedResume.educationDetails.institute1.startDate}
            />
            <DateInput 
                label="End Date"
                valueHandler={endDateHandler}
                defaultDate={savedResume.educationDetails.institute1.endDate}
            />
            <Input
                type="number"
                label="Score"
                inputHandler={scoreHandler}
                value={savedResume.educationDetails.institute1.score}
                className="score"
            />
        </div>
    )
}

function Institute2({resumeData, setResumeData}) {
    function nameHandler(e) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute2: {
                    ...resumeData.educationDetails.institute2,
                    name: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function courseHandler(e) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute2: {
                    ...resumeData.educationDetails.institute2,
                    course: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function startDateHandler(date) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute2: {
                    ...resumeData.educationDetails.institute2,
                    startDate: format(date, "MMMM/yyyy")
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function endDateHandler(date) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute2: {
                    ...resumeData.educationDetails.institute2,
                    endDate: format(date, "MMMM/yyyy")
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function scoreHandler(e) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute2: {
                    ...resumeData.educationDetails.institute2,
                    score: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }



    const savedResume = JSON.parse(localStorage.getItem(resumeData.id))
    return (
        <div className="institute-container">
            <Input
                label="Institute Name"
                inputHandler={nameHandler}
                placeHolder=''
                className='institute-name'
                value={savedResume.educationDetails.institute2.name}
            />
            <Input
                inputHandler={courseHandler}
                label="Course Name"
                // value={resumeData.EducationDetails.Institute.course}
                placeHolder="...such as bachler of science"
                className="course"
                value={savedResume.educationDetails.institute2.course}
            />
            <DateInput 
                label="Start Date" 
                islimit={true}
                valueHandler={startDateHandler}
                defaultDate={savedResume.educationDetails.institute2.startDate}
            />
            <DateInput 
                label="End Date"
                valueHandler={endDateHandler}
                defaultDate={savedResume.educationDetails.institute2.endDate}
            />
            <Input
                type="number"
                label="Score"
                inputHandler={scoreHandler}
                value={savedResume.educationDetails.institute2.score}
                className="score"
            />
        </div>
    )
}

function Institute3({resumeData, setResumeData}) {
    function nameHandler(e) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute3: {
                    ...resumeData.educationDetails.institute3,
                    name: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function courseHandler(e) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute3: {
                    ...resumeData.educationDetails.institute3,
                    course: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function startDateHandler(date) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute3: {
                    ...resumeData.educationDetails.institute3,
                    startDate: format(date, "MMMM/yyyy")
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function endDateHandler(date) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute3: {
                    ...resumeData.educationDetails.institute3,
                    endDate: format(date, "MMMM/yyyy")
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function scoreHandler(e) {
        setResumeData({
            ...resumeData,
            educationDetails: {
                ...resumeData.educationDetails,
                institute3: {
                    ...resumeData.educationDetails.institute3,
                    score: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }



    const savedResume = JSON.parse(localStorage.getItem(resumeData.id))
    return (
        <div className="institute-container">
            <Input
                label="Institute Name"
                inputHandler={nameHandler}
                placeHolder=''
                className='institute-name'
                value={savedResume.educationDetails.institute3.name}
            />
            <Input
                inputHandler={courseHandler}
                label="Course Name"
                // value={resumeData.EducationDetails.Institute.course}
                placeHolder="...such as bachler of science"
                className="course"
                value={savedResume.educationDetails.institute3.course}
            />
            <DateInput 
                label="Start Date" 
                islimit={true}
                valueHandler={startDateHandler}
                defaultDate={savedResume.educationDetails.institute3.startDate}
            />
            <DateInput 
                label="End Date"
                valueHandler={endDateHandler}
                defaultDate={savedResume.educationDetails.institute3.endDate}
            />
            <Input
                type="number"
                label="Score"
                inputHandler={scoreHandler}
                value={savedResume.educationDetails.institute3.score}
                className="score"
            />
        </div>
    )
}