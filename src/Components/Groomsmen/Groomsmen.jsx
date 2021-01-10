import "../Groomsmen/groomsmen.css";
import Joey from "../../Images/Groomsmen/joey.jpg";
import Patterson from "../../Images/Groomsmen/patterson.jpg";
import Ripps from "../../Images/Groomsmen/ripps.jpg";
import Tommy from "../../Images/Groomsmen/tommy.png";
import Manzella from "../../Images/Groomsmen/manzella.jpg";
import Sean from "../../Images/Groomsmen/sean.jpg";

export default function Bridesmaids(props) {
  return (
    <div className="groomsmen-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-box">
              <h2>Groomsmen</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="groomsmen">
              <img className="img-fluid" src={Joey} alt="" />
              <div className="party-info">
                <h2>Joseph Di Pietro</h2>
                <h4>Best Man</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="groomsmen">
              <img className="img-fluid" src={Patterson} alt="" />
              <div className="party-info">
                <h2>Joshua Patterson</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="groomsmen">
              <img className="img-fluid" src={Ripps} alt="" />
              <div className="party-info">
                <h2>Andrew Ripps</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="groomsmen">
              <img className="img-fluid" src={Tommy} alt="" />
              <div className="party-info">
                <h2>Tommy Nelson</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="groomsmen">
              <img className="img-fluid" src={Manzella} alt="" />
              <div className="party-info">
                <h2>Michael Manzella</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="groomsmen">
              <img className="img-fluid" src={Sean} alt="" />
              <div className="party-info">
                <h2>Sean Kleiman</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
