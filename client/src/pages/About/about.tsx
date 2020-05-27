import React, { FC, useEffect } from "react";
import "./about.scss";

const About: FC = () => {
  useEffect(() => {
    document.title = "About | RBFN";
  }, []);

  return (
    <main>
      <h1>About</h1>
    </main>
  );
};

export default About;
