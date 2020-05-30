import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import "./home.scss";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Home: FC<Props> = (props) => {
  const { setLoading } = props;

  useEffect(() => {
    document.title = "Home | RBFN";
    setLoading(false);
  }, [setLoading]);

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
};

export default Home;
