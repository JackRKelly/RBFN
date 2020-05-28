import React, { FC, useEffect } from "react";
import "./blog.scss";

const Blog: FC = () => {
  useEffect(() => {
    document.title = "Blog | RBFN";
  }, []);

  return (
    <main>
      <h1>Blog</h1>
      <h2>Past blog posts:</h2>
      <ul className="blog-posts">
        <li>
          <h5>Blog post title</h5>
          <h6>05/28/2020 - 17 Days ago</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            ipsum quidem sint, odit labore aliquid? Suscipit omnis dolorum nobis
            ipsam!
          </p>
          <div className="button-container">
            <button>Read More</button>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Blog;
