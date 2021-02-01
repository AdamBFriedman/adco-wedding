import { Link } from "react-router-dom";
import { useEffect } from "react";
import jQuery from "jquery";
import Logo from "../../Images/Logo/logo.png";

export default function Navbar_RSVP(props) {
  return (
    <>
      <header className="top-header">
        <nav className="navbar header-nav navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-wd"
            aria-controls="navbar-wd"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbar-wd"
          >
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link nav-rsvp-home" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
