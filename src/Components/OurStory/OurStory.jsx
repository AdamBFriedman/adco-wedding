import { useEffect } from "react";
import jQuery from "jquery";
import "../OurStory/ourStory.scss";
import FirstMet from "../../Images/OurStory/firstMet.jpg";
import fellInLove from "../../Images/OurStory/fellInLove.png";
import movedToSF from "../../Images/OurStory/movedToCali.png";
import firstHome from "../../Images/OurStory/firstHome.jpg";
import proposal from "../../Images/OurStory/proposal.jpg";
import useWindowDimensions from "../../util/windowDimensions";

export default function OurStory(_props) {
  const { width } = useWindowDimensions();
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
        if (width > 600) {
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item.first().find(selectors.img).attr("src") +
              ")"
          );
        }

        jQuery(window).scroll(function () {
          selectors.item.each(function (i) {
            var windowHeight = jQuery(window).height(),
              gridTop = windowHeight * 0.01,
              gridBottom = windowHeight;
            var thisTop =
              jQuery(this).offset().top - jQuery(window).scrollTop();

            if (
              thisTop > gridTop &&
              thisTop + jQuery(this).height() < gridBottom
            ) {
              if (width > 600) {
                selectors.id.css(
                  "background-image",
                  "url(" + jQuery(this).find(selectors.img).attr("src") + ")"
                );
              }
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
              Courtney" she said as she extended her hand - to which Adam
              replied "Courtney? I love that name!". They shared a lot of
              interesting moments that night and he knew those adventures must
              continue. They had their first date two days later.
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
            {width <= 375 ? (
              <p className="timeline__content-desc">
                Adam promised Courtney a trip to Disney when they first met but
                life got in the way and that trip never got to happen...until
                six years later. They were just friends at this time but that
                didn't stop Adam from throwing in a few surprises here and there
                including one where Courtney woke up to "Good Morning" spelled
                out in silverware. The magic of Disney ultimately rekindled the
                love between the two and helped light a fire that continued to
                grow.
              </p>
            ) : (
              <p className="timeline__content-desc">
                Adam promised Courtney a trip to Disney when they first met but
                life got in the way and that trip never got to happen...until
                six years later. At this time they were just friends but Adam
                seemingly had more up his sleeve. He arranged a weekend trip for
                just the two of them to Magic Kingdom where Adam courted her the
                entire time in true Adam fashion. One morning she woke up to
                "Good Morning" spelled out in silverware on the kitchen counter.
                Another evening he took her to Hash House a Go Go where they
                shared laughs over a 16" snickers flavored pancake for dinner -
                yes, that’s right - dinner. The magic of Disney ultimately
                rekindled the love between the two and helped light a fire that
                continued to grow.
              </p>
            )}
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
              Courtney and Adam began seeing each other a lot more frequently
              since their Disney trip but Courtney was going to move to San
              Francisco in a month. Adam had never been to California but knew
              he didn't want to leave anything on the table. A few weeks before
              her big move, Adam booked a trip to visit SF with Courtney and
              they ended up sharing their greatest time together yet. He moved
              there three weeks later.
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="First Home">
          <div className="timeline__content">
            <img alt="First Home" className="timeline__img" src={firstHome} />
            <h2 className="timeline__content-title">Aug 2016</h2>
            <p className="timeline__content-desc">
              After a few years of living with roommates, Courtney and Adam
              thought it was time to make their next big decision so they moved
              into their own apartment in the heart of the city. It was like
              living with your best friend - the adventures continued...
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="Proposal">
          <div className="timeline__content">
            <img alt="Proposal" className="timeline__img" src={proposal} />
            <h2 className="timeline__content-title">Aug 2019</h2>
            <p className="timeline__content-desc">
              Adam knew that it was time. Keeping this secret close to his
              chest, he planned their proposal (disguised as Courtney's birthday
              gift) in Santa Rosa's wine country. They checked into their
              private cottage and enjoyed the tranquil living with a glass of
              wine made on property. The following afternoon was spent at a
              lovely winery where they sat in their secluded garden pavilion
              Adam had reserved. As the dessert tray came out, Courtney smiled
              as she anticipated a "Happy Birthday" message. When the plate was
              put in front of her, she was confused at just seeing “Courtney…”.
              She turned to Adam and gasped as she saw him on one knee...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
