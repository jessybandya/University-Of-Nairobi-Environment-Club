import React from 'react'

function Test() {
  return (
    <div>
    {/* ======= Header ======= */}
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1>Logis</h1>
        </a>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="index.html" className="active">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
            <li><a className="get-a-quote" href="get-a-quote.html">Get a Quote</a></li>
          </ul>
        </nav>{/* .navbar */}
      </div>
    </header>{/* End Header */}
    {/* End Header */}
    {/* ======= Hero Section ======= */}
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row gy-4 d-flex justify-content-between">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2 data-aos="fade-up">Your Lightning Fast Delivery Partner</h2>
            <p data-aos="fade-up" data-aos-delay={100}>Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit</p>
            <form action="#" className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay={200}>
              <input type="text" className="form-control" placeholder="ZIP code or CitY" />
              <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <div className="row gy-4" data-aos="fade-up" data-aos-delay={400}>
              <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                  <p>Clients</p>
                </div>
              </div>{/* End Stats Item */}
              <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                  <p>Projects</p>
                </div>
              </div>{/* End Stats Item */}
              <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" />
                  <p>Support</p>
                </div>
              </div>{/* End Stats Item */}
              <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={1} className="purecounter" />
                  <p>Workers</p>
                </div>
              </div>{/* End Stats Item */}
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src="assets/img/hero-img.svg" className="img-fluid mb-3 mb-lg-0" alt="" />
          </div>
        </div>
      </div>
    </section>{/* End Hero Section */}
    <main id="main">
      {/* ======= Featured Services Section ======= */}
      <section id="featured-services" className="featured-services">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
              <div className="icon flex-shrink-0"><i className="fa-solid fa-cart-flatbed" /></div>
              <div>
                <h4 className="title">Lorem Ipsum</h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={100}>
              <div className="icon flex-shrink-0"><i className="fa-solid fa-truck" /></div>
              <div>
                <h4 className="title">Dolor Sitema</h4>
                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
              </div>
            </div>{/* End Service Item */}
            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={200}>
              <div className="icon flex-shrink-0"><i className="fa-solid fa-truck-ramp-box" /></div>
              <div>
                <h4 className="title">Sed ut perspiciatis</h4>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
              </div>
            </div>{/* End Service Item */}
          </div>
        </div>
      </section>{/* End Featured Services Section */}
      {/* ======= About Us Section ======= */}
      <section id="about" className="about pt-0">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn" />
            </div>
            <div className="col-lg-6 content order-last  order-lg-first">
              <h3>About Us</h3>
              <p>
                Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
              </p>
              <ul>
                <li data-aos="fade-up" data-aos-delay={100}>
                  <i className="bi bi-diagram-3" />
                  <div>
                    <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                    <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={200}>
                  <i className="bi bi-fullscreen-exit" />
                  <div>
                    <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                    <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={300}>
                  <i className="bi bi-broadcast" />
                  <div>
                    <h5>Voluptatem et qui exercitationem</h5>
                    <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>{/* End About Us Section */}
      {/* ======= Services Section ======= */}
      <section id="service" className="services pt-0">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <span>Our Services</span>
            <h2>Our Services</h2>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="card">
                <div className="card-img">
                  <img src="assets/img/storage-service.jpg" alt="" className="img-fluid" />
                </div>
                <h3><a href="service-details.html" className="stretched-link">Storage</a></h3>
                <p>Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaqueofficiis odit</p>
              </div>
            </div>{/* End Card Item */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="card">
                <div className="card-img">
                  <img src="assets/img/logistics-service.jpg" alt="" className="img-fluid" />
                </div>
                <h3><a href="service-details.html" className="stretched-link">Logistics</a></h3>
                <p>Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi</p>
              </div>
            </div>{/* End Card Item */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="card">
                <div className="card-img">
                  <img src="assets/img/cargo-service.jpg" alt="" className="img-fluid" />
                </div>
                <h3><a href="service-details.html" className="stretched-link">Cargo</a></h3>
                <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
              </div>
            </div>{/* End Card Item */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
              <div className="card">
                <div className="card-img">
                  <img src="assets/img/trucking-service.jpg" alt="" className="img-fluid" />
                </div>
                <h3><a href="service-details.html" className="stretched-link">Trucking</a></h3>
                <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
              </div>
            </div>{/* End Card Item */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
              <div className="card">
                <div className="card-img">
                  <img src="assets/img/packaging-service.jpg" alt="" className="img-fluid" />
                </div>
                <h3><a href="service-details.html" className="stretched-link">Packaging</a></h3>
                <p>Illo consequuntur quisquam delectus praesentium modi dignissimos facere vel cum onsequuntur maiores beatae consequatur magni voluptates</p>
              </div>
            </div>{/* End Card Item */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
              <div className="card">
                <div className="card-img">
                  <img src="assets/img/warehousing-service.jpg" alt="" className="img-fluid" />
                </div>
                <h3><a href="service-details.html" className="stretched-link">Warehousing</a></h3>
                <p>Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in vero. Ab modi quisquam aut nostrum unde et qui est non quo nulla</p>
              </div>
            </div>{/* End Card Item */}
          </div>
        </div>
      </section>{/* End Services Section */}
      {/* ======= Call To Action Section ======= */}
      <section id="call-to-action" className="call-to-action">
        <div className="container" data-aos="zoom-out">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3>Call To Action</h3>
              <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a className="cta-btn" href="#">Call To Action</a>
            </div>
          </div>
        </div></section>{/* End Call To Action Section */}
      {/* ======= Features Section ======= */}
      <section id="features" className="features">
        <div className="container">
          <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
            <div className="col-md-5">
              <img src="assets/img/features-1.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="bi bi-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="bi bi-check" /> Ullam est qui quos consequatur eos accusamus.</li>
              </ul>
            </div>
          </div>{/* Features Item */}
          <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
            <div className="col-md-5 order-1 order-md-2">
              <img src="assets/img/features-2.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 order-2 order-md-1">
              <h3>Corporis temporibus maiores provident</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>{/* Features Item */}
          <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
            <div className="col-md-5">
              <img src="assets/img/features-3.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7">
              <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
              <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
              <ul>
                <li><i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="bi bi-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="bi bi-check" /> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
              </ul>
            </div>
          </div>{/* Features Item */}
          <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
            <div className="col-md-5 order-1 order-md-2">
              <img src="assets/img/features-4.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 order-2 order-md-1">
              <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>{/* Features Item */}
        </div>
      </section>{/* End Features Section */}
      {/* ======= Pricing Section ======= */}
      <section id="pricing" className="pricing pt-0">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <span>Pricing</span>
            <h2>Pricing</h2>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="pricing-item">
                <h3>Free Plan</h3>
                <h4><sup>$</sup>0<span> / month</span></h4>
                <ul>
                  <li><i className="bi bi-check" /> Quam adipiscing vitae proin</li>
                  <li><i className="bi bi-check" /> Nec feugiat nisl pretium</li>
                  <li><i className="bi bi-check" /> Nulla at volutpat diam uteera</li>
                  <li className="na"><i className="bi bi-x" /> <span>Pharetra massa massa ultricies</span></li>
                  <li className="na"><i className="bi bi-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
                </ul>
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>{/* End Pricing Item */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="pricing-item featured">
                <h3>Business Plan</h3>
                <h4><sup>$</sup>29<span> / month</span></h4>
                <ul>
                  <li><i className="bi bi-check" /> Quam adipiscing vitae proin</li>
                  <li><i className="bi bi-check" /> Nec feugiat nisl pretium</li>
                  <li><i className="bi bi-check" /> Nulla at volutpat diam uteera</li>
                  <li><i className="bi bi-check" /> Pharetra massa massa ultricies</li>
                  <li><i className="bi bi-check" /> Massa ultricies mi quis hendrerit</li>
                </ul>
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>{/* End Pricing Item */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="pricing-item">
                <h3>Developer Plan</h3>
                <h4><sup>$</sup>49<span> / month</span></h4>
                <ul>
                  <li><i className="bi bi-check" /> Quam adipiscing vitae proin</li>
                  <li><i className="bi bi-check" /> Nec feugiat nisl pretium</li>
                  <li><i className="bi bi-check" /> Nulla at volutpat diam uteera</li>
                  <li><i className="bi bi-check" /> Pharetra massa massa ultricies</li>
                  <li><i className="bi bi-check" /> Massa ultricies mi quis hendrerit</li>
                </ul>
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>{/* End Pricing Item */}
          </div>
        </div>
      </section>{/* End Pricing Section */}
      {/* ======= Testimonials Section ======= */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="slides-1 swiper" data-aos="fade-up">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>{/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>{/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>{/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>{/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>{/* End testimonial item */}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>{/* End Testimonials Section */}
      {/* ======= Frequently Asked Questions Section ======= */}
      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <span>Frequently Asked Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={200}>
            <div className="col-lg-10">
              <div className="accordion accordion-flush" id="faqlist">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                      <i className="bi bi-question-circle question-icon" />
                      Non consectetur a erat nam at lectus urna duis?
                    </button>
                  </h3>
                  <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </div>
                  </div>
                </div>{/* # Faq item*/}
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                      <i className="bi bi-question-circle question-icon" />
                      Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                    </button>
                  </h3>
                  <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </div>
                  </div>
                </div>{/* # Faq item*/}
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                      <i className="bi bi-question-circle question-icon" />
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                    </button>
                  </h3>
                  <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </div>
                  </div>
                </div>{/* # Faq item*/}
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                      <i className="bi bi-question-circle question-icon" />
                      Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                    </button>
                  </h3>
                  <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      <i className="bi bi-question-circle question-icon" />
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </div>
                  </div>
                </div>{/* # Faq item*/}
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                      <i className="bi bi-question-circle question-icon" />
                      Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                    </button>
                  </h3>
                  <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                    </div>
                  </div>
                </div>{/* # Faq item*/}
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Frequently Asked Questions Section */}
    </main>{/* End #main */}
    {/* ======= Footer ======= */}
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <span>Logis</span>
            </a>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links d-flex mt-4">
              <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
              <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
              <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
            </div>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Product Management</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Graphic Design</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br />
              New York, NY 535022<br />
              United States <br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="copyright">
          © Copyright <strong><span>Logis</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/ */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>{/* End Footer */}
    {/* End Footer */}
    <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
    <div id="preloader" />
    {/* Vendor JS Files */}
    {/* Template Main JS File */}
  </div>
  )
}

export default Test