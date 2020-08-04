import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { EventT } from "../../common/event";
import "./events.scss";
import { Link } from "react-router-dom";
import {
  differenceDate,
  formatDate,
  getFormattedTime,
} from "../../common/date";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Events: FC<Props> = (props) => {
  const { setLoading } = props;
  const [events, setEvents] = useState<Array<EventT>>();

  useEffect(() => {
    document.title = "Events | RBFN";
    setLoading(true);

    fetch("http://localhost:2000/events").then((res) => {
      res.json().then((json: Array<EventT>) => {
        setEvents(json);
        setLoading(false);
      });
    });
  }, [setLoading]);

  return (
    <main>
      <h1>Events</h1>
      <p>
        At RBFN we host a variety of events. We host an annual event for
        practitioners called the Alternative Capital Summit, and we host monthly
        Speaker Series webinars featuring practitioners sharing their experience
        and approach and answering questions from the RBFN community.
      </p>
      <h2>Upcoming events:</h2>
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
              <h6>{event.address}</h6>
              <p>{event.content.substring(0, 120)}...</p>
              <div className="button-container">
                <Link to={`/event/${event.id}`}>View Event</Link>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Events;
