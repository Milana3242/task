import React from "react";
import Task from "../components/Task";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { addTask } from "../redux/slices/taskSlices";

function CheckPointsPage(props) {
  const dispatch = useDispatch();
  const par = useParams();
  const tasks = useSelector((state) => state.taskGroop);

  return (
    <div className="task_form">
      {tasks
        .filter((item) => item.id == par.id)
        .map((item) => {
          return <Task task={item}></Task>;
        })}

    </div>
  );
}

export default CheckPointsPage;
