import "../Travel/travel.css";

export default function Travel(props) {
  return (
    <div id="travel" className="travel-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-box">
              <h2>Travel Information</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 service-card">
            <div className="serviceBox">
              <h3 className="title">Our Hotel</h3>
              <p className="description">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.buenavistapalace.com/"
                >
                  Orlando Buena Vista Palace
                </a>
                <br />
                <span className="addressText">
                  1900 E Buena Vista Dr <br />
                  Lake Buena Vista, FL 32830
                </span>
                <br />

                <span className="distanceText">(Approx. 41 min to venue)</span>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 service-card">
            <div className="serviceBox">
              <h3 className="title">Hotels Nearby</h3>
              <div className="row">
                <p className="description col-md-6">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.wyndhamhotels.com/wyndham-grand/orlando-florida/wyndham-grand-orlando-resort-bonnet-creek/overview?CID=LC:GR::GGL:RIO:National:45462&iata=00093796"
                  >
                    Bonnet Creek
                  </a>
                  <br />
                  <span className="addressText">
                    14651 Chelonia Pkwy <br />
                    Orlando, FL 32821
                  </span>
                  <br />
                  <span className="distanceText">
                    (Approx. 41 min to venue)
                  </span>
                </p>
                <p className="description col-md-6">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.hilton.com/en/hotels/sfbakgi-hilton-garden-inn-apopka-city-center/"
                  >
                    Hilton Garden Inn
                  </a>
                  <br />
                  <span className="addressText">
                    580 E. Main Street <br />
                    Apopka, Fl 32703
                  </span>
                  <br />
                  <span className="distanceText">
                    (Approx. 11 min to venue)
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 service-card mx-auto">
            <div className="serviceBox">
              <h3 className="title">Airport Info</h3>
              <p className="description">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://orlandoairports.net/"
                >
                  Orlando International Airport
                </a>
                <br />
                <span className="addressText">
                  1 Jeff Fuqua Blvd <br />
                  Orlando, FL 32827
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
