import React from 'react'
import "./styles.css"

function Footer() {
  return (
    <div>
               {/* Footer ==== */}
               <footer className="kilimanjaro_area">
        {/* Top Footer Area Start */}
        <div className="foo_top_header_one section_padding_100_70">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="kilimanjaro_part">
                <div className="region region-header">
                        <div id="block-scholarly-branding" className="clearfix site-branding block block-system block-system-branding-block">
                          <div className="logo">
                            <a href="index.html" title="Home" rel="home" className="site-branding__logo">
                              <img src="sites/civil.uonbi.ac.ke/files/best-logo59_0.png" alt="Home" />
                            </a>
                          </div>
                            <div className="site-name site-branding__name">ENVIRONMENTAL CLUB</div>
                            <div className="site-slogan site-branding__slogan">
                            <a href="/" title="Home" rel="home">University Of Nairobi</a>
                          </div>
                        </div>
                      </div>
                      <center>
                      <p>World Class University Committed to Schorlaly Excellence.</p>
                      </center>

                  <ul className="kilimanjaro_social_links">
                    {/* <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /> Facebook</a></li> */}
                    <li><a href="https://twitter.com/environClub_UoN" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /> Twitter</a></li>
                    {/* <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /> Pinterest</a></li>
                    <li><a href="#"><i className="fa fa-youtube" aria-hidden="true" /> YouTube</a></li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /> Linkedin</a></li> */}
                  </ul>
                </div>

              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="kilimanjaro_part">
                  <h5>Our Vision</h5>
                  <ul className=" kilimanjaro_widget">
                    <li><a>create self sustaining environs in and around the University of Nairobi through climate action</a></li>
                  </ul>
                </div>

              </div>
              <div className="col-12 col-md-6 col-lg-3">
                        <div className="kilimanjaro_part">
                            <h5>About Us</h5>
                            <p>Environmental Club of UoN is an environmental conservation club made up of students of University of Nairobi.The aim of the club is to champion climate action within and around all the branches of the university to help in creating self sustaining communities.</p>
                        </div>
                     </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="kilimanjaro_part">
                  <h5>Quick Contact</h5>
                  <div className="kilimanjaro_single_contact_info">
                    <h5>Phone:</h5>
                    <p><a style={{color:'#fff'}} href='tel: +254727957118'>+254 727 957118</a></p>
                  </div>
                  <div className="kilimanjaro_single_contact_info">
                    <h5>Email:</h5>
                    <p><a style={{color:'#fff'}} href='mailto:environmentalclubuon@gmail.com'>environmentalclubuon@gmail.com</a></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <center>
                <p>2022 © All Rights Reserved by <a target="_blank" style={{color:'#fff'}} href="https://www.uonbi.ac.ke/"> University of Nairobi</a></p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer END ==== */}
          <div className="to-top"><i className="fa fa-angle-up" /></div>
    </div>
  )
}

export default Footer