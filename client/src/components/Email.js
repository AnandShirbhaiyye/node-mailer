import React, { useState } from "react";
import axios from 'axios';
import "./Email.css";
import Gmailpic from "./img/postbox.png";
import Gmailheader from "./img/gmail.png";
import swal from "sweetalert";

function Email() {

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  async function sendemail(){

    const response = await axios.post('/sendemail',{
      to: to,
      subject: subject,
      text: text
    })

    setTo("");
    setSubject("");
    setText("");

    
    swal({
      title: "Good job!",
      text: "Email sent Successfully...",
      icon: "success",
      button: "ok",
    });
    
  }
  return (
    <>
      <div className="container">
        <div className="card shadow-lg mt-3 p-5">
          <div className="text-center mb-4">
            <h3>
              <img className="email-img" src={Gmailheader} alt="" /> Node-Mailer
            </h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card shadow-sm p-3">
                <form>
                  <h4 className="text-center mt-3 mb-4">📝New Message</h4>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={to} 
                      onChange={(e) => { setTo(e.target.value) }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="subject"
                      value={subject} 
                      onChange={(e) => { setSubject(e.target.value) }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="text"
                      placeholder="text"
                      value={text} onChange={(e) => { setText(e.target.value) }}
                    />
                  </div>
                  <button
                    className="login-page-btn btn btn-primary w-100 mb-3"
                    type="button"
                    onClick={sendemail}
                  >
                    <i class="fa-solid fa-right-to-bracket"></i> Send
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <img className="email-pic-img mt-5" src={Gmailpic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Email;
