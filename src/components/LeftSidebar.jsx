import ButtonWithIcon from "./ButtonWIthIcon";
import testImg from "/test.png"

export default function LeftSidebar({backBtnHandler}) {
    return (
        <div className="left-sidebar">
            <ButtonWithIcon 
                imgSource={testImg}
                btnHandler={backBtnHandler}
            />
        </div>
    )
}