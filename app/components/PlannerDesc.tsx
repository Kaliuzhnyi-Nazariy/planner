"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { getTasksByDate } from "@/redux/features/MarkersPlan/marker-operations";
import { useSelector } from "react-redux";
import {
  filteredTasks,
  selectTasks,
} from "@/redux/features/MarkersPlan/selectors";
import { selectDate } from "@/redux/features/date/selectors";
import MobView from "./views/MobView/MobView";
import DescView from "./views/DescView/DescView";

const PlannerDesc = () => {
  const dispatch = useAppDispatch();

  const tasksList = useSelector(selectTasks);
  const datePicked = useSelector(selectDate);
  const filteredList = useSelector(filteredTasks);

  const [prevTasksList, setPrevTasksList] = useState(tasksList);

  useEffect(() => {
    if (JSON.stringify(filteredList) !== JSON.stringify(prevTasksList)) {
      setPrevTasksList(filteredList);
      dispatch(getTasksByDate({ date: datePicked }));
    }
  }, [prevTasksList, filteredList]);

  useEffect(() => {
    dispatch(getTasksByDate({ date: datePicked }));
    setPrevTasksList(tasksList);
  }, [dispatch, datePicked]);

  return (
    <>
      <div className="block lg:hidden overflow-y-hidden">
        <MobView />
      </div>
      <div className="hidden lg:block overflow-y-hidden">
        <DescView />
      </div>
    </>
  );
};

export default PlannerDesc;

//  translate-x-[-190px] translate-y-[-150px]
