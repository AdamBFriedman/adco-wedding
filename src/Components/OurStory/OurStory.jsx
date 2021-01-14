import { useEffect } from "react";
import jQuery from "jquery";
import "../OurStory/ourStory.scss";
import FirstMet from "../../Images/OurStory/firstMet2.jpg";
import fellInLove from "../../Images/OurStory/fellInLove.png";
import movedToSF from "../../Images/OurStory/movedToCali.png";
import firstHome from "../../Images/OurStory/firstHome.jpg";
import proposal from "../../Images/OurStory/proposal.jpg";

export default function OurStory(_props) {
  useEffect(() => {
    (function (jQuery) {
      jQuery.fn.timeline = function () {
        var selectors = {
          id: jQuery(this),
          item: jQuery(this).find(".timeline-item"),
          activeClass: "timeline-item--active",
          img: ".timeline__img",
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
          "background-image",
          "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
        );

        jQuery(window).scroll(function () {
          selectors.item.each(function (i) {
            var windowHeight = jQuery(window).height(),
              gridTop = windowHeight * 0.2,
              gridBottom = windowHeight * 0.8;
            var thisTop =
              jQuery(this).offset().top - jQuery(window).scrollTop();

            if (
              thisTop > gridTop &&
              thisTop + jQuery(this).height() < gridBottom
            ) {
              selectors.id.css(
                "background-image",
                "url(" + jQuery(this).find(selectors.img).attr("src") + ")"
              );
              selectors.item.removeClass(selectors.activeClass);

              jQuery(this).addClass(selectors.activeClass);
            }
          });
        });
      };
    })(jQuery);
    jQuery("#timeline").timeline();
  });
  return (
    <div className="timeline-container" id="timeline">
      <div className="timeline-header">
        <h2 className="timeline-header__title">Our Story</h2>
        <h3 className="timeline-header__subtitle">
          A walk down memory lane...
        </h3>
      </div>
      <div className="timeline">
        <div className="timeline-item" data-text="First Met">
          <div className="timeline__content">
            <img alt="First Met" className="timeline__img" src={FirstMet} />
            <h2 className="timeline__content-title">Nov 2008</h2>
            <p className="timeline__content-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi consequuntur perspiciatis ducimus beatae. Placeat
              recusandae at omnis obcaecati adipisci officia.
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="Fell In Love">
          <div className="timeline__content">
            <img
              alt="Fell In Love"
              className="timeline__img"
              src={fellInLove}
            />
            <h2 className="timeline__content-title">Feb 2014</h2>
            <p className="timeline__content-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi consequuntur perspiciatis ducimus beatae. Placeat
              recusandae at omnis obcaecati adipisci officia.
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="Moved to Cali">
          <div className="timeline__content">
            <img
              alt="Moved to Cali"
              className="timeline__img"
              src={movedToSF}
            />
            <h2 className="timeline__content-title">May 2014</h2>
            <p className="timeline__content-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi consequuntur perspiciatis ducimus beatae. Placeat
              recusandae at omnis obcaecati adipisci officia.
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="First Home">
          <div className="timeline__content">
            <img alt="First Home" className="timeline__img" src={firstHome} />
            <h2 className="timeline__content-title">Aug 2016</h2>
            <p className="timeline__content-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi consequuntur perspiciatis ducimus beatae. Placeat
              recusandae at omnis obcaecati adipisci officia.
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="Proposal">
          <div className="timeline__content">
            <img alt="Proposal" className="timeline__img" src={proposal} />
            <h2 className="timeline__content-title">Aug 2019</h2>
            <p className="timeline__content-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi consequuntur perspiciatis ducimus beatae. Placeat
              recusandae at omnis obcaecati adipisci officia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
