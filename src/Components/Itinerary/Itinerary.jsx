import "../Itinerary/itinerary.css";

export default function Itinerary(props) {
  return (
    <div id="wedding" className="wedding-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-box">
              <h2>Wedding Itinerary</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 service-card">
            <div className="serviceBox">
              <div className="service-icon">
                <i className="ceremony"></i>
              </div>
              <h3 className="title">Ceremony</h3>
              <h4>Friday, February 4th, 2022 at 4:00 pm</h4>
              <p className="description">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="http://clublakeplantation.com/"
                >
                  Club Lake Plantation
                </a>
                <br />
                <span className="addressText">
                  3403 Rock Springs Rd. <br />
                  Apopka, FL 32712
                </span>
              </p>
              <a
                style={{ display: "inline-block" }}
                rel="noreferrer"
                target="_blank"
                href="http://maps.google.com/?q=3403 Rock Springs Rd, Apopka, FL, 32712"
              >
                <button>View Map</button>
              </a>
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-6 service-card">
            <div className="serviceBox">
              <div className="service-icon">
                <i className="brunch"></i>
              </div>
              <h3 className="title">Brunch</h3>
              <h4>Saturday, February 5th, 2022 at 10:30 am</h4>
              <p className="description">
                Do you like mimosa's? Do you like pancakes or eggs benedict?
                Join us for brunch the next day!
              </p>
            </div>
          </div> */}

          <div className="col-lg-4 col-md-6 service-card">
            <div className="serviceBox">
              <div className="service-icon">
                <i className="disney-icon"></i>
              </div>
              <h3 className="title">Disney</h3>
              <h4>Saturday, February 5th, 2022 at 3:00 pm</h4>
              <p className="description">
                We're going to the happiest place on earth! We will be staying
                until the park closes :)
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-card">
            <div className="serviceBox">
              <div className="service-icon">
                <i className="football-icon"></i>
              </div>
              <h3 className="title">Super Bowl</h3>
              <h4>Sunday, February 6th, 2022 at 5:00 pm</h4>
              <p className="description">Details to come. Fins up!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
