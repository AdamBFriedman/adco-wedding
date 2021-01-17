import React from "react";
import "../AboutUs/aboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Adam from "../../Images/AboutUs/bio-adam.jpg";
import Courtney from "../../Images/AboutUs/bio-courtney.jpg";

export default function Aboutus(props) {
  return (
    <div id="about" className="about-box">
      <div className="about-a1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="title-box">
                <h2>Get To Know Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row align-items-center about-main-info">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="about-m">
                    <div className="about-img">
                      <img className="img-fluid" src={Adam} alt="" />
                    </div>
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.facebook.com/adam.friedman.1029"
                        >
                          <FontAwesomeIcon className="icon" icon={faFacebook} />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/adam-friedman5/"
                        >
                          <FontAwesomeIcon className="icon" icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://adamfriedmanportfolio.netlify.app/"
                        >
                          <FontAwesomeIcon
                            className="icon"
                            icon={faBriefcase}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <h2>
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                    <span>Adam Friedman</span>
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                  </h2>
                  <ul>
                    <li>
                      Occupation:{" "}
                      <span>Senior Software Engineer - Big Nerd Ranch</span>
                    </li>
                    <li>
                      Hobbies: <span>Games, Coding, Miami Dolphins</span>
                    </li>
                    <li>
                      Favorite Show: <span>Seinfeld</span>
                    </li>
                    <li>
                      Favorite Movie: <span>Dumb and Dumber</span>
                    </li>
                    <li>
                      Favorite Song: <span>Drifters - Up on the Roof</span>
                    </li>
                    <li>
                      Favorite Quote:{" "}
                      <span>
                        “All our dreams can come true, if we have the courage to
                        pursue them.” - Walt Disney
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row align-items-center about-main-info">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="about-m">
                    <div className="about-img">
                      <img className="img-fluid" src={Courtney} alt="" />
                    </div>
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.facebook.com/courtney.brooke.5648"
                        >
                          <FontAwesomeIcon className="icon" icon={faFacebook} />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.instagram.com/courtneybrookek/"
                        >
                          <FontAwesomeIcon
                            className="icon"
                            icon={faInstagram}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/courtney-kleiman/"
                        >
                          <FontAwesomeIcon className="icon" icon={faLinkedin} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <h2>
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                    <span>Courtney Kleiman </span>
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                  </h2>
                  <ul>
                    <li>
                      Occupation: <span>Staffing Lead - Google</span>
                    </li>
                    <li>
                      Hobbies: <span>Simba, Sushi, Adventures</span>
                    </li>
                    <li>
                      Favorite Show: <span>90 Day Fiance</span>
                    </li>
                    <li>
                      Favorite Movie: <span>Deep Blue Sea</span>
                    </li>
                    <li>
                      Favorite Song:{" "}
                      <span>Whatever - Something here for now</span>
                    </li>
                    <li>
                      Favorite Quote:{" "}
                      <span>
                        “I love Adam with all of my heart.” - Courtney Kleiman
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
