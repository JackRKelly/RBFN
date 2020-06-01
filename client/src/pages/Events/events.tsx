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
import { differenceDate, formatDate } from "../../common/date";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Events: FC<Props> = (props) => {
  const { setLoading } = props;
  const [events, setEvents] = useState<Array<EventT>>();

  useEffect(() => {
    document.title = "Events | RBFN";
    setLoading(true);

    fetch("http://localhost:1337/events").then((res) => {
      res.json().then((json: Array<EventT>) => {
        setEvents(json);
        setLoading(false);
      });
    });
  }, [setLoading]);

  return (
    <main>
      <h1>Events</h1>
      <h2>Upcoming events:</h2>
      <ul className="upcoming-events">
        {events?.map((event, index) => (
          <li key={index}>
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
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Events;
