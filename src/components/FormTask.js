import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createList } from "../redux/slices/taskSlices";
import { useNavigate } from "react-router-dom";

function FormTask(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const selectRef = React.useRef();

  function createListAndNextPage() {
    const name = inputRef.current.value;
    const count = selectRef.current.value;
    if(name==''||count==''){return alert('Выберите значения!')}
    dispatch(createList({ name, count }));
    navigate("my-app/src/pages/CheckPointsPage.js")
  }

  return (
    <div>
      <input ref={inputRef} placeholder="название таски"></input>
      <br></br>
      <select ref={selectRef}>
        <option value="">Выберите количество дней</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <br></br>
      <br></br>
      <br></br>
        <button onClick={createListAndNextPage}>Создать таску</button>
    </div>
  );
}

export default FormTask;
