import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./speakers.scss";
import { SpeakerT } from "../../common/speaker";
import { renderDate } from "../../common/date";
import { Link } from "react-router-dom";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Speakers: FC<Props> = (props) => {
  const { setLoading } = props;
  const [speakers, setSpeakers] = useState<Array<SpeakerT>>();

  useEffect(() => {
    document.title = "Speakers | RBFN";
    setLoading(true);

    fetch("http://localhost:1337/speakers").then((res) => {
      res.json().then((json: Array<SpeakerT>) => {
        setSpeakers(json.reverse());
        setLoading(false);
      });
    });
  }, [setLoading]);

  return (
    <main>
      <h1>Speakers</h1>
      <h2>Past speakers:</h2>
      <ul className="past-speakers">
        {speakers?.map((speaker, index) => (
          <li key={index}>
            <h5>{speaker.title}</h5>
            <h6>{renderDate(speaker.createdAt)}</h6>
            <p>{speaker.content.substring(0, 120)}...</p>
            <div className="button-container">
              <Link to={`/speaker/${speaker.id}`}>View Series</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Speakers;
