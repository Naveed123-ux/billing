import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import "../Billins.css";
import { NavLink } from "react-router-dom";
import { Monitor, FileText, Users, LineChart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useForm } from "react-hook-form";

const MedicalBillingPage = () => {
 
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
    <div className="medical-billing-page">
      {/* Hero Section */}
      <section className=" text-white py-5">
        <div className="container">
          <div className="row align-items-center mt-3">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <p className="text-light mb-2">
                Reliable, Transparent, and Scalable Billing for Modern Practices
              </p>
              <h3
                className="display-4 fw-medium mb-4 mt-4"
                style={{ fontSize: "1.6rem" }}
              >
               Save time and Money with our Scalable, Outsourced Medical Billing tailored to your practice
              </h3>
              <p className="lead mb-4" style={{ color: "rgb(4, 158, 187)" }}>
               
							Lighten administrative burden, improve efficiency, reduce operational costs, and provide patient-centered care.						
              </p>
              <ul
                className="list-unstyled"
                style={{ color: "rgb(4, 158, 187)" }}
              >
                <li className="d-flex align-items-center mb-3">
                   <Monitor size={30} className="text-info" />
                  <span className="ms-2">Streamlined billing Processes</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <FileText size={30} className="text-info" />
                  <span className="ms-2">Maximize revenue gains</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                 <Users size={30} className="text-info" />
                  <span className="ms-2">Reduce billing complexities </span>
                </li>
                <li className="d-flex align-items-center mb-3">
                 <LineChart size={30} className="text-info" />
                  <span className="ms-2">Simplify administrative processes </span>
                </li>
              </ul>
              <NavLink to="/contact">
 <button className="btn btn-danger ">
               Book a Free Consultation
              </button>
              </NavLink>
             
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img
                src="https://prombs.com/wp-content/uploads/2024/11/slide2-11.webp"
                alt="Medical Team Collaboration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
     

      {/* End-to-End Billing Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img
                src="https://prombs.com/wp-content/uploads/2025/05/outsu.png"
                alt="Medical billing team"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-down" data-aos-delay="100">
              
              <h4 className="mb-4">
                Outsource Medical Billing Services to Billing Vista
              </h4>
              <p className="mb-4">
               Medical Billing is a core operational aspect of any healthcare organization. It requires professional expertise, resources, and standard infrastructure installation to achieve premium results. It is a daunting and complex process. It becomes more challenging and expensive for a hospital that hires and maintains a highly skilled in-house billing department. Healthcare facilities are already preoccupied with their priorities such as financial goals, providing standard patient care, and other administrative functions.
              </p>
              <p className="mb-4">
 We implement technology-enabled strategies and resources to address:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <span>Revenue loss due to denied claims </span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <span>Aging Account Receivables</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <span>Pending Claims</span>
                </li>
               
              </ul>
              <NavLink to="/contact">
<button className="btn btn-danger">
            Let's Connect
              </button>
              </NavLink>
              
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <h4 className=" mb-4">
                Top Benefits of Outsourcing Medical Billing to a Trusted, Experienced Industry Leader
              </h4>
              <p className="mb-4">
               Medical Billing is a complex process as its laws constantly keep changing, making it largely challenging to keep updated and optimize cash flow. Managing Medical Billing requires meticulous attention and extraordinary efforts to produce the best results.
              </p>
              <p className="mb-4">
                <strong>
                    On the other hand, Outsourcing Medical Billing brings lots of benefits that include heightened accuracy, cost savings, a strong focus on patient care, and compliance with regulations. These outstanding qualities make it the preferred choice for many healthcare organizations.
                </strong>
              </p>
           
              <NavLink to="/contact"> <button className="btn btn-danger">Get Consultant</button></NavLink>
             
            </div>
            <div className="col-lg-4" data-aos="fade-down" data-aos-delay="100">
              <div className="text-center">
                <img
                  src="https://prombs.com/wp-content/uploads/2025/05/outsouce-1024x887.webp"
                  alt="Revenue Cycle Management"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay="100">
               
        <div className="d-flex align-items-start mb-4">
         
          <div className="w-100">
            <div className="d-flex justify-content-between">
                <h6 className="fw-bold  mb-1">Effective claims submission</h6>
                   <h6 className="fw-bold  mb-1">95%</h6>
            </div>
            <div className="progress " style={{ height: "5px" }}>
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: `95%` }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            {/* <p className="fw-bold mb-0">{item.value}</p> */}
          </div>
        </div>
        <div className="d-flex align-items-start mb-4">
         
          <div className="w-100">
            <div className="d-flex justify-content-between">
                <h6 className="fw-bold  mb-1">Streamlined administrative processes</h6>
                   <h6 className="fw-bold  mb-1">92%</h6>
            </div>
            <div className="progress " style={{ height: "5px" }}>
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: `92%` }}
                aria-valuenow="92"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            {/* <p className="fw-bold mb-0">{item.value}</p> */}
          </div>
        </div>
        <div className="d-flex align-items-start mb-4">
         
          <div className="w-100">
            <div className="d-flex justify-content-between">
                <h6 className="fw-bold  mb-1">Simplified billing procedures</h6>
                   <h6 className="fw-bold  mb-1">100%</h6>
            </div>
            <div className="progress " style={{ height: "5px" }}>
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: `100%` }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            {/* <p className="fw-bold mb-0">{item.value}</p> */}
          </div>
        </div>
        <div className="d-flex align-items-start mb-4">
         
          <div className="w-100">
            <div className="d-flex justify-content-between">
                <h6 className="fw-bold  mb-1">Collaborating with field experts</h6>
                   <h6 className="fw-bold  mb-1">96%</h6>
            </div>
            <div className="progress " style={{ height: "5px" }}>
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: `96%` }}
                aria-valuenow="96"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            {/* <p className="fw-bold mb-0">{item.value}</p> */}
          </div>
        </div>
            </div>
            
          </div>
        </div>
      </section>
 
      {/* Service Features Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img
                src="https://prombs.com/wp-content/uploads/2025/05/out-handle.jpg"
                alt="Medical billing specialists"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-down" data-aos-delay="100">
              <h3 className=" mb-4">
                Outsource with Confidence - Exceptional Medical Billing Solutions Nationwide
              </h3>
              <p className="mb-4">
                Transparently optimize your revenue cycle by tapping into enhanced procedural discipline, superior expertise, data analysis, and streamlined technology. Our combined resources and largely advanced strategies empower us to scale Medical Billing procedures for our valued clients.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div
                    className="card  text-white text-center p-3"
                    style={{ background: "rgb(4, 158, 187)", color: "white" }}
                  >
                    <i className="bi bi-clock display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>Decrease processing expenses</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="card  text-white text-center p-3"
                    style={{ background: "rgb(4, 158, 187)", color: "white" }}
                  >
                    <i className="bi bi-file-text display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>
                     Minimize overhead costs
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="card  text-white text-center p-3"
                    style={{ background: "rgb(4, 158, 187)", color: "white" }}
                  >
                    <i className="bi bi-link display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>
                     Increase operational efficiency
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="card  text-white text-center p-3"
                    style={{ background: "rgb(4, 158, 187)", color: "white" }}
                  >
                    <i className="bi bi-shield-check display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>
                      Enhance precision in billing
                    </h6>
                  </div>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card bg-success text-white text-center p-3">
                    <i className="bi bi-gear display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>
                      Maximize revenue collection
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-success text-white text-center p-3">
                    <i className="bi bi-code-slash display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>
                      Prevent revenue loss/leaks
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-success text-white text-center p-3">
                    <i className="bi bi-person-check display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>
                     Assure adherence to regulations
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-success text-white text-center p-3">
                    <i className="bi bi-cpu display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>Decrease denied claims</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section with Contact Form */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8" data-aos="fade-down" data-aos-delay="100">
              <h4 className="t mb-4">
                Your takeaway from Medical Billing Outsourcing to Pro Medical Billing Solutions.
              </h4>
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
                    <span class="">A highly streamlined approach for transitioning the revenue cycle.</span>
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
                    <span class="">Incredibly advanced techniques in dealing with many medical specialties and revenue cycle platforms.</span>
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
                    <span class="">Well-analyzed real-time reporting through an automated workflow tool.</span>
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
                    <span class="">Surety information protection with our trustworthy ISO 27001 certification.</span>
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
                    <span class="">A team of professionals who are professionally experienced in denial management and proficient in medical coding.</span>
                  </li>
                </ul>
                <h4 className="t mt-4">
                A highly streamlined approach for transitioning the revenue cycle.
              </h4>
                
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

      {/* Specialties Section */}
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
 
      {/* Testimonials Section */}
      <div class="page-title">
        <div class="title-wrapper">
          <h1>Our Estemeed Clients</h1>
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

      {/* FAQ Section */}
      <section
        className="bg-light py-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container">
          <h2 className="text-center  mb-5">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                    >
                      What is medical billing and coding, and how does it work?
                    </button>
                  </h2>
                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Medical billing and coding is the process of translating
                      healthcare services into standardized codes and submitting
                      them to insurance companies for reimbursement. Medical
                      coders assign CPT and ICD-10 codes based on clinical
                      documentation, while medical billers prepare and submit
                      claims, follow up on payments, and resolve denials to
                      ensure accurate reimbursement.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      What are the benefits of outsourcing medical billing
                      services?
                    </button>
                  </h2>
                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Outsourcing medical billing services can reduce
                      administrative costs, improve cash flow, increase claim
                      accuracy, and allow healthcare providers to focus on
                      patient care rather than billing complexities.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      How do medical billing services for small practices work?
                    </button>
                  </h2>
                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Medical billing services for small practices typically
                      involve handling the entire revenue cycle management
                      process, from patient registration and insurance
                      verification to claim submission and payment posting,
                      allowing small practices to operate more efficiently.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                    >
                      How long does the medical billing process take?
                    </button>
                  </h2>
                  <div
                    id="faq4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      The medical billing process typically takes 30-90 days
                      from service delivery to payment, depending on the
                      complexity of the claim, insurance payer requirements, and
                      whether any denials or appeals are needed.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className=" text-white py-5" style={{ background: "#049ebb" }}>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8"
              data-aos="fade-up"
              data-aos-delmeday="100"
            >
              <h2 className="mb-4" style={{ color: "white" }}>
                What Sets Our Medical Billing and Coding Services Apart
              </h2>
              <div className="row text-center">
                <div className="col-md-3 mb-3">
                  <i className="bi bi-lightning text-warning display-6"></i>
                  <p>Quick Turnaround Times</p>
                </div>
                <div className="col-md-3 mb-3">
                  <i className="bi bi-headset text-warning display-6"></i>
                  <p>24/7 Helpdesk Support</p>
                </div>
                <div className="col-md-3 mb-3">
                  <i className="bi bi-award text-warning display-6"></i>
                  <p>Qualified Coding Auditors</p>
                </div>
                <div className="col-md-3 mb-3">
                  <i className="bi bi-calendar-check text-warning display-6"></i>
                  <p>30 Days Free Trial</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 text-center"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <div className="bg-white text-dark p-4 rounded">
                <i className="bi bi-heart-pulse  display-4 mb-3"></i>
                <h5 className="">
                  Let's Simplify Your Medical Billing and Coding
                </h5>
                <p>
                  Expert medical billing services tailored for your practice.
                  Fewer errors. Faster payments. Smarter billing in healthcare.
                </p>
               <NavLink to="/contact"> <button className="btn btn-danger">
                  Get a Free Billing Consultation →
                </button></NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalBillingPage;
