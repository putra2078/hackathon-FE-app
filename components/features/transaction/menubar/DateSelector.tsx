import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function DateSelector() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  // useEffect(() => {
  //   // selectedDate?.getDate() Untuk mengambil date dsb
  //   console.log(selectedDate?.getDate())
  // }, [selectedDate])

  return (
    <>
      <div className="bg-background border border-gray-200 px-3 rounded-xl flex items-center gap-2">
        <FontAwesomeIcon icon={faCalendar} />
        <DatePicker
          selected={selectedDate}
          onChange={handleChange}
          placeholderText="Masukkan tanggal"
          portalId="root-portal"
          className="outline-none w-36"
          dateFormat="dd/MM/yyyy"
        />
      </div>
    </>
  );
}
