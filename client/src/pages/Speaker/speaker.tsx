import React, {
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useParams } from "react-router-dom";
import { Event } from "../../common/event";
import MarkdownView from "react-showdown";
import "./speaker.scss";
import { formatDate, formatTime } from "../../common/date";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Speaker: FC<Props> = (props) => {
  const { setLoading } = props;
  const [event, setEvent] = useState<Event>();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Event | RBFN";
    setLoading(true);

    fetch(`http://localhost:1337/events/${id}`).then((res) => {
      res.json().then((json: Event) => {
        setEvent(json);
        setLoading(false);
        console.log(json);
      });
    });
  }, [id, setLoading]);

  return (
    <main>
      {event ? (
        <div className="speaker">
          <img
            src={`http://localhost:1337${event.banner.formats.large.url}`}
            alt="Speaker background"
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

export default Speaker;
