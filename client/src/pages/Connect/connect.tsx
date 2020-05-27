import React, { FC, useEffect } from "react";
import "./connect.scss";

const Connect: FC = () => {
  useEffect(() => {
    document.title = "Connect | RBFN";
  }, []);

  return (
    <main>
      <h1>Connect</h1>
    </main>
  );
};

export default Connect;
