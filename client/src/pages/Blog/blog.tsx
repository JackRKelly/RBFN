import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../../common/index";
import "./blog.scss";

const Blogs: FC = () => {
  const [blog, setBlog] = useState();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Blog | RBFN";

    fetch(`http://localhost:1337/blog/${id}`).then((res) => {
      res.json().then((json: Blog) => {
        setBlog(json);
      });
    });
  }, []);

  return (
    <main>
      <h1>Blog</h1>
    </main>
  );
};

export default Blogs;
