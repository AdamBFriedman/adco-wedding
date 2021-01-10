import { useEffect } from "react";
import jQuery from "jquery";
import "../Preloader/preloader.css";

export default function Preloader(props) {
  useEffect(() => {
    jQuery(".preloader").fadeOut();
    jQuery("#preloader").delay(550).fadeOut("slow");
    jQuery("body").delay(450).css({ overflow: "visible" });
  });
  return (
    <div id="preloader">
      <div className="Preloader">
        <div className="Loader">
          <span className="loading-1"></span>
          <span className="loading-2"></span>
          <span className="loading-3"></span>
        </div>
        <div className="Loader-shadow"></div>
      </div>
    </div>
  );
}
