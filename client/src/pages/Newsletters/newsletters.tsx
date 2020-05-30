import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import "./newsletters.scss";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Newsletters: FC<Props> = (props) => {
  const { setLoading } = props;

  useEffect(() => {
    document.title = "Newsletter | RBFN";
    setLoading(true);
  }, [setLoading]);

  return (
    <main>
      <h1>Newsletter</h1>
      <h2>Recent editions:</h2>
      <ul className="recent-editions">
        <li>
          <h5>Newsletter #1</h5>
          <h6>05/28/2020 - 17 Days ago</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            ipsum quidem sint, odit labore aliquid? Suscipit omnis dolorum nobis
            ipsam!
          </p>
          <div className="button-container">
            <button>Read More</button>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Newsletters;
