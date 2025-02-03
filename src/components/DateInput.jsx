import { useState } from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";


// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece]
export default function DateInput({label, islimit, valueHandler, defaultDate}) {
    const [selected, setSelected] = useState();
    return (
        <div className="date-picker-container">
            <span className="date-label-text start">{label}</span>
            {islimit ?
                <DayPicker
                    defaultMonth={defaultDate} 
                    mode="single"
                    captionLayout="dropdown"
                    selected={selected}
                    hideWeekdays
                    hideNavigation
                    onSelect={setSelected}
                    endMonth={new Date()}
                    startMonth={new Date(1950, 1)}
                    hidden
                    onMonthChange={valueHandler}
                />
            :
                <DayPicker 
                    mode="single"
                    captionLayout="dropdown"
                    selected={selected}
                    hideWeekdays
                    hideNavigation
                    onSelect={setSelected}
                    endMonth={new Date(2035, 1)}
                    startMonth={new Date(1950, 1)}
                    hidden
                    onMonthChange={valueHandler}
                />
            }
        </div>
    )
}