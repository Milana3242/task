import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavigateMenu() {
  const tasks = useSelector((state) => state.taskGroop);
  console.log(tasks.length === 0);
  const navigate = useNavigate();

  function openTask(name){
    navigate(`my-app/src/pages/CheckPointsPage.js?name=${name}`);
let nam=window.location.search.split('=')[1]
  }

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
              return <li onClick={()=>openTask(item.name)}>{item.name}</li>;
            })}
        </ol>
      </nav>
    </div>
  );
}
