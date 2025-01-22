import Button from "../../components/Button"


export default function Homepage() {
    return (
        <div className="homepage">
            <Title title={'Resumitra'}/>
            <Tagline />
            <div className="buttons">
                <Button name={'Get started'} url={'#'} target={'_self'}/>
                <Button name={'View on Github'} url={'https://github.com/anujbalak/resumitra'} target={'_blank'}/>
            </div>
        </div>
    )
}

function Title({ title}) {
    return (
        <div className="title-container">
            <h1 className="title">{title}</h1>
        </div>
    )
}

function Tagline() {
    return (
        <div className="tagline-container">
            <p className="tagline">
                Build Resume, showcase your skills to the world!
            </p>
        </div>
    )
}