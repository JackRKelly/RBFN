import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./home.scss";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Home: FC<Props> = (props) => {
  const { setLoading } = props;
  const [speaker, setSpeaker] = useState();
  const [newsletter, setNewsletter] = useState();
  const [event, setEvent] = useState();
  const [blog, setBlog] = useState();

  useEffect(() => {
    document.title = "Home | RBFN";
    setLoading(false);
  }, [setLoading]);

  return (
    <main>
      <h1>Home</h1>
      <div className="summary">
        <h3>Recent Speaker:</h3>
        <h3>Recent Newsletter:</h3>
        <h3>Upcoming Event:</h3>
        <h3>Recent Blog:</h3>
      </div>
    </main>
  );
};

export default Home;
