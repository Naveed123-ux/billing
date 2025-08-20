import React from "react";
import { useState } from "react";
import "../Billins.css";

const MedicalBillingPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="medical-billing-page">
      {/* Hero Section */}
      <section className=" text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="text-light mb-2">
                Reliable, Transparent, and Scalable Billing for Modern Practices
              </p>
              <h1
                className="display-4 fw-bold mb-4 mt-4"
                style={{ fontSize: "2.5rem" }}
              >
                End-to-End Medical Billing and Coding That Simplifies Your
                Revenue Cycle
              </h1>
              <p className="lead mb-4" style={{ color: "rgb(4, 158, 187)" }}>
                We help healthcare providers take control of their revenue cycle
                with expert medical billing and coding services. From accurate
                claim submission to recovering aged receivables, we handle every
                step so you can focus on patient care.
              </p>
              <ul
                className="list-unstyled"
                style={{ color: "rgb(4, 158, 187)" }}
              >
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  <span>Boost revenue by up to 30%</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  <span>Achieve 98.9% first-pass acceptance</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  <span>Recover 120+ day-old AR with ease</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  <span>Get 24/7 support from certified experts</span>
                </li>
              </ul>
              <button className="btn btn-danger btn-lg">
                Consult with Denial Experts
              </button>
            </div>
            <div className="col-lg-6">
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
      <section className="bg-info text-white py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <div className="row text-center">
                <div className="col-md-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-building me-2"></i>
                    <span>Monthly Coding Audit</span>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-people me-2"></i>
                    <span>Expert Medical Billers</span>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-shield-check me-2"></i>
                    <span>Real-Time Insurance Verification</span>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-graph-up me-2"></i>
                    <span>Denial Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="bg-white text-dark p-4 rounded">
                <div className="row text-center">
                  <div className="col-md-3 mb-4">
                    <i className="bi bi-award text-primary display-4"></i>
                    <h3 className="text-primary">15+</h3>
                    <p>Years of Experience</p>
                  </div>
                  <div className="col-md-3 mb-4">
                    <i className="bi bi-people text-primary display-4"></i>
                    <h3 className="text-primary">150+</h3>
                    <p>Providers</p>
                  </div>
                  <div className="col-md-3 mb-4">
                    <i className="bi bi-laptop text-primary display-4"></i>
                    <h3 className="text-primary">30+</h3>
                    <p>Software</p>
                  </div>
                  <div className="col-md-3 mb-4">
                    <i className="bi bi-heart-pulse text-primary display-4"></i>
                    <h3 className="text-primary">50+</h3>
                    <p>Specialties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <p className="lead">
                  Thousands of providers growing their practice with PROMBS.
                </p>
                <p className="h5">"Now It's Your Turn"!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-primary mb-4">
                Why Choose Us For Denial Management
              </h2>
              <p className="mb-4">
                Our denial management services are designed to recover missed
                revenue, minimize payment delays, and strengthen your revenue
                cycle at every stage. We pinpoint the root causes of denials,
                resolve workflow inefficiencies, and ensure each claim stays on
                track through real-time monitoring and full transparency.
              </p>
              <p className="mb-4">
                From underpayment recovery to aged A/R cleanup, we work to
                ensure every dollar earned is collected. Our experienced billing
                team leverages payer-specific strategies, crafts effective
                appeals, and streamlines your billing operations so you can
                focus on patient care instead of payment pursuit.
              </p>
              <button className="btn btn-danger">
                Consult with Denial Experts
              </button>
            </div>
            <div className="col-lg-6">
              <h2 className="text-primary mb-4">
                Denial Management Services That Actually Work
              </h2>
              <p className="mb-4">
                Our denial management services are designed to optimize your
                processes, accelerate collections, reduce errors, and improve
                cash flow. We deliver more than resubmissions, providing
                data-driven solutions that achieve measurable results.
              </p>
              <div className="row">
                <div className="col-md-4 text-center mb-3">
                  <i className="bi bi-search text-primary display-6"></i>
                  <h6>Identifying Denial Reasons</h6>
                </div>
                <div className="col-md-4 text-center mb-3">
                  <i className="bi bi-clipboard-data text-primary display-6"></i>
                  <h6>Categorizing Denial</h6>
                </div>
                <div className="col-md-4 text-center mb-3">
                  <i className="bi bi-arrow-repeat text-primary display-6"></i>
                  <h6>Resubmitting Claims</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Billing Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://prombs.com/wp-content/uploads/2025/05/passion.webp"
                alt="Medical billing team"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6">
              <p className="text-primary mb-2">
                Reliable, Transparent, and Scalable Billing for Modern Practices
              </p>
              <h2 className="mb-4">
                End-to-End Medical Billing and Coding That Simplifies Your
                Revenue Cycle
              </h2>
              <p className="mb-4">
                We help healthcare providers take control of their revenue cycle
                with expert medical billing and coding services. From accurate
                claim submission to recovering aged receivables, we handle every
                step so you can focus on patient care.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <span>Boost revenue by up to 30%</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <span>Achieve 98.9% first-pass acceptance</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <span>Recover 120+ day-old AR with ease</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  <span>Get 24/7 support from certified experts</span>
                </li>
              </ul>
              <button className="btn btn-danger">
                Get a Free Billing Audit Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-primary mb-4">
                How We Simplify Medical Billing and Coding From Start to Finish
              </h2>
              <p className="mb-4">
                We handle the entire billing process so you don't have to. From
                patient scheduling to final payment, our certified team manages
                every step with accuracy and care.
              </p>
              <p className="mb-4">
                Once care is delivered, our experts take over the medical coding
                services. We assign the correct codes, follow the latest rules,
                and make sure nothing is missed.
              </p>
              <p className="mb-4">
                Next comes claims submission. Every claim is tracked until it's
                resolved. If a payer denies it, our denial management team jumps
                in to correct and resubmit it quickly.
              </p>
              <button className="btn btn-danger">Let's Get Started</button>
            </div>
            <div className="col-lg-6">
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

      {/* Service Features Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="http://prombs.com/wp-content/uploads/2024/10/Why-Pro-Medical-Billing-Solutions11.webp"
                alt="Medical billing specialists"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-primary mb-4">
                Let a Medical Billing Specialist Handle the Process for You
              </h2>
              <p className="mb-4">
                Outsourcing to a trusted medical billing specialist helps reduce
                delays, improve accuracy, and speed up your revenue cycle. We
                handle the full medical billing process using proven systems.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div
                    className="card  text-white text-center p-3"
                    style={{ background: "rgb(4, 158, 187)", color: "white" }}
                  >
                    <i className="bi bi-clock display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>On-Time Claim Submission</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="card  text-white text-center p-3"
                    style={{ background: "rgb(4, 158, 187)", color: "white" }}
                  >
                    <i className="bi bi-file-text display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>
                      Quick Clear Documentation
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
                      Integration With Insurance System
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
                      Regular Audits & Compliance
                    </h6>
                  </div>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card bg-success text-white text-center p-3">
                    <i className="bi bi-gear display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>
                      Billing Automation System
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-success text-white text-center p-3">
                    <i className="bi bi-code-slash display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>
                      Efficient billing & Coding
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-success text-white text-center p-3">
                    <i className="bi bi-person-check display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>
                      Accurate Patient Information
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-success text-white text-center p-3">
                    <i className="bi bi-cpu display-6 mb-2"></i>
                    <h6 style={{ color: "white" }}>Robust Coding Systems</h6>
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
            <div className="col-lg-8">
              <h2 className="text-primary mb-4">
                What Sets Our Medical Billing and Coding Services Apart
              </h2>
              <p className="mb-4">
                If you're ready to improve collections, reduce denials, and get
                faster payments, you're in the right place. Our certified team
                delivers expert medical billing and coding services designed to
                improve every stage of the billing cycle.
              </p>

              <h3 className="text-primary mb-4">
                The Outcomes We Help Providers Achieve
              </h3>

              <div className="row g-4 mb-5">
                <div className="col-md-3 text-center">
                  <i className="bi bi-speedometer2 text-primary display-6"></i>
                  <h4 className="text-primary">25 Days</h4>
                  <p>Rapid Revenue Recovery</p>
                </div>
                <div className="col-md-3 text-center">
                  <i className="bi bi-check-circle text-primary display-6"></i>
                  <h4 className="text-primary">99%</h4>
                  <p>First-Pass Resolution</p>
                </div>
                <div className="col-md-3 text-center">
                  <i className="bi bi-x-circle text-danger display-6"></i>
                  <h4 className="text-danger">5% - 10%</h4>
                  <p>Denial & Rejection</p>
                </div>
                <div className="col-md-3 text-center">
                  <i className="bi bi-clock text-primary display-6"></i>
                  <h4 className="text-primary">24Hours</h4>
                  <p>Short Turnaround Time</p>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-3 text-center">
                  <i className="bi bi-file-earmark-check text-primary display-6"></i>
                  <h4 className="text-primary">95%</h4>
                  <p>Electronic Claim</p>
                </div>
                <div className="col-md-3 text-center">
                  <i className="bi bi-credit-card text-primary display-6"></i>
                  <h4 className="text-primary">95%</h4>
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

            <div className="col-lg-4">
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

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="companyName"
                        placeholder="Practice or Company Name*"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="Phone Number*"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <select
                        className="form-select"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
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
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger w-100">
                      Submit
                    </button>
                  </form>

                  <div className="mt-3">
                    <p className="mb-1">
                      <i className="bi bi-telephone me-2"></i>(725) 237-2757
                    </p>
                    <p>
                      <i className="bi bi-envelope me-2"></i>info@prombs.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="text-primary mb-4">
                Billing and Coding Services for Every Specialty and Practice
                Size
              </h2>
              <p className="mb-4">
                We support a wide range of providers with customized medical
                billing and coding services that improve accuracy, reduce
                delays, and help you get paid faster.
              </p>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white rounded">
                    <i className="bi bi-heart-pulse text-primary me-3 display-6"></i>
                    <span>Gastroenterology Billing Services</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white rounded">
                    <i className="bi bi-heart text-primary me-3 display-6"></i>
                    <span>Cardiology Billing Services</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white rounded">
                    <i className="bi bi-person-wheelchair text-primary me-3 display-6"></i>
                    <span>Physical Therapy Billing Services</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white rounded">
                    <i className="bi bi-brain text-primary me-3 display-6"></i>
                    <span>Neurosurgery Billing Services</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white rounded">
                    <i className="bi bi-person-hearts text-primary me-3 display-6"></i>
                    <span>Pediatric Medical Billing Services</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white rounded">
                    <i className="bi bi-bandaid text-primary me-3 display-6"></i>
                    <span>Chiropractic Billing Services</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white rounded">
                    <i className="bi bi-capsule text-primary me-3 display-6"></i>
                    <span>Pain Management Billing Services</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white rounded">
                    <i className="bi bi-emoji-smile text-primary me-3 display-6"></i>
                    <span>Behavioral Health Billing</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white rounded">
                    <i className="bi bi-hospital text-primary me-3 display-6"></i>
                    <span>Internal Medicine Billing Services</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white rounded">
                    <i className="bi bi-scissors text-primary me-3 display-6"></i>
                    <span>Orthopedic Billing Services</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white rounded">
                    <i className="bi bi-person-plus text-primary me-3 display-6"></i>
                    <span>Plastic Surgery Billing Services</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white rounded">
                    <i className="bi bi-eye text-primary me-3 display-6"></i>
                    <span>Ophthalmology Billing Services</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card bg-danger text-white">
                <div className="card-header">
                  <h5 className="card-title mb-0">Our Expertise</h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      - Patient Scheduling & Registration
                    </li>
                    <li className="mb-2">- Verification of Benefits</li>
                    <li className="mb-2">- Authorization & Referral</li>
                    <li className="mb-2">- Medical Billing</li>
                    <li className="mb-2">- Medical Coding</li>
                    <li className="mb-2">- Medical Billing Financial Audit</li>
                    <li className="mb-2">- Charge Entry & Payment Posting</li>
                    <li className="mb-2">- Billing & Coding Audit</li>
                    <li className="mb-2">- Denial Management</li>
                    <li className="mb-2">- AR Management</li>
                    <li className="mb-2">- Revenue Cycle Optimization</li>
                    <li className="mb-2">- Old AR Management</li>
                    <li className="mb-2">- Patient Billing & Statements</li>
                    <li className="mb-2">- Collections Services</li>
                    <li className="mb-2">- Patient Help 24/7</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-primary mb-5">
            Our Esteemed Clients' Testimonials
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">
                    "We have been using Pro Medical Billing Solutions for
                    several years, and we have been extremely satisfied with
                    their services. They have helped us to optimize our billing
                    and coding practices, resulting in improved cash flow for
                    our practice."
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/038/962/461/non_2x/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg"
                      alt="Marissa Vazquez"
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h6 className="mb-0 text-danger">
                        Presence Therapy (Nevada)
                      </h6>
                      <small className="text-muted">
                        Marissa Vazquez | Office Manager
                      </small>
                    </div>
                  </div>
                  <div className="text-warning mt-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">
                    "Pro MBS has provided excellent satisfaction for our Medical
                    Billing and Coding operations. We conduct regular meetings
                    with their team. They are updated with current industry
                    trends and keep very high standards."
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/038/962/461/non_2x/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg"
                      alt="Huiping Xu"
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h6 className="mb-0 text-danger">
                        Whole Health Professional PLLC (Texas)
                      </h6>
                      <small className="text-muted">Huiping Xu | MD</small>
                    </div>
                  </div>
                  <div className="text-warning mt-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">
                    "Pro Medical billing Solutions has numerous strengths. One
                    of mine is effective communication and has kept me aware of
                    billing updates and claim processes. I am impressed with the
                    swift claim processing."
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/038/962/461/non_2x/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg"
                      alt="Sandra Diaz"
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h6 className="mb-0 text-danger">
                        South Main Clinic (Texas)
                      </h6>
                      <small className="text-muted">Sandra Diaz | CEO</small>
                    </div>
                  </div>
                  <div className="text-warning mt-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center text-primary mb-5">
            Frequently Asked Questions
          </h2>
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
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
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
            <div className="col-lg-4 text-center">
              <div className="bg-white text-dark p-4 rounded">
                <i className="bi bi-heart-pulse text-primary display-4 mb-3"></i>
                <h5 className="text-primary">
                  Let's Simplify Your Medical Billing and Coding
                </h5>
                <p>
                  Expert medical billing services tailored for your practice.
                  Fewer errors. Faster payments. Smarter billing in healthcare.
                </p>
                <button className="btn btn-danger">
                  Get a Free Billing Consultation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalBillingPage;
