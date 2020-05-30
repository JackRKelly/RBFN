import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import "./speakers.scss";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Speakers: FC<Props> = (props) => {
  const { setLoading } = props;

  useEffect(() => {
    document.title = "Speakers | RBFN";
    setLoading(true);
  }, []);

  return (
    <main>
      <h1>Speakers</h1>
      <h2>Past speakers:</h2>
      <ul className="past-speakers">
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
