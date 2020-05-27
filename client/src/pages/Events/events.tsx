import React, { FC, useEffect } from "react";
import "./events.scss";

const Events: FC = () => {
  useEffect(() => {
    document.title = "Events | RBFN";
  }, []);

  return (
    <main>
      <h1>Events</h1>
    </main>
  );
};

export default Events;
