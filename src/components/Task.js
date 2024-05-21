import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCheckbox, changeNameTask } from "../redux/slices/taskSlices";

function Task() {
  const count = useSelector((state) => state.taskGroop.count);
  const tasks = useSelector((state) => state.task);
  console.log(tasks)
  const dispatch = useDispatch();

//   const ref = useRef();
//   const value=ref.current==undefined?'':ref.current.value
//  console.log(value)
  function onChangeNameTasks(e,i,g) {
     const value=e.target.value
    dispatch(changeNameTask({i,value,g}))
  }

  function onChangeCheckBox(i,g){
      dispatch(changeCheckbox({i,g}))
  }

  return (
    <div>
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
