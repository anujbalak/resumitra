export default function Textarea({label, textareaHandler, value, className}) {

    document.querySelectorAll("textarea").forEach(function(textarea) {
        textarea.style.height = textarea.scrollHeight + "px";
        textarea.style.overflowY = "hidden";
      
        textarea.addEventListener("input", function() {
          this.style.height = "auto";
          this.style.height = this.scrollHeight + "px";
        });
      })

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