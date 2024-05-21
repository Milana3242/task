import React from "react";
import Task from "../components/Task";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/slices/taskSlices";

function CheckPointsPage(props) {
  const name = useSelector((state) => state.taskGroop.name);
  const count = useSelector((state) => state.taskGroop.count);
  const dispatch = useDispatch();
  function onAddTask() {
    const checkboxes = [];
    for (let i = 0; i < count; i++) {
      checkboxes.push({ checked: false });
    }
    dispatch(
      addTask({
        name: "",
        items: checkboxes,
      })
    );
  }

  return (
    <div>
      <h3>{name}</h3>
      <Task></Task>
      <button onClick={onAddTask}>ДОБАВИТЬ</button>
    </div>
  );
}

export default CheckPointsPage;
