import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, useParams } from "react-router-dom";

import { changeCheckbox, changeNameTask } from "../redux/slices/taskSlices";
import { addTask } from "../redux/slices/taskSlices";

function Task({ task }) {
  const par = useParams();

  const items = useSelector((state) => state.task);
  const dispatch = useDispatch();
  console.log("task", task.items);
  console.log("items", items);

  const item = items.filter((item) => {
    return item.listId == task.id;
  });
  console.log("item", item);

  function onChangeNameTasks(e,i,id) {
    const value = e.target.value;
    console.log(value)
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
          console.log("it", item.listId);
          const id=item.listId
          return (
            <>
              <input onChange={(e) => onChangeNameTasks(e,i,id)} />
              <br></br>
              {item.items.map((point,g) => {
                console.log("item", item);

                return (
                  <>
                    <span>
                      <input
                        onChange={() => onChangeCheckBox(id,i,g)}
                        type="checkbox"
                        key={i}
                      />
                    </span>
                  </>
                );
              })}
            </>
          );
        })}
        <br></br>
        <button onClick={addNewTask}>Добавить</button>

        {/* {itemss.map((item,i) => {
            console.log('it',item)
          return (
            <span>
              <input
                onChange={() => onChangeCheckBox( )}
                type="checkbox"
                key={i}
              />


            </span>
          );
        })} */}
      </div>

      {/* {tasks.map((task, i) => {
        return (
          <>
            <input value={tasks[i].name} onChange={(e)=>onChangeNameTasks(e,i)} />

          </>
        );
      })} */}
    </div>
  );
}

export default Task;
