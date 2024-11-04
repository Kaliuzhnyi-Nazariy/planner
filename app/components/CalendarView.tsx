"use client";
import { Calendar } from "@nextui-org/calendar";
import { parseDate } from "@internationalized/date";
import { useEffect, useState } from "react";
import React from "react";
import { setDate } from "@/redux/features/date/date-slice";
import { useAppDispatch } from "@/redux/hooks";

const CalendarView = () => {
  const dispatch = useAppDispatch();
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);

  const [value, setValue] = useState(() => {
    const storedDate = localStorage.getItem("date");
    return parseDate(storedDate || new Date().toLocaleDateString("fr-CA"));
  });

  const currentDate = value.year + "-" + value.month + "-" + value.day;

  const chechCurrDay = (value) => {
    if (value.day.toString().length === 1) {
      return value.year + "-" + value.month + "-" + "0" + value.day;
    } else {
      return value.year + "-" + value.month + "-" + value.day;
    }
  };

  useEffect(() => {
    dispatch(setDate(chechCurrDay(value)));
  }, [dispatch, value]);

  return (
    <div>
      <button onClick={() => setCalendarIsOpen(!calendarIsOpen)}>
        <span className="relative">{currentDate}</span>
      </button>
      {calendarIsOpen ? (
        <Calendar
          lang="en"
          aria-label="Date (Controlled)"
          value={value}
          onChange={(e) => {
            localStorage.setItem("date", `${e}`);
            setValue(e);
            setCalendarIsOpen(false);
          }}
          onClick={(e) => {
            e.stopPropagation();
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
