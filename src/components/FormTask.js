import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createList } from "../redux/slices/taskGroopSlices";
import { useNavigate } from "react-router-dom";
import { addTask } from "../redux/slices/taskSlices";

function FormTask(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = React.useRef();
  const inputRef = React.useRef();
  const selectRef = React.useRef();

  function createListAndNextPage() {
    const name = inputRef.current.value;
    const count = selectRef.current.value;
    if (name == "" || count == "") {
      return alert("Выберите значения!");
    }
    const id = Math.random().toFixed(2);
    const data = dispatch(createList({ name, count, id }));
    navigate(`/CheckPointsPage/${id}`);
    onAddTask(count, data.payload.id);
  }

  function onAddTask(count, listId) {
    const checkboxes = [];
    for (let i = 0; i < count; i++) {
      checkboxes.push({ checked: false });
    }
    dispatch(
      addTask({
        name: "",
        items: checkboxes,
        listId: listId,
      })
    );
  }

  React.useEffect(() => {
      console.log(ref)
    if (ref === null) {
      navigate("/");
    }
  }, );

  return (
    <div ref={ref}>
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
        {/* <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option> */}
      </select>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={createListAndNextPage}>Создать таску</button>
    </div>
  );
}

export default FormTask;
