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
import Footer from "../../components/footer";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Events: FC<Props> = (props) => {
  const { setLoading } = props;
  const [events, setEvents] = useState<Array<EventT>>([]);
  useEffect(() => {
    document.title = "Events | RBFN";
    setLoading(true);

    fetch("https://rbfn.org/api/events").then((res) => {
      res.json().then((json: Array<EventT>) => {
        setEvents((eventList) => {
          return [...eventList, ...json];
        });

        setLoading(false);
      });
    });

    fetch("https://rbfn.org/api/speakers").then((res) => {
      res.json().then((json: Array<EventT>) => {
        setEvents((eventList) => {
          return [...eventList, ...json];
        });

        setLoading(false);
      });
    });
  }, [setLoading]);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <main>
      <div className="main-wrapper">
        <h1>Events</h1>
        <p>
          Change language on Events page to: At RBFN we host a variety of events
          including monthly Speaker Series webinars featuring practitioners
          sharing their experience and approach and answering questions from the
          RBFN community. We also host an annual event for practitioners called
          the Alternative Capital Summit.
        </p>
        <div className="events-wrapper">
          <div className="virtual-events">
            <h2>Upcoming Virtual Events:</h2>
            <ul className="upcoming-virtual-events">
              {events
                ?.filter((event) => {
                  return differenceDate(event.date) > 0;
                })
                .filter((event) => {
                  return event.type === "virtual" || event.type === null;
                }).length === 0 ? (
                <p>No upcoming virtual events.</p>
              ) : (
                events
                  ?.filter((event) => {
                    return differenceDate(event.date) > 0;
                  })
                  .sort(
                    (a, b) =>
                      new Date(a.date).getTime() - new Date(b.date).getTime()
                  )
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
            <ul className="upcoming-inperson-events">
              {events
                ?.filter((event) => {
                  return differenceDate(event.date) > 0;
                })
                .sort(
                  (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime()
                )
                .filter((event) => {
                  return event.type === "inperson";
                }).length === 0 ? (
                <p>No upcoming in-person events.</p>
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
            <p>Stay tuned and wear a mask.</p>
          </div>
        </div>

        <div className="past-events-wrapper">
          <h2>Past Events and Speakers:</h2>
          <ul className="past-events">
            {events
              ?.filter((event) => {
                return differenceDate(event.date) < 0;
              })
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((event, index) => (
                <li key={index}>
                  <h5>{event.isSpeakerSeries ? event.name : event.title}</h5>
                  <h6>
                    {event.isSpeakerSeries
                      ? `${formatDate(event.date)}`
                      : `${formatDate(event.date)}, ${getFormattedTime(
                          event.date
                        )} CST`}
                  </h6>
                  {event.isSpeakerSeries ? (
                    <>
                      <h6>Speaker Series</h6>
                      <p style={{ textAlign: "center" }}>{event.title}</p>
                    </>
                  ) : (
                    <></>
                  )}
                  {event.address ? <h6>{event.address}</h6> : <></>}
                  {event.content ? (
                    <p>{event.content.substring(0, 90)}...</p>
                  ) : (
                    <> </>
                  )}
                  <div className="button-container">
                    {event.isSpeakerSeries ? (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        View Series
                      </a>
                    ) : (
                      <Link to={`/event/${event.id}`}>View Event</Link>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Events;
