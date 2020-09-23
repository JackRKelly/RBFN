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
import { formatDate, getFormattedTime } from "../../common/date";

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

    fetch(`https://rbfn.org/api/events/${id}`).then((res) => {
      res.json().then((json: EventT) => {
        setEvent(json);
        setLoading(false);
        document.title = `${json.title} | RBFN`;
        console.log(json);
      });
    });
  }, [id, setLoading]);

  return (
    <main>
      <div className="main-wrapper">
        {event ? (
          <div className="event">
            {event.banner ? (
              <img
                src={`https://rbfn.org/api/${event.banner.url}`}
                alt="Event background"
              />
            ) : (
              <> </>
            )}

            <h1>{event.title}</h1>
            <h5>
              {formatDate(event.date)}, {getFormattedTime(event.date)} CST
            </h5>
            <h5>{event.address}</h5>
            <MarkdownView markdown={event.content} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};

export default Event;
