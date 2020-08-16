import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import SVG from "react-inlinesvg";
import Twitter from "../../assets/svg/twitter.svg";
import Facebook from "../../assets/svg/facebook.svg";
import Email from "../../assets/svg/email.svg";
import Plus from "../../assets/svg/plus.svg";
import "./connect.scss";
import Footer from "../../components/footer";

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
      <div className="main-wrapper">
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
              <h5>info@rbfnetwork.org</h5>
            </div>
            <p>Revenue Based Finance Network's Email</p>
            <div className="button-container">
              <a
                href="mailto:info@rbfnetwork.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
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
                href="https://www.facebook.com/plugins/group/join/popup/?group_id=600818587170824&source=email_campaign_plugin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Group
              </a>
            </div>
          </li>
          <li className="subscribe">
            <div className="card-header">
              <SVG src={Plus} />
              <h5>RBWG Newsletter</h5>
            </div>
            <p>Revenue Based Finance Network's Newsletter</p>
            <div className="button-container">
              <a href="/subscribe">Subscribe</a>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </main>
  );
};

export default Connect;
