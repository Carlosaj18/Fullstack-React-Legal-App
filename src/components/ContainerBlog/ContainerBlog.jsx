import React from 'react';
import Blog from '../Blog/Blog';
import './ContainerBlog.css';
import blog from '../data/blog';

function ContainerBlog() {
  return (
    <div className="container-blog">
      {blog.map((item, i) => {
        return (
          <Blog
            title={item.title}
            description={item.description}
            key={i}
          />
        );
      })}
    </div>
  )
}

export default ContainerBlog