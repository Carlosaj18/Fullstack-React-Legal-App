import React, { useState, useEffect } from "react";
import "./ContainerBlog.css";
import APICallBlog, {APICallBlogMore} from "../services/mockBlog";
import BlogList from "../BlogList/BlogList";

function ContainerBlog(props) {
  const [blog, setBlog] = useState([]);

  console.log(props.moreBlog)
  useEffect(() => {
    if (props.moreBlog) {
      APICallBlogMore()
        .then((response) => {
          setBlog(response);
        })
        .catch((error) => console.error(error));
    } else {
      APICallBlog().then((response) => {
        setBlog(response);
      });
    }
  }, [props.moreBlog]);

  return <BlogList blog={blog} />;
}

export default ContainerBlog;
