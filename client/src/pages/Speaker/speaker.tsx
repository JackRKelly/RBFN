import React, {
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useParams } from "react-router-dom";
import { SpeakerT } from "../../common/speaker";
import MarkdownView from "react-showdown";
import "./speaker.scss";
import { formatDate, differenceDate } from "../../common/date";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Speaker: FC<Props> = (props) => {
  const { setLoading } = props;
  const [speaker, setSpeaker] = useState<SpeakerT>();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Speaker | RBFN";
    setLoading(true);

    fetch(`http://localhost:1337/speakers/${id}`).then((res) => {
      res.json().then((json: SpeakerT) => {
        setSpeaker(json);
        setLoading(false);
        document.title = `${json.title} | RBFN`;
      });
    });
  }, [id, setLoading]);

  return (
    <main>
      {speaker ? (
        <div className="speaker">
          <img
            src={`http://localhost:1337${speaker.banner.formats.large.url}`}
            alt="Speaker background"
          />
          <h1>{speaker.title}</h1>
          <h5>
            {differenceDate(speaker.createdAt) * -1 === 1
              ? "Posted Yesterday"
              : differenceDate(speaker.createdAt) * -1 === 0
              ? "Posted Today"
              : `${formatDate(speaker.createdAt)} - 
              ${differenceDate(speaker.createdAt) * -1} days ago`}
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
