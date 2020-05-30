import React, {
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../../common/blog";
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
  }, []);

  return (
    <main>
      {blog ? (
        <div className="blog">
          <img
            src={`http://localhost:1337${blog.banner[0].formats.large.url}`}
            alt=""
          />
          <h1>{blog.title}</h1>
          <h5>
            Posted {formatDate(blog.createdAt)} -{" "}
            {differenceDate(blog.createdAt)} days ago
          </h5>
          <p>{blog.content}</p>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Blogs;
