import React, { FC, useEffect, useState } from "react";
import "./blog.scss";

interface Blog {
  banner: Array<Object>;
  content: string;
  title: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

const Blog: FC = () => {
  const [blogs, setBlogs] = useState<Array<Blog>>();

  useEffect(() => {
    document.title = "Blog | RBFN";

    fetch("http://localhost:1337/blogs").then((res) => {
      res.json().then((json: Array<Blog>) => {
        setBlogs(json);
        console.log(json);
        console.log(new Date(json[0].createdAt));
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
            <h6>{blog.createdAt} - 17 Days ago</h6>
            <p>{blog.content}</p>
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
