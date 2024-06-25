import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, useParams } from "react-router-dom";

function Header({headName}) {


  return (
    <div className="Header">


      <span> {headName?headName.name.toUpperCase():'ГЛАВНАЯ'}</span>
    </div>
  );
}

export default Header;
