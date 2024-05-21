import React from 'react';
import Task from '../components/Task';
import { useSelector } from 'react-redux';

function CheckPointsPage(props) {
  const name = useSelector((state) => state.task.name);

  return (
    <div>
      <h3>{name}</h3>
      <Task></Task>
      <button>ДОБАВИТЬ</button>
    </div>
  );
}

export default CheckPointsPage;
