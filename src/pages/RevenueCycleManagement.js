import React from "react";

const RevenueCycleManagement = () => {
  return (
    <div className="container py-5">
      {/* Revenue Cycle Management Section */}
      <div
        className="row justify-content-center text-center mb-5 mt-5"
        style={{ marginTop: "100px" }}
      >
        <div className="col-12">
          <h2 className="" style={{ color: "rgb(4, 158, 187)" }}>
            Revenue Cycle Management
          </h2>
          <h1 className="display-4 fw-bold">
            From patients to payers, and everything in between
          </h1>
          <p className="lead">
            Achieve a denial rate under 3%* and up to 97%* First Time Pass Rate
            approval with CareCloud’s Revenue Cycle Management (RCM) system.
            Convert billing challenges into revenue opportunities with
            CareCloud.
          </p>
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div
        className="row justify-content-center mb-5"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <div className="col-12 col-md-6 text-center">
          <a
            href="#"
            className="btn btn-primary btn-lg me-2 mb-2 border-0"
            style={{ backgroundColor: "rgb(4, 158, 187)" }}
          >
            <i className="fas fa-angle-right"></i> Get a demo
          </a>
          <a
            href="#"
            className="btn btn-outline-primary btn-lg mb-2 "
            target="_blank"
            rel="noopener noreferrer"
            style={{
              borderColor: "rgb(4, 158, 187)",
              color: "rgb(4, 158, 187)",
            }}
          >
            <i className="fas fa-angle-right"></i> Contact Sales
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="row justify-content-center mb-5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="col-12 col-md-8">
          <img
            src="https://carecloud.com/wp-content/uploads/2025/03/banner-rcm.webp"
            alt="A doctor using a laptop to review patient records and manage revenue cycle tasks"
            className="img-fluid w-100"
          />
        </div>
      </div>

      {/* All-in-One Solution */}
      <div
        className="row justify-content-center text-center mb-5"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <div className="col-12">
          <p className="h4">CareCloud All-in-one</p>
          <p className="h5">RCM is just part of our All-in-One Solution</p>
          <a
            href="/solutions/"
            className="btn btn-primary mt-3 border-0"
            style={{ backgroundColor: "rgb(4, 158, 187)" }}
          >
            <i className="fas fa-angle-right"></i> Explore All-In-One
          </a>
        </div>
      </div>

      {/* Feature List */}
      <div
        className="row justify-content-center mb-5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="col-12 col-md-6">
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i> Practice
              Management
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i>{" "}
              Electronic Health Records
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i> Revenue
              Cycle Management
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i> AI
              powered clinical documentation
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i> Patient
              Engagement
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i>{" "}
              Insurance claim submission
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i> Robotic
              process automation
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i>{" "}
              Physician Credentialing
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i> Remote
              Patient Monitoring
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i>{" "}
              Telehealth
            </li>
          </ul>
        </div>
      </div>

      {/* Maximize Financial Health */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12">
          <h2 className="h2">Maximize your Practice's Financial Health</h2>
          <h3 className="h4">
            AI-Powered Solutions for Smarter Revenue Cycle Management
          </h3>
          <p className="lead">
            CareCloud’s AI-powered RCM software will accelerate your practice’s
            cash flow. Improve claim acceptance rate, optimize billing, and
            simplify financial management with an all-in-one cloud-based RCM
            solution. Ensure consistent revenue growth with data-driven
            insights.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="row g-4 mb-5" data-aos="fade-right" data-aos-delay="200">
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className="card h-100"
            style={{ border: "1px solid rgb(4, 158, 187)" }}
          >
            <div className="card-body text-center">
              <i
                className="fas fa-shield-alt fa-3x  mb-3"
                style={{ color: "rgb(4, 158, 187)" }}
              ></i>
              <h4 className="card-title">Denial Prevention Tools</h4>
              <p className="card-text">
                RCM proactively detects billing errors and coding discrepancies
                before claim submission, ensuring accuracy and improving revenue
                consistency through automated error identification and
                correction.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className="card h-100 "
            style={{ border: "1px solid rgb(4, 158, 187)" }}
          >
            <div className="card-body text-center">
              <i
                className="fas fa-check-circle fa-3x  mb-3"
                style={{ color: "rgb(4, 158, 187)" }}
              ></i>
              <h4 className="card-title">Prior Authorization Management</h4>
              <p className="card-text">
                Automates obtaining payer authorizations, minimizing manual
                follow-ups, and ensuring faster approvals for time-sensitive
                medical procedures.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className="card h-100"
            style={{ border: "1px solid rgb(4, 158, 187)" }}
          >
            <div className="card-body text-center">
              <i
                className="fas fa-chart-line fa-3x t mb-3"
                style={{ color: "rgb(4, 158, 187)" }}
              ></i>
              <h4 className="card-title">End-to-End Revenue Management</h4>
              <p className="card-text">
                Provides support for the complete revenue cycle from patient
                registration to payment collection by automating tasks and
                improving financial efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className="card h-100"
            style={{ border: "1px solid rgb(4, 158, 187)" }}
          >
            <div className="card-body text-center">
              <i
                className="fas fa-sync-alt fa-3x  mb-3"
                style={{ color: "rgb(4, 158, 187)" }}
              ></i>
              <h4 className="card-title">Seamless EHR Integration</h4>
              <p className="card-text">
                Synchronizes clinical and billing data in real-time, reducing
                administrative work, enhancing accuracy, and promoting efficient
                healthcare practice operations.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className="card h-100"
            style={{ border: "1px solid rgb(4, 158, 187)" }}
          >
            <div className="card-body text-center">
              <i
                className="fas fa-dollar-sign fa-3x  mb-3"
                style={{ color: "rgb(4, 158, 187)" }}
              ></i>
              <h4 className="card-title">Optimized Claim Reimbursement</h4>
              <p className="card-text">
                RCM estimates claim payment amounts and timelines, enabling
                faster reimbursement and minimizing delays between claim
                submission and payment.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className="card h-100"
            style={{ border: "1px solid rgb(4, 158, 187)" }}
          >
            <div className="card-body text-center">
              <i
                className="fas fa-gavel fa-3x  mb-3"
                style={{ color: "rgb(4, 158, 187)" }}
              ></i>
              <h4 className="card-title">Appeals Automation</h4>
              <p className="card-text">
                RCM streamlines appeal filing, enhancing accuracy, reducing
                rejections, and accelerating resolutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Free RCM Assessment */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12">
          <h5>Optimize Your Revenue Cycle with CareCloud</h5>
          <h3>Get Your Free RCM Assessment</h3>
          <p className="lead">
            Maximize collections, minimize administrative burden, and improve
            financial performance with our expert-driven RCM solutions.
            CareCloud’s revenue cycle assessments (RCAs) help practices of all
            sizes streamline operations, reduce denials, and accelerate
            payments.
          </p>
          <a
            href="#"
            className="btn  btn-lg me-2 mb-2 border-0"
            style={{ backgroundColor: "rgb(4, 158, 187)", color: "#fff" }}
          >
            <i className="fas fa-angle-right"></i> Request Assessment
          </a>
          <a
            href="#"
            className="btn  btn-lg mb-2"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#fff",
              color: "rgb(4, 158, 187)",
              border: "1px solid rgb(4, 158, 187)",
            }}
          >
            <i className="fas fa-angle-right"></i> Contact Sales
          </a>
        </div>
      </div>

      {/* Additional Features */}
      <div className="row g-4 mb-5">
        <div className="col-12 col-md-4">
          <div
            className="card h-100 text-center"
            style={{ border: "1px solid rgb(4, 158, 187)" }}
          >
            <div className="card-body">
              <img
                src="https://carecloud.com/wp-content/uploads/2025/03/Adaptive-Strategy.svg"
                alt="Adaptive Strategy"
                className="card-img-top mx-auto mb-3"
                style={{ width: "50px" }}
              />
              <h4 className="card-title">Adaptive Strategy</h4>
              <p className="card-text">
                We integrate seamlessly with your existing PM/EHR system or
                provide a full-suite solution. Our adaptive approach ensures
                smooth operations without forcing system changes.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div
            className="card h-100 text-center"
            style={{ border: "1px solid rgb(4, 158, 187)" }}
          >
            <div className="card-body">
              <img
                src="https://carecloud.com/wp-content/uploads/2025/03/Full-Transparency-2.svg"
                alt="Full Transparency"
                className="card-img-top mx-auto mb-3"
                style={{ width: "51px" }}
              />
              <h4 className="card-title">Above & Beyond</h4>
              <p className="card-text">
                More than just billing, our team proactively optimizes your
                revenue cycle. From claims submissions to denial management, we
                capture every dollar you've earned.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div
            className="card h-100 text-center"
            style={{ border: "1px solid rgb(4, 158, 187)" }}
          >
            <div className="card-body">
              <img
                src="https://carecloud.com/wp-content/uploads/2025/03/Above-Beyond-2.svg"
                alt="Above Beyond"
                className="card-img-top mx-auto mb-3"
                style={{ width: "51px" }}
              />
              <h4 className="card-title">Full Transparency</h4>
              <p className="card-text">
                Gain complete visibility into your financial health. With
                real-time reporting, performance analytics, and expert insights,
                you stay in control while we handle the complexities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Complete RCM Support */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 text-center">
          <h3>Your Complete RCM Support</h3>
          <p className="lead">
            We help you identify hidden revenue opportunities, streamline
            operations, and capture every dollar from patients to payers.
          </p>
          <h5>Contract/Payer Negotiations</h5>
          <p>
            We analyze existing payer contracts, negotiate better terms, and
            optimize fee schedules to maximize reimbursements.
          </p>
          <h5>Prior Authorization</h5>
          <p>
            Our team handles all prior authorization requests via phone, fax,
            and email, ensuring faster approvals and fewer denials.
          </p>
          <h5>Inbound Patient Call Center</h5>
          <p>
            Patients can easily reach our dedicated support team to resolve
            billing inquiries, reduce delays, and improve satisfaction.
          </p>
          <h5>Out Of Network Billing</h5>
          <p>
            We take care of out-of-network claims from submission to payment,
            increasing reimbursements and reducing write-offs.
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12">
          <h3 className="position-relative">
            <img
              src="https://carecloud.com/wp-content/uploads/2025/02/unnamed-file.png"
              alt="Quote"
              className="quoteImg"
              style={{
                position: "absolute",
                left: "-20px",
                top: "-10px",
                width: "30px",
              }}
            />
            "The software is user-friendly, our client manager listens to our
            needs, and the workflow analysis is incredibly helpful. We've been
            able to reduce our administrative workload by 70%."
            <img
              src="https://carecloud.com/wp-content/uploads/2025/02/unnamed-file.png"
              alt="Quote"
              className="quoteImg1"
              style={{
                position: "absolute",
                right: "-20px",
                bottom: "-10px",
                width: "30px",
                transform: "rotate(180deg)",
              }}
            />
          </h3>
          <p className="mt-3">Dr. Alberto Dominguez-Bali - OB-GYN MCHS</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 text-center">
          <p className="text-muted small">
            *Based on the national average. CareCloud makes no guarantee,
            warranty, or representation concerning the outcome of your practice,
            as many factors may impact actual results, including, but not
            limited to, geographic location and size of practice.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-12">
          <h3>Frequently Asked Questions</h3>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What Should Healthcare Providers Keep in Mind When Choosing an
                  RCM System?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  When selecting a Revenue Cycle Management (RCM) system,
                  providers should prioritize automation, integration,
                  compliance, and scalability. A strong RCM solution should
                  streamline billing, claims processing, and denials management
                  while seamlessly integrating with EHR and PM systems. Security
                  and HIPAA compliance are critical to protecting patient data
                  and avoiding costly penalties.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Why is CareCloud the Best Choice for Your RCM Needs?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  CareCloud offers a cutting-edge RCM solution powered by
                  automation and AI-driven microbots. It reduces manual errors,
                  speeds up claims processing, and optimizes cash flow. With
                  seamless EHR and PM integration, built-in compliance measures,
                  and advanced analytics, CareCloud helps healthcare providers
                  maximize revenue while improving efficiency.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Does CareCloud Offer an End-to-End RCM Solution?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes! CareCloud provides a fully integrated, end-to-end RCM
                  solution that covers everything from patient registration and
                  insurance verification to claims processing, denial
                  management, and payment posting. With automated workflows and
                  real-time insights, CareCloud ensures smooth revenue cycle
                  operations for practices of all sizes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Streamline Your Practice */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12">
          <p>We’re Here to Help</p>
          <h3>Streamline Your Practice with CareCloud</h3>
          <div className="row g-4" style={{ marginTop: "50px" }}>
            <div className="col-12 col-md-4">
              <h4>See CareCloud in Action</h4>
              <p>Discover how our platform can transform your workflow.</p>
              <a
                href="#"
                className="btn  btn-lg"
                style={{ background: "rgb(4, 158, 187)", color: "#fff" }}
              >
                <i className="fas fa-angle-right"></i> Book Your Demo
              </a>
            </div>
            <div className="col-12 col-md-4">
              <h4>Need Quick Support? Let’s Chat</h4>
              <p>Our experts are ready to assist you in real-time.</p>
              <a
                href="#"
                className="btn  btn-lg"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "rgb(4, 158, 187)", color: "#fff" }}
              >
                <i className="fas fa-angle-right"></i> Chat with Us Instantly
              </a>
            </div>
            <div className="col-12 col-md-4">
              <h4>Talk to an Expert Today</h4>
              <p>1-877-342-7517</p>
              <a
                href="tel:1-877-342-7517"
                className="btn  btn-lg"
                style={{ background: "rgb(4, 158, 187)", color: "#fff" }}
              >
                <i className="fas fa-angle-right"></i> Get Assistance
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueCycleManagement;
