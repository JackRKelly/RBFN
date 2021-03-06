import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./newsletters.scss";
import { NewsletterT } from "../../common/newsletter";
import { formatDate } from "../../common/date";
import Footer from "../../components/footer";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Newsletters: FC<Props> = (props) => {
  const { setLoading } = props;
  const [newsletters, setNewsletters] = useState<Array<NewsletterT>>();

  useEffect(() => {
    document.title = "Newsletter | RBFN";
    setLoading(true);

    fetch("/api/newsletters").then((res) => {
      res.json().then((json: Array<NewsletterT>) => {
        setNewsletters(json.reverse());
        setLoading(false);
      });
    });
  }, [setLoading]);

  return (
    <main>
      <div className="main-wrapper">
        <h1>Newsletter Archive</h1>
        <h2>Recent editions:</h2>
        <ul className="recent-editions">
          {newsletters
            ?.sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((newsletter, index) => (
              <li key={index}>
                <a
                  href={newsletter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    {formatDate(newsletter.date)} - {newsletter.title}
                  </p>
                </a>
              </li>
            ))}
        </ul>
      </div>
      <Footer />
    </main>
  );
};

export default Newsletters;
