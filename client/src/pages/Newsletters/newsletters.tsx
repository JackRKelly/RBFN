import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./newsletters.scss";
import { NewsletterT } from "../../common/newsletter";
import { renderDate, formatDate } from "../../common/date";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Newsletters: FC<Props> = (props) => {
  const { setLoading } = props;
  const [newsletters, setNewsletters] = useState<Array<NewsletterT>>();

  useEffect(() => {
    document.title = "Newsletter | RBFN";
    setLoading(true);

    fetch("http://localhost:2000/newsletters").then((res) => {
      res.json().then((json: Array<NewsletterT>) => {
        setNewsletters(json.reverse());
        setLoading(false);
      });
    });
  }, [setLoading]);

  return (
    <main>
      <h1>Newsletter</h1>
      <h2>Recent editions:</h2>
      <ul className="recent-editions">
        {newsletters?.map((newsletter, index) => (
          <li key={index}>
            <h5>{newsletter.title}</h5>
            <h6>
              {formatDate(newsletter.createdAt)} -{" "}
              {renderDate(newsletter.createdAt)}
            </h6>
            <p>{newsletter.description.substring(0, 120)}...</p>
            <div className="button-container">
              <a
                href={`http://localhost:2000${newsletter.pdf.url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Newsletter
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Newsletters;
