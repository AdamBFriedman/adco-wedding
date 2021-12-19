import "../Registry/registry.css";
import WilliamsSonoma from "../../Images/Registry/williamssonoma.jpg";
import CrateAndBarrel from "../../Images/Registry/crateandbarrel.png";

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
              {/* <h3 className="title">Crate & Barrel</h3> */}
              <div className="registry-photo">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.crateandbarrel.com/gift-registry/courtney-kleiman-and-adam-friedman/r6418777"
                >
                  <img className="img-fluid" src={CrateAndBarrel} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 service-card">
            <div className="serviceBox registryBox">
              {/* <h3 className="title">Williams Sonoma</h3> */}
              <div className="registry-photo">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.williams-sonoma.com/registry/hr5wkfv8vj/registry-list.html"
                >
                  <img className="img-fluid" src={WilliamsSonoma} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
