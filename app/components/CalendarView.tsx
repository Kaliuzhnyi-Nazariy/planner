"use client";
import { Calendar } from "@nextui-org/calendar";
import { parseDate } from "@internationalized/date";
import { useState } from "react";
import React from "react";

const CalendarView = () => {
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);

  let [value, setValue] = React.useState(
    parseDate(new Date().toLocaleDateString("fr-CA"))
  );
  // const currentDate = new Date().toLocaleDateString(undefined, options);
  const currentDate = value.year + "-" + value.month + "-" + value.day;

  console.log(value);

  return (
    <div>
      <button onClick={() => setCalendarIsOpen(!calendarIsOpen)}>
        <span className="relative">{currentDate}</span>
      </button>
      {calendarIsOpen ? (
        <Calendar
          lang="en" // Set language to English
          aria-label="Date (Controlled)"
          value={value}
          onChange={(e) => {
            setValue(e); // Update selected date
            setCalendarIsOpen(false); // Close the calendar
          }}
          className="absolute top-12 left-10 translate-x-[-50%] z-40 bg-white shadow-lg min-w-[280px] rounded-lg p-2 border border-orange-500"
          classNames={{
            base: "content-between color-orange-500",
            prevButton: "calendar-prev-button",
            nextButton: "",
            headerWrapper: "",
            header: "w-full",
            title: "text-center font-semibold text-sm text-gray-600",
            gridWrapper: "w-full",
            grid: "w-full",
            gridHeader: "w-full",
            gridHeaderRow: "w-full flex justify-between px-2",
            gridHeaderCell: "text-sm text-gray-600",
            gridBody: "w-full",
            gridBodyRow: "w-full",
            cell: "w-full",
            cellButton: "w-full",
            pickerWrapper: "p-4 bg-gray-100 rounded-lg",
          }}
          pageBehavior="single"
          color={"warning"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default CalendarView;
