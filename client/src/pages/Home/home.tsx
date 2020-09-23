import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import Footer from "../../components/footer";
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
      <div className="main-wrapper">
        <h1>Why we exist</h1>
        <p>
          The conversation about different forms of capital for entrepreneurs
          who either don’t fit the traditional VC pattern, or who don&#39;t want
          to take that path and end up on the VC treadmill is gaining steam. The
          Revenue Based Financing Network exists so we can support our efforts
          to bring Revenue-based financing and other alternative structures
          help those under-served entrepreneurs. It’s time for practitioners
          like us to be more connected, more often.  This group, these
          communications and this forum will help us accomplish that.
        </p>
        <div className="divider">
          <div className="text-wrapper">
            <h1>What we do</h1>
            <p>
              Through our vast and well-cultivated network, we will send out
              bi-monthly newsletters, host monthly webinars and build the
              Alternative Capital Summit together.  We are also working on ways
              to meaningfully connect with one another. We will share our
              experiences, learn from each other, and collaborate to improve the
              capital ecosystem to better serve entrepreneurs. Have a look
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
