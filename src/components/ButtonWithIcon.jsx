export default function ButtonWithIcon({link, imgSource, btnHandler}) {
    return (
        <button className="btn-with-icon" onClick={btnHandler}>
            {link !== undefined ? 
            <a href={link}>
                <img src={imgSource} alt=" " />
            </a> : 
            <img src={imgSource} alt=" " />}   
        </button>
    )
}