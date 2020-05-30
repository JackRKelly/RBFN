import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../../common/index";
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
      <h1>{blog?.title}</h1>
      <h5>Created </h5>
      <p>{blog?.content}</p>
    </main>
  );
};

export default Blogs;
