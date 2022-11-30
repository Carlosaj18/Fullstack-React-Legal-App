import React from 'react'
import './Blog.css';


let blog = [
  {
    id: 1, 
    title: "Improve your files",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }, 
  {
    id: 2, 
    title: "Automatically update your legal files",
    description: "Lorem Ipsum is simply dummy text of."
  }
];

function Blog() {
  return (
    <>
    { blog.map((item, i) => 
      <div className="blog" key={i}>
        <div className="info-card">
            <h3>{item.title}</h3>
            <p>Creado el {item.description}</p>
        </div>
        <div className="card-background"></div>
      </div>
    ) }
    </>
  )
}

export default Blog