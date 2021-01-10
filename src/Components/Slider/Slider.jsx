/* eslint-disable no-sequences */
/* eslint-disable no-redeclare */
/* eslint-disable no-unused-expressions */
import { useEffect } from "react";
import jQuery from "jquery";
import "../Slider/slider.css";
import image1 from "../../Images/Slider/slider-1.jpg";
import image2 from "../../Images/Slider/slider-2.jpg";
import image3 from "../../Images/Slider/slider-3.jpg";
import image4 from "../../Images/Slider/slider-4.jpg";
import image5 from "../../Images/Slider/slider-5.jpg";
import image6 from "../../Images/Slider/slider-6.jpg";
import image7 from "../../Images/Slider/slider-7.jpg";
import image8 from "../../Images/Slider/slider-8.jpg";

export default function Slider(props) {
  useEffect(() => {
    (function (c, K, C) {
      c.fn.responsiveSlides = function (m) {
        let a = c.extend(
          {
            auto: !0,
            speed: 500,
            timeout: 4e3,
            pager: !1,
            nav: !1,
            random: !1,
            pause: !1,
            pauseControls: !0,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "",
            navContainer: "",
            manualControls: "",
            namespace: "rslides",
            before: c.noop,
            after: c.noop,
          },
          m
        );
        return this.each(function () {
          C++;
          let f = c(this),
            u,
            t,
            v,
            n,
            q,
            r,
            p = 0,
            e = f.children(),
            D = e.length,
            h = parseFloat(a.speed),
            E = parseFloat(a.timeout),
            w = parseFloat(a.maxwidth),
            g = a.namespace,
            d = g + C,
            F = g + "_nav " + d + "_nav",
            x = g + "_here",
            k = d + "_on",
            y = d + "_s",
            l = c("<ul class='" + g + "_tabs " + d + "_tabs' />"),
            z = { float: "left", position: "relative", opacity: 1, zIndex: 2 },
            A = { float: "none", position: "absolute", opacity: 0, zIndex: 1 },
            G = (function () {
              let b = (document.body || document.documentElement).style,
                a = "transition";
              if ("string" === typeof b[a]) return !0;
              u = ["Moz", "Webkit", "Khtml", "O", "ms"];
              for (c = 0; c < u.length; c++)
                if ("string" === typeof b[u[c] + a]) return !0;
              return !1;
            })(),
            B = function (b) {
              a.before(b);
              G
                ? (e.removeClass(k).css(A).eq(b).addClass(k).css(z),
                  (p = b),
                  setTimeout(function () {
                    a.after(b);
                  }, h))
                : e
                    .stop()
                    .fadeOut(h, function () {
                      c(this).removeClass(k).css(A).css("opacity", 1);
                    })
                    .eq(b)
                    .fadeIn(h, function () {
                      c(this).addClass(k).css(z);
                      a.after(b);
                      p = b;
                    });
            };
          a.random &&
            (e.sort(function () {
              return Math.round(Math.random()) - 0.5;
            }),
            f.empty().append(e));
          e.each(function (a) {
            this.id = y + a;
          });
          f.addClass(g + " " + d);
          m && m.maxwidth && f.css("max-width", w);
          e.hide().css(A).eq(0).addClass(k).css(z).show();
          G &&
            e.show().css({
              "-webkit-transition": "opacity " + h + "ms ease-in-out",
              "-moz-transition": "opacity " + h + "ms ease-in-out",
              "-o-transition": "opacity " + h + "ms ease-in-out",
              transition: "opacity " + h + "ms ease-in-out",
            });
          if (1 < e.length) {
            if (E < h + 100) return;
            if (a.pager && !a.manualControls) {
              let H = [];
              e.each(function (a) {
                a += 1;
                H += "<li><a href='#' class='" + y + a + "'>" + a + "</a></li>";
              });
              l.append(H);
              m.navContainer ? c(a.navContainer).append(l) : f.after(l);
            }
            a.manualControls &&
              ((l = c(a.manualControls)),
              l.addClass(g + "_tabs " + d + "_tabs"));
            (a.pager || a.manualControls) &&
              l.find("li").each(function (a) {
                c(this).addClass(y + (a + 1));
              });
            if (a.pager || a.manualControls)
              (r = l.find("a")),
                (t = function (a) {
                  r.closest("li").removeClass(x).eq(a).addClass(x);
                });
            a.auto &&
              ((v = function () {
                q = setInterval(function () {
                  e.stop(!0, !0);
                  let b = p + 1 < D ? p + 1 : 0;
                  (a.pager || a.manualControls) && t(b);
                  B(b);
                }, E);
              }),
              v());
            n = function () {
              a.auto && (clearInterval(q), v());
            };
            a.pause &&
              f.hover(
                function () {
                  clearInterval(q);
                },
                function () {
                  n();
                }
              );
            if (a.pager || a.manualControls)
              r
                .bind("click", function (b) {
                  b.preventDefault();
                  a.pauseControls || n();
                  b = r.index(this);
                  p === b || c("." + k).queue("fx").length || (t(b), B(b));
                })
                .eq(0)
                .closest("li")
                .addClass(x),
                a.pauseControls &&
                  r.hover(
                    function () {
                      clearInterval(q);
                    },
                    function () {
                      n();
                    }
                  );
            if (a.nav) {
              g =
                "<a href='#' class='" +
                F +
                " prev'>" +
                a.prevText +
                "</a><a href='#' class='" +
                F +
                " next'>" +
                a.nextText +
                "</a>";
              m.navContainer ? c(a.navContainer).append(g) : f.after(g);
              let d = c("." + d + "_nav"),
                I = d.filter(".prev");
              d.bind("click", function (b) {
                b.preventDefault();
                b = c("." + k);
                if (!b.queue("fx").length) {
                  let d = e.index(b);
                  b = d - 1;
                  d = d + 1 < D ? p + 1 : 0;
                  B(c(this)[0] === I[0] ? b : d);
                  (a.pager || a.manualControls) &&
                    t(c(this)[0] === I[0] ? b : d);
                  a.pauseControls || n();
                }
              });
              a.pauseControls &&
                d.hover(
                  function () {
                    clearInterval(q);
                  },
                  function () {
                    n();
                  }
                );
            }
          }
          if (
            "undefined" === typeof document.body.style.maxWidth &&
            m.maxwidth
          ) {
            let J = function () {
              f.css("width", "100%");
              f.width() > w && f.css("width", w);
            };
            J();
            c(K).bind("resize", function () {
              J();
            });
          }
        });
      };
      jQuery(".rslides").responsiveSlides({
        auto: true, // Boolean: Animate automatically, true or false
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000, // Integer: Time between slide transitions, in milliseconds
        pager: false, // Boolean: Show pager, true or false
        nav: false, // Boolean: Show navigation, true or false
        random: false, // Boolean: Randomize the order of the slides, true or false
        pause: false, // Boolean: Pause on hover, true or false
        pauseControls: true, // Boolean: Pause when hovering controls, true or false
        prevText: "Previous", // String: Text for the "previous" button
        nextText: "Next", // String: Text for the "next" button
        maxwidth: "", // Integer: Max-width of the slideshow, in pixels
        navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "", // Selector: Declare custom pager navigation
        namespace: "rslides", // String: Change the default namespace used
        before: function () {}, // Function: Before callback
        after: function () {}, // Function: After callback
      });

      /* ..............................................
    Countdown Clock
    ................................................. */
      function makeTimer() {
        let countDownDate = new Date("Feb 5, 2022 16:00:00").getTime();
        // Update the count down every 1 second
        let x = setInterval(function () {
          // Get today's date and time
          let now = new Date().getTime();

          // Find the distance between now and the count down date
          let distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="demo"
          // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
          // + minutes + "m " + seconds + "s ";

          jQuery("#days").html(days + "<h6>Days</h6>");
          jQuery("#hours").html(hours + "<h6>Hours</h6>");
          jQuery("#minutes").html(minutes + "<h6>Min</h6>");
          jQuery("#seconds").html(seconds + "<h6>Sec</h6>");

          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
          }
        }, 500);
      }
      setInterval(function () {
        makeTimer();
      }, 500);
    })(jQuery, this, 0);
  });

  /* eslint-disable no-unused-expressions */

  return (
    <div className="home-slider">
      <ul className="rslides">
        <li>
          <img src={image1} alt="" />
        </li>
        <li>
          <img src={image2} alt="" />
        </li>
        <li>
          <img src={image3} alt="" />
        </li>
        <li>
          <img src={image4} alt="" />
        </li>
        <li>
          <img src={image5} alt="" />
        </li>
        <li>
          <img src={image6} alt="" />
        </li>
        <li>
          <img src={image7} alt="" />
        </li>
        <li>
          <img src={image8} alt="" />
        </li>
      </ul>
      <div className="slider-details">
        <h1>Adam & Courtney</h1>
        <h2>Are Getting Married</h2>
        <div className="countdown clearfix">
          <h3 className="roll-in-top">- 02.04.22 -</h3>
          <div id="timer">
            <div id="days"></div>
            <div id="hours"></div>
            <div id="minutes"></div>
            <div id="seconds"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
