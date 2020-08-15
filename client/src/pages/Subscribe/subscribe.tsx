import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import "./subscribe.scss";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Subscribe: FC<Props> = (props) => {
  const { setLoading } = props;

  useEffect(() => {
    document.title = "Subscribe | RBFN";
    setLoading(true);
  }, [setLoading]);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <>
      <main>
        <div className="main-wrapper">
          <div id="mc_embed_signup">
            <form
              action="https://gmail.us3.list-manage.com/subscribe/post?u=4d115fc86e6ac5d0e88ca37ad&amp;id=c270fd9ae4"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME">First Name </label>
                  <input
                    type="text"
                    value=""
                    name="FNAME"
                    className=""
                    id="mce-FNAME"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">Last Name </label>
                  <input
                    type="text"
                    value=""
                    name="LNAME"
                    className=""
                    id="mce-LNAME"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-CNAME">
                    Company Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    value=""
                    name="CNAME"
                    className="required"
                    id="mce-CNAME"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-TITLE">Title </label>
                  <input
                    type="text"
                    value=""
                    name="TITLE"
                    className=""
                    id="mce-TITLE"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-TYPE">
                    Are you a(n)... <span className="asterisk">*</span>
                  </label>
                  <select name="TYPE" className="required" id="mce-TYPE">
                    <option value=""></option>
                    <option value="Fund Manager (you invest through a fund)">
                      Fund Manager (you invest through a fund)
                    </option>
                    <option value="Ecosystem Builder">Ecosystem Builder</option>
                    <option value="Angel Investor">Angel Investor</option>
                    <option value="Enthusiast">Enthusiast</option>
                    <option value="Economic Developer">
                      Economic Developer
                    </option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="LP (you invest in funds or you are a fund of funds)">
                      LP (you invest in funds or you are a fund of funds)
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-RBFYESNO">
                    Are you using Revenue Based Financing?
                    <span className="asterisk">*</span>
                  </label>
                  <select
                    name="RBFYESNO"
                    className="required"
                    id="mce-RBFYESNO"
                  >
                    <option value=""></option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="I'm not sure">I'm not sure</option>
                  </select>
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px;" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_4d115fc86e6ac5d0e88ca37ad_c270fd9ae4"
                    tabIndex={-1}
                    value=""
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Subscribe;
