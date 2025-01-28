import ButtonWithIcon from "./ButtonWithIcon";
import testImg from "/test.png"

export default function LeftSidebar({backBtnHandler}) {
    return (
        <div className="left-sidebar">
            <ButtonWithIcon 
                imgSource={testImg}
                btnHandler={backBtnHandler}
            />
            <ButtonWithIcon 
                link='#personal-details'
                imgSource={testImg}
            />
        </div>
    )
}