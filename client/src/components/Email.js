import React from "react";
import "./Email.css";
import Gmailpic from "./img/postbox.png";
import gmailheader from "./img/gmail.png";

function Email() {
  return (
    <>
      <div className="container">
        <div className="card shadow-lg mt-3 p-5">
          <div className="text-center mb-4">
            <h3>
              <img className="email-img" src={gmailheader} /> Node-Mailer
            </h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card shadow p-3">
                <form>
                  <h4 className="text-center mt-3 mb-4">New Message</h4>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="subject"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="text"
                    />
                  </div>
                  <button
                    className="login-page-btn btn btn-primary w-100 mb-3"
                    type="button"
                  >
                    <i class="fa-solid fa-right-to-bracket"></i> Send
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <img className="email-pic-img mt-5" src={Gmailpic} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Email;
