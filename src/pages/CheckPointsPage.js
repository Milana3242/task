import React from 'react';
import Task from '../components/Task';
import { useSelector, useDispatch } from 'react-redux';

function CheckPointsPage(props) {
  const name = useSelector((state) => state.taskGroop.name);
  console.log(useSelector((state) => state.taskGroop));
  const count = useSelector((state) => state.taskGroop.count);

  const tasks = useSelector((state) => state.taskGroop);

  return (
    <div>
      {tasks.length > 0 &&
        tasks.map((item) => {
          <Task name={item.name} count={item.count}></Task>;
        })}
    </div>
  );
}

export default CheckPointsPage;
