import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./speakers.scss";
import { SpeakerT } from "../../common/speaker";
import { formatDate, differenceDate } from "../../common/date";
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
        setSpeakers(json);
        setLoading(false);
        console.log(json);
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
            <h6>
              {formatDate(speaker.createdAt)} -{" "}
              {differenceDate(speaker.createdAt) * -1} days ago
            </h6>
            <h6>{speaker.address}</h6>
            <p>{speaker.content.substring(0, 120)}...</p>
            <div className="button-container">
              <Link to={`/speaker/${speaker.id}`}>View Series</Link>
            </div>
          </li>
        ))}
        <li>
          <h5>Speaker Name</h5>
          <h6>05/28/2020 - 17 Days ago</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            ipsum quidem sint, odit labore aliquid? Suscipit omnis dolorum nobis
            ipsam!
          </p>
          <div className="button-container">
            <button>More Details</button>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Speakers;
