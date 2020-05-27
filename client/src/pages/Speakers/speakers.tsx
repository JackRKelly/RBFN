import React, { FC, useEffect } from "react";
import "./speakers.scss";

const Speakers: FC = () => {
  useEffect(() => {
    document.title = "Speakers | RBFN";
  }, []);

  return (
    <main>
      <h1>Speakers</h1>
    </main>
  );
};

export default Speakers;
