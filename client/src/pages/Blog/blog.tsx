import React, {
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../../common/blog";
import MarkdownView from "react-showdown";
import "./blog.scss";
import { formatDate, differenceDate } from "../../common/date";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Blogs: FC<Props> = (props) => {
  const { setLoading } = props;
  const [blog, setBlog] = useState<Blog>();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Blog | RBFN";
    setLoading(true);

    fetch(`http://localhost:1337/blogs/${id}`).then((res) => {
      res.json().then((json: Blog) => {
        setBlog(json);
        setLoading(false);
      });
    });
  }, [id, setLoading]);

  return (
    <main>
      {blog ? (
        <div className="blog">
          <img
            src={`http://localhost:1337${blog.banner.formats.large.url}`}
            alt="Blog background"
          />
          <h1>{blog.title}</h1>
          <h5>
            {differenceDate(blog.createdAt) * -1 === 1
              ? "Posted Yesterday"
              : differenceDate(blog.createdAt) * -1 === 0
              ? "Posted Today"
              : `Posted ${formatDate(blog.createdAt)} - 
              ${differenceDate(blog.createdAt) * -1} days ago`}
          </h5>
          <MarkdownView markdown={blog.content} />
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Blogs;
