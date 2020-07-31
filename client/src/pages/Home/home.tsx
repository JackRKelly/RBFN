import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./home.scss";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Home: FC<Props> = (props) => {
  const { setLoading } = props;

  useEffect(() => {
    document.title = "Home | RBFN";
    setLoading(true);
  }, [setLoading]);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <main>
      <h1>Why we exist</h1>
      <p>
        We are a community of revenue-based financing (and other) practitioners
        focused on developing our industry and extending our reach to
        entrepreneurs around the world.
      </p>
      <h1>What we do</h1>
      <p>
        RBFN aims to connect practitioners in order to accelerate our collective
        learning and industry in order to make capital available to
        entrepreneurs in different and more flexible formats.
      </p>

      {/* <div className="summary">
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
                  href={`http://localhost:2000${newsletter.pdf.url}`}
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
                {formatDate(event.date)}, {getFormattedTime(event.date)} CST
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
      </div> */}
    </main>
  );
};

export default Home;
