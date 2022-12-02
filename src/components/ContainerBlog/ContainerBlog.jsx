import React, { useState, useEffect } from 'react';
import './ContainerBlog.css';
import APICallBlog from "../services/mockBlog";
import BlogList from '../BlogList/BlogList';

function ContainerBlog() {

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    // 4. Llamo a la Promesa y guardo el resultado en un estado
    APICallBlog().then((response) => {
      setBlog(response);
    });
  }, []);

  return (
    <BlogList blog={blog}/>
  )
}

export default ContainerBlog