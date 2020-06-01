import React, {
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useParams } from "react-router-dom";
import { EventT } from "../../common/event";
import MarkdownView from "react-showdown";
import "./event.scss";
import { formatDate, formatTime } from "../../common/date";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Event: FC<Props> = (props) => {
  const { setLoading } = props;
  const [event, setEvent] = useState<EventT>();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Event | RBFN";
    setLoading(true);

    fetch(`http://localhost:1337/events/${id}`).then((res) => {
      res.json().then((json: EventT) => {
        setEvent(json);
        setLoading(false);
      });
    });
  }, [id, setLoading]);

  return (
    <main>
      {event ? (
        <div className="event">
          <img
            src={`http://localhost:1337${event.banner.formats.large.url}`}
            alt="Event background"
          />
          <h1>{event.title}</h1>
          <h5>
            {formatDate(event.date)}, {formatTime(event.time)} | {event.address}
          </h5>
          <MarkdownView markdown={event.content} />
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Event;
