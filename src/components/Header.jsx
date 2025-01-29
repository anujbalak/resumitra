

export default function Header({title, children}) {
    return (
        <header className="header">
            {title != undefined && <h1 className="title">
                {title}
            </h1>
            }
            
            {children}
        </header>
    )
}