import ButtonWithIcon from "./ButtonWithIcon.jsx";
import collapseIcon from "/svg/collapse.svg"

export default function RightSidebar({ setShowRightSidebar}) {
    function collapseBtnHandler() {
        setShowRightSidebar(false)
    }
    return (
        <>
            <div className="right-sidebar">
                <ButtonWithIcon
                    label='Collapse'
                    imgSource={collapseIcon}
                    btnHandler={collapseBtnHandler}
                />
            </div>
        </>
    )
}