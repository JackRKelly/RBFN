import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import SVG from "react-inlinesvg";
import Twitter from "../../assets/svg/twitter.svg";
import Facebook from "../../assets/svg/facebook.svg";
import Email from "../../assets/svg/email.svg";
import "./connect.scss";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Connect: FC<Props> = (props) => {
  const { setLoading } = props;

  useEffect(() => {
    document.title = "Connect | RBFN";
    setLoading(false);
  }, [setLoading]);

  return (
    <main>
      <h1>Connect</h1>
      <ul className="connection-list">
        <li className="twitter">
          <div className="card-header">
            <SVG src={Twitter} />
            <h5>@keithkcvc</h5>
          </div>
          <p>Revenue Based Finance Network Founder's Twitter</p>
          <div className="button-container">
            <a
              href="https://twitter.com/keithkcvc"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Page
            </a>
          </div>
        </li>
        <li className="email">
          <div className="card-header">
            <SVG src={Email} />
            <h5>email@email.com</h5>
          </div>
          <p>Revenue Based Finance Network's Email</p>
          <div className="button-container">
            <a href="mailto:email@email.com">Send Email</a>
          </div>
        </li>
        <li className="facebook">
          <div className="card-header">
            <SVG src={Facebook} />
            <h5>RBWG Group</h5>
          </div>
          <p>Revenue Based Finance Network's Facebook group</p>
          <div className="button-container">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Group
            </a>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Connect;
