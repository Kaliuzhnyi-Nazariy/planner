import { IValue } from "../CalendarView";

export const CreateCurrDay = (value: IValue) => {
  if (value.day.toString().length === 1) {
    return value.year + "-" + value.month + "-" + "0" + value.day;
  } else {
    return value.year + "-" + value.month + "-" + value.day;
  }
};
