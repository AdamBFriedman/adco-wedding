import "../Itinerary/itinerary.css";

export default function Itinerary() {
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
                <i className="ceremony-icon"></i>
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

          <div className="col-lg-4 col-md-6 service-card">
            <div className="serviceBox">
              <div className="service-icon">
                <i className="reception-icon"></i>
              </div>
              <h3 className="title">Cocktails/Reception</h3>
              <h4>Friday, February 4th, 2022 at 5:00 pm</h4>
              <p className="description">
                Following the ceremony, join us for cocktails from 5:00pm
                followed by the reception from 6:00pm - 10:00pm
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-card">
            <div className="serviceBox">
              <div className="service-icon">
                <i className="disney-icon"></i>
              </div>
              <h3 className="title">Disney</h3>
              <h4>Saturday, February 5th, 2022 at 1:00 pm</h4>
              <p className="description">
                We're going to the happiest place on earth (Magic Kingdom)! We
                will be staying until the park closes :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
