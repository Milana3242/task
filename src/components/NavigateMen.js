import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavigateMenu() {
  const tasks = useSelector((state) => state.taskGroop);
  const navigate = useNavigate();

  function openTask(i){
    navigate(`/CheckPointsPage?index=${i}`);
    // onAddTask(count)
  }
  // function onAddTask(count) {
  //   const checkboxes = [];
  //   for (let i = 0; i < count; i++) {
  //     checkboxes.push({ checked: false });
  //   }
  //  return checkboxes
  // }

  return (
    <div className="navigate">
      <nav>
        <ol>
          <li class="crumb">
            <Link to={'/'}>ГЛАВНАЯ</Link>
          </li>
          {tasks.length > 0 &&
            tasks.map((item,i) => {
              return <li onClick={()=>openTask(i)}>{item.name}</li>;
            })}
        </ol>
      </nav>
    </div>
  );
}
