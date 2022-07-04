import React from 'react'

function HomeHeader() {
  return (
    <div className='header rs-nav header-transparent'>
                <div id="header-top" className="header-container clearfix ">
            <div  className="container">
              <div id="header-top-inside" className="clearfix">
                <div className="row">
                  <div className="col-md-8">
                    <div id="header-top-left" className="clearfix">
                      <div className="header-top-area">
                        <div className="region region-header-top-first">
                          <div id="block-headertop" className="block block-superfish block-superfishheader-top">
                            <div className="content">
                              {/* <ul id="superfish-header-top" className="menu sf-menu sf-header-top sf-horizontal sf-style-none">
                                <li id="header-top-menu-link-content69313134-c8b2-41dc-b900-b998657e09f1" className="active-trail sf-depth-1 sf-no-children">
                                <a href="index.html" title="Home" className="is-active sf-depth-1">Home</a>
                                </li>
                                <li id="header-top-menu-link-content3b4c896c-739c-4453-a026-380c00a91006" className="sf-depth-1 menuparent">
                                <a href="student-resources.html" title="Study" className="sf-depth-1 menuparent">Students</a>
                                <ul>
                                <li id="header-top-views-viewviewsstudents-projectspage-1" className="sf-depth-2 sf-no-children">
                                <a href="students-projects.html" className="sf-depth-2">Students Projects</a>
                                </li>
                                <li id="header-top-menu-link-content23368c59-0b6a-4aa6-b2bc-a322e46a78e4" className="sf-depth-2 sf-no-children">
                                <a href="basic-page/accomodation.html" className="sf-depth-2">Accomodation</a>
                                </li>
                                <li id="header-top-menu-link-content3d3a0c78-235e-4535-8470-7b6b6dd80b3d" className="sf-depth-2 sf-no-children">
                                <a href="basic-page/career-services.html" className="sf-depth-2">Career Services</a>
                                </li>
                                <li id="header-top-menu-link-contentbff4ba7a-2eda-4153-94b6-cc07a8ef01e3" className="sf-depth-2 sf-no-children">
                                <a href="basic-page/financial-aid-services-and-scholarships.html" className="sf-depth-2">Financial Aid Services and Scholarships</a>
                                </li>
                                <li id="header-top-menu-link-content7a91454f-1f25-46a6-b3b4-621da4d19409" className="sf-depth-2 sf-no-children">
                                <a href="basic-page/guiding-and-counselling.html" className="sf-depth-2">Guiding and Counselling</a>
                                </li>
                                <li id="header-top-menu-link-content49ae82f5-b308-4e63-b885-9d91a970d925" className="sf-depth-2 sf-no-children">
                                <a href="https://www.helb.co.ke/" title="HELB" className="sf-depth-2 sf-external">HELB</a>
                                </li>
                                <li id="header-top-menu-link-contentc782fc90-2ece-4d86-8895-13cf033f8b92" className="sf-depth-2 sf-no-children">
                                <a href="basic-page/health-services.html" className="sf-depth-2">Health Services</a>
                                </li>
                                <li id="header-top-menu-link-content3d62a0be-996e-4197-9938-4092f69d0ebe" className="sf-depth-2 sf-no-children">
                                <a href="basic-page/international-students.html" className="sf-depth-2">International Students</a>
                                </li>
                                <li id="header-top-menu-link-content04ecba37-b539-4046-bf92-27cbbc666694" className="sf-depth-2 sf-no-children">
                                <a href="basic-page/online-learning.html" className="sf-depth-2">Online Learning
                                </a>
                                </li>
                                <li id="header-top-menu-link-content8c8dbfa9-4ad3-458d-90f9-b334fd78c647" className="sf-depth-2 sf-no-children">
                                <a href="basic-page/pwd-services.html" className="sf-depth-2">PWD Services</a>
                                </li>
                                <li id="header-top-menu-link-contenta4f29fcb-73ee-4b56-998d-13b1cf37842f" className="sf-depth-2 sf-no-children">
                                <a href="student-organizations.html" className="sf-depth-2">Student Organizations</a>
                                </li>
                                </ul>
                                </li>
                                <li id="header-top-menu-link-contentc0dfa4ae-6dfb-4a08-be5d-9307c89e81b1" className="sf-depth-1 menuparent"><a href="staff.html" title="Staff" className="sf-depth-1 menuparent">Staff</a>
                                <ul>
                                  <li id="header-top-menu-link-content479ab4cf-9893-496b-8b39-57adc9e0d70d" className="sf-depth-2 sf-no-children">
                                    <a href="academic-staff.html" title="Academic Staff" className="sf-depth-2">Academic Staff</a>
                                    </li>
                                    <li id="header-top-menu-link-contentfe30fdc8-1b4a-4891-a83e-62001eaa673a" className="sf-depth-2 sf-no-children">
                                      <a href="technical-staff.html" title="Technical Staff" className="sf-depth-2">Technical Staff</a>
                                      </li>
                                      <li id="header-top-menu-link-content53bdd246-9fdb-45c0-a3b9-0bce78602fcd" className="sf-depth-2 sf-no-children">
                                        <a href="administrative-staff.html" title="Administrative Staff" className="sf-depth-2">Administrative Staff</a>
                                        </li>
                                        <li id="header-top-menu-link-content2778868b-0518-48f3-a23a-2e0d2b193d46" className="sf-depth-2 sf-no-children">
                                          <a href="support-staff.html" title="Support Staff" className="sf-depth-2">Support Staff</a>
                                          </li>
                                          </ul>
                                          </li>
                                          <li id="header-top-menu-link-contentd32f0083-f201-4bb0-9a5d-6ed95c9921fa" className="sf-depth-1 menuparent">
                                            <a href="alumni.html" className="sf-depth-1 menuparent">Alumni</a>
                                            <ul>
                                              <li id="header-top-menu-link-content1df143c8-ed20-469f-8be8-29ac73ca1d50" className="sf-depth-2 sf-no-children">
                                                <a href="https://alumni.uonbi.ac.ke/membership-form-2/" className="sf-depth-2 sf-external">Register as Alumni</a>
                                                </li>
                                                </ul>
                                                </li>
                                                <li id="header-top-menu-link-content7cdf2e91-851b-41fc-ada9-0cc4e26f4c61" className="sf-depth-1 menuparent">
                                                  <a href="resources.html" className="sf-depth-1 menuparent">Resources</a>
                                                  <ul>
                                                    <li id="header-top-menu-link-content22bbaca2-ddc4-4877-b06e-13b83a763a13" className="sf-depth-2 sf-no-children">
                                                      <a href="basic-page/civil-engineering-facilities.html" className="sf-depth-2">Civil Engineering Facilities</a>
                                                      </li>
                                                      <li id="header-top-menu-link-contentf04fa087-af38-456f-a616-fef8cea375c7" className="sf-depth-2 sf-no-children">
                                                        <a href="facility-equipment.html" className="sf-depth-2">Facility Equipment</a>
                                                        </li>
                                                        <li id="header-top-menu-link-content20d53d0b-a237-4e72-8034-5a1e8aae784a" className="sf-depth-2 sf-no-children">
                                                          <a href="library.html" className="sf-depth-2">Library</a>
                                                          </li>
                                                          <li id="header-top-menu-link-content19d57b1c-112e-4890-9bb0-bbabc7202e4c" className="sf-depth-2 sf-no-children">
                                                            <a href="thesis-submission.html" className="sf-depth-2">Thesis Submission</a>
                                                            </li>
                                                            </ul>
                                                  </li>
                              </ul> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div id="header-top-right" className="clearfix">
                      <div className="header-top-area">
                        <div className="region region-header-top-second">
                          <div className="search-block-form block block-search container-inline" data-drupal-selector="search-block-form" id="block-scholarly-search" role="search">
                            <div className="content container-inline">
                              <form  className="search-form search-block-form">
                                <div className="js-form-item form-item js-form-type-search form-type-search js-form-item-keys form-item-keys form-no-label">
                                  <label htmlFor="edit-keys" className="visually-hidden">Search</label>
                                  <input title="Enter the terms you wish to search for." placeHolder="Enter terms then hit Search..."  type="search"  className="form-search" />
                                </div>
                                <div data-drupal-selector="edit-actions" className="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input className="search-form__submit button js-form-submit form-submit" data-drupal-selector="edit-submit" type="submit" id="edit-submit" defaultValue="Search" />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header  id="header" role="banner" className="header-container clearfix">
            <div className="container">
              <div id="header-inside" className="clearfix">
                <div className="row">
                  <div className="col-md-4">
                    <div id="header-inside-left" className="clearfix">
                      <div className="region region-header">
                        <div id="block-scholarly-branding" className="clearfix site-branding block block-system block-system-branding-block">
                          <div className="logo">
                            <a href="/" title="Home" rel="home" className="site-branding__logo">
                              <img src="sites/civil.uonbi.ac.ke/files/best-logo59_0.png" alt="Home" />
                            </a>
                          </div>
                          <div className="site-name site-branding__name">
                            <a href="/"  title="Home" rel="home">ENVIRONMENTAL CLUB</a>
                          </div>
                          <div className="site-slogan site-branding__slogan">UNIVERSITY OF NAIROBI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div id="header-inside-right" className="clearfix">
                      <div id="main-navigation" className="clearfix">
                        <nav role="navigation">
                          <div className="region region-navigation">
                            <div id="block-mainnavigation-2" className="block block-superfish block-superfishmain">
                              <div className="content">
                                <ul id="superfish-main" className="menu sf-menu sf-main sf-horizontal sf-style-none">


                                  <li id="main-menu-link-content6488ddf2-9760-46e4-b1f7-cb662d241199" className="sf-depth-1 menuparent">
                                  <a style={{cursor:'pointer'}} className="sf-depth-1 menuparent">About</a>
                                  <ul>
                                  <li id="main-menu-link-content6f75c0c6-ba70-4649-a49f-115c6d8e0201" className="sf-depth-2 sf-no-children">
                                  <a href="#" style={{color:"#fff"}} className="sf-depth-2">Our Vision</a>
                                  </li>
                                  <li id="main-menu-link-content950fbc7d-245e-4233-80d1-4908049b836e" className="sf-depth-2 sf-no-children">
                                  <a href="#" style={{color:"#fff"}} className="sf-depth-2">FAQs</a>
                                  </li>
                                  <li id="main-menu-link-content0a6e6573-c9ef-47e7-b865-9dae2d04441b" className="sf-depth-2 sf-no-children">
                                  <a href="#" style={{color:"#fff"}} className="sf-depth-2">Message from the Chair</a>
                                  </li>

                                  </ul>
                                  </li>
                                  <li id="main-menu-link-content4736c30b-bfca-4f45-8637-55c5f3a8e8ff" className="sf-depth-1 menuparent">
                                  <a style={{cursor:'pointer'}} title="Programmes" className="sf-depth-1">Join Us</a>
                                  {/* <ul>
                                  <li id="main-menu-link-content21e2d18e-b717-4b04-a1c3-68e6ec9a53ab" className="sf-depth-2 sf-no-children">
                                  <a href="#" style={{color:"#fff"}} className="sf-depth-2">Programm1</a>
                                  </li>
                                  <li id="main-menu-link-contentf0c86674-7307-4485-9650-51a155b348f7" className="sf-depth-2 sf-no-children">
                                  <a href="#" style={{color:"#fff"}} className="sf-depth-2">Programm2</a>
                                  </li>
                                  <li id="main-menu-link-content5f4cb585-36b6-4291-97d8-30512290c6d8" className="sf-depth-2 sf-no-children">
                                  <a href="#" style={{color:"#fff"}} className="sf-depth-2">Programm3</a>
                                  </li>
                                  </ul> */}
                                  </li>
                                  <li id="main-menu-link-content784c95b2-9d72-4bbd-a918-f0bb1df66a70" className="sf-depth-1 sf-no-children">
                                              <a style={{cursor:'pointer'}} href="/events" className="sf-depth-1">Events</a>
                                              </li>
                                              <li id="main-menu-link-content784c95b2-9d72-4bbd-a918-f0bb1df66a70" className="sf-depth-1 sf-no-children">
                                              <a style={{cursor:'pointer'}} className="sf-depth-1">Projects</a>
                                              </li>
                                  <li id="main-menu-link-content84672266-e2a4-41b4-8245-9b41eb829c92" className="sf-depth-1 menuparent">
                                  <a  style={{cursor:'pointer'}} title="News" className="sf-depth-1 menuparent">News</a>
                                  <ul>
                                  <li id="main-menu-link-content6d81601e-8ec3-4d16-bdb9-168e3513b04f" className="sf-depth-2 sf-no-children">
                                  <a href="#" style={{color:"#fff"}} title="Latest News" className="sf-depth-2">Latest News</a>
                                  </li>
                                  </ul>
                                  </li>
                                  {/* <li id="main-menu-link-contente3b0345c-ff88-4249-8b00-a48a2bbb533a" className="sf-depth-1 menuparent">
                                  <a style={{cursor:'pointer'}} title="Partnerships" className="sf-depth-1 menuparent">Research</a>
                                  <ul>
                                    <li id="main-menu-link-contentd81bfa7a-48b2-49e5-b763-f0928072afd2" className="sf-depth-2 sf-no-children">
                                      <a href="journals.html" className="sf-depth-2">Journals</a></li>
                                      <li id="main-menu-link-contentb0d952b3-d964-4e5e-a126-54ebe9ed4b5d" className="sf-depth-2 sf-no-children">
                                        <a href="#" style={{color:"#fff"}} className="sf-depth-2">Research Project</a>
                                        </li>
                                        <li id="main-menu-link-contenta58c315f-8eda-4854-b899-438015ac52a6" className="sf-depth-2 sf-no-children">
                                          <a href="collaborator.html" className="sf-depth-2">Collaborators</a>
                                          </li>
                                          <li id="main-menu-link-content8a77c998-26bb-488f-a93e-16d9cf341a9d" className="sf-depth-2 sf-no-children">
                                            <a href="seminars-and-conferences.html" className="sf-depth-2">Seminars and conferences</a>
                                            </li>
                                  </ul>
                                            </li> */}

                                            <li id="main-menu-link-content784c95b2-9d72-4bbd-a918-f0bb1df66a70" className="sf-depth-1 sf-no-children">
                                              <a style={{cursor:'pointer'}} className="sf-depth-1">Gallery</a>
                                              </li>

                                            <li id="main-menu-link-content784c95b2-9d72-4bbd-a918-f0bb1df66a70" className="sf-depth-1 sf-no-children">
                                              <a style={{cursor:'pointer'}} className="sf-depth-1">Contact Us</a>
                                              </li>

                                </ul>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
    </div>
  )
}

export default HomeHeader