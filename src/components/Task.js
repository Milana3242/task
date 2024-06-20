import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCheckbox, changeNameTask } from "../redux/slices/taskSlices";
import { addTask } from '../redux/slices/taskSlices';

function Task({ name, count }) {
  const tasks = useSelector((state) => state.task);
  const items = useSelector((state) => state.taskGroop.items);
  const dispatch = useDispatch();
  console.log(name);
  console.log(items);

  function onChangeNameTasks(e, i, g) {
    const value = e.target.value;
    dispatch(changeNameTask({ i, value, g }));
  }

  function onChangeCheckBox(i, g) {
    dispatch(changeCheckbox({ i, g }));
  }



  return (
    <div>
        <h3>{name}</h3>
      <input  onChange={(e) => onChangeNameTasks(e)} />

      {tasks.map((task, i) => {
        return (
          <>
            <input value={tasks[i].name} onChange={(e)=>onChangeNameTasks(e,i)} />
            <div>
              {task.items.map((item,g) => {
                return (
                  <span>
                    <input onChange={()=>onChangeCheckBox(i,g)} type="checkbox" key={i} />

                    {g + 1}
                  </span>
                );
              })}
            </div>
          </>
        );
      })}

    </div>
  );
}

export default Task;
