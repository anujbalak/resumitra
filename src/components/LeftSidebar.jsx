import ButtonWithIcon from "./ButtonWithIcon";
import homeIcon from "/svg/home-angle.svg"
import personalIcon from "/svg/personal.svg"
import educationIcon from "/svg/education.svg"
import projectIcon from "/svg/project-new.svg"

export default function LeftSidebar({backBtnHandler}) {
    return (
        <div className="left-sidebar">
            <ButtonWithIcon
                label='Go to Dashboard'
                imgSource={homeIcon}
                btnHandler={backBtnHandler}
            />
            <div className="juper-links">
                <ButtonWithIcon 
                    label="Personal Details"
                    link='#personal-details'
                    imgSource={personalIcon}
                />
                <ButtonWithIcon
                    label="Education Details"
                    link="#education-details"
                    imgSource={educationIcon}
                />
                <ButtonWithIcon
                    label="Projects"
                    link="#projects"
                    imgSource={projectIcon}
                />
            </div>
        </div>
    )
}