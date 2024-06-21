import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, useParams } from "react-router-dom";

function Header(props) {
    const par = useParams();

    const nameList=useSelector(state=>state.taskGroop)
    const headName=nameList.find(item=>item.id==par.id)
    console.log('nameList',headName)

  return (
    <div className="Header">
      {/* <div className="header__logo">
        <Link to={"/"}>

          <img width="38" src="./pizza-logo.svg" alt="Pizza logo" />
        </Link>

        <div>
          <h1>React CheckPoint</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
            quod!
          </p>
        </div>
      </div> */}
      <span>ГЛАВНАЯ</span>
    </div>
  );
}

export default Header;
