/* --------------------- BAKEND ------------------- */
import blog from "../data/blog";

const APICallBlog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let newArry = blog.slice(0, 2);
        resolve(newArry);
        }, 2000)
    })
}

export const APICallBlogMore = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let newArry = blog.slice(0, 4);
        resolve(newArry);
      }, 1000);
    });
  };

export default APICallBlog;
