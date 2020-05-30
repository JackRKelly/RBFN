import React, {
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { Blog } from "../../common/blog";
import "./blogs.scss";
import { Link } from "react-router-dom";
import { formatDate, differenceDate } from "../../common/date";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Blogs: FC<Props> = (props) => {
  const { setLoading } = props;
  const [blogs, setBlogs] = useState<Array<Blog>>();

  useEffect(() => {
    document.title = "Blog | RBFN";
    setLoading(true);

    fetch("http://localhost:1337/blogs").then((res) => {
      res.json().then((json: Array<Blog>) => {
        setBlogs(json);
        setLoading(false);
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
              {formatDate(blog.createdAt)} - {differenceDate(blog.createdAt)}{" "}
              days ago
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
