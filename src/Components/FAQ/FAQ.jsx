import "../FAQ/faq.css";

export default function FAQ(props) {
  return (
    <div id="faq" className="faq-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-box">
              <h2>FAQ</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="accordion" id="wedding-faq">
              <div className="card faq-card">
                <div className="card-header p-2" id="headingOne">
                  <button
                    className="btn-faq btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h4 className="faq-question">Am I able to bring a +1?</h4>
                  </button>
                </div>

                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#wedding-faq"
                >
                  <div className="card-body">
                    We have a strict guest list and will only be able to
                    accommodate those listed on your invitation. However, you're
                    welcome to bring additional guests to the optional events
                    (see above) - the more the merrier!
                  </div>
                </div>
              </div>
              <div className="card faq-card">
                <div className="card-header p-2" id="headingTwo">
                  <button
                    className="btn-faq btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h4 className="faq-question">
                      Do you have any hotel recommendations?
                    </h4>
                  </button>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#wedding-faq"
                >
                  <div className="card-body">
                    Please check back once wedding invitations are sent - we are
                    currently working on room blocks.
                  </div>
                </div>
              </div>
              <div className="card faq-card">
                <div className="card-header p-2" id="headingThree">
                  <button
                    className="btn-faq btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <h4 className="faq-question">
                      What should I wear? Is there a dress code?
                    </h4>
                  </button>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#wedding-faq"
                >
                  <div className="card-body">
                    We recommend semi-formal/cocktail attire, but there is no
                    dress code. Please come comfortably, and as yourself!
                  </div>
                </div>
              </div>
              <div className="card faq-card">
                <div className="card-header p-2" id="headingFour">
                  <button
                    className="btn-faq btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <h4 className="faq-question">
                      What will the weather be like this time of year?
                    </h4>
                  </button>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#wedding-faq"
                >
                  <div className="card-body">
                    Orlando can get a little chilly in February - we advise you
                    bring a jacket/coat.
                  </div>
                </div>
              </div>
              <div className="card faq-card">
                <div className="card-header p-2" id="headingFive">
                  <button
                    className="btn-faq btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <h4 className="faq-question">
                      Where are the ceremony and the reception taking place?
                    </h4>
                  </button>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#wedding-faq"
                >
                  <div className="card-body">
                    Both the ceremony and reception are located at The Club Lake
                    Plantation (address and map provided above).
                  </div>
                </div>
              </div>
              <div className="card faq-card">
                <div className="card-header p-2" id="headingSix">
                  <button
                    className="btn-faq btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    <h4 className="faq-question">
                      Are there other wedding events I can attend?
                    </h4>
                  </button>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  aria-labelledby="headingSix"
                  data-parent="#wedding-faq"
                >
                  <div className="card-body">
                    This weekend is all about fun so we have a few optional
                    events including brunch and Disney the following day, as
                    well as a Super Bowl party on Sunday (stay tuned for more
                    details).
                  </div>
                </div>
              </div>
              <div className="card faq-card">
                <div className="card-header p-2" id="headingSeven">
                  <button
                    className="btn-faq btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    <h4 className="faq-question">
                      Can I take and post pictures of the wedding on social
                      media?
                    </h4>
                  </button>
                </div>
                <div
                  id="collapseSeven"
                  className="collapse"
                  aria-labelledby="headingSeven"
                  data-parent="#wedding-faq"
                >
                  <div className="card-body">
                    Yes, we encourage guests to post pictures onto their social
                    media channels. Our only request is that you tag each photo
                    with our wedding hashtag #KleimanLoveWithYou so we can keep
                    track of all of your pictures!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
