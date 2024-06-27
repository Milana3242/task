import React from 'react';
import { useSelector,  } from 'react-redux';
import { useParams } from 'react-router-dom';
import Tasks from '../components/Tasks';


function TaskGroopForm(props) {
  const par = useParams();
  const taskGroop = useSelector((state) => state.taskGroop);

  return (
    <div className="main_form">
      {taskGroop
        .filter((groop) => groop.id === par.id)
        .map((groop) => {
          return <Tasks groop={groop}></Tasks>;
        })}
    </div>
  );
}

export default TaskGroopForm;
