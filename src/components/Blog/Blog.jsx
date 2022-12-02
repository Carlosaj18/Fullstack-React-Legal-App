import React from 'react';

import './Blog.css';

function Blog(props) {
  return (
    <div className="blog">
        <div className="info-card">
            <h3>{props.title}</h3> 
            <p>Creado el {props.description}</p>
        </div>
        <div className="card-background"></div>
    </div>
  )
}

export default Blog