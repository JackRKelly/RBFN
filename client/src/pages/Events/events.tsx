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

    fetch("https://rbfn.org/api/events").then((res) => {
      res.json().then((json: Array<EventT>) => {
        setEvents(json);
        setLoading(false);
      });
    });

    fetch("https://rbfn.org/api/speakers").then((res) => {
      res.json().then((json: Array<SpeakerT>) => {
        setSpeakers(json);
        setLoading(false);
      });
    });
  }, [setLoading]);

  useEffect(() => {
    console.log(events);
    events?.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    console.log(events);
  }, [events]);

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
        <div className="events-wrapper">
          <div className="virtual-events">
            <h2>Upcoming Virtual Events:</h2>
            <ul className="upcoming-virtual-events">
              {events?.filter((event) => {
                return differenceDate(event.date) > 0;
              }).length === 0 ? (
                <p>No upcoming events</p>
              ) : (
                events
                  ?.filter((event) => {
                    return differenceDate(event.date) > 0;
                  })
                  .map((event, index) => (
                    <li key={index}>
                      <h5>{event.title}</h5>
                      <h6>
                        {formatDate(event.date)}, {getFormattedTime(event.date)}{" "}
                        CST
                      </h6>
                      {event.address ? <h6>{event.address}</h6> : <></>}
                      <p>{event.content.substring(0, 120)}...</p>
                      <div className="button-container">
                        <Link to={`/event/${event.id}`}>View Event</Link>
                      </div>
                    </li>
                  ))
              )}
            </ul>
          </div>
          <div className="inperson-events">
            <h2>Upcoming In-Person Events:</h2>
            <ul className="upcoming-inperson-events"></ul>
            <p>Stay tuned and wear a mask.</p>
          </div>
        </div>

        <ul className="upcoming-events"></ul>
        {/* <ul className="past-speakers">
          {speakers
            ?.sort((a, b): number => {
              return differenceDate(a.date) - differenceDate(b.date);
            })
            .reverse()
            .map((speaker, index) => (
              <li key={index}>
                <img
                  src={`https://rbfn.org/api/${speaker.image.url}`}
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
        </ul> */}
        <h2>Past Events:</h2>
        <ul className="past-events">
          {events
            ?.filter((event) => {
              return differenceDate(event.date) < 0;
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
      </div>
      <Footer />
    </main>
  );
};

export default Events;
