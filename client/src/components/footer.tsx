import React, { FC } from "react";
import SVG from "react-inlinesvg";
import Facebook from "../assets/svg/facebook.svg";
import Twitter from "../assets/svg/twitter.svg";
import Email from "../assets/svg/email.svg";
import KeithHarrington from "../assets/images/KeithHarrington.jpg";

interface Props {
  isHome?: boolean;
}

const Footer: FC<Props> = (props: Props) => {
  const { isHome } = props;

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="row col-1">
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
        <div className="row col-2">
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

        {isHome ? (
          <>
            {" "}
            <div className="row-2 col-1">
              <a
                href="https://www.novelgp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={KeithHarrington} alt="Keith Harrington" />
              </a>
            </div>
            <div className="row-2 col-2">
              <h5>About Keith</h5>
              <p>
                After spending 7 years as a VC, Keith got tired of saying no to
                entrepreneurs building growing businesses with real customers
                making real money, but who either lacked the one-in-a-million
                growth dynamics required to make a company investable using
                standard venture capital or simply wanted to take a different
                path. In 2017 Keith co-founded{" "}
                <a
                  href="https://novelgp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Novel Growth Partners
                </a>
                , a revenue based financing (RBF) firm based in Kansas City, in
                order to fund more entrepreneurs, have a broader impact, and to
                help build more sustainable businesses. To date, Novel has
                invested in more than 20 companies. Along the way, Keith met
                several investors who were hungry for different ways to help
                entrepreneurs, and for connections to like-minded investors
                focused on building new investment capacity. To help foster
                those connections, and with help from the Kauffman Foundation,
                Keith built the Revenue Based Financing Network to help
                investors connect with - and learn from - one another in order
                to grow the industry more quickly. Prior to co-founding Novel
                Growth Partners, Keith co-founded Fulcrum Global Capital, an
                early stage agetch VC firm and was a Managing Director at Kansas
                Bioscience Authority, where he invested in life-sciences
                startups. Keith is a Kauffman Fellow, earned his MBA from
                Indiana University’s Kelley School of Business, and his BS in
                Finance from Park University.
              </p>
            </div>{" "}
          </>
        ) : (
          <> </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
