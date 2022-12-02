/* --------------------- BAKEND ------------------- */
import blog from "../data/blog";

const APICallBlog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(blog);
        }, 3000)
    })
}

export default APICallBlog;
