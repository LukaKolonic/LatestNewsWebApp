
import React, { useState } from "react";
import "../sass/component/menuItems.scss";
import { Link } from "react-router-dom";

function MenuItem(props) {
  const buttonClass = props.isActive ? 'menu-button active' : 'menu-button';
  const colorClass = props.isActive ? '#BB1E1E' : 'black';

  return (
    <Link to={`/${props.description}`} className={buttonClass}>
    <div className='menu-item' onClick={() => props.onClick(props.description)}>
         <svg viewBox="0 0 24 24" className='menu-icon'>
          <path fill={colorClass} d={props.path} />
        </svg>
         <p className="menu-description">{props.description}</p>
    </div>
    </Link>
  );
}

export default MenuItem;



