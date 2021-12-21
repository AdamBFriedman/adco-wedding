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
                  Hilton Buena Vista Palace
                </a>
                <br />
                <span className="addressText">
                  1900 E Buena Vista Dr <br />
                  Lake Buena Vista, FL 32830
                </span>
                <br />
                <span className="distanceText">
                  (Approx. 41 min to venue)
                </span>{" "}
                <br /> <br />
                <a
                  href="https://book.passkey.com/gt/218164745?gtid=fadab61d56f957e9c0fd7255771de189"
                  target="_blank"
                  rel="noreferrer"
                >
                  Room Block
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 service-card">
            <div className="serviceBox">
              <h3 className="title">Transportation</h3>
              <p className="description">
                Transportation will be provided to the venue and back to the
                hotel. Please let us know at least two (2) weeks before if you
                plan to use this so we can account for you.
                <br />
                <span className="addressText">
                  <span style={{ fontWeight: 900 }}>* Pick up:</span> Leaves
                  hotel (Hilton Lake Buena Vista Palace) at 2:45pm *SHARP*{" "}
                  <br />
                  <span style={{ fontWeight: 900 }}>* Drop off:</span> Leaves
                  venue at 10:30pm to drop off at hotel (Hilton Lake Buena Vista
                  Palace)
                </span>
              </p>
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
