import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import "./events.scss";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Events: FC<Props> = (props) => {
  const { setLoading } = props;

  useEffect(() => {
    document.title = "Events | RBFN";
    setLoading(true);
  }, []);

  return (
    <main>
      <h1>Events</h1>
      <h2>Upcoming events:</h2>
      <ul className="upcoming-events">
        <li>
          <h5>Event Name</h5>
          <h6>05/28/2020 - In 17 Days</h6>
          <h6>123456 S Street St.</h6>
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

export default Events;
