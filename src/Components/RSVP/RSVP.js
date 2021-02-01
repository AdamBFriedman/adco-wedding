import "../RSVP/RSVP.css";
import { Link } from "react-router-dom";
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
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="rsvp-name"
                className="form-control"
                placeholder="Your Name *"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="rsvp-email"
                className="form-control"
                placeholder="Your Email *"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="rsvp-guest-list"
                className="form-control"
                placeholder="Guest name(s)"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="rsvp-song"
                className="form-control mt-1"
                placeholder="I promise to dance if you play:"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btnContact"
                value="Send Message"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea
                name="rsvp-msg"
                className="form-control"
                placeholder="Your Message *"
                style={{ width: "100%", height: "150px" }}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
      <div className="text-center pb-2">
        <Link to="/">
          <button className="btn-lg">Home</button>
        </Link>
      </div>
    </div>

    // <div className="RSVP-wrapper">
    //   <div className="top"></div>

    //   <div className="form">
    //     <div className="form-info">
    //       <form
    //         id="fs-frm"
    //         name="basic-rsvp-form"
    //         accept-charset="utf-8"
    //         action="https://formspree.io/f/{form_id}"
    //         method="post"
    //       >
    //         <fieldset id="fs-frm-inputs">
    //           <label for="full-name">Full Name</label>
    //           <input
    //             type="text"
    //             name="name"
    //             id="full-name"
    //             placeholder="First and Last"
    //             required=""
    //           />
    //           <label for="attending">Will you Attend?</label>
    //           <select name="attending" id="attending" required="">
    //             <option>Select</option>
    //             <option value="Yes">Yes</option>
    //             <option value="No">No</option>
    //           </select>
    //           <label for="plus">And with how many guests?</label>
    //           <select name="plus" id="plus" required="">
    //             <option value="0" selected="">
    //               0
    //             </option>
    //             <option value="1">1</option>
    //             <option value="2">2</option>
    //             <option value="3">3</option>
    //           </select>
    //           <input
    //             type="hidden"
    //             name="_subject"
    //             id="email-subject"
    //             value="RSVP"
    //           />
    //         </fieldset>
    //         <input type="submit" value="RSVP" />
    //       </form>
    //     </div>
    //     <button className="accept">Accept</button>
    //     <button className="regret">Regret</button>
    //     <Link to="/">
    //       <button className="btn-lg">Home</button>
    //     </Link>
    //   </div>
    // </div>
  );
}
