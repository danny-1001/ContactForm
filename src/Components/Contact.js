import emailjs from "emailjs-com";
import React from "react";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_irbryfc",
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
    <section className="contact" id="contact">
      <div className="form-wrapper">
        <h2>
          Get in <br />
          <span>touch</span>
        </h2>
        <form onSubmit={sendEmail} className="card">
          <div className="nameJs">
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              required
            />
          </div>
          <div className="emailJs">
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email "
              name="email"
              required
            />
          </div>
          <div className="messageJs">
            <input
              type="text"
              className="form-control"
              placeholder="Message"
              name="message"
            />
          </div>

          <div className="submitBtn">
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
    </section>
  );
}
