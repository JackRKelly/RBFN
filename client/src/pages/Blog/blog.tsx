import React, { FC, useEffect, useState } from "react";
import "./blog.scss";

const Blog: FC = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    document.title = "Blog | RBFN";

    fetch("http://localhost:1337/blogs").then((res) => {
      res.json().then((json) => {
        setBlogs(json);
      });
    });
  }, []);

  return (
    <main>
      <h1>Blog</h1>
      <h2>Past blog posts:</h2>
      <ul className="blog-posts">
        {blogs.map((blog) => (
          <li>
            <h5>{blog.title}</h5>
            <h6>05/28/2020 - 17 Days ago</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda ipsum quidem sint, odit labore aliquid? Suscipit omnis
              dolorum nobis ipsam!
            </p>
            <div className="button-container">
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;
