import emailjs from "emailjs-com";
import React from "react";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wdr2lom",
        "template_6k2e67r",
        e.target,
        "user_eQZPwddNgJzRQsHtkIH2d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form className="contact" id="contact">
      <div className="form-wrapper flex">
        <h2>
          Get in <br />
          <span>touch</span>
        </h2>
        <form onSubmit={sendEmail}>
          <div className="name-js">
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="email-js">
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email "
              name="email"
            />
          </div>
          <div className="message-js">
            <input
              type="text"
              className="form-control"
              placeholder="Message"
              name="message"
            />
          </div>

          <div className="submit-btn">
            <button
              id="submit"
              type="submit"
              className="button"
              value="Submit"
              onClick="validation()"
              alert="Succesfully submitted!"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </form>
  );
}
