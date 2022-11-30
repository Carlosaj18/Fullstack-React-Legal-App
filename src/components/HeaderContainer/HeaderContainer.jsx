import React from 'react';
import './HeaderContainer.css';
import PropTypes from 'prop-types';

let styles = {
    color: 'black',
}

function HeaderContainer(props) {
  return (
    <div className="container-title"><h1 style={styles}>👋{props.title}</h1></div>
  )
}


HeaderContainer.defaultProps = {
    title: "Hola, invitado"
}

HeaderContainer.propTypes = {
  title: PropTypes.string
}


export default HeaderContainer