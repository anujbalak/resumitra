import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece]
export default function DateInput({
  label,
  islimit,
  valueHandler,
  defaultDate,
}) {
  if (defaultDate) {
    const dateInMMYYY = convertIntoDate(defaultDate);
    defaultDate = new Date(dateInMMYYY.year, dateInMMYYY.month);
  } else {
    defaultDate = new Date();
  }

  const [selected, setSelected] = useState(new Date());
  return (
    <div className="date-picker-container">
      <span className="date-label-text start">{label}</span>
      {islimit ? (
        <DayPicker
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
          defaultMonth={defaultDate}
        />
      ) : (
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
          defaultMonth={defaultDate}
        />
      )}
    </div>
  );
}

function convertIntoDate(date) {
  const month = (date[0] + date[1] + date[2]).toLowerCase();
  const monthCode = convertMonthIntoNumber(month);
  const year = Number(date[4] + date[5] + date[6] + date[7]);
  const newDate = { year, month: monthCode };
  return newDate;
}

function convertMonthIntoNumber(month) {
  let code = null;
  switch (month) {
    case "jan":
      code = 1;
      break;
    case "feb":
      code = 2;
      break;
    case "mar":
      code = 3;
      break;
    case "apr":
      code = 4;
      break;
    case "may":
      code = 5;
      break;
    case "jun":
      code = 6;
      break;
    case "jul":
      code = 7;
      break;
    case "aug":
      code = 8;
      break;
    case "sep":
      code = 9;
      break;
    case "oct":
      code = 10;
      break;
    case "nov":
      code = 11;
      break;
    case "dec":
      code = 12;
      break;
    default:
      code = 1;
      break;
  }
  return code;
}
