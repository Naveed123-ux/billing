import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useForm } from "react-hook-form";

import { BarChart3, FileSearch, FileX, Calendar,Monitor, FileText, Users, LineChart  } from "lucide-react";
const About = () => {
    const { register, handleSubmit } = useForm();
   
  const carouselItems2 = [
  {
    id: "b693664",
    href: "https://envato.com/",
    src: "https://prombs.com/wp-content/uploads/2024/10/12.webp",
    alt: "12.webp",
  },
  {
    id: "3d80868",
    href: "https://magento.com/",
    src: "https://prombs.com/wp-content/uploads/2024/10/13-1.webp",
    alt: "13.webp",
  },
  {
    id: "4472222",
    href: "https://www.pingdom.com/",
    src: "https://prombs.com/wp-content/uploads/2024/10/14-1.webp",
    alt: "14.webp",
  },
  {
    id: "47fc6fc",
    href: "https://www.awwwards.com/",
    src: "https://prombs.com/wp-content/uploads/2024/10/15-1.webp",
    alt: "15.webp",
  },
  {
    id: "e2ce56b",
    href: "https://colorlib.com/",
    src: "https://prombs.com/wp-content/uploads/2024/10/16-1.webp",
    alt: "16.webp",
  },
  {
    id: "1783a04",
    src: "https://prombs.com/wp-content/uploads/2024/10/17-1.webp",
    alt: "17.webp",
  },
  {
    id: "cc3c283",
    src: "https://prombs.com/wp-content/uploads/2024/10/18-1.webp",
    alt: "18.webp",
  },
  {
    id: "d7f4ddc",
    src: "https://prombs.com/wp-content/uploads/2024/10/19-1.webp",
    alt: "19.webp",
  },
  {
    id: "4896038",
    src: "https://prombs.com/wp-content/uploads/2024/10/20-2.webp",
    alt: "20.webp",
  },
];
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
   const stats1 = [
    {
      icon: <BarChart3 size={30} className="text-info" />,
      title: "Rapid Revenue Recovery",
      value: "25 Days",
      progress: 60,
    },
    {
      icon: <FileSearch size={30} className="text-info" />,
      title: "First-pass Resolution",
      value: "99%",
      progress: 99,
    },
    {
      icon: <FileX size={30} className="text-info" />,
      title: "Denial & Rejection",
      value: "5% - 10%",
      progress: 15,
    },
    {
      icon: <Calendar size={30} className="text-info" />,
      title: "Short Turnaround Time",
      value: "24 Hours",
      progress: 10,
    },
  ];
  const stats2 = [
    {
      icon: <Monitor size={30} className="text-info" />,
      title: "Electronic claim",
      value: "95%",
      progress: 95,
    },
    {
      icon: <FileText size={30} className="text-info" />,
      title: "Electronic payment",
      value: "95%",
      progress: 95,
    },
    {
      icon: <Users size={30} className="text-info" />,
      title: "Client Retention",
      value: "100%",
      progress: 100,
    },
    {
      icon: <LineChart size={30} className="text-info" />,
      title: "Revenue Increase",
      value: "30%",
      progress: 30,
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

  const onSubmit = async (data) => {
    // Get UI message elements
    const loadingDiv = document.querySelector(".loading");
    const errorMessageDiv = document.querySelector(".error-message");
    const sentMessageDiv = document.querySelector(".sent-message");

    try {
      // Show loading, hide others
      if (loadingDiv) loadingDiv.style.display = "block";
      if (errorMessageDiv) errorMessageDiv.style.display = "none";
      if (sentMessageDiv) sentMessageDiv.style.display = "none";

      // Send data to your server
      const response = await fetch(
        "https://actons-billing.vercel.app/api/schedule-appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        // Show success message
        if (loadingDiv) loadingDiv.style.display = "none";
        if (sentMessageDiv) {
          sentMessageDiv.textContent = result.message;
          sentMessageDiv.style.display = "block";
        }
      } else {
        // Show server error
        if (loadingDiv) loadingDiv.style.display = "none";
        if (errorMessageDiv) {
          errorMessageDiv.textContent =
            result.message || "Something went wrong. Please try again.";
          errorMessageDiv.style.display = "block";
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Show network error
      if (loadingDiv) loadingDiv.style.display = "none";
      if (errorMessageDiv) {
        errorMessageDiv.textContent =
          "Failed to connect to server. Please check your connection.";
        errorMessageDiv.style.display = "block";
      }
    }
  };
  return (
    <>
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
              <li class="breadcrumb-item active current">About</li>
            </ol>
          </nav>
        </div>

        <div class="title-wrapper">
          <h1>About</h1>
          <p>
            Billing Vista LLC is a HIPPA compliant RCM solutions company with more than 12 years of medical billing experience across all specialties. 
          </p>
        </div>
      </div>

      <section id="about" class="about section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="content">
                <h3>Empowering Healthcare Providers Through Expert Medical Billing Solutions</h3>
                <p>
                  Your Trusted Medical Billing Company for Long-Term Success


                </p>
                <p  style={{"fontSize":"16px"}}>
                 Billing Vista is a leading Medical Billing Company providing End-to-End Billing, Coding, and RCM support for clinics, practices, and hospitals.
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
                <div
                  class="stats-container"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div class="row gy-4">
                    <div class="col-sm-6 col-lg-12 col-xl-6">
                      <div class="stat-item">
                        <div class="stat-number">
                          <span
                            data-purecounter-start="0"
                            data-purecounter-end="25"
                            data-purecounter-duration="1"
                            class="purecounter"
                          ></span>
                          8+
                        </div>
                        <div class="stat-label">Years of Experience</div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-lg-12 col-xl-6">
                      <div class="stat-item">
                        <div class="stat-number">
                          <span
                            data-purecounter-start="0"
                            data-purecounter-end="50000"
                            data-purecounter-duration="2"
                            class="purecounter"
                          ></span>
                          250+
                        </div>
                        <div class="stat-label">Healthcare Providers</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="cta-buttons"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <NavLink to="/contact"> <a href="#" class="btn-primary">
                   Book a Free Consultation
                  </a></NavLink>
                 
                 
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div
                class="image-section"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div class="main-image">
                  <img
                    src="assets/img/health/consultation-3.webp"
                    alt="Healthcare consultation"
                    class="img-fluid"
                  />
                </div>
                <div class="image-grid">
                  <div class="grid-item">
                    <img
                      src="assets/img/health/facilities-2.webp"
                      alt="Medical facility"
                      class="img-fluid"
                    />
                  </div>
                  <div class="grid-item">
                    <img
                      src="assets/img/health/staff-5.webp"
                      alt="Medical staff"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-4 my-2">
           <h3>Our Achievements</h3>
          <p>We have established our credibility as the most reliable company for Medical Billing Services with numerous achievements.</p>
          </div>
          <div class="row gy-4 mt-3">
            <div class="col-lg-6">
              <div class="content">
                <h3 style={{ color: "rgb(4, 158, 187)" }}>Accuracy and Efficiency</h3>
                <p  style={{"fontSize":"16px"}}>
                 Throughout our Medical Billing process, we stay fully committed to maintaining efficiency and accuracy. Our professionals make sure of timely reimbursement for our esteemed clients. We pay meticulous attention to details and steadily adhere to industry standards that eventually result in error rates far below the national average. 


                </p>
               
                  {stats1.map((item, index) => (
        <div key={index} className="d-flex align-items-start mb-4">
          <div className="me-3">{item.icon}</div>
          <div className="w-100">
            <h6 className="fw-bold  mb-1">{item.title}</h6>
            <div className="progress " style={{ height: "5px" }}>
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: `${item.progress}%` }}
                aria-valuenow={item.progress}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="fw-bold mb-0">{item.value}</p>
          </div>
        </div>
      ))}

                <div
                  class="cta-buttons"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <NavLink to="/contact"> <a href="#" class="btn-primary">
                   Book a Free Consultation
                  </a></NavLink>
                 
                 
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div
                class="image-section"
                data-aos="fade-left"
                data-aos-delay="200"
              >
              
                  <img
                    src="https://prombs.com/wp-content/uploads/2024/10/Accuracy-and-Efficiency.webp"
                    alt="Healthcare consultation"
                    class="img-fluid"
              />
               
              </div>
            </div>
          </div>
           <div class="row gy-4 mt-3">
             <div class="col-lg-6">
              <div
                class="image-section"
                data-aos="fade-left"
                data-aos-delay="200"
              >
              
                  <img
                    src="https://prombs.com/wp-content/uploads/2024/10/Growth-and-Expansion.webp"
                    alt="Healthcare consultation"
                    class="img-fluid"
              />
               
              </div>
            </div>
            <div class="col-lg-6">
              <div class="content">
                <h3 style={{ color: "rgb(4, 158, 187)" }}>Growth and Expansion</h3>
                <p  style={{"fontSize":"16px"}}>
                 Our relentless focus on excellence and proven results has sparked powerful momentum—leading to consistent growth and a thriving, ever-expanding community of satisfied clients who count on us to deliver. 
                </p>
                {/* <p className="mt-2">
                  Based on our extensive and exceptional achievements over the past years, along with following technology adoption trends given changing market dynamics, our clients positioned us as a leader in Medical Billing Services in the US.
                </p> */}
        
               
                  {stats2.map((item, index) => (
        <div key={index} className="d-flex align-items-start mb-4">
          <div className="me-3">{item.icon}</div>
          <div className="w-100">
            <h6 className="fw-bold  mb-1">{item.title}</h6>
            <div className="progress " style={{ height: "5px" }}>
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: `${item.progress}%` }}
                aria-valuenow={item.progress}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="fw-bold mb-0">{item.value}</p>
          </div>
        </div>
      ))}

                <div
                  class="cta-buttons"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <NavLink to="/contact"> <a href="#" class="btn-primary">
                   Book a Free Consultation
                  </a></NavLink>
                 
                 
                </div>
              </div>
            </div>

           
          </div>
                     <div class="row gy-4 mt-3">
           
            <div class="col-lg-6">
              <div class="content">
                <h3       style={{ color: "rgb(4, 158, 187)" }}>Turn complex billing into clean revenue</h3>
                <p style={{"fontSize":"16px"}}>
                We come from different cultures and walks of life, but we’re all driven by one shared purpose—helping healthcare providers grow through trust, teamwork, and reliable solutions. These values make our Medical Billing Services stand out and create lasting impact.
                </p>
                  <p   style={{"fontSize":"16px"}}>
               Billing Vista delivers flexible, consistent services that support providers worldwide. This allows our clients to fully focus on delivering outstanding care, while we expertly manage their billing needs. Every success story motivates us to discover new ways to increase revenue and improve day-to-day operations.
                </p>
                <p  style={{"fontSize":"16px"}}>
                  Strong partnerships and clear strategies lead to powerful results.
                  <br />
                  Your success is what drives us forward—every single day.
                  <br />
                  Let’s spark new revenue opportunities, together.
                </p>
                {/* <p className="mt-2">
                  Based on our extensive and exceptional achievements over the past years, along with following technology adoption trends given changing market dynamics, our clients positioned us as a leader in Medical Billing Services in the US.
                </p> */}
        
               
              

                <div
                  class="cta-buttons"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <NavLink to="/contact"> <a href="#" class="btn-primary">
                  Let's Connect
                  </a></NavLink>
                 
                 
                </div>
              </div>
            </div>

             <div class="col-lg-6">
              <div
                class="image-section"
                data-aos="fade-left"
                data-aos-delay="200"
              >
              
                  <img
                    src="https://prombs.com/wp-content/uploads/2024/10/core_values.webp"
                    alt="Healthcare consultation"
                    class="img-fluid"
              />
               
              </div>
            </div>
          </div>
          <div class="row gy-4 mt-3">
           
             <div class="col-lg-6">
              <div
                class="image-section"
                data-aos="fade-left"
                data-aos-delay="200"
              >
              
                  <img
                    src="https://prombs.com/wp-content/uploads/2024/10/Empowering-Healthcare-Excellence.webp"
                    alt="Healthcare consultation"
                    class="img-fluid"
              />
               
              </div>
            </div>
            <div class="col-lg-6">
              <div class="content">
                <h3       style={{ color: "rgb(4, 158, 187)" }}>Turn complex billing into clean revenue</h3>
                <p style={{"fontSize":"16px"}}>
               Inspired by a clear vision and an unstoppable commitment to your success, we place excellence at the core of everything we do. Our team doesn’t just meet expectations—we constantly redefine them. From meticulous quality control to continuous professional development, we leave no stone unturned in our pursuit of perfection. In the ever-evolving world of Medical Billing Services, we deliver not only results but real revenue impact you can see and feel.
                </p>
                <p  style={{"fontSize":"16px"}}>
                 We’re not here to play it safe—we’re here to set the standard. Partner with us, and experience a level of precision and profitability that truly transforms your practice.
                </p>
                {/* <p className="mt-2">
                  Based on our extensive and exceptional achievements over the past years, along with following technology adoption trends given changing market dynamics, our clients positioned us as a leader in Medical Billing Services in the US.
                </p> */}
        
               
              

                <div
                  class="cta-buttons"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <NavLink to="/contact"> <a href="#" class="btn-primary">
                  Let's Connect
                  </a></NavLink>
                 
                 
                </div>
              </div>
            </div>

          </div>
            <div
            class="certifications-section"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="row">
              <div class="col-lg-12">
                <div class="section-header">
                  <h3>Exceeding Clients Expectations </h3>
                  <p>
                    As a leading company with exceptional accomplishments, Billing Vista prioritizes staying constantly connected with the evolving dynamics to gain valuable insights into clients’ needs. Our informed decisions, predictable analytics, and unparalleled achievements establish us as the most reliable company in the USA. 
                  </p>
                </div>
              
              </div>
            </div>
          </div>
          <div
            class="certifications-section"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="row">
              <div class="col-lg-12">
                <div class="section-header">
                  <h3>Medical Billing Software We Leverage for Revenue Cycle Management</h3>
                  <p>
                    Here are some Industry top listed EHR being operated by us.
                  </p>
                </div>
                {/* <div class="certifications-grid">
                  <div class="certification-item">
                    <img
                      src="assets/img/clients/clients-1.webp"
                      alt="JCI Accreditation"
                      class="img-fluid"
                    />
                  </div>
                  <div class="certification-item">
                    <img
                      src="assets/img/clients/clients-2.webp"
                      alt="NABH Certification"
                      class="img-fluid"
                    />
                  </div>
                  <div class="certification-item">
                    <img
                      src="assets/img/clients/clients-3.webp"
                      alt="ISO 9001"
                      class="img-fluid"
                    />
                  </div>
                  <div class="certification-item">
                    <img
                      src="assets/img/clients/clients-4.webp"
                      alt="CAP Accreditation"
                      class="img-fluid"
                    />
                  </div>
                  <div class="certification-item">
                    <img
                      src="assets/img/clients/clients-5.webp"
                      alt="Medical Board"
                      class="img-fluid"
                    />
                  </div>
                  <div class="certification-item">
                    <img
                      src="assets/img/clients/clients-6.webp"
                      alt="Healthcare Association"
                      class="img-fluid"
                    />
                  </div>
                </div> */}
<div className="container my-5">
  <div className="brand-logo-carousel-wrapper">
    <Swiper
      modules={[Autoplay]}
      {...{ ...swiperSettings }}
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

<div className="container my-5">
  <div className="brand-logo-carousel-wrapper">
    <Swiper
      modules={[Autoplay]}
      {...{ ...swiperSettings }}
      className="brand-logo-carousel swiper"
    >
      {carouselItems2.map((item, index) => (
        <SwiperSlide
          key={item.id}
          className="swiper-slide"
          style={{ width: "123px" }}
          role="group"
          aria-label={`${index + 1} / ${carouselItems2.length}`}
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
                 <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8" data-aos="fade-down" data-aos-delay="100">
              <h2 className="t mb-4">
                What Sets Our Medical Billing and Coding Services Apart
              </h2>
              <p className="mb-4">
                If you're ready to improve collections, reduce denials, and get
                faster payments, you're in the right place. Our certified team
                delivers expert medical billing and coding services designed to
                improve every stage of the billing cycle.
              </p>

              <h3 className=" mb-4">The Outcomes We Help Providers Achieve</h3>

              <div className="row g-4 mb-5">
                <div className="col-md-3 text-center">
                  <i className="bi bi-speedometer2  display-6"></i>
                  <h4 className="">25 Days</h4>
                  <p>Rapid Revenue Recovery</p>
                </div>
                <div className="col-md-3 text-center">
                  <i className="bi bi-check-circle  display-6"></i>
                  <h4 className="">99%</h4>
                  <p>First-Pass Resolution</p>
                </div>
                <div className="col-md-3 text-center">
                  <i className="bi bi-x-circle text-danger display-6"></i>
                  <h4 className="text-danger">5% - 10%</h4>
                  <p>Denial & Rejection</p>
                </div>
                <div className="col-md-3 text-center">
                  <i className="bi bi-clock  display-6"></i>
                  <h4 className="">24Hours</h4>
                  <p>Short Turnaround Time</p>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-3 text-center">
                  <i className="bi bi-file-earmark-check  display-6"></i>
                  <h4 className="">95%</h4>
                  <p>Electronic Claim</p>
                </div>
                <div className="col-md-3 text-center">
                  <i className="bi bi-credit-card  display-6"></i>
                  <h4 className="">95%</h4>
                  <p>Electronic Payment</p>
                </div>
                <div className="col-md-3 text-center">
                  <i className="bi bi-people text-info display-6"></i>
                  <h4 className="text-info">100%</h4>
                  <p>Client Retention</p>
                </div>
                <div className="col-md-3 text-center">
                  <i className="bi bi-graph-up text-success display-6"></i>
                  <h4 className="text-success">30%</h4>
                  <p>Revenue Increase</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div
                className="card  text-white"
                style={{ backgroundColor: "rgb(4, 158, 187)" }}
              >
                <div className="card-body">
                  <h4 className="card-title">We're here to help</h4>
                  <p className="card-text">
                    We're available 24/7 - Schedule a call with one of our
                    experts now.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="companyName"
                        placeholder="Practice or Company Name*"
                        {...register("practiceCompanyName", { required: true })}
                    
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name*"
                       {...register("name", { required: true })}
                      
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="Phone Number*"
                         {...register("phone", { required: true })}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email*"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div className="mb-3">
                      <select
                        className="form-select"
                        name="service"
                        {...register("role", { required: true })}
                      >
                        <option value="">Please Select</option>
                        <option value="medical-billing">Medical Billing</option>
                        <option value="medical-coding">Medical Coding</option>
                        <option value="denial-management">
                          Denial Management
                        </option>
                        <option value="revenue-cycle">
                          Revenue Cycle Management
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={4}
                        placeholder="Message"
                        {...register("message")}
                      ></textarea>
                    </div>
                     <div className="loading" style={{ display: "none" }}>
                        Sending your request...
                      </div>
                      <div
                        className="error-message"
                        style={{
                          color: "red",
                          fontWeight: "500",
                          marginTop: "8px",
                        }}
                      ></div>
                      <div
                        className="sent-message"
                        style={{
                          color: "green",
                          fontWeight: "500",
                          marginTop: "8px",
                        }}
                      ></div>
                    <button type="submit" className="btn btn-danger w-100">
                      Submit
                    </button>
                  </form>

                  <div className="mt-3">
                    <p className="mb-1">
                      <i className="bi bi-telephone me-2"></i>512-270-6926
                    </p>
                    <p>
                      <i className="bi bi-envelope me-2"></i>info@billingvista.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
