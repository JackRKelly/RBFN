import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./home.scss";
import { SpeakerT } from "../../common/speaker";
import { differenceDate, formatDate } from "../../common/date";
import { Link } from "react-router-dom";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Home: FC<Props> = (props) => {
  const { setLoading } = props;
  const [speaker, setSpeaker] = useState<SpeakerT>();
  const [newsletter, setNewsletter] = useState();
  const [event, setEvent] = useState();
  const [blog, setBlog] = useState();

  useEffect(() => {
    document.title = "Home | RBFN";
    setLoading(false);

    fetch("http://localhost:1337/speakers").then((res) => {
      res.json().then((json: Array<SpeakerT>) => {
        setSpeaker(json[0]);
        setLoading(false);
      });
    });
  }, [setLoading]);

  return (
    <main>
      <h1>Home</h1>
      <div className="summary">
        <div className="recent-speaker">
          <h3>Recent Speaker:</h3>
          {speaker ? (
            <div className="speaker-card">
              <h5>{speaker.title}</h5>
              <h6>
                {differenceDate(speaker.createdAt) * -1 === 1
                  ? "Posted Yesterday"
                  : differenceDate(speaker.createdAt) * -1 === 0
                  ? "Posted Today"
                  : `${formatDate(speaker.createdAt)} - 
              ${differenceDate(speaker.createdAt) * -1} days ago`}
              </h6>
              <h6>{speaker.address}</h6>
              <p>{speaker.content.substring(0, 120)}...</p>
              <div className="button-container">
                <Link to={`/speaker/${speaker.id}`}>View Series</Link>
              </div>
            </div>
          ) : (
            <> </>
          )}
        </div>

        <h3>Recent Newsletter:</h3>
        <h3>Upcoming Event:</h3>
        <h3>Recent Blog:</h3>
      </div>
    </main>
  );
};

export default Home;
