import React, { FC, useEffect } from "react";
import "./home.scss";

const Home: FC = () => {
  useEffect(() => {
    document.title = "Home | RBFN";
  }, []);

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
};

export default Home;
