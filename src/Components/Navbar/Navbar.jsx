import { useEffect } from "react";
import jQuery from "jquery";
import Logo from "../../Images/Logo/logo.png";
import "../Navbar/navbar.css";

export default function Navbar(props) {
  useEffect(() => {
    jQuery(".navbar-nav .nav-link").on("click", function () {
      var toggle = jQuery(".navbar-toggler").is(":visible");
      if (toggle) {
        jQuery(".navbar-collapse").collapse("hide");
      }
    });

    jQuery(window).on("scroll", function () {
      if (jQuery(window).scrollTop() > 50) {
        jQuery(".top-header").addClass("fixed-menu");
      } else {
        jQuery(".top-header").removeClass("fixed-menu");
      }
    });
  });

  return (
    <>
      <header className="top-header">
        <nav className="navbar header-nav navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img id="logo" src={Logo} alt="Logo" />
            </a>
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
              className="collapse navbar-collapse justify-content-end"
              id="navbar-wd"
            >
              <ul className="navbar-nav">
                <li>
                  <a className="nav-link active" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#timeline">
                    Our Story
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#party">
                    Party
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#wedding">
                    Wedding
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#travel">
                    Travel
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#registry">
                    Registry
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
