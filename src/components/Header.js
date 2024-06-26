import React from 'react';

function Header({headName}) {
  return (
    <div className="Header">
      <span> {headName?headName.name.toUpperCase():'ГЛАВНАЯ'}</span>
    </div>
  );
}

export default Header;
