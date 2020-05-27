import React, { FC, useEffect } from "react";
import "./newsletter.scss";

const Newsletter: FC = () => {
  useEffect(() => {
    document.title = "Newsletter | RBFN";
  }, []);

  return (
    <main>
      <h1>Newsletter</h1>
    </main>
  );
};

export default Newsletter;
