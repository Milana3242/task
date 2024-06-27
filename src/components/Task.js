import React from "react";
import debounce from "lodash.debounce";
import { changeCheckbox, changeNameTask, deleteTask } from "../redux/slices/taskSlices";
import { useDispatch } from "react-redux";

function Task({ taskName,id,i,checkboxes }) {
  const [val, setValue] = React.useState(taskName);
  const dispatch = useDispatch();

  function onChangeNameTasks(e, id) {
    const value = e.target.value;
    setValue(value);
    updateInputValue(value, id);
  }
  const updateInputValue = React.useCallback(
    debounce((value, id) => {
      dispatch(changeNameTask({ value, id }));
    }, 400),
    []
  );

  function onChangeCheckBox(id, g) {
    dispatch(changeCheckbox({ id, g }));
  }

  function onDeleteTask(i, id) {
    dispatch(deleteTask({ i, id }));
    setValue("");
  }

  return (
    <div key={i}>
      <input value={val} onChange={(e) => onChangeNameTasks(e, id)} />
      <button onClick={() => onDeleteTask(i, id)}>X</button>
      <br></br>

      {checkboxes.map((check, g) => {
        return (
          <span key={g}>
            {/* {g + 1} */}
            <input
              onChange={() => onChangeCheckBox(id, g)}
              type="checkbox"
              key={i}
              checked={check.checked}
            />
          </span>
        );
      })}

    </div>
  );
}

export default Task;
