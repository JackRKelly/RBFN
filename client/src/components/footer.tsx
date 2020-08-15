import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="row row-1">
          <h2>About Us</h2>
          <p>
            Helping entrepreneurs build their companies with sustainable,
            growth-aligned capital.
          </p>
        </div>
        <div className="row row-2">
          <h2>Contact Us</h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:email@email.com"
          >
            email@email.com
          </a>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
