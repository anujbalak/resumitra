import { useState } from 'react';
import DatePicker from 'react-date-picker';

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece]
export default function DateInput({label}) {
    const [value, onChange] = useState(new Date());
    console.log(value)
    return (
        <div className="date-picker-container">
            <DatePicker 
                value={value}
                onChange={onChange}
                format='MM/yyyy'
                clearIcon
                maxDetail='year'
                className='date-picker'
                maxDate={new Date()}
            />
        </div>
    )
}