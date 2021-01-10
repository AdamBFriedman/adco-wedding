import "../Contact/contact.css";

export default function Contact(props) {
  return (
    <div id="contact" className="contact-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-box">
              <h2>Contact Us</h2>
              <p>
                If you have any additional questions, please reach out to us
                below.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <div className="contact-block">
              <form action="https://formspree.io/f/moqppnpv" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        data-error="Please enter your name."
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-group-email">
                      <input
                        type="text"
                        placeholder="Your Email"
                        id="email"
                        className="form-control"
                        name="email"
                        required
                        data-error="Please enter your email."
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        rows="8"
                        data-error="Write your message."
                        required
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="submit-button text-center">
                      <button className="btn-common" id="submit" type="submit">
                        Send Message
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
