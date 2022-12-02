import React from 'react'
import Blog from '../Blog/Blog';

function BlogList(props) {
  return (
    <div className="container-blog">
      {props.blog.map((item) => {
        return (
          <Blog
            title={item.title}
            description={item.description}
            key={item.id}
          />
        );
      })}
    </div>
  )
}

export default BlogList