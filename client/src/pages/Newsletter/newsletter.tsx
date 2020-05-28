import React, { FC, useEffect } from "react";
import "./newsletter.scss";

const Newsletter: FC = () => {
  useEffect(() => {
    document.title = "Newsletter | RBFN";
  }, []);

  return (
    <main>
      <h1>Newsletter</h1>
      <h3>Recent editions:</h3>
      <ul className="recent-editions">
        <li>
          <h5>05/28/2020 - 17 Days ago</h5>
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

export default Newsletter;
