// TODO: calculate date dynamically
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      minDate={new Date()}
      maxDate={new Date(2025, 11, 31)}
      isClearable
    />
  );
};
export default Calendar;
