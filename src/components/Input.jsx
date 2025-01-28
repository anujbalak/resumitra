export default function Input({label, type, inputHandler, value, placeHolder}) {
    return (
        <div className="input-container">
            <label className="input-label">
                <span className="label-text">{label}</span>
                {type === 'email' &&  <input 
                    className="input" 
                    type="email" 
                    onChange={inputHandler}
                    defaultValue={value}
                    placeholder={placeHolder}
                />}
                
                {type === 'number' && <input 
                    className="input" 
                    type="tel" 
                    onChange={inputHandler}
                    defaultValue={value}
                    placeholder={placeHolder}
                />}

                {type === 'url' && <input 
                    className="input" 
                    type="url" 
                    onChange={inputHandler}
                    defaultValue={value}
                    placeholder={placeHolder}
                />}
                
                {type === undefined && <input 
                    className="input" 
                    type="text" 
                    onChange={inputHandler}
                    defaultValue={value}
                    placeholder={placeHolder}
                />}
            </label>
        </div>
    )
}