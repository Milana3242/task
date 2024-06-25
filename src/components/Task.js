import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, useParams } from "react-router-dom";

import { changeCheckbox, changeNameTask } from "../redux/slices/taskSlices";
import { addTask } from "../redux/slices/taskSlices";

function Task({ task }) {
  const par = useParams();

  const items = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const item = items.filter((item) => {
    return item.listId == task.id;
  });

  function onChangeNameTasks(e,i,id) {
    const value = e.target.value;
    dispatch(changeNameTask({ i, value, id }));
  }

  function onChangeCheckBox(id,i, g) {
    dispatch(changeCheckbox({ id,i, g }));
  }

  function addNewTask() {
    dispatch(
      addTask({
        name: "",
        items: item[0].items,
        listId: par.id,
      })
    );
  }
  return (
    <div>
      <h3>{task.name}</h3>
      <div>
        {item.map((item, i) => {
          const id=item.listId
          return (
            <div key={i}>
              <input value={item.name} onChange={(e) => onChangeNameTasks(e,i,id)} />
              <button>X</button>
              <br></br>
              {item.items.map((point,g) => {

                return (

                    <span key={g}>
                        {g+1}
                      <input
                        onChange={() => onChangeCheckBox(id,i,g)}
                        type="checkbox"
                        key={i}
                        checked={point.checked}
                      />

                    </span>

                );
              })}
            </div>
          );
        })}
        <br></br>
        <button onClick={addNewTask}>Добавить</button>


    </div>
    </div>
  );
}

export default Task;
