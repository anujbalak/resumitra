export default function ButtonWithIcon({link, imgSource, btnHandler}) {
    return (
        <button className="btn-with-icon" onClick={btnHandler}>
            {link ? <a href="link">
                <img src={imgSource} alt=" " />
            </a> : 
                <img src={imgSource} alt=" " />}   
        </button>
    )
}