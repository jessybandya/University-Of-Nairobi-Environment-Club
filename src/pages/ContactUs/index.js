import React from 'react'
import Footer from '../../components/Footer'
import HomeHeader from '../../components/HomeHeader'

function ContactUs() {
  return (
    <div id='bg'>
              <div className="page-wraper">
        <div id="loading-icon-bx" />
        {/* Header Top ==== */}
   <HomeHeader />
        {/* Content */}
        <div className="page-content bg-white">
          {/* inner page banner */}
          <div className="page-banner ovbl-dark" style={{backgroundImage: 'url(assets/images/back-green.jpg)'}}>
            <div className="container">
              <div className="page-banner-entry">
                <h1 className="text-white">Contact Us</h1>
              </div>
            </div>
          </div>
          {/* Breadcrumb row */}
          <div className="breadcrumb-row">
            <div className="container">
              <ul className="list-inline">
                <li><a href="#">Home</a></li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          {/* Breadcrumb row END */}
          {/* inner page banner */}
          <div className="page-banner contact-page section-sp2">
            <div className="container">
              <div  className="row">
                <div  className="col-lg-5 col-md-5 m-b30">
                  <div style={{backgroundColor:'#007bff'}}  className="bg-primary text-white contact-info-bx">
                    <h2 className="m-b10 title-head">Contact <span>Information</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="widget widget_getintuch">	
                      <ul>
                        <li><i className="ti-location-pin" />75k Newcastle St. Ponte Vedra Beach, FL 309382 New York</li>
                        <li><i className="ti-mobile" />0800-123456 (24/7 Support Line)</li>
                        <li><i className="ti-email" />info@example.com</li>
                      </ul>
                    </div>
                    <h5 className="m-t0 m-b20">Follow Us</h5>
                    <ul className="list-inline contact-social-bx">
                      <li><a href="#" className="btn outline radius-xl"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#" className="btn outline radius-xl"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#" className="btn outline radius-xl"><i className="fa fa-linkedin" /></a></li>
                      <li><a href="#" className="btn outline radius-xl"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <form className="contact-bx ajax-form" action="http://educhamp.themetrades.com/demo/assets/script/contact.php">
                    <div className="ajax-message" />
                    <div className="heading-bx left">
                      <h2 className="title-head">Get In <span>Touch</span></h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                    </div>
                    <div className="row placeani">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <div className="input-group">
                            <label>Your Name</label>
                            <input name="name" type="text" required className="form-control valid-character" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <div className="input-group"> 
                            <label>Your Email Address</label>
                            <input name="email" type="email" className="form-control" required />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <div className="input-group">
                            <label>Your Phone</label>
                            <input name="phone" type="text" required className="form-control int-value" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <div className="input-group">
                            <label>Subject</label>
                            <input name="subject" type="text" required className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
                            <label>Type Message</label>
                            <textarea name="message" rows={4} className="form-control" required defaultValue={""} />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
                            <div className="g-recaptcha" data-sitekey="6Lf2gYwUAAAAAJLxwnZTvpJqbYFWqVyzE-8BWhVe" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback" />
                            <input className="form-control d-none" style={{display: 'none'}} data-recaptcha="true" required data-error="Please complete the Captcha" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button name="submit" type="submit" value="Submit" className="btn button-md"> Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* inner page banner END */}
        </div>
        {/* Content END*/}
        {/* Footer ==== */}
   <Footer />
        {/* Footer END ==== */}
        {/* scroll top button */}
      </div>
      {/* External JavaScripts */}
    </div>
  )
}

export default ContactUs