import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/HomeHeader'

function Events() {
  return (
    <div id=''>
     <div className="">
        <div id="loading-icon-bx" />
        <Header />
        {/* Content */}
        <div className="page-content bg-white">
          {/* inner page banner */}
          <div className="page-banner ovbl-dark" style={{backgroundImage: 'url(assets/images/back-green.jpg)'}}>
            <div className="container">
              <div className="page-banner-entry">
                <h1 className="text-white">Events</h1>
              </div>
            </div>
          </div>
          {/* Breadcrumb row */}
          <div className="breadcrumb-row">
            <div className="container">
              <ul className="list-inline">
                <li><a href="#">Home</a></li>
                <li>Events</li>
              </ul>
            </div>
          </div>
          {/* Breadcrumb row END */}
          {/* contact area */}
          <div className="content-block">
            {/* Portfolio  */}
            <div className="section-area section-sp1 gallery-bx">
              <div className="container">
                <div className="feature-filters clearfix center m-b40">
                  <ul className="filters" data-toggle="buttons">
                    <li data-filter className="btn active">
                      <input type="radio" />
                      <a href="#"><span>All</span></a> 
                    </li>
                    <li data-filter="happening" className="btn">
                      <input type="radio" />
                      <a href="#"><span>Happening</span></a> 
                    </li>
                    <li data-filter="upcoming" className="btn">
                      <input type="radio" />
                      <a href="#"><span>Upcoming</span></a> 
                    </li>
                    <li data-filter="expired" className="btn">
                      <input type="radio" />
                      <a href="#"><span>Expired</span></a> 
                    </li>
                  </ul>
                </div>
                <div className="clearfix">
                  <ul id="masonry" className="ttr-gallery-listing magnific-image row">
                    <li className="action-card col-lg-6 col-md-6 col-sm-12 happening">
                      <div className="event-bx m-b30">
                        <div className="action-box">
                          <img src="assets/images/event/pic1.jpg" alt="" />
                        </div>
                        <div className="info-bx d-flex">
                          <div>
                            <div className="event-time">
                              <div className="event-date">29</div>
                              <div className="event-month">October</div>
                            </div>
                          </div>
                          <div className="event-info">
                            <h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
                            <ul className="media-post">
                              <li><a href="#"><i className="fa fa-clock-o" /> 7:00am 8:00am</a></li>
                              <li><a href="#"><i className="fa fa-map-marker" /> Berlin, Germany</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="action-card col-lg-6 col-md-6 col-sm-12 upcoming">
                      <div className="event-bx m-b30">
                        <div className="action-box">
                          <img src="assets/images/event/pic2.jpg" alt="" />
                        </div>
                        <div className="info-bx d-flex">
                          <div>
                            <div className="event-time">
                              <div className="event-date">29</div>
                              <div className="event-month">October</div>
                            </div>
                          </div>
                          <div className="event-info">
                            <h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
                            <ul className="media-post">
                              <li><a href="#"><i className="fa fa-clock-o" /> 7:00am 8:00am</a></li>
                              <li><a href="#"><i className="fa fa-map-marker" /> Berlin, Germany</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="action-card col-lg-6 col-md-6 col-sm-12  upcoming">
                      <div className="event-bx m-b30">
                        <div className="action-box">
                          <img src="assets/images/event/pic3.jpg" alt="" />
                        </div>
                        <div className="info-bx d-flex">
                          <div>
                            <div className="event-time">
                              <div className="event-date">29</div>
                              <div className="event-month">October</div>
                            </div>
                          </div>
                          <div className="event-info">
                            <h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
                            <ul className="media-post">
                              <li><a href="#"><i className="fa fa-clock-o" /> 7:00am 8:00am</a></li>
                              <li><a href="#"><i className="fa fa-map-marker" /> Berlin, Germany</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="action-card col-lg-6 col-md-6 col-sm-12 happening">
                      <div className="event-bx m-b30">
                        <div className="action-box">
                          <img src="assets/images/event/pic4.jpg" alt="" />
                        </div>
                        <div className="info-bx d-flex">
                          <div>
                            <div className="event-time">
                              <div className="event-date">29</div>
                              <div className="event-month">October</div>
                            </div>
                          </div>
                          <div className="event-info">
                            <h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
                            <ul className="media-post">
                              <li><a href="#"><i className="fa fa-clock-o" /> 7:00am 8:00am</a></li>
                              <li><a href="#"><i className="fa fa-map-marker" /> Berlin, Germany</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="action-card col-lg-6 col-md-6 col-sm-12 expired">
                      <div className="event-bx m-b30">
                        <div className="action-box">
                          <img src="assets/images/event/pic2.jpg" alt="" />
                        </div>
                        <div className="info-bx d-flex">
                          <div>
                            <div className="event-time">
                              <div className="event-date">29</div>
                              <div className="event-month">October</div>
                            </div>
                          </div>
                          <div className="event-info">
                            <h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
                            <ul className="media-post">
                              <li><a href="#"><i className="fa fa-clock-o" /> 7:00am 8:00am</a></li>
                              <li><a href="#"><i className="fa fa-map-marker" /> Berlin, Germany</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="action-card col-lg-6 col-md-6 col-sm-12 happening">
                      <div className="event-bx m-b30">
                        <div className="action-box">
                          <img src="assets/images/event/pic1.jpg" alt="" />
                        </div>
                        <div className="info-bx d-flex">
                          <div>
                            <div className="event-time">
                              <div className="event-date">29</div>
                              <div className="event-month">October</div>
                            </div>
                          </div>
                          <div className="event-info">
                            <h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
                            <ul className="media-post">
                              <li><a href="#"><i className="fa fa-clock-o" /> 7:00am 8:00am</a></li>
                              <li><a href="#"><i className="fa fa-map-marker" /> Berlin, Germany</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* contact area END */}
        </div>
        {/* Content END*/}
        {/* Footer ==== */}
        <Footer />
        {/* Footer END ==== */}
      </div>
    </div>
  )
}

export default Events