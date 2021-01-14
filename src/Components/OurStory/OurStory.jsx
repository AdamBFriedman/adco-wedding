import { useEffect } from "react";
import jQuery from "jquery";
import "../OurStory/ourStory.scss";
import FirstMet from "../../Images/OurStory/firstMet.jpg";
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
              Adam hosted a party and remembers how beautiful Courtney looked
              walking up to him as he went outside to greet his guests. "Hi, I'm
              Courtney." she said as she extended her hand. "I love that name!".
              They shared a lot of interesting adventures that night and he knew
              he had to ask for her number. They had their first date two days
              later.
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
              Adam promised Courtney a trip to Disney when they first met but
              life got in the way and that trip never got to happen... until mid
              February 2014. Perhaps it was the magic inside of the parks but
              that trip lit a fire that has never gone out.
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
              Courtney and Adam had become close since their Disney trip but the
              time came when Courtney decided to move to San Francisco. Adam had
              never been to California but knew he didn't want to leave anything
              on the table. He followed her out there and they began dating.
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="First Home">
          <div className="timeline__content">
            <img alt="First Home" className="timeline__img" src={firstHome} />
            <h2 className="timeline__content-title">Aug 2016</h2>
            <p className="timeline__content-desc">
              After two years of living with roommates, Courtney and Adam moved
              into their own apartment in the heart of the city. This is where
              their love began to flourish...
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="Proposal">
          <div className="timeline__content">
            <img alt="Proposal" className="timeline__img" src={proposal} />
            <h2 className="timeline__content-title">Aug 2019</h2>
            <p className="timeline__content-desc">
              After six years of dating, Adam knew it was time. He planned a
              secret proposal (disguised as Courtney's birthday gift) in Santa
              Rosa's wine country complete with their own cottage and private
              wine tasting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
