import React, { FC, useEffect } from "react";
import "./blog.scss";

const Blog: FC = () => {
  useEffect(() => {
    document.title = "Blog | RBFN";
  }, []);

  return (
    <main>
      <h1>Blog</h1>
    </main>
  );
};

export default Blog;
