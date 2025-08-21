import React from "react";
import { useEffect, useRef } from "react";
const MedicalCredentialing = () => {
  const swiperRef = useRef(null);

  // Initialize Swiper when the component mounts
  useEffect(() => {
    if (swiperRef.current && typeof window.Swiper !== "undefined") {
      new window.Swiper(swiperRef.current, {
        slidesPerView: 1,
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }, []);
  return (
    <div className="container my-5">
      {/* Section: Medical Credentialing */}
      <div
        className="text-center mb-5 "
        style={{ marginTop: "150px" }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="display-5 fw-bold ">Medical Credentialing</h1>
      </div>

      {/* Core Features */}
      <div className="mb-5" data-aos="fade-left" data-aos-delay="100">
        <h3 className="text-center mb-4">
          Core Features of Our Credentialing Services
        </h3>
        <p className="text-center mb-5">
          CareCloud’s innovative approach combines technology and expert support
          to streamline provider enrollment and reduce delays.
        </p>

        <div className="row g-4">
          {[
            {
              title: "Seamless Onboarding with Introductory Emails",
              desc: "Simplify the start of your credentialing journey with automated guidance and support.",
            },
            {
              title: "Comprehensive Research & Verification",
              desc: "We verify credentials and history to ensure providers meet insurance standards.",
            },
            {
              title: "Hassle-Free Application Submission for Faster Approvals",
              desc: "Our experts meticulously review applications, ensuring compliance and expediting approvals.",
            },
            {
              title: "Stay Informed with Real-Time Approval Notifications",
              desc: "Instant updates let providers track approvals and manage compliance without disruptions.",
            },
            {
              title: "Track Every Step with Our Credentialing Status Grid",
              desc: "Monitor progress, renewals, and key milestones—all in one place.",
            },
            {
              title: "Proactive Application Follow-Ups",
              desc: "We proactively resolve issues, ensuring a faster credentialing process.",
            },
            {
              title: "Seamless Revalidation for Continuous Compliance",
              desc: "We monitor credentials to keep them valid and up to date.",
            },
          ].map((feature, index) => (
            <div className="col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-light py-5 mb-5 rounded">
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="p-3">
              <h4>Faster Onboarding</h4>
              <p>
                Reduce administrative burdens and speed up provider integration.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <h4>Unwavering Support</h4>
              <p>
                Expert assistance to navigate practice management and reduce
                billing delays.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <h4>Expert Guidance</h4>
              <p>
                Specialized professionals ensure a smooth, error-free
                credentialing process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className="mb-5 text-center">
        <h3>Testimonials</h3>
        <div
          className="bg-light p-4 rounded mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <p className="mb-0">
            <em>
              "CareCloud simplifies credentialing and enrollment, ensuring
              compliance while minimizing administrative overhead."
            </em>
          </p>
          <p className="mt-3 mb-1 fw-bold">— Jane Sinclair, Office Manager</p>
          <p className="text-muted">Arcadia Dermatology</p>
        </div>
        <div className="mt-3">
          <p className="d-inline-block bg-white px-3 py-2 rounded shadow-sm">
            <strong>4.8 / 5.0</strong>
          </p>
          <p className="text-muted mt-2">Rated on G2, Capterra, and Google</p>
        </div>
      </div> */}
      <div class="page-title">
        <div class="breadcrumbs">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">
                  <i class="bi bi-house"></i> Home
                </a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Category</a>
              </li>
              <li class="breadcrumb-item active current">Testimonials</li>
            </ol>
          </nav>
        </div>

        <div class="title-wrapper">
          <h1>Testimonials</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      <section
        id="featured-testimonials"
        class="featured-testimonials section light-background"
      >
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="testimonials-slider swiper init-swiper" ref={swiperRef}>
            {/* <script type="application/json" class="swiper-config">
            {
              "slidesPerView": 1,
              "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "navigation": {
                "nextEl": ".swiper-button-next",
                "prevEl": ".swiper-button-prev"
              }
            }
          </script> */}

            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-item">
                  <div class="row">
                    <div class="col-lg-8">
                      <h2>Sed ut perspiciatis unde omnis</h2>
                      <p>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                      </p>
                      <p>
                        Beatae magnam dolore quia ipsum. Voluptatem totam et qui
                        dolore dignissimos. Amet quia sapiente laudantium nihil
                        illo et assumenda sit cupiditate. Nam perspiciatis
                        perferendis minus consequatur. Enim ut eos quo.
                      </p>
                      <div class="profile d-flex align-items-center">
                        <img
                          src="assets/img/person/person-m-7.webp"
                          class="profile-img"
                          alt=""
                        />
                        <div class="profile-info">
                          <h3>Saul Goodman</h3>
                          <span>Client</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 d-none d-lg-block">
                      <div class="featured-img-wrapper">
                        <img
                          src="assets/img/person/person-m-7.webp"
                          class="featured-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <div class="row">
                    <div class="col-lg-8">
                      <h2>Nemo enim ipsam voluptatem</h2>
                      <p>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                      </p>
                      <p>
                        Dolorem excepturi esse qui amet maxime quibusdam aut
                        repellendus voluptatum. Corrupti enim a repellat cumque
                        est laborum fuga consequuntur. Dolorem nostrum deleniti
                        quas voluptatem iure dolorum rerum. Repudiandae
                        doloribus ut repellat harum vero aut. Modi aut velit
                        aperiam aspernatur odit ut vitae.
                      </p>
                      <div class="profile d-flex align-items-center">
                        <img
                          src="assets/img/person/person-f-8.webp"
                          class="profile-img"
                          alt=""
                        />
                        <div class="profile-info">
                          <h3>Sara Wilsson</h3>
                          <span>Designer</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 d-none d-lg-block">
                      <div class="featured-img-wrapper">
                        <img
                          src="assets/img/person/person-f-8.webp"
                          class="featured-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <div class="row">
                    <div class="col-lg-8">
                      <h2>Labore nostrum eos impedit</h2>
                      <p>
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                      </p>
                      <p>
                        Itaque ut explicabo vero occaecati est quam rerum sed.
                        Numquam tempora aut aut quaerat quia illum. Nobis quia
                        autem odit ipsam numquam. Doloribus sit sint corporis
                        eius totam fuga. Hic nostrum suscipit corrupti nam
                        expedita adipisci aut optio.
                      </p>
                      <div class="profile d-flex align-items-center">
                        <img
                          src="assets/img/person/person-m-9.webp"
                          class="profile-img"
                          alt=""
                        />
                        <div class="profile-info">
                          <h3>Matt Brandon</h3>
                          <span>Freelancer</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 d-none d-lg-block">
                      <div class="featured-img-wrapper">
                        <img
                          src="assets/img/person/person-m-9.webp"
                          class="featured-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <div class="row">
                    <div class="col-lg-8">
                      <h2>Impedit dolor facilis nulla</h2>
                      <p>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                      </p>
                      <p>
                        Omnis aspernatur accusantium qui delectus praesentium
                        repellendus. Facilis sint odio aspernatur voluptas
                        commodi qui qui qui pariatur. Corrupti deleniti itaque
                        quaerat ipsum deleniti culpa tempora tempore. Et
                        consequatur exercitationem hic aspernatur nobis est
                        voluptatibus architecto laborum.
                      </p>
                      <div class="profile d-flex align-items-center">
                        <img
                          src="assets/img/person/person-f-10.webp"
                          class="profile-img"
                          alt=""
                        />
                        <div class="profile-info">
                          <h3>Jena Karlis</h3>
                          <span>Store Owner</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 d-none d-lg-block">
                      <div class="featured-img-wrapper">
                        <img
                          src="assets/img/person/person-f-10.webp"
                          class="featured-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-navigation w-100 d-flex align-items-center justify-content-center">
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" class="testimonials section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row g-4">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="testimonial-item">
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  posuere metus vitae arcu imperdiet, id aliquet ante
                  scelerisque. Sed sit amet sem vitae urna fringilla tempus.
                </p>
                <div class="testimonial-footer">
                  <div class="testimonial-author">
                    <img
                      src="assets/img/person/person-m-3.webp"
                      alt="Author"
                      class="img-fluid rounded-circle"
                      loading="lazy"
                    />
                    <div>
                      <h5>Michael Anderson</h5>
                      <span>Software Developer</span>
                    </div>
                  </div>
                  <div class="quote-icon">
                    <i class="bi bi-quote"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div class="testimonial-item">
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus.
                </p>
                <div class="testimonial-footer">
                  <div class="testimonial-author">
                    <img
                      src="assets/img/person/person-f-5.webp"
                      alt="Author"
                      class="img-fluid rounded-circle"
                      loading="lazy"
                    />
                    <div>
                      <h5>Sophia Martinez</h5>
                      <span>Marketing Specialist</span>
                    </div>
                  </div>
                  <div class="quote-icon">
                    <i class="bi bi-quote"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div class="testimonial-item">
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p>
                  Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                  augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum.
                </p>
                <div class="testimonial-footer">
                  <div class="testimonial-author">
                    <img
                      src="assets/img/person/person-m-7.webp"
                      alt="Author"
                      class="img-fluid rounded-circle"
                      loading="lazy"
                    />
                    <div>
                      <h5>David Wilson</h5>
                      <span>Graphic Designer</span>
                    </div>
                  </div>
                  <div class="quote-icon">
                    <i class="bi bi-quote"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div class="testimonial-item">
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p>
                  Vivamus elementum semper nisi. Aenean vulputate eleifend
                  tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                  eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
                  quis.
                </p>
                <div class="testimonial-footer">
                  <div class="testimonial-author">
                    <img
                      src="assets/img/person/person-f-9.webp"
                      alt="Author"
                      class="img-fluid rounded-circle"
                      loading="lazy"
                    />
                    <div>
                      <h5>Emily Johnson</h5>
                      <span>UX Designer</span>
                    </div>
                  </div>
                  <div class="quote-icon">
                    <i class="bi bi-quote"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
              <div class="testimonial-item">
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p>
                  Praesent nonummy mi in odio. Nullam accumsan lorem in dui.
                  Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum
                  ante ipsum primis in faucibus orci luctus et ultrices.
                </p>
                <div class="testimonial-footer">
                  <div class="testimonial-author">
                    <img
                      src="assets/img/person/person-f-11.webp"
                      alt="Author"
                      class="img-fluid rounded-circle"
                      loading="lazy"
                    />
                    <div>
                      <h5>Olivia Thompson</h5>
                      <span>Entrepreneur</span>
                    </div>
                  </div>
                  <div class="quote-icon">
                    <i class="bi bi-quote"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="600">
              <div class="testimonial-item">
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p>
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium.
                </p>
                <div class="testimonial-footer">
                  <div class="testimonial-author">
                    <img
                      src="assets/img/person/person-m-12.webp"
                      alt="Author"
                      class="img-fluid rounded-circle"
                      loading="lazy"
                    />
                    <div>
                      <h5>James Taylor</h5>
                      <span>Financial Analyst</span>
                    </div>
                  </div>
                  <div class="quote-icon">
                    <i class="bi bi-quote"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div
        className="text-center bg-primary text-white p-5 rounded"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="mb-3" style={{ color: "white" }}>
          Streamline Your Practice with CareCloud
        </h2>
        <p className="mb-4">
          Discover how our platform can transform your workflow.
        </p>
        <button className="btn btn-light btn-lg me-3">Get Started</button>
        <button className="btn btn-outline-light btn-lg">
          Talk to an Expert
        </button>
      </div>

      {/* FAQ Section (Optional) */}
      <div className="mt-5">
        <h3>Frequently Asked Questions</h3>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                What is provider credentialing?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Provider credentialing is the process of verifying a healthcare
                provider’s qualifications and affiliations to ensure they meet
                insurance and regulatory standards.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                How does CareCloud speed up enrollment?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                CareCloud offers a streamlined, technology-driven process with
                expert follow-ups and real-time tracking to reduce delays and
                errors.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCredentialing;
