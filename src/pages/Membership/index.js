import React from 'react'
import Footer from '../../components/Footer'
import HomeHeader from '../../components/HomeHeader'

function Memberships() {
  return (
    <div id='bg'>
              <div className="page-wraper">
        <div id="loading-icon-bx" />
        <HomeHeader />
        {/* Content */}
        <div className="page-content bg-white">
          {/* inner page banner */}
          <div  className="page-banner ovbl-dark" style={{backgroundImage: 'url()'}}>
          <div className="container">
              <div className="page-banner-entry">
                <h1 className="text-white">Membership</h1>
              </div>
            </div>
          </div>
          {/* Breadcrumb row */}
          <div className="breadcrumb-row">
            <div className="container">
              <ul className="list-inline">
                <li><a href="#">Home</a></li>
                <li>Membership</li>
              </ul>
            </div>
          </div>
          {/* Breadcrumb row END */}
          {/* inner page banner END */}
          <div className="content-block">

            {/* Our Services ==== */}
            <div className="section-area section-sp2 bg-fix ovbl-dark join-bx" style={{backgroundImage: 'url(assets/images/back-green.jpg)'}}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center heading-bx text-white">
                    <h2 className="title-head m-b0">Why I Should Be a Member</h2>
                    <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                  </div>
                  <div className="col-md-6">	
                    <div className="why-chooses-bx ">
                      <div className="ttr-accordion m-b30 faq-bx" id="accordion1">
                        <div className="panel">
                          <div className="acod-head">
                            <h6 className="acod-title"> 
                              <a data-toggle="collapse" href="#faq1" className="collapsed" data-parent="#faq1">
                                Why won't my payment go through? </a> </h6>
                          </div>
                          <div id="faq1" className="acod-body collapse">
                            <div className="acod-content">Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="acod-head">
                            <h6 className="acod-title"> 
                              <a data-toggle="collapse" href="#faq2" className="collapsed" data-parent="#faq2">
                                How do I get a refund?</a> </h6>
                          </div>
                          <div id="faq2" className="acod-body collapse">
                            <div className="acod-content">Graphic design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="acod-head">
                            <h6 className="acod-title"> 
                              <a data-toggle="collapse" href="#faq3" className="collapsed" data-parent="#faq3">
                                How do I redeem a coupon? </a> </h6>
                          </div>
                          <div id="faq3" className="acod-body collapse">
                            <div className="acod-content">Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="acod-head">
                            <h6 className="acod-title"> 
                              <a data-toggle="collapse" href="#faq4" className="collapsed" data-parent="#faq4">
                                Why aren't my courses showing in my account? </a> </h6>
                          </div>
                          <div id="faq4" className="acod-body collapse">
                            <div className="acod-content">Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="acod-head">
                            <h6 className="acod-title"> 
                              <a data-toggle="collapse" href="#faq5" className="collapsed" data-parent="#faq5">
                                Changing account name </a> </h6>
                          </div>
                          <div id="faq5" className="acod-body collapse">
                            <div className="acod-content">Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="acod-head">
                            <h6 className="acod-title"> 
                              <a data-toggle="collapse" href="#faq6" className="collapsed" data-parent="#faq6">
                                Why aren't my courses showing in my account? </a> </h6>
                          </div>
                          <div id="faq6" className="acod-body collapse">
                            <div className="acod-content">Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">	
                  <form style={{backgroundColor:'#fff',padding:10}} className="contact-bx ajax-form" >
          <div className="ajax-message" />
          <div className="heading-bx left">
            <h2 className="title-head">Be a Member</h2>
          </div>
          <div className="row placeani">
            <div className="col-lg-6">
              <div className="form-group">
                <div className="input-group">
                  <input placeholder='Full Name'  type="text" required className="form-control valid-character" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <div className="input-group"> 
                  <input placeholder='Your School Email Address' type="email" className="form-control" required />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <div className="input-group">
                  <input placeholder='Your Phone' type="text" required className="form-control int-value" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <div className="input-group">
                  <input placeholder='Reg. No.:' type="text" required className="form-control" />
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
              <button name="submit" type="submit" value="Submit" className="btn button-md">Join Us</button>
            </div>
          </div>
        </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* contact area END ==== */}

        </div>
        {/* Content END*/}
        {/* Footer ==== */}
       <Footer />
        {/* Footer END ==== */}
      </div>
      {/* External JavaScripts */}
    </div>
  )
}

export default Memberships