import React, { FC, useEffect, useState } from "react";
import { Blog } from "../../common/index";
import "./blogs.scss";
import { Link } from "react-router-dom";

const Blogs: FC = () => {
  const [blogs, setBlogs] = useState<Array<Blog>>();

  const differenceDate = (date: string) => {
    const date1 = new Date();
    const date2 = new Date(date);

    const utc1 = Date.UTC(
      date1.getFullYear(),
      date1.getMonth(),
      date1.getDate()
    );
    const utc2 = Date.UTC(
      date2.getFullYear(),
      date2.getMonth(),
      date2.getDate()
    );

    return `${Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24))} days ago`;
  };

  const formatDate = (date: string) => {
    let dateObject = new Date(date);
    const dateTimeFormat = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: year },
    ] = dateTimeFormat.formatToParts(dateObject);

    return `${month} ${day}, ${year}`;
  };

  useEffect(() => {
    document.title = "Blog | RBFN";

    fetch("http://localhost:1337/blogs").then((res) => {
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
              <Link to={`/blog/${blog.id}`}>Read More</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blogs;
