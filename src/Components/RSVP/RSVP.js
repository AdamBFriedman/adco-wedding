import "../RSVP/RSVP.css";
import { useEffect } from "react";
import Icon_RSVP from "../../Images/Icons/rsvp-icon.jpg";

export default function RSVP(props) {
  useEffect(() => {
    const body = document.getElementById("home");
    body.style.background = "#0f3823";
  });

  return (
    <div className="container contact-form">
      <div className="contact-image">
        <img src={Icon_RSVP} alt="RSVP Icon" />
      </div>
      <form action="https://formspree.io/f/mnqorngd" method="POST">
        <h1>RSVP</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="Name"
                className="form-control"
                placeholder="Your Name *"
              />
            </div>
            <div className="form-group">
              <div className="form-check-inline">
                <input
                  className="form-check-inline"
                  type="radio"
                  name="Are you attending?"
                  id="yes"
                  value="Yes"
                  checked
                />
                <label className="form-check-label" for="yes">
                  Yes, I wouldn't miss it!
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="form-check-inline"
                  type="radio"
                  name="Are you attending?"
                  id="no"
                  value="No"
                />
                <label className="form-check-label" for="no">
                  No, I hate fun!
                </label>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Email"
                className="form-control"
                placeholder="Your Email *"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Guest List"
                className="form-control"
                placeholder="Guest name(s)"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Song"
                className="form-control mt-1"
                placeholder="I promise to dance if you play:"
              />
            </div>
            <div className="form-group text-center">
              <input type="submit" className="btnContact" value="Submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
