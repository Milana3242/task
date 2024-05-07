import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="Header">
      <div className="header__logo">
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
      </div>
    </div>
  );
}

export default Header;
