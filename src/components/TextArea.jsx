export default function Textarea({label, textareaHandler, value, className, placeHolder}) {

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
                rows={5}
                className={`text-area ${className}`}
                name="textarea" 
                onChange={textareaHandler}
                defaultValue={value}
                placeholder={placeHolder}
            > </textarea>
        </div>
    )
}