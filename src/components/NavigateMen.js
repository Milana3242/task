import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteAllList } from "../redux/slices/taskGroopSlices";
import { deleteAllTask } from "../redux/slices/taskSlices";

export default function NavigateMenu() {
  const taskGroup = useSelector((state) => state.taskGroop);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  function deleteAll(){
    dispatch(deleteAllList())
    dispatch(deleteAllTask())
    navigate('/')
  }
  return (
    <div className="navigate">
      <nav>
        <Link to={"/"} className='nav_main'><h3>ГЛАВНАЯ</h3></Link>
        <ol>
          {taskGroup.length > 0 &&
            taskGroup.map((item) => {
              return (
                <li >
                  <Link to={`/CheckPointsPage/${item.id}`}>{item.name}</Link>
                </li>
              );
            })}
        </ol>
      </nav>
      {taskGroup.length>0?<button onClick={deleteAll}>Очистить все</button>:''}

    </div>
  );
}
