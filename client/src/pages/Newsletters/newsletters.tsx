import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./newsletters.scss";
import { NewsletterT } from "../../common/newsletter";
import { differenceDate, formatDate } from "../../common/date";
import { Link } from "react-router-dom";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Newsletters: FC<Props> = (props) => {
  const { setLoading } = props;
  const [newsletters, setNewsletters] = useState<Array<NewsletterT>>();

  useEffect(() => {
    document.title = "Newsletter | RBFN";
    setLoading(true);

    fetch("http://localhost:1337/newsletters").then((res) => {
      res.json().then((json: Array<NewsletterT>) => {
        setNewsletters(json);
        setLoading(false);
        console.log(json);
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
              {differenceDate(newsletter.createdAt) * -1 === 1
                ? "Posted Yesterday"
                : differenceDate(newsletter.createdAt) * -1 === 0
                ? "Posted Today"
                : `${formatDate(newsletter.createdAt)} - 
                    ${differenceDate(newsletter.createdAt) * -1} days ago`}
            </h6>
            <h6>{newsletter.address}</h6>
            <p>{newsletter.description.substring(0, 120)}...</p>
            <div className="button-container">
              <a href={`http://localhost:1337${newsletter.pdf.url}`}>
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
