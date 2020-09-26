import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import Footer from "../../components/footer";
import "./home.scss";
import RBFNImage from "../../assets/images/RBFNImage.png";

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
      <div className="main-wrapper">
        <div className="first-wrapper">
          <div className="left">
            <h1>Why we exist</h1>
            <p>
              The Revenue Based Financing Network exists to support members’
              efforts to bring revenue based financing and other alternative
              structures to market to help underserved and underfunded
              entrepreneurs. It’s time for practitioners like us to be more
              connected, more often. This group, consistent communication and
              knowledge sharing, and this forum will help us accomplish that.
            </p>
          </div>
          <div className="right">
            <img src={RBFNImage} alt="RBFN" />
          </div>
        </div>

        <div className="divider">
          <div className="text-wrapper">
            <h1>What we do</h1>
            <p>
              We send out bi-monthly newsletters, host monthly webinars and
              build the Alternative Capital Summit together. We are also working
              on ways to meaningfully connect with one another. We will share
              our experiences, learn from each other, and collaborate to improve
              the capital ecosystem to better serve entrepreneurs. Have a look
              around to find our content or connect with other RBFN resources
              and partners.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
