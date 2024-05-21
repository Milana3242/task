import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Task() {
  const count = useSelector((state) => state.task.count);
  console.log(count);
  const dispatch = useDispatch();
  function renderCheckBox() {
    // function renderCheckBox() {
    //     const checkboxes = [];
    //     for (let i = 0; i < count; i++) {
    //       checkboxes.push(<input type="checkbox" key={i} />); // добавляем каждый элемент в массив
    //     }
    //     return checkboxes; // возвращаем массив элементов
    //   }
    const checkboxes = [];
    for (let i = 0; i < count; i++) {
      checkboxes.push(
        <span>
          <input type="checkbox" key={i} />
          {i + 1}
        </span>
      );
    }
    return checkboxes;
  }

  const ref = useRef();
  function changeNameTask() {
    console.log(ref.current.value);

    dispatch(changeNameTask(ref.current.value));
  }
  return (
    <div>
      <input onChange={() => changeNameTask} ref={ref} />
      <div>{renderCheckBox()}</div>
    </div>
  );
}

export default Task;
