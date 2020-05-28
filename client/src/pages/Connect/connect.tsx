import React, { FC, useEffect } from "react";
import "./connect.scss";

const Connect: FC = () => {
  useEffect(() => {
    document.title = "Connect | RBFN";
  }, []);

  return (
    <main>
      <h1>Connect</h1>
      <ul className="connection-list">
        <li>
          <div className="card-header">
            <h5>@keithkcvc</h5>
          </div>

          <p>Revenue Based Finance Network Founder's Twitter</p>
          <button>View Page</button>
        </li>
      </ul>
    </main>
  );
};

export default Connect;
