import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="row row-1">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, dolorem accusantium! Soluta, beatae laborum cumque
            itaque placeat rerum voluptas reprehenderit blanditiis veritatis
            tempora aut similique illum mollitia quisquam ab, ea dolores
            sapiente odit dolorum quidem. Aperiam porro inventore odio dolores
            non possimus repudiandae voluptatum quam corrupti illum soluta
            voluptatibus maxime cupiditate, iure aliquam nisi facilis tempore
            omnis dolorem quidem, odit explicabo dicta repellat nam. Officia,
            rem consectetur repudiandae dolore numquam ex dignissimos sit est
            doloribus molestias, quaerat, reiciendis labore vitae aut sequi unde
            repellendus iste? Quia, accusantium. Accusantium, commodi maiores!
            Vitae tempore libero impedit cum laudantium ab id sequi harum.
          </p>
        </div>
        <div className="row row-2">
          <h2>Contact</h2>
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
        <div className="row row-3">
          <h2>3rd Column</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
