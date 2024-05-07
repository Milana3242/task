import React from "react";
import { useSelector } from "react-redux";
import Task from "../components/Task";

function CheckPointsPage(props) {
  const count = useSelector((state) => state.task.count);
  return (
    <div>
      <Task count={count}></Task>
    </div>
  );
}

export default CheckPointsPage;
