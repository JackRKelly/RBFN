import React, {
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { BlogT } from "../../common/blog";
import "./blogs.scss";
import { Link } from "react-router-dom";
import { renderDate, formatDate } from "../../common/date";
import Footer from "../../components/footer";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Blogs: FC<Props> = (props) => {
  const { setLoading } = props;
  const [blogs, setBlogs] = useState<Array<BlogT>>();

  useEffect(() => {
    document.title = "Blog | RBFN";
    setLoading(true);

    fetch("/api/blogs").then((res) => {
      res.json().then((json: Array<BlogT>) => {
        setBlogs(json.reverse());
        setLoading(false);
      });
    });
  }, [setLoading]);

  return (
    <main>
      <div className="main-wrapper">
        <h1>Blog</h1>
        <h2>Past blog posts:</h2>
        <ul className="blog-posts">
          {blogs?.map((blog, index) => (
            <li key={index}>
              <h5>{blog.title}</h5>
              <h6>
                {formatDate(blog.createdAt)} - {renderDate(blog.createdAt)}
              </h6>
              <p>{blog.content.substring(0, 120)}...</p>
              <div className="button-container">
                <Link to={`/blog/${blog.id}`}>Read Blog</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </main>
  );
};

export default Blogs;
