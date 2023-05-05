import React from 'react';
import '../sass/component/header.scss'

function Header(props) {
  return (
    <div className='header'>
      <h1 className='title'>{props.title}</h1>
      <p className='desc'>{props.description}</p>
      <button className='get' onClick={props.onGet}>GET</button>
      <button className='noBtn' onClick={props.onNoThanks}>No, thanks</button>
    </div>
  );
}

export default Header;
