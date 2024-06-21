import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavigateMenu() {
  const taskGroup = useSelector((state) => state.taskGroop);
  return (
    <div className="navigate">
      <nav>
        <ol>
          <li class="crumb">
            <Link to={'/'}>ГЛАВНАЯ</Link>
          </li>
          {taskGroup.length > 0 &&
            taskGroup.map((item) => {
              return <Link to={`/CheckPointsPage/${item.id}`}>{item.name}</Link>;
            })}
        </ol>
      </nav>
    </div>
  );
}
