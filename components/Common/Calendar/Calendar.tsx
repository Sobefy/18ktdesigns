// TODO: calculate date dynamically
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface CalendarProps {
  date: Date | null;
  handleSelectDate(date: Date | null): void;
}

const Calendar = ({ date, handleSelectDate }: CalendarProps) => {
  const minDate = new Date();
  const maxDate = new Date(2025, 11, 31);

  return (
    <DatePicker
      selected={date}
      dateFormat="dd/MM/yyyy"
      minDate={minDate}
      maxDate={maxDate}
      isClearable
      onChange={(selectedDate: Date) => handleSelectDate(selectedDate)}
    />
  );
};
export default Calendar;
