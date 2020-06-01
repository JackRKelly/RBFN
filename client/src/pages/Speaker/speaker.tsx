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
  const [speaker, setSpeaker] = useState<Event>();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Event | RBFN";
    setLoading(true);

    fetch(`http://localhost:1337/speakers/${id}`).then((res) => {
      res.json().then((json: Event) => {
        setSpeaker(json);
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
            src={`http://localhost:1337${speaker.banner.formats.large.url}`}
            alt="Speaker background"
          />
          <h1>{speaker.title}</h1>
          <h5>
            {formatDate(speaker.date)}, {formatTime(speaker.time)} |{" "}
            {speaker.address}
          </h5>
          <MarkdownView markdown={speaker.content} />
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Speaker;
