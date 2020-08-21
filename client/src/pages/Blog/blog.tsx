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

    fetch(`https://rbfn.org/api/blogs/${id}`).then((res) => {
      res.json().then((json: BlogT) => {
        setBlog(json);
        setLoading(false);
        document.title = `${json.title} | RBFN`;
      });
    });
  }, [id, setLoading]);

  return (
    <main>
      <div className="main-wrapper">
        {blog ? (
          <div className="blog">
            <img
              src={`https://rbfn.org/api${blog.banner.formats.large.url}`}
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
      </div>
    </main>
  );
};

export default Blogs;
