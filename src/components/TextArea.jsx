export default function Textarea({label, textareaHandler, value, className}) {
    return (
        <div className="textarea-container">
            <span className={`text-area-text ${className}`}>{label}</span>
            <textarea 
                className={`text-area ${className}`}
                name="textarea" 
                onChange={textareaHandler}
                defaultValue={value}
            > </textarea>
        </div>
    )
}