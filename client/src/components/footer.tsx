import React, { FC } from "react";
import SVG from "react-inlinesvg";
import Facebook from "../assets/svg/facebook.svg";
import Twitter from "../assets/svg/twitter.svg";
import Email from "../assets/svg/email.svg";

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="row row-1">
          <h2>About Us</h2>
          <p>
            RBFN’s mission is to help entrepreneurs build their companies with
            sustainable, growth-aligned capital. We aim to do this through
            building a community of investors and practitioners and by creating
            connections between them in order to help accelerate knowledge
            sharing and learning to more quickly build a robust ecosystem of new
            capital options for founders to access and use to grow their
            companies.
          </p>
        </div>
        <div className="row row-2">
          <h2>Contact Us</h2>
          <a
            target="_blank"
            className="email"
            rel="noopener noreferrer"
            href="mailto:info@rbfnetwork.org"
          >
            info@rbfnetwork.org
          </a>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/plugins/group/join/popup/?group_id=600818587170824&source=email_campaign_plugin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVG src={Facebook}></SVG>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/keithkcvc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVG src={Twitter}></SVG>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@rbfnetwork.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVG src={Email}></SVG>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
