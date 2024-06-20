import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavigateMenu() {
  const tasks = useSelector((state) => state.taskGroop);
  console.log(tasks.length === 0);
  return (
    <div className="navigate">
      <nav>
        <ol>
          <li class="crumb">
            <Link to={'/'}>ГЛАВНАЯ</Link>
          </li>
          {tasks.length > 0 &&
            tasks.map((item) => {
              console.log(item.name);
              return <li>{item.name}</li>;
            })}
        </ol>
      </nav>
    </div>
  );
}
