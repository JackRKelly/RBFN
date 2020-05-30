import React, { FC, useEffect, useState } from "react";
import "./blogs.scss";

const Blogs: FC = () => {
  const [blog, setBlog] = useState();

  useEffect(() => {
    document.title = "Blog | RBFN";

    fetch(`http://localhost:1337/blog/${id}`).then((res) => {
      res.json().then((json: Array<Blog>) => {
        setBlogs(json);
      });
    });
  }, []);

  return (
    <main>
      <h1>Blog</h1>
      <h2>Past blog posts:</h2>
      <ul className="blog-posts">
        {blogs?.map((blog, index) => (
          <li key={index}>
            <h5>{blog.title}</h5>
            <h6>
              {formatDate(blog.createdAt)} - {differenceDate(blog.createdAt)}
            </h6>
            <p>{blog.content.substring(0, 120)}...</p>
            <div className="button-container">
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blogs;
