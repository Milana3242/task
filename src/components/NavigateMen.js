import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavigateMenu() {
  const taskGroup = useSelector((state) => state.taskGroop);
  return (
    <div className="navigate">
      <nav>
        <Link to={"/"} className='nav_main'><h3>ГЛАВНАЯ</h3></Link>
        <ol>
          {taskGroup.length > 0 &&
            taskGroup.map((item) => {
              return (
                <li>
                  <Link to={`/CheckPointsPage/${item.id}`}>{item.name}</Link>
                </li>
              );
            })}
        </ol>
      </nav>
    </div>
  );
}
