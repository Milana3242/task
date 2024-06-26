import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { deleteAllList } from '../redux/slices/taskGroopSlices';
import {
  deleteAllTask,
  deleteTaskWithTaskGroop,
} from '../redux/slices/taskSlices';
import { deleteTaskGroop } from '../redux/slices/taskGroopSlices';
export default function NavigateMenu() {
  const taskGroup = useSelector((state) => state.taskGroop);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function deleteAll() {
    dispatch(deleteAllList());
    dispatch(deleteAllTask());
    navigate('/');
  }

  function deleteGroop(id) {
    dispatch(deleteTaskGroop({ id }));
    dispatch(deleteTaskWithTaskGroop({ id }));
    navigate('/');
  }
  return (
    <div className="navigate">
      <nav>
        <Link to={'/'} className="nav_main">
          <h3>ГЛАВНАЯ</h3>
        </Link>
        <ol>
          {taskGroup.length > 0 &&
            taskGroup.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={`/CheckPointsPage/${item.id}`}>{item.name}</Link>{' '}
                  <button onClick={() => deleteGroop(item.id)}>X</button>
                </li>
              );
            })}
        </ol>
      </nav>
      {taskGroup.length > 0 ? (
        <button onClick={deleteAll}>Очистить все</button>
      ) : (
        ''
      )}
    </div>
  );
}
