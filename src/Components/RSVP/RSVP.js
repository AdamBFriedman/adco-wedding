import "../RSVP/RSVP.css";
import { Link } from "react-router-dom";

export default function RSVP(props) {
  return (
    <div className="RSVP-wrapper">
      <div className="top"></div>
      <div className="form">
        <div className="form-info">
          <h1>RSVP</h1>
          <h2>for the wedding of</h2>
          <h1>Adam & Courtney</h1>
          <p className="line">__________________________________</p>
          <h2>The Details</h2>
          <p>Friday February 4th, 2022</p>
          <p>4:00 PM</p>
          <br />
          <h2>Ceremony & Reception</h2>
          <p>Club Lake Plantation</p>
          <p>
            3403 Rock Springs Rd. <br />
            Apopka, FL 32712
          </p>
          <p className="line">__________________________________</p>
          <input type="text" placeholder="Name"></input>
          <input type="number" placeholder="# of Guests"></input>
        </div>
        <button className="accept">Accept</button>
        <button className="regret">Regret</button>
        <Link to="/">
          <button className="btn-lg">Home</button>
        </Link>
      </div>
    </div>
  );
}
