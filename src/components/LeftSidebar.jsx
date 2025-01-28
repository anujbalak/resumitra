import ButtonWithIcon from "./ButtonWithIcon";
import homeIcon from "/svg/home-angle.svg"
import personalIcon from "/svg/personal.svg"

export default function LeftSidebar({backBtnHandler}) {
    return (
        <div className="left-sidebar">
            <ButtonWithIcon 
                imgSource={homeIcon}
                btnHandler={backBtnHandler}
            />
            <ButtonWithIcon 
                link='#personal-details'
                imgSource={personalIcon}
            />
        </div>
    )
}