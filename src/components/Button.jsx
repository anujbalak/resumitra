export default function Button({name, url, target}) {
    return (
        <div className="button-container">
            <ButtonContent name={name} url={url} target={target}/>
        </div>
    )
}

function ButtonContent({name, url, target}) {
    if(url) {
        return (
            <button className="button">
                <a href={url} target={target} tabIndex={-5}>{name}</a>
            </button>
        )
    } else {
        return (
            <button className="button">
                {name}
            </button>
        )
    }
}