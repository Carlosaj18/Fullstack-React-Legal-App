import React from 'react';
import Blog from '../Blog/Blog';
import './ContainerBlog.css';

function ContainerBlog() {
  return (
    <div className="container-blog">
      < Blog image="update-document.jpg" title="Document Updated" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
      < Blog image="update-document.jpg" title="Document Updated" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
    </div>
  )
}

export default ContainerBlog