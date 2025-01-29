import { useState } from "react"

export default function ButtonWithIcon({label, link, imgSource, btnHandler}) {
    const [isHover, setIsHover] = useState(false)
    
    function handlerMouseOver() {
        setIsHover(true)
    }
    function handleMouseOut() {
        setIsHover(false)
    }
    
    return (
        <div className="btn-container">
            {isHover && <ShowLabel label={label} />}
            <button
                className="btn-with-icon"
                onClick={btnHandler}
                onMouseEnter={handlerMouseOver}
                onMouseLeave={handleMouseOut}
            >
                {link !== undefined ?
                <a href={link}>
                    <img src={imgSource} alt=" " />
                </a> :
                <img src={imgSource} alt=" " />}
            </button>
        </ div>
    )
}

function ShowLabel({label}) {
    return (
        <div className="label-flyout">
            <p>{label}</p>
        </div>
    )
}