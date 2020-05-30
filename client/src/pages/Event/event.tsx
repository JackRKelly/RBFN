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
import "./event.scss";
import { formatDate } from "../../common/date";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Blogs: FC<Props> = (props) => {
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
      });
    });
  }, [setLoading]);

  return (
    <main>
      {event ? (
        <div className="blog">
          <img
            src={`http://localhost:1337${event.banner[0].formats.large.url}`}
            alt="Banner image"
          />
          <h1>{event.title}</h1>
          <h5>
            {formatDate(event.date)} @ {event.time} | {event.address}
          </h5>
          <MarkdownView markdown={event.content} />
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Blogs;
