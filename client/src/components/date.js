import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

const DateSelector = (date) => {
  // console.log(date);
  const [startDate, setStartDate] = useState(new Date());
  var realDate = "";
  console.log(realDate);

  const handleDateChange = (selected) => {
    setStartDate(selected);

    console.log("start date: ");
    console.log(selected);
    realDate = selected;
    console.log(realDate);
  }


  return (
    <DatePicker
      className="date-picker"
      selected={startDate}
      onChange={date => setStartDate(date)}
      onSelect={date => handleDateChange(date)}
      
    />
  );
};

export default DateSelector;