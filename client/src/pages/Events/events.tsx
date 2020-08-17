import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { EventT } from "../../common/event";
import { SpeakerT } from "../../common/speaker";
import "./events.scss";
import { Link } from "react-router-dom";
import {
  differenceDate,
  formatDate,
  getFormattedTime,
  formatNoTimezoneLongDate,
} from "../../common/date";
import Footer from "../../components/footer";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Events: FC<Props> = (props) => {
  const { setLoading } = props;
  const [events, setEvents] = useState<Array<EventT>>();
  const [speakers, setSpeakers] = useState<Array<SpeakerT>>();

  useEffect(() => {
    document.title = "Events | RBFN";
    setLoading(true);

    fetch("http://localhost:2000/events").then((res) => {
      res.json().then((json: Array<EventT>) => {
        setEvents(json);
        setLoading(false);
      });
    });

    fetch("http://localhost:2000/speakers").then((res) => {
      res.json().then((json: Array<SpeakerT>) => {
        setSpeakers(json);
        setLoading(false);
      });
    });
  }, [setLoading]);

  return (
    <main>
      <div className="main-wrapper">
        <h1>Events</h1>
        <p>
          At RBFN we host a variety of events. We host an annual event for
          practitioners called the Alternative Capital Summit, and we host
          monthly Speaker Series webinars featuring practitioners sharing their
          experience and approach and answering questions from the RBFN
          community.
        </p>
        <h2>Upcoming Events:</h2>
        <ul className="upcoming-events">
          {events
            ?.sort((a, b): number => {
              return differenceDate(a.date) - differenceDate(b.date);
            })
            .map((event, index) => (
              <li key={index}>
                <h5>{event.title}</h5>
                <h6>
                  {formatDate(event.date)}, {getFormattedTime(event.date)} CST
                </h6>
                {event.address ? <h6>{event.address}</h6> : <></>}
                <p>{event.content.substring(0, 120)}...</p>
                <div className="button-container">
                  <Link to={`/event/${event.id}`}>View Event</Link>
                </div>
              </li>
            ))}
        </ul>
        <h2>Past Speakers:</h2>
        <ul className="past-speakers">
          {speakers
            ?.sort((a, b): number => {
              return differenceDate(a.date) - differenceDate(b.date);
            })
            .map((speaker, index) => (
              <li key={index}>
                <img
                  src={`http://localhost:2000${speaker.image.url}`}
                  alt="Event background"
                />
                <h4>{speaker.name}</h4>
                <h5>{formatNoTimezoneLongDate(speaker.date)}</h5>
                <h6>{speaker.title}</h6>
                <div className="button-container">
                  <a
                    href={speaker.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Series
                  </a>
                </div>
              </li>
            ))}
        </ul>
        <h2>Past Events:</h2>
      </div>
      <Footer />
    </main>
  );
};

export default Events;
