import React from 'react';
import './HeaderContainer.css';

let styles = {
    color: 'black',
}

function HeaderContainer(props) {
  return (
    <div className="container-title"><h1 style={styles}>👋{props.title}</h1></div>
  )
}

export default HeaderContainer