import React from "react";
import Task from "../components/Task";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { addTask } from "../redux/slices/taskSlices";

function CheckPointsPage(props) {
  const par = useParams();
  const taskGroop = useSelector((state) => state.taskGroop);

  return (
    <div className="task_form">
      {taskGroop
        .filter((item) => item.id == par.id)
        .map((item) => {
          return <Task groop={item}></Task>;
        })}

    </div>
  );
}

export default CheckPointsPage;
