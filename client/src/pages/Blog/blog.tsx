import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blog, formatDate, differenceDate } from "../../common/blog";
import "./blog.scss";

const Blogs: FC = () => {
  const [blog, setBlog] = useState<Blog>();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Blog | RBFN";

    fetch(`http://localhost:1337/blogs/${id}`).then((res) => {
      res.json().then((json: Blog) => {
        setBlog(json);
        console.log(json);
      });
    });
  }, []);

  return (
    <main>
      {blog ? (
        <>
          <img
            src={`http://localhost:1337${blog.banner[0].formats.large.url}`}
            alt=""
          />
          <h1>{blog.title}</h1>
          <h5>Created {formatDate(blog.createdAt)}</h5>
          <p>{blog.content}</p>
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Blogs;
