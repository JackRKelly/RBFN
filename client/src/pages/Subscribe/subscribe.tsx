import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import "./subscribe.scss";
import Footer from "../../components/footer";

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
    <main>
      <div className="main-wrapper">
        <h1>Subscribe to RBFN</h1>
        <p>
          Subscribe to Revenue Based Finance Network's Weekly Newsletter. Enter
          more text here ****
        </p>
        <form
          action="https://gmail.us3.list-manage.com/subscribe/post"
          method="POST"
          target="_blank"
          className="mailchimp-form"
        >
          <input
            type="hidden"
            name="u"
            defaultValue="4d115fc86e6ac5d0e88ca37ad"
          />
          <input type="hidden" name="id" defaultValue="c270fd9ae4" />
          <div
            className="field-shift"
            aria-label="Please leave the following three fields empty"
          >
            <label htmlFor="b_name">Name: </label>
            <input
              type="text"
              name="b_name"
              tabIndex={-1}
              placeholder="Freddie"
              id="b_name"
            />
            <label htmlFor="b_email">Email: </label>
            <input
              type="email"
              name="b_email"
              tabIndex={-1}
              placeholder="youremail@gmail.com"
              id="b_email"
            />
            <label htmlFor="b_comment">Comment: </label>
            <textarea
              name="b_comment"
              tabIndex={-1}
              placeholder="Please comment"
              id="b_comment"
              defaultValue={""}
            />
          </div>
          <div id="mergeTable" className="mergeTable">
            <div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
              <label htmlFor="MERGE1">First Name</label>
              <div className="field-group">
                <input
                  type="text"
                  name="MERGE1"
                  id="MERGE1"
                  size={25}
                  required
                />
              </div>
            </div>
            <div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-4">
              <label htmlFor="MERGE4">Last Name</label>
              <div className="field-group">
                <input
                  type="text"
                  name="MERGE4"
                  id="MERGE4"
                  size={25}
                  required
                />
              </div>
            </div>
            <div
              className="mergeRow dojoDndItem mergeRow-email"
              id="mergeRow-0"
            >
              <label htmlFor="MERGE0">
                Email Address <span className="req asterisk">*</span>
              </label>
              <div className="field-group">
                <input
                  type="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  name="MERGE0"
                  id="MERGE0"
                  size={25}
                  required
                />
              </div>
            </div>
            <div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-2">
              <label htmlFor="MERGE2">
                Company Name <span className="req asterisk">*</span>
              </label>
              <div className="field-group">
                <input
                  type="text"
                  name="MERGE2"
                  id="MERGE2"
                  size={25}
                  required
                />
              </div>
            </div>
            <div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-7">
              <label htmlFor="MERGE7">Title</label>
              <div className="field-group">
                <input
                  type="text"
                  name="MERGE7"
                  id="MERGE7"
                  size={25}
                  required
                />
              </div>
            </div>
            <div
              className="mergeRow dojoDndItem mergeRow-dropdown"
              id="mergeRow-5"
            >
              <label htmlFor="MERGE5">
                Are you a(n)... <span className="req asterisk">*</span>
              </label>
              <div className="field-group">
                <select
                  className="select-small"
                  id="MERGE5"
                  name="MERGE5"
                  required
                >
                  <option value="Fund Manager (you invest through a fund)">
                    Fund Manager (you invest through a fund)
                  </option>
                  <option value="Ecosystem Builder">Ecosystem Builder</option>
                  <option value="Angel Investor">Angel Investor</option>
                  <option value="Enthusiast">Enthusiast</option>
                  <option value="Economic Developer">Economic Developer</option>
                  <option value="Entrepreneur">Entrepreneur</option>
                  <option value="LP (you invest in funds or you are a fund of funds)">
                    LP (you invest in funds or you are a fund of funds)
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div
              className="mergeRow dojoDndItem mergeRow-dropdown"
              id="mergeRow-6"
            >
              <label htmlFor="MERGE6">
                Are you using Revenue Based Financing?{" "}
                <span className="req asterisk">*</span>
              </label>
              <div className="field-group">
                <select
                  className="select-small"
                  id="MERGE6"
                  name="MERGE6"
                  required
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="I'm not sure">I'm not sure</option>
                </select>
              </div>
            </div>
          </div>
          <div className="submit_container clear">
            <button type="submit" className="formEmailButton" name="submit">
              Subscribe
            </button>
          </div>
          <input
            type="hidden"
            name="ht"
            defaultValue="c39c23ff6d24057c32937d7637afc901c27fcf15:MTU5NzUyOTEwNC42MzY="
          />
          <input type="hidden" name="mc_signupsource" defaultValue="hosted" />
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default Subscribe;
