import React, { FC, useEffect } from "react";
import "./events.scss";

const Events: FC = () => {
  useEffect(() => {
    document.title = "Events | RBFN";
  }, []);

  return (
    <main>
      <h1>Events</h1>
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
