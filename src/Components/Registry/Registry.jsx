import "../Registry/registry.css";
import BBB from "../../Images/Registry/registry-bbb.jpg";
import Bali from "../../Images/Registry/registry-bali.png";

export default function Registry(props) {
  return (
    <div id="registry" className="registry-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-box">
              <h2>Registry</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-6 service-card">
            <div className="serviceBox registryBox">
              <h3 className="title">Honeymoon</h3>
              <div className="registry-photo">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.travelersjoy.com/adcowedding"
                >
                  <img className="img-fluid" src={Bali} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 service-card">
            <div className="serviceBox registryBox">
              <h3 className="title">Home</h3>
              <div className="registry-photo">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549731125?eventType=Wedding"
                >
                  <img className="img-fluid" src={BBB} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
