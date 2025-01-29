export default function Input({label, type, inputHandler, value, placeHolder, className}) {
    return (
        <div className={`input-container ${className}`}>
            <label className={`input-label ${className}`}>
                <span className={`input-text ${className}`}>{label}</span>
                {type === 'email' &&  <input 
                    className={`input ${className}`} 
                    type="email" 
                    onChange={inputHandler}
                    defaultValue={value}
                    placeholder={placeHolder}
                />}
                
                {type === 'number' && <input 
                    className={`input ${className}`} 
                    type="tel" 
                    onChange={inputHandler}
                    defaultValue={value}
                    placeholder={placeHolder}
                />}

                {type === 'url' && <input 
                    className={`input ${className}`} 
                    type="url" 
                    onChange={inputHandler}
                    defaultValue={value}
                    placeholder={placeHolder}
                />}
                
                {type === undefined && <input 
                    className={`input ${className}`} 
                    type="text" 
                    onChange={inputHandler}
                    defaultValue={value}
                    placeholder={placeHolder}
                />}
            </label>
        </div>
    )
}