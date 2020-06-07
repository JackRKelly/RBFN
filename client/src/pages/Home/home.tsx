import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./home.scss";
import { SpeakerT } from "../../common/speaker";
import { differenceDate, formatDate } from "../../common/date";
import { Link } from "react-router-dom";
import { NewsletterT } from "../../common/newsletter";
import { EventT } from "../../common/event";
import { BlogT } from "../../common/blog";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Home: FC<Props> = (props) => {
  const { setLoading } = props;
  const [speaker, setSpeaker] = useState<SpeakerT>();
  const [newsletter, setNewsletter] = useState<NewsletterT>();
  const [event, setEvent] = useState<EventT>();
  const [blog, setBlog] = useState<BlogT>();
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    document.title = "Home | RBFN";
    setLoading(true);

    fetch("http://localhost:1337/speakers").then((res) => {
      res.json().then((json: Array<SpeakerT>) => {
        setSpeaker(json.reverse()[0]);
        setLoadCount((cur) => cur + 1);
      });
    });
    fetch("http://localhost:1337/newsletters").then((res) => {
      res.json().then((json: Array<NewsletterT>) => {
        setNewsletter(json.reverse()[0]);
        setLoadCount((cur) => cur + 1);
      });
    });
    fetch("http://localhost:1337/events").then((res) => {
      res.json().then((json: Array<EventT>) => {
        setEvent(
          json.sort((a, b): number => {
            return differenceDate(a.date) - differenceDate(b.date);
          })[0]
        );
        setLoadCount((cur) => cur + 1);
      });
    });
    fetch("http://localhost:1337/blogs").then((res) => {
      res.json().then((json: Array<BlogT>) => {
        setBlog(json.reverse()[0]);
        setLoadCount((cur) => cur + 1);
      });
    });
  }, [setLoading]);

  useEffect(() => {
    if (loadCount === 4) {
      setLoading(false);
    }
  }, [loadCount, setLoading]);

  return (
    <main>
      <h1>Home</h1>
      <div className="summary">
        <div className="recent-speaker">
          <h3>Recent Speaker:</h3>
          {speaker ? (
            <div className="speaker-card home-card">
              <h5>{speaker.title}</h5>
              <h6>
                {differenceDate(speaker.createdAt) * -1 === 1
                  ? "Posted Yesterday"
                  : differenceDate(speaker.createdAt) * -1 === 0
                  ? "Posted Today"
                  : `${formatDate(speaker.createdAt)} - 
              ${differenceDate(speaker.createdAt) * -1} days ago`}
              </h6>
              <p>{speaker.content.substring(0, 120)}...</p>
              <div className="button-container">
                <Link to={`/speaker/${speaker.id}`}>View Series</Link>
              </div>
            </div>
          ) : (
            <div className="loading-card"> </div>
          )}
        </div>
        <div className="recent-newsletter">
          <h3>Recent Newsletter:</h3>
          {newsletter ? (
            <div className="newsletter-card home-card">
              <h5>{newsletter.title}</h5>
              <h6>
                {differenceDate(newsletter.createdAt) * -1 === 1
                  ? "Posted Yesterday"
                  : differenceDate(newsletter.createdAt) * -1 === 0
                  ? "Posted Today"
                  : `${formatDate(newsletter.createdAt)} - 
                  ${differenceDate(newsletter.createdAt) * -1} days ago`}
              </h6>
              <p>{newsletter.description.substring(0, 120)}...</p>
              <div className="button-container">
                <a
                  href={`http://localhost:1337${newsletter.pdf.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Newsletter
                </a>
              </div>
            </div>
          ) : (
            <div className="loading-card"> </div>
          )}
        </div>
        <div className="upcoming-event">
          <h3>Next Event:</h3>
          {event ? (
            <div className="event-card home-card">
              <h5>{event.title}</h5>
              <h6>
                {formatDate(event.createdAt)} - In {differenceDate(event.date)}{" "}
                days
              </h6>
              <h6>{event.address}</h6>
              <p>{event.content.substring(0, 120)}...</p>
              <div className="button-container">
                <Link to={`/event/${event.id}`}>View Event</Link>
              </div>
            </div>
          ) : (
            <div className="loading-card"> </div>
          )}
        </div>
        <div className="recent-blog">
          <h3>Recent Blog:</h3>
          {blog ? (
            <div className="blog-card home-card">
              <h5>{blog.title}</h5>
              <h6>
                {differenceDate(blog.createdAt) * -1 === 1
                  ? "Posted Yesterday"
                  : differenceDate(blog.createdAt) * -1 === 0
                  ? "Posted Today"
                  : `${formatDate(blog.createdAt)} - 
            ${differenceDate(blog.createdAt) * -1} days ago`}
              </h6>
              <p>{blog.content.substring(0, 120)}...</p>
              <div className="button-container">
                <Link to={`/blog/${blog.id}`}>Read Blog</Link>
              </div>
            </div>
          ) : (
            <div className="loading-card"> </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
