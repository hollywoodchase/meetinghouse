import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
const DateSelector = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className="date-picker" selected={startDate} onChange={date => setStartDate(date)} />
  );
};

export default DateSelector;