import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const Home = () => {
  const carouselItems = [
    {
      id: "b693664",
      href: "https://envato.com/",
      src: "https://prombs.com/wp-content/uploads/2024/10/01-3.webp",
      alt: "01-3.webp",
    },
    {
      id: "3d80868",
      href: "https://magento.com/",
      src: "https://prombs.com/wp-content/uploads/2024/10/02-2-1.webp",
      alt: "02-2.webp",
    },
    {
      id: "4472222",
      href: "https://www.pingdom.com/",
      src: "https://prombs.com/wp-content/uploads/2024/10/03-1.webp",
      alt: "03-1.webp",
    },
    {
      id: "47fc6fc",
      href: "https://www.awwwards.com/",
      src: "https://prombs.com/wp-content/uploads/2024/10/04.webp",
      alt: "04.webp",
    },
    {
      id: "e2ce56b",
      href: "https://colorlib.com/",
      src: "https://prombs.com/wp-content/uploads/2024/10/05-1.webp",
      alt: "05-1.webp",
    },
    {
      id: "1783a04",
      src: "https://prombs.com/wp-content/uploads/2024/10/06-1.webp",
      alt: "06-1.webp",
    },
    {
      id: "cc3c283",
      src: "https://prombs.com/wp-content/uploads/2024/10/07.webp",
      alt: "07.webp",
    },
    {
      id: "d7f4ddc",
      src: "https://prombs.com/wp-content/uploads/2024/10/08.webp",
      alt: "08.webp",
    },
    {
      id: "4896038",
      src: "https://prombs.com/wp-content/uploads/2024/10/09.webp",
      alt: "09.webp",
    },
    {
      id: "2a19572",
      src: "https://prombs.com/wp-content/uploads/2024/10/11.webp",
      alt: "11.webp",
    },
  ];
  const swiperSettings = {
    navigation: false,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
    },
    loop: true,
    speed: 500,
    slidesPerView: 9,
    breakpoints: {
      0: { slidesPerView: 3 }, // Mobile
      768: { slidesPerView: 3 }, // Tablet
      1024: { slidesPerView: 9 }, // Desktop
    },
  };
  return (
    <>
      <section id="hero" class="hero section dark-background">
        <div class="container-fluid p-0">
          <div class="hero-wrapper">
            <div class="hero-image">
              <img
                src="assets/img/health/showcase-1.webp"
                alt="Advanced Healthcare"
                class="img-fluid"
              />
            </div>

            <div class="hero-content">
              <div class="container">
                <div class="row">
                  <div
                    class="col-lg-7 col-md-10"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <div class="content-box">
                      <span
                        class="badge-accent"
                        data-aos="fade-up"
                        data-aos-delay="150"
                      >
                        Leading Healthcare Billing
                      </span>
                      <h1 data-aos="fade-up" data-aos-delay="200">
                        Advanced Medical Billing Care for Your Facility
                      </h1>
                      <p data-aos="fade-up" data-aos-delay="250">
                        Billing Vista delivers seamless solutions to safeguard
                        revenue. maximize reimbursements, minimize errors and
                        faster payments.
                      </p>

                      <div
                        class="cta-group"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <Link to="/appointment">
                          <a href="appointment.html" class="btn btn-primary">
                            Book Appointment
                          </a>
                        </Link>

                        <NavLink to="medical-billing">
                          {" "}
                          <a href="services.html" class="btn btn-outline">
                            Explore Services
                          </a>
                        </NavLink>
                      </div>

                      <div
                        class="info-badges"
                        data-aos="fade-up"
                        data-aos-delay="350"
                      >
                        <div class="badge-item">
                          <i class="bi bi-telephone-fill"></i>
                          <div class="badge-content">
                            <span>Contact</span>
                            <strong>+1 (253) 545-7483</strong>
                          </div>
                        </div>
                        <div class="badge-item">
                          <i class="bi bi-clock-fill"></i>
                          <div class="badge-content">
                            <span>Working Hours</span>
                            <strong>Mon-Fri: 7AM-4PM</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="features-wrapper">
                  <div class="row gy-4">
                    <div class="col-lg-4">
                      <div
                        class="feature-item"
                        data-aos="fade-up"
                        data-aos-delay="450"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div class="feature-icon">
                          <i class="bi bi-heart-pulse-fill"></i>
                        </div>
                        <div class="feature-text">
                          <h3>Medical Billing and Coding Services</h3>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p> */}
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <div
                        class="feature-item "
                        style={{ display: "flex", alignItems: "center" }}
                        data-aos="fade-up"
                        data-aos-delay="500"
                      >
                        <div class="feature-icon">
                          <i class="bi bi-lungs-fill"></i>
                        </div>
                        <div class="feature-text">
                          <h3>Physician Credentialing Services</h3>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p> */}
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <div
                        class="feature-item"
                        data-aos="fade-up"
                        data-aos-delay="550"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div class="feature-icon">
                          <i class="bi bi-capsule"></i>
                        </div>
                        <div class="feature-text">
                          <h3>
                            Contact Center and Patient Scheduling Services
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="home-about" class="home-about section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-5 align-items-center">
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <div class="about-image">
                <img
                  src="assets/img/health/facilities-1.webp"
                  alt="Modern Healthcare Facility"
                  class="img-fluid rounded-3 mb-4"
                />
                <div class="experience-badge">
                  <span class="years">6+</span>
                  <span class="text">Years of Excellence</span>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div class="about-content">
                <h2>Committed to Exceptional RCM Support</h2>
                <p class="lead">
                  Billing Vista is a leading Medical Billing Company providing
                  End-to-End Billing, Coding, and RCM support for clinics,
                  practices, and hospitals
                </p>

                <ul class="custom-icon-list">
                  <li class="custom-icon-item">
                    <span class="custom-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        width="32"
                        height="32"
                        fill="none"
                        stroke="#00a8c8"
                        stroke-width="2"
                      >
                        <path
                          d="M12 32h16l-6 12h12l-8 16 6-12H20l6-16H12z"
                          fill="#00e676"
                        />
                        <circle cx="52" cy="12" r="6" fill="#00e676" />
                      </svg>
                    </span>
                    <span class="custom-text">99% Claim Success</span>
                  </li>

                  <li class="custom-icon-item">
                    <span class="custom-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        width="32"
                        height="32"
                        fill="none"
                        stroke="#00a8c8"
                        stroke-width="2"
                      >
                        <path d="M8 56V8m0 48h48" stroke="#00a8c8" />
                        <path
                          d="M16 40l8-12 8 8 12-16 8 12"
                          stroke="#ff4081"
                          stroke-width="3"
                          fill="none"
                        />
                        <circle cx="16" cy="40" r="3" fill="#00e676" />
                        <circle cx="24" cy="28" r="3" fill="#00e676" />
                        <circle cx="32" cy="36" r="3" fill="#00e676" />
                        <circle cx="44" cy="20" r="3" fill="#00e676" />
                      </svg>
                    </span>
                    <span class="custom-text">24/7 Support Team</span>
                  </li>

                  <li class="custom-icon-item">
                    <span class="custom-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        width="32"
                        height="32"
                        fill="none"
                        stroke="#00a8c8"
                        stroke-width="2"
                      >
                        <circle cx="32" cy="32" r="10" fill="#00e676" />
                        <path d="M32 12v6M32 46v6M12 32h6M46 32h6M19 19l4 4M41 41l4 4M19 45l4-4M41 23l4-4" />
                      </svg>
                    </span>
                    <span class="custom-text">Future-Ready Solutions</span>
                  </li>

                  <li class="custom-icon-item">
                    <span class="custom-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        width="32"
                        height="32"
                        fill="none"
                        stroke="#00a8c8"
                        stroke-width="2"
                      >
                        <path d="M32 6L2 58h60L32 6z" fill="#00e676" />
                        <line
                          x1="32"
                          y1="22"
                          x2="32"
                          y2="38"
                          stroke="#fff"
                          stroke-width="4"
                        />
                        <circle cx="32" cy="46" r="2" fill="#fff" />
                      </svg>
                    </span>
                    <span class="custom-text">Zero Compliance Errors</span>
                  </li>
                </ul>

                {/* <div class="row g-4 mt-4">
                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div class="feature-item">
                      <div class="icon">
                        <i class="bi bi-heart-pulse"></i>
                      </div>
                      <h4>Compassionate Care</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div class="feature-item">
                      <div class="icon">
                        <i class="bi bi-star"></i>
                      </div>
                      <h4>Medical Excellence</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div> */}

                <div class="cta-wrapper mt-4">
                  <a href="about.html" class="btn btn-primary">
                    Learn More About Us
                  </a>
                  <a href="#" class="btn btn-outline">
                    Meet Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="row mt-5 pt-4 certifications-row"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div class="col-12 text-center mb-4">
              <h4 class="certification-title">
                Top listed EHR being operated by us.
              </h4>
            </div>
            {/* <div class="col-12">
              <div class="certifications">
                <div
                  class="certification-item"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                >
                  <img
                    src="assets/img/clients/clients-1.webp"
                    alt="Certification"
                  />
                </div>
                <div
                  class="certification-item"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  <img
                    src="assets/img/clients/clients-2.webp"
                    alt="Certification"
                  />
                </div>
                <div
                  class="certification-item"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                >
                  <img
                    src="assets/img/clients/clients-3.webp"
                    alt="Certification"
                  />
                </div>
                <div
                  class="certification-item"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                >
                  <img
                    src="assets/img/clients/clients-4.webp"
                    alt="Certification"
                  />
                </div>
              </div>
            </div> */}
            <div className="container my-5">
              <div className="brand-logo-carousel-wrapper">
                <Swiper
                  modules={[Autoplay]}
                  {...swiperSettings}
                  className="brand-logo-carousel swiper"
                >
                  {carouselItems.map((item, index) => (
                    <SwiperSlide
                      key={item.id}
                      className="swiper-slide"
                      style={{ width: "123px" }}
                      role="group"
                      aria-label={`${index + 1} / ${carouselItems.length}`}
                    >
                      <div className="d-flex justify-content-center">
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-block"
                          >
                            <img
                              src={item.src}
                              alt={item.alt}
                              width="115"
                              height="64"
                              loading="lazy"
                              className="img-fluid"
                            />
                          </a>
                        ) : (
                          <img
                            src={item.src}
                            alt={item.alt}
                            width="115"
                            height="64"
                            loading="lazy"
                            className="img-fluid"
                          />
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="featured-departments" class="featured-departments section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Featured Departments</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="department-card">
                <div class="department-image">
                  <img
                    src="assets/img/health/cardiology-3.webp"
                    alt="Cardiology Department"
                    class="img-fluid"
                  />
                </div>
                <div class="department-content">
                  <div class="department-icon">
                    <i class="fas fa-heartbeat"></i>
                  </div>
                  <h3>Cardiology</h3>
                  <p>
                    Comprehensive cardiovascular care with advanced diagnostic
                    techniques and treatment options for heart conditions,
                    ensuring optimal cardiac health for all patients.
                  </p>
                  <a href="department-details.html" class="btn-learn-more">
                    <span>Learn More</span>
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="department-card">
                <div class="department-image">
                  <img
                    src="assets/img/health/neurology-2.webp"
                    alt="Neurology Department"
                    class="img-fluid"
                  />
                </div>
                <div class="department-content">
                  <div class="department-icon">
                    <i class="fas fa-brain"></i>
                  </div>
                  <h3>Neurology</h3>
                  <p>
                    Expert neurological care specializing in brain and nervous
                    system disorders, providing cutting-edge treatments and
                    compassionate support for neurological conditions.
                  </p>
                  <a href="department-details.html" class="btn-learn-more">
                    <span>Learn More</span>
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="department-card">
                <div class="department-image">
                  <img
                    src="assets/img/health/orthopedics-4.webp"
                    alt="Orthopedics Department"
                    class="img-fluid"
                  />
                </div>
                <div class="department-content">
                  <div class="department-icon">
                    <i class="fas fa-bone"></i>
                  </div>
                  <h3>Orthopedics</h3>
                  <p>
                    Advanced musculoskeletal care focusing on bones, joints, and
                    muscles with innovative surgical and non-surgical treatment
                    approaches for mobility restoration.
                  </p>
                  <a href="department-details.html" class="btn-learn-more">
                    <span>Learn More</span>
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="department-card">
                <div class="department-image">
                  <img
                    src="assets/img/health/pediatrics-3.webp"
                    alt="Pediatrics Department"
                    class="img-fluid"
                  />
                </div>
                <div class="department-content">
                  <div class="department-icon">
                    <i class="fas fa-baby"></i>
                  </div>
                  <h3>Pediatrics</h3>
                  <p>
                    Specialized healthcare for children from infancy through
                    adolescence, offering comprehensive medical care in a
                    child-friendly environment with experienced pediatric
                    specialists.
                  </p>
                  <a href="department-details.html" class="btn-learn-more">
                    <span>Learn More</span>
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="department-card">
                <div class="department-image">
                  <img
                    src="assets/img/health/oncology-4.webp"
                    alt="Oncology Department"
                    class="img-fluid"
                  />
                </div>
                <div class="department-content">
                  <div class="department-icon">
                    <i class="fas fa-shield-alt"></i>
                  </div>
                  <h3>Oncology</h3>
                  <p>
                    Comprehensive cancer care with multidisciplinary approach,
                    offering advanced treatment options, clinical trials, and
                    compassionate support throughout the cancer journey.
                  </p>
                  <a href="department-details.html" class="btn-learn-more">
                    <span>Learn More</span>
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="department-card">
                <div class="department-image">
                  <img
                    src="assets/img/health/emergency-2.webp"
                    alt="Emergency Department"
                    class="img-fluid"
                  />
                </div>
                <div class="department-content">
                  <div class="department-icon">
                    <i class="fas fa-ambulance"></i>
                  </div>
                  <h3>Emergency Care</h3>
                  <p>
                    Round-the-clock emergency medical services with rapid
                    response capabilities, state-of-the-art equipment, and
                    experienced emergency physicians for critical care.
                  </p>
                  <a href="department-details.html" class="btn-learn-more">
                    <span>Learn More</span>
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        id="featured-services"
        class="featured-services section light-background"
      >
        <div class="container section-title" data-aos="fade-up">
          <h2>Featured Services</h2>
          {/* <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p> */}
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div class="service-card">
                <div class="service-icon">
                  <i class="fas fa-heartbeat"></i>
                </div>
                <div class="service-content">
                  <h3>Medical billing and Coding</h3>
                  <p>
                    We help healthcare providers take control of their revenue
                    cycle with expert medical billing and coding services. From
                    accurate claim submission to recovering aged receivables, we
                    handle every step so you can focus on patient care.
                  </p>
                  <ul class="service-features">
                    <li>
                      <i class="fas fa-check-circle"></i>Boost revenue by up to
                      30%
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Achieve 98.9%
                      first-pass acceptance
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Recover 120+ day-old AR
                      with ease
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Get 24/7 support from
                      certified experts
                    </li>
                  </ul>
                  <Link to="/medical-billing" class="service-btn">
                    Learn More
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div class="service-card">
                <div class="service-icon">
                  <i class="fas fa-brain"></i>
                </div>
                <div class="service-content">
                  <h3>AR & Denial Management</h3>
                  <p>
                    We go beyond managing denials by addressing their root
                    causes. Through real-time claim tracking, A/R cleanup, and
                    expert appeals, we help healthcare providers recover revenue
                    and prevent future payer obstacles.
                  </p>
                  <ul class="service-features">
                    <li>
                      <i class="fas fa-check-circle"></i>A/R Cleanup Strategies
                      that improve cash flow
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Underpayment Recovery
                      to capture missed revenue
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Denial Prevention
                      Systems to stop future rejections
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Faster Claim Appeals
                      with payer-specific workflows
                    </li>
                  </ul>
                  <Link to="/denial" class="service-btn">
                    Learn More
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div class="service-card">
                <div class="service-icon">
                  <i class="fas fa-bone"></i>
                </div>
                <div class="service-content">
                  <h3>Physician Credentialing Services</h3>
                  <p>
                    Tired of delayed enrollments and rejected claims? PROMBS
                    delivers complete physician credentialing services and
                    insurance credentialing support for Medicare, Medicaid, and
                    commercial payers.
                  </p>
                  <ul class="service-features">
                    <li>
                      <i class="fas fa-check-circle"></i>Medicare, Medicaid, and
                      commercial payer setup
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Certified provider
                      credentialing specialists
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Medicare, Medicaid, and
                      commercial payer setup
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Real-time status
                      tracking and 24/7 support
                    </li>
                  </ul>
                  <Link to="/medical-credentialing" class="service-btn">
                    Learn More
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
              <div class="service-card">
                <div class="service-icon">
                  <i class="fas fa-ambulance"></i>
                </div>
                <div class="service-content">
                  <h3>Revenue Cycle</h3>
                  <p>
                    RCM solution which helps you Increase Revenue, Reduce
                    Denials, and Improve Claim Turnaround Time.
                  </p>
                  <ul class="service-features">
                    <li>
                      <i class="fas fa-check-circle"></i>Improve first‑pass
                      approval rates by up to 99%.
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Maximize reimbursements
                      with expert charge capture.
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>See KPIs like AR days,
                      denial trends, and revenue growth
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Free your team from
                      administrative burdens.
                    </li>
                  </ul>
                  <Link to="/revenue-cycle-management" class="service-btn">
                    Learn More
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
              <div class="service-card">
                <div class="service-icon">
                  <i class="fas fa-ambulance"></i>
                </div>
                <div class="service-content">
                  <h3>Contact Center and Patient Scheduling Services</h3>
                  <p>
                    We handle patient calls, book appointments, and send
                    reminders so your schedule stays full and your team stays
                    focused.
                  </p>
                  <ul class="service-features">
                    <li>
                      <i class="fas fa-check-circle"></i>24/7 Live Patient
                      Support
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Real-time patient
                      scheduling
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Automated appointment
                      reminders
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Less workload for your
                      front desk
                    </li>
                  </ul>
                  <a href="services.html" class="service-btn">
                    Learn More
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
              <div class="service-card">
                <div class="service-icon">
                  <i class="fas fa-ambulance"></i>
                </div>
                <div class="service-content">
                  <h3>Electronic Health Records</h3>
                  <p>
                    We simplify your workflow, secure patient data, and give
                    your team more time to focus on care.
                  </p>
                  <ul class="service-features">
                    <li>
                      <i class="fas fa-check-circle"></i>Centralized patient
                      records
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Secure, HIPAA-compliant
                      data storage
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Easy access from any
                      device
                    </li>
                    <li>
                      <i class="fas fa-check-circle"></i>Faster billing &
                      insurance processing
                    </li>
                  </ul>
                  <Link to="/ehr" class="service-btn">
                    Learn More
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="find-a-doctor" class="find-a-doctor section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Find A Doctor</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div
            class="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="col-lg-12">
              <div class="search-container">
                <form
                  class="search-form"
                  action="forms/doctor-search.php"
                  method="get"
                >
                  <div class="row g-3">
                    <div class="col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        name="doctor_name"
                        placeholder="Doctor name or keyword"
                      />
                    </div>
                    <div class="col-md-4">
                      <select
                        class="form-select"
                        name="specialty"
                        id="specialty-select"
                      >
                        <option value="">Select Specialty</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="dermatology">Dermatology</option>
                        <option value="oncology">Oncology</option>
                        <option value="surgery">Surgery</option>
                        <option value="emergency">Emergency Medicine</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <button type="submit" class="btn btn-primary w-100">
                        <i class="bi bi-search me-2"></i>Search Doctor
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="400">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="doctor-card">
                <div class="doctor-image">
                  <img
                    src="assets/img/health/staff-3.webp"
                    alt="Dr. Sarah Mitchell"
                    class="img-fluid"
                  />
                  <div class="availability-badge online">Available</div>
                </div>
                <div class="doctor-info">
                  <h5>Dr. Sarah Mitchell</h5>
                  <p class="specialty">Cardiology</p>
                  <p class="experience">15+ years experience</p>
                  <div class="rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <span class="rating-text">(4.9)</span>
                  </div>
                  <div class="appointment-actions">
                    <a href="#" class="btn btn-outline-primary btn-sm">
                      View Profile
                    </a>
                    <a href="#" class="btn btn-primary btn-sm">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="doctor-card">
                <div class="doctor-image">
                  <img
                    src="assets/img/health/staff-7.webp"
                    alt="Dr. Michael Rodriguez"
                    class="img-fluid"
                  />
                  <div class="availability-badge busy">In Surgery</div>
                </div>
                <div class="doctor-info">
                  <h5>Dr. Michael Rodriguez</h5>
                  <p class="specialty">Neurology</p>
                  <p class="experience">12+ years experience</p>
                  <div class="rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    <span class="rating-text">(4.7)</span>
                  </div>
                  <div class="appointment-actions">
                    <a href="#" class="btn btn-outline-primary btn-sm">
                      View Profile
                    </a>
                    <a href="#" class="btn btn-primary btn-sm">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="doctor-card">
                <div class="doctor-image">
                  <img
                    src="assets/img/health/staff-1.webp"
                    alt="Dr. Emily Chen"
                    class="img-fluid"
                  />
                  <div class="availability-badge online">Available</div>
                </div>
                <div class="doctor-info">
                  <h5>Dr. Emily Chen</h5>
                  <p class="specialty">Pediatrics</p>
                  <p class="experience">8+ years experience</p>
                  <div class="rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <span class="rating-text">(5.0)</span>
                  </div>
                  <div class="appointment-actions">
                    <a href="#" class="btn btn-outline-primary btn-sm">
                      View Profile
                    </a>
                    <a href="#" class="btn btn-primary btn-sm">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="doctor-card">
                <div class="doctor-image">
                  <img
                    src="assets/img/health/staff-9.webp"
                    alt="Dr. James Thompson"
                    class="img-fluid"
                  />
                  <div class="availability-badge offline">
                    Next: Tomorrow 9AM
                  </div>
                </div>
                <div class="doctor-info">
                  <h5>Dr. James Thompson</h5>
                  <p class="specialty">Orthopedics</p>
                  <p class="experience">20+ years experience</p>
                  <div class="rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    <span class="rating-text">(4.8)</span>
                  </div>
                  <div class="appointment-actions">
                    <a href="#" class="btn btn-outline-primary btn-sm">
                      View Profile
                    </a>
                    <a href="#" class="btn btn-primary btn-sm">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="doctor-card">
                <div class="doctor-image">
                  <img
                    src="assets/img/health/staff-5.webp"
                    alt="Dr. Lisa Anderson"
                    class="img-fluid"
                  />
                  <div class="availability-badge online">Available</div>
                </div>
                <div class="doctor-info">
                  <h5>Dr. Lisa Anderson</h5>
                  <p class="specialty">Dermatology</p>
                  <p class="experience">10+ years experience</p>
                  <div class="rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                    <span class="rating-text">(4.6)</span>
                  </div>
                  <div class="appointment-actions">
                    <a href="#" class="btn btn-outline-primary btn-sm">
                      View Profile
                    </a>
                    <a href="#" class="btn btn-primary btn-sm">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="doctor-card">
                <div class="doctor-image">
                  <img
                    src="assets/img/health/staff-12.webp"
                    alt="Dr. Robert Kim"
                    class="img-fluid"
                  />
                  <div class="availability-badge online">Available</div>
                </div>
                <div class="doctor-info">
                  <h5>Dr. Robert Kim</h5>
                  <p class="specialty">Oncology</p>
                  <p class="experience">18+ years experience</p>
                  <div class="rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <span class="rating-text">(4.9)</span>
                  </div>
                  <div class="appointment-actions">
                    <a href="#" class="btn btn-outline-primary btn-sm">
                      View Profile
                    </a>
                    <a href="#" class="btn btn-primary btn-sm">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="call-to-action" class="call-to-action section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 data-aos="fade-up" data-aos-delay="200">
                Your Revenue is Our Priority
              </h2>
              {/* <p data-aos="fade-up" data-aos-delay="250">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p> */}

              <div class="cta-buttons" data-aos="fade-up" data-aos-delay="300">
                <a href="appointment.html" class="btn-primary">
                  Book Discovery Meeting
                </a>
              </div>
            </div>
          </div>

          <div class="row features-row" data-aos="fade-up" data-aos-delay="400">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="feature-card">
                <div class="icon-wrapper">
                  <i class="bi bi-heart-pulse"></i>
                </div>
                <h5>24/7 Patient Help Desk</h5>
                <p>
                  Billing Vista ensures accuracy, compliance, and faster
                  payments every time.
                </p>

                <div className="below-divs"></div>
                <a href="#" class="feature-link">
                  <span>Learn More</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="feature-card">
                <div class="icon-wrapper">
                  <i class="bi bi-calendar-check"></i>
                </div>
                <h5>Hassle Free Transition</h5>
                <p>
                  Switching billing providers doesn’t have to be stressful. At
                  Billing Vista, we make the transition smooth, secure, and
                  efficient. Our expert team handles data migration, system
                  setup, and compliance checks with zero disruption to your
                  revenue cycle.
                </p>
                {/* <a href="#" class="feature-link">
                  <span>Book Now</span>
                  <i class="bi bi-arrow-right"></i>
                </a> */}
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="feature-card">
                <div class="icon-wrapper">
                  <i class="bi bi-people"></i>
                </div>
                <h5>Expert Billing Team</h5>
                <p>
                  At Billing Vista, our team of certified billing specialists
                  brings deep industry knowledge and hands-on expertise to every
                  claim.
                </p>
                <a href="#" class="feature-link">
                  <span>Meet Our Specialists</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="emergency-alert" data-aos="zoom-in" data-aos-delay="500">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <div class="emergency-content">
                  <div class="emergency-icon">
                    <i class="bi bi-telephone-fill"></i>
                  </div>
                  <div class="emergency-text">
                    <h4>Need Assistance?</h4>
                    <p>Call our 24/7 support for immediate assistance</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 text-end">
                <a href="tel:911" class="emergency-btn">
                  <i class="bi bi-telephone-fill"></i>
                  Call (253) 545-7483
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="emergency-info" class="emergency-info section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Emergency Info</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div
                class="emergency-alert"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div class="alert-icon">
                  <i class="bi bi-exclamation-triangle-fill"></i>
                </div>
                <div class="alert-content">
                  <h3>Medical Emergency?</h3>
                  <p>
                    If you are experiencing a life-threatening emergency, call
                    911 immediately or go to your nearest emergency room.
                  </p>
                </div>
                <div class="alert-action">
                  <a href="tel:911" class="btn btn-emergency">
                    <i class="bi bi-telephone-fill"></i>
                    Call 911
                  </a>
                </div>
              </div>

              <div
                class="row emergency-contacts"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="col-md-6 mb-4">
                  <div class="contact-card urgent">
                    <div class="card-icon">
                      <i class="bi bi-hospital"></i>
                    </div>
                    <div class="card-content">
                      <h4>Emergency Room</h4>
                      <p class="contact-info">
                        <i class="bi bi-telephone"></i>
                        <span>+1 (555) 123-4567</span>
                      </p>
                      <p class="address">
                        <i class="bi bi-geo-alt"></i>
                        1245 Healthcare Blvd, Medical City, CA 90210
                      </p>
                      <p class="hours">Open 24/7</p>
                    </div>
                    <div class="card-action">
                      <a href="tel:+15551234567" class="btn btn-contact">
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <div class="contact-card">
                    <div class="card-icon">
                      <i class="bi bi-clock"></i>
                    </div>
                    <div class="card-content">
                      <h4>Urgent Care</h4>
                      <p class="contact-info">
                        <i class="bi bi-telephone"></i>
                        <span>+1 (555) 987-6543</span>
                      </p>
                      <p class="address">
                        <i class="bi bi-geo-alt"></i>
                        892 Wellness Ave, Health District, CA 90211
                      </p>
                      <p class="hours">Mon-Sun: 7:00 AM - 10:00 PM</p>
                    </div>
                    <div class="card-action">
                      <a href="tel:+15559876543" class="btn btn-contact">
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <div class="contact-card">
                    <div class="card-icon">
                      <i class="bi bi-headset"></i>
                    </div>
                    <div class="card-content">
                      <h4>Nurse Helpline</h4>
                      <p class="contact-info">
                        <i class="bi bi-telephone"></i>
                        <span>+1 (555) 456-7890</span>
                      </p>
                      <p class="description">
                        24/7 medical advice and guidance
                      </p>
                      <p class="hours">Available 24/7</p>
                    </div>
                    <div class="card-action">
                      <a href="tel:+15554567890" class="btn btn-contact">
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="contact-card">
                    <div class="card-icon">
                      <i class="bi bi-heart-pulse"></i>
                    </div>
                    <div class="card-content">
                      <h4>Poison Control</h4>
                      <p class="contact-info">
                        <i class="bi bi-telephone"></i>
                        <span>1-800-222-1222</span>
                      </p>
                      <p class="description">National poison control hotline</p>
                      <p class="hours">Available 24/7</p>
                    </div>
                    <div class="card-action">
                      <a href="tel:18002221222" class="btn btn-contact">
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="quick-actions"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h4>Quick Actions</h4>
                <div class="row">
                  <div class="col-sm-6 col-lg-3">
                    <a href="#" class="action-link">
                      <i class="bi bi-geo-alt-fill"></i>
                      <span>Get Directions</span>
                    </a>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <a href="#" class="action-link">
                      <i class="bi bi-calendar-check"></i>
                      <span>Book Appointment</span>
                    </a>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <a href="#" class="action-link">
                      <i class="bi bi-person-badge"></i>
                      <span>Find a Doctor</span>
                    </a>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <a href="#" class="action-link">
                      <i class="bi bi-chat-dots"></i>
                      <span>Live Chat</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="emergency-tips"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h4>When to Seek Emergency Care</h4>
                <div class="row">
                  <div class="col-md-6">
                    <ul class="emergency-list">
                      <li>
                        <i class="bi bi-check-circle"></i> Chest pain or
                        difficulty breathing
                      </li>
                      <li>
                        <i class="bi bi-check-circle"></i> Severe allergic
                        reactions
                      </li>
                      <li>
                        <i class="bi bi-check-circle"></i> Major trauma or
                        injuries
                      </li>
                      <li>
                        <i class="bi bi-check-circle"></i> Signs of stroke or
                        heart attack
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="emergency-list">
                      <li>
                        <i class="bi bi-check-circle"></i> Severe burns or
                        bleeding
                      </li>
                      <li>
                        <i class="bi bi-check-circle"></i> Loss of consciousness
                      </li>
                      <li>
                        <i class="bi bi-check-circle"></i> Severe abdominal pain
                      </li>
                      <li>
                        <i class="bi bi-check-circle"></i> High fever with
                        confusion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
