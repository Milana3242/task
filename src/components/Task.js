import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, useParams } from 'react-router-dom';

import {
  changeCheckbox,
  changeNameTask,
  deleteAllTask,
  addTask,
  deleteTask,
} from '../redux/slices/taskSlices';

function Task({ groop }) {
  const par = useParams();
  const dispatch = useDispatch();
  console.log(groop);
  const items = useSelector((state) => state.task);

  const item = items.filter((item) => item.listId == groop.id);

  function onChangeNameTasks(e, id) {
    const value = e.target.value;
    dispatch(changeNameTask({ value, id }));
  }

  function onChangeCheckBox(id, g) {
    dispatch(changeCheckbox({ id, g }));
  }

  function addNewTask() {
    const checkboxes = [];
    for (let i = 0; i < groop.count; i++) {
      checkboxes.push({ checked: false });
    }
    dispatch(
      addTask({
        name: '',
        items: checkboxes,
        listId: par.id,
      })
    );
  }
  function onDeleteTask(i, id) {
    dispatch(deleteTask({ i, id }));
  }
  // function deleteTaskAll() {
  //   dispatch(deleteAllTask());
  // }
  return (
    <div>
      <h3>{groop.name}</h3>
      <div>
        {item.map((item, i) => {
          const id = item.id;
          console.log(id);

          return (
            <>
              <div key={i}>
                <input
                  value={item.name}
                  onChange={(e) => onChangeNameTasks(e, id)}
                />
                <button onClick={() => onDeleteTask(i, id)}>X</button>
                <br></br>
                {item.items.map((point, g) => {
                  return (
                    <span key={g}>
                      {/* {g + 1} */}
                      <input
                        onChange={() => onChangeCheckBox(id, g)}
                        type="checkbox"
                        key={i}
                        checked={point.checked}
                      />
                    </span>
                  );
                })}
              </div>
              <br></br>
            </>
          );
        })}
        <br></br>
        <button onClick={addNewTask}>Добавить</button>
        {item.length > 0 ? (
          <button onClick={() => dispatch(deleteAllTask())}>
            Очистить все
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Task;
