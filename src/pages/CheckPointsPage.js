import React from "react";
import Task from "../components/Task";
import { useSelector, useDispatch } from "react-redux";

function CheckPointsPage(props) {
  const tasks = useSelector((state) => state.taskGroop);
  const index = window.location.search.split("=")[1];
  const filterTask = tasks[index];
  console.log('fil',filterTask);
  console.log('tasks',tasks);
  console.log('index',index);

  return (
    <div className="task_form">
      <Task name={filterTask.name} count={filterTask.count}></Task>
    </div>
  );
}

export default CheckPointsPage;
