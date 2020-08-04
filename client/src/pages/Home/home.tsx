import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import "./home.scss";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Home: FC<Props> = (props) => {
  const { setLoading } = props;

  useEffect(() => {
    document.title = "Home | RBFN";
    setLoading(true);
  }, [setLoading]);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <main>
      <h1>Why we exist</h1>
      <p>
        We are a community of revenue-based financing (and other) practitioners
        focused on developing our industry and extending our reach to
        entrepreneurs around the world.
      </p>
      <h1>What we do</h1>
      <p>
        RBFN aims to connect practitioners in order to accelerate our collective
        learning and industry in order to make capital available to
        entrepreneurs in different and more flexible formats.
      </p>
    </main>
  );
};

export default Home;
