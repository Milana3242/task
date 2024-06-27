import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { deleteAllGroop,deleteGroop, } from '../redux/slices/taskGroopSlices';
import {
  deleteAllTask,
  deleteTasksWithGroop,
} from '../redux/slices/taskSlices';

export default function NavigateMenu() {
  const taskGroop = useSelector((state) => state.taskGroop);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function deleteAll() {
    dispatch(deleteAllGroop());
    dispatch(deleteAllTask());
    navigate('/');
  }

  function deleteTaskGroop(id) {
    dispatch(deleteGroop({ id }));
    dispatch(deleteTasksWithGroop({ id }));
    navigate('/');
  }

  return (
    <div className="navigate">
      <nav >
        <Link to={'/'} className="nav_main">
          <h2>ГЛАВНАЯ</h2>
        </Link>
        <ol className='page_list'>
          {taskGroop.length > 0 &&
            taskGroop.map((groop, i) => {
              return (
                <li className='page-item' key={i}>
                  <Link to={`/TaskGroopForm/${groop.id}`} className='page-link'>{groop.name}</Link>{' '}
                  <button onClick={() => deleteTaskGroop(groop.id)}>X</button>
                </li>
              );
            })}
        </ol>
      </nav>
      {taskGroop.length > 0 ? (
        <button onClick={deleteAll}>Очистить все</button>
      ) : (
        ''
      )}
    </div>
  );
}
