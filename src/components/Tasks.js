import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams } from "react-router-dom";

import {
  deleteAllTask,
  addTask,
} from "../redux/slices/taskSlices";
import Task from "./Task";

function Tasks({ groop }) {
  const par = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const filterTasks = tasks.filter((task) => task.listId === groop.id);

  function addNewTask() {
    const checkboxes = [];
    for (let i = 0; i < groop.count; i++) {
      checkboxes.push({ checked: false });
    }
    dispatch(
      addTask({
        name: "",
        checkboxes,
        listId: par.id,
      })
    );
  }

  function deleteTaskAll() {
    dispatch(deleteAllTask());
  }

  return (
    <div >
      <h3>{groop.name}</h3>
      <div>
        {filterTasks.map((task, i) => {
          const id = task.id;
          return (
            <>
              <Task taskName={task.name} id={id} i={i} checkboxes={task.checkboxes} />
              <br></br>
            </>
          );
        })}
        <br></br>
        <button onClick={addNewTask}>Добавить</button>
        {filterTasks.length > 0 ? (
          <button onClick={deleteTaskAll}>Очистить все</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Tasks;
