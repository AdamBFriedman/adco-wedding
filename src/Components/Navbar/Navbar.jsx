import React from "react";
import Logo from "../../Images/Logo/logo.png";

export default function Navbar(props) {
  return (
    <>
      <header class="top-header">
        <nav class="navbar header-nav navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="index.html">
              <img id="logo" src={Logo} alt="Logo" />
            </a>
            <button
              class="navbar-toggler"
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
              class="collapse navbar-collapse justify-content-end"
              id="navbar-wd"
            >
              <ul class="navbar-nav">
                <li>
                  <a class="nav-link active" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#story">
                    Story
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#party">
                    Party
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#wedding">
                    Wedding
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#travel">
                    Travel
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#registry">
                    Registry
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#contact">
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
