export default function Textarea({label, textareaHandler, value}) {
    return (
        <div className="textarea-container">
            <span className="profile-text">{label}</span>
            <textarea 
                name="textarea" 
                onChange={textareaHandler}
                defaultValue={value}
            > </textarea>
        </div>
    )
}