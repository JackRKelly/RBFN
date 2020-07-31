import React, {
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useParams } from "react-router-dom";
import { BlogT } from "../../common/blog";
import MarkdownView from "react-showdown";
import "./blog.scss";
import { renderDate, formatDate } from "../../common/date";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Blogs: FC<Props> = (props) => {
  const { setLoading } = props;
  const [blog, setBlog] = useState<BlogT>();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Blog | RBFN";
    setLoading(true);

    fetch(`http://localhost:2000/blogs/${id}`).then((res) => {
      res.json().then((json: BlogT) => {
        setBlog(json);
        setLoading(false);
        document.title = `${json.title} | RBFN`;
      });
    });
  }, [id, setLoading]);

  return (
    <main>
      {blog ? (
        <div className="blog">
          <img
            src={`http://localhost:2000${blog.banner.formats.large.url}`}
            alt="Blog background"
          />
          <h1>{blog.title}</h1>
          <h5>
            {formatDate(blog.createdAt)} - {renderDate(blog.createdAt)}
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
