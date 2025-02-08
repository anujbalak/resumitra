import Button from "../../components/Button";
import { format } from 'date-fns'
import Input from "../../components/Input";
import DateInput from "../../components/DateInput";
import Textarea from "../../components/TextArea.jsx"

export default function Experience({resumeData, setResumeData}) {
    let activatedComps = []
    Object.entries(resumeData.experience).forEach((comp) => {
        return activatedComps.push(comp[1].activationStatus);
    })

    function addFieldHandler() {
        if (activatedComps[0] === 1 && activatedComps[1] === 0) {
            activatedComps.splice(1, 1, 1)
            setResumeData({
                ...resumeData,
                experience: {
                    ...resumeData.experience,
                    comp2: {
                        ...resumeData.experience.comp2,
                        activationStatus: 1
                    }
                }
            })
        } else if (activatedComps[1] === 1) {
            activatedComps.splice(2, 1, 1)
            setResumeData({
                ...resumeData,
                experience: {
                    ...resumeData.experience,
                    comp3: {
                        ...resumeData.experience.comp3,
                        activationStatus: 1
                    }
                }
            })
        }
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData)); 
    }

    return (
        <div className="experience-container">
            <>
                <Comp1 
                    setResumeData={setResumeData}
                    resumeData={resumeData}     
                />
                {activatedComps[1] === 1 && 
                <>
                <hr />
                <Comp2
                    setResumeData={setResumeData}
                    resumeData={resumeData} 
                />
                </>}
                {activatedComps[2] === 1 && 
                <>
                <hr />
                <Comp3
                    setResumeData={setResumeData}
                    resumeData={resumeData} 
                />
                </>
                }
                {activatedComps.some(code => code === 0) &&
                <Button 
                    name="Another Institute"
                    btnEventHandler={addFieldHandler}
                />
                }
            </>
        </div>
    )
}




/////////////////////////////////////////////////////////
function Comp1({resumeData, setResumeData}) {
    
    function postHandler(e) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp1: {
                    ...resumeData.experience.comp1,
                    post: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function companyHandler(e) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp1: {
                    ...resumeData.experience.comp1,
                    company: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function startDateHandler(date) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp1: {
                    ...resumeData.experience.comp1,
                    startDate: format(date, "MMM/yyyy")
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function endDateHandler(date) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp1: {
                    ...resumeData.experience.comp1,
                    endDate: format(date, "MMM/yyyy")
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }
    
    function locationHandler(e) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp1: {
                    ...resumeData.experience.comp1,
                    location: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }
    
    function detailsHandler(e) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp1: {
                    ...resumeData.experience.comp1,
                    details: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }


    const savedResume = JSON.parse(localStorage.getItem(resumeData.id))
    return (
        <div className="comp-container">
            <Input
                label="Post"
                inputHandler={postHandler}
                placeHolder=''
                className='post'
                value={savedResume.experience.comp1.post}
            />
            <Input
                label="Company"
                inputHandler={companyHandler}
                placeHolder=''
                className='company'
                value={savedResume.experience.comp1.company}
            />
            <DateInput 
                label="Start Date" 
                islimit={true}
                valueHandler={startDateHandler}
                defaultDate={savedResume.experience.comp1.startDate}
            />
            <DateInput 
                label="End Date"
                valueHandler={endDateHandler}
                defaultDate={savedResume.experience.comp1.endDate}
            />
            <Input 
                label="location"
                inputHandler={locationHandler}
                value={savedResume.experience.comp1.location}
                className="location"
            />

            <Textarea 
                label="Details"
                textareaHandler={detailsHandler}
                className="company-details"
                value={savedResume.experience.comp1.details}
            />
        </div>
    )
}





// ////////////////////////////////////////////////////////
function Comp2({resumeData, setResumeData}) {
    
    function postHandler(e) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp2: {
                    ...resumeData.experience.comp2,
                    post: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function companyHandler(e) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp2: {
                    ...resumeData.experience.comp2,
                    company: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function startDateHandler(date) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp2: {
                    ...resumeData.experience.comp2,
                    startDate: format(date, "MMM/yyyy")
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function endDateHandler(date) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp2: {
                    ...resumeData.experience.comp2,
                    endDate: format(date, "MMM/yyyy")
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }
    
    function locationHandler(e) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp2: {
                    ...resumeData.experience.comp2,
                    location: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }
    
    function detailsHandler(e) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp2: {
                    ...resumeData.experience.comp2,
                    details: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }


    const savedResume = JSON.parse(localStorage.getItem(resumeData.id))
    return (
        <div className="comp-container">
            <Input
                label="Post"
                inputHandler={postHandler}
                placeHolder=''
                className='post'
                value={savedResume.experience.comp2.post}
            />
            <Input
                label="Company"
                inputHandler={companyHandler}
                placeHolder=''
                className='company'
                value={savedResume.experience.comp2.company}
            />
            <DateInput 
                label="Start Date" 
                islimit={true}
                valueHandler={startDateHandler}
                defaultDate={savedResume.experience.comp2.startDate}
            />
            <DateInput 
                label="End Date"
                valueHandler={endDateHandler}
                defaultDate={savedResume.experience.comp2.endDate}
            />
            <Input 
                label="location"
                inputHandler={locationHandler}
                value={savedResume.experience.comp2.location}
                className="location"
            />

            <Textarea 
                label="Details"
                textareaHandler={detailsHandler}
                className="company-details"
                value={savedResume.experience.comp2.details}
            />
        </div>
    )
}






// /////////////////////////////////////////
function Comp3({resumeData, setResumeData}) {
    
    function postHandler(e) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp3: {
                    ...resumeData.experience.comp3,
                    post: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function companyHandler(e) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp3: {
                    ...resumeData.experience.comp3,
                    company: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function startDateHandler(date) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp3: {
                    ...resumeData.experience.comp3,
                    startDate: format(date, "MMM/yyyy")
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function endDateHandler(date) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp3: {
                    ...resumeData.experience.comp3,
                    endDate: format(date, "MMM/yyyy")
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }
    
    function locationHandler(e) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp3: {
                    ...resumeData.experience.comp3,
                    location: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }
    
    function detailsHandler(e) {
        setResumeData({
            ...resumeData,
            experience: {
                ...resumeData.experience,
                comp3: {
                    ...resumeData.experience.comp3,
                    details: e.target.value
                }
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }


    const savedResume = JSON.parse(localStorage.getItem(resumeData.id))
    return (
        <div className="comp-container">
            <Input
                label="Post"
                inputHandler={postHandler}
                placeHolder=''
                className='post'
                value={savedResume.experience.comp3.post}
            />
            <Input
                label="Company"
                inputHandler={companyHandler}
                placeHolder=''
                className='company'
                value={savedResume.experience.comp3.company}
            />
            <DateInput 
                label="Start Date" 
                islimit={true}
                valueHandler={startDateHandler}
                defaultDate={savedResume.experience.comp3.startDate}
            />
            <DateInput 
                label="End Date"
                valueHandler={endDateHandler}
                defaultDate={savedResume.experience.comp3.endDate}
            />
            <Input 
                label="location"
                inputHandler={locationHandler}
                value={savedResume.experience.comp3.location}
                className="location"
            />

            <Textarea 
                label="Details"
                textareaHandler={detailsHandler}
                className="company-details"
                value={savedResume.experience.comp3.details}
            />
        </div>
    )
}