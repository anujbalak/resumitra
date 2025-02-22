import Input from "../../components/Input";
import Textarea from "../../components/TextArea";

function PersonalDetails({resumeData, setResumeData}) {
    
    function nameHandler(e) {
        setResumeData({
            ...resumeData,
            personalDetails: {
                ...resumeData.personalDetails,
                name: e.target.value
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function emailHandler(e) {
        setResumeData({
            ...resumeData,
            personalDetails: {
                ...resumeData.personalDetails,
                email: e.target.value
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function phoneHandler(e) {
        setResumeData({
            ...resumeData,
            personalDetails: {
                ...resumeData.personalDetails,
                mobile: e.target.value
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function websiteHandler(e) {
        setResumeData({
            ...resumeData,
            personalDetails: {
                ...resumeData.personalDetails,
                website: e.target.value
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function profileHandler(e) {
        setResumeData({
            ...resumeData,
            personalDetails: {
                ...resumeData.personalDetails,
                profile: e.target.value
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function githubHandler(e) {
        setResumeData({
            ...resumeData,
            personalDetails: {
                ...resumeData.personalDetails,
                github: e.target.value
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }

    function linkedinHandler(e) {
        setResumeData({
            ...resumeData,
            personalDetails: {
                ...resumeData.personalDetails,
                linkedin: e.target.value
            }
        })
        localStorage.setItem(resumeData.id, JSON.stringify(resumeData));
    }
    // function addSocialBtnHndler() {
    //     const totalSocialLinks = resumeData.personalDetails.socials.length;
    //     setSocialBtnClick(true);
    //     const social = new Social();
    //     setResumeData({
    //         ...resumeData,
    //         personalDetails: {
    //             ...resumeData.personalDetails,
    //             socials: [
    //                 social
    //             ]
    //         }
    //     })
    //     console.log(resumeData.personalDetails)
    //     console.log(totalSocialLinks);
        
    // }

    const savedResume = JSON.parse(localStorage.getItem(resumeData.id))
    return (
        <div className="personal-details-container" id="personal-details">
            <Input 
                label='Name'
                inputHandler={nameHandler}
                value={savedResume.personalDetails.name}
                className='name'
            />
            <Input
                label='Email'
                type='email'
                inputHandler={emailHandler}
                value={savedResume.personalDetails.email}
                placeHolder={'user@email.com'}
                className='email'
            />
            <Input
                label="Phone"
                type="number"
                inputHandler={phoneHandler}
                value={savedResume.personalDetails.mobile}
                placeHolder={'+00 12345 09876'}
                className='phone'
            />
            <Input 
                type='url'
                label="Website"
                inputHandler={websiteHandler}
                value={savedResume.personalDetails.website}
                placeHolder={'www.example.com'}
                className='website'
            />
            <Input 
                type='url'
                label='Github'
                inputHandler={githubHandler}
                value={savedResume.personalDetails.github}
                placeHolder={'www.github.com/username'}
                className='github'
            />
            <Input
                type='url'
                label='Linkedin'
                inputHandler={linkedinHandler}
                value={savedResume.personalDetails.linkedin}
                placeHolder='www.linkedin.com/your-user-id'
                className='linkedin'
            />
            <Textarea 
                label="Profile"
                textareaHandler={profileHandler}
                value={savedResume.personalDetails.profile}
                className='profile'
                placeHolder='Write something about yourself...'
            />
            {/* <Button 
                name='Add Scoial' 
                btnEventHandler={addSocialBtnHndler}
            /> */}
        </div>
    )
}

export default PersonalDetails;