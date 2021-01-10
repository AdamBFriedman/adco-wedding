import "../Bridesmaids/bridesmaids.css";
import Alyssa from "../../Images/Bridesmaids/alyssa.jpg";
import Melissa from "../../Images/Bridesmaids/melissa.jpg";
import Kallie from "../../Images/Bridesmaids/kallie.jpg";
import Lexi from "../../Images/Bridesmaids/lexi.jpg";
import Lauren from "../../Images/Bridesmaids/lauren.jpg";
import Shelby from "../../Images/Bridesmaids/shelby.jpg";

export default function Bridesmaids(props) {
  return (
    <div id="party" className="bridesmaids-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-box">
              <h2>Bridesmaids</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="bridesmaids">
              <img className="img-fluid" src={Lexi} alt="" />
              <div className="party-info">
                <h2>Lexi Forde</h2>
                <h4>Maid of Honor</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="bridesmaids">
              <img className="img-fluid" src={Shelby} alt="" />
              <div className="party-info">
                <h2>Shelby Fischer</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="bridesmaids">
              <img className="img-fluid" src={Lauren} alt="" />
              <div className="party-info">
                <h2>Lauren Feliciano</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="bridesmaids">
              <img className="img-fluid" src={Melissa} alt="" />
              <div className="party-info">
                <h2>Melissa Mehenni</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="bridesmaids">
              <img className="img-fluid" src={Kallie} alt="" />
              <div className="party-info">
                <h2>Kallie Bowman</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="bridesmaids">
              <img className="img-fluid" src={Alyssa} alt="" />
              <div className="party-info">
                <h2>Alyssa Appolonio</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
