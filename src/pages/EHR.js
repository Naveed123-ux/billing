import React, { useState } from "react";
import { Link } from "react-router-dom";

const EHRPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mb-5" style={{ marginTop: "100px" }}>
      {/* Hero Section */}
      <div
        className="row align-items-center mb-5"
        style={{ marginTop: "50px" }}
      >
        <div
          className="col-12 col-lg-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="" style={{ color: "rgb(4, 158, 187)" }}>
            Electronic Health Records
          </h2>
          <h1 className="display-4 fw-bold">
            Optimized Financial and Clinical Performance with Our Advanced EHR
          </h1>
          <p className="lead">
            Empower your practice with a top-tier EHR solution to enhance
            patient care and streamline operations. From managing patient flow
            to ePrescribing, our fully certified EHR provides all the tools to
            improve efficiency, outcomes, and profitability.
          </p>
          <div className="d-flex gap-3">
            <Link to="/bookdemo">
              <a
                href="#"
                className="btn btn-sm"
                style={{
                  backgroundColor: "rgb(4, 158, 187)",
                  color: "white",
                }}
              >
                Schedule a demo <i className="fas fa-angle-right"></i>
              </a>
            </Link>

            <button
              className="btn btn-sm"
              style={{
                border: " 1px solid rgb(4, 158, 187)",
                color: "rgb(4, 158, 187)",
                backgroundColor: "transparent",
              }}
              onClick={openModal}
            >
              Contact Sales <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div
          className="col-12 col-lg-6"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <img
            src="https://carecloud.com/wp-content/uploads/2025/04/2025_03_intelligent_analytics_1_1x.webp  "
            alt="Healthcare Analytics Dashboard"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* All-in-One Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h3 className="fw-bold">Billing Vista All-in-one</h3>
          <p className="lead">
            Charts-EHR is just part of our All-in-One Solution
          </p>
          <a
            href="#"
            className="btn  btn-sm"
            style={{ backgroundColor: "rgb(4, 158, 187)", color: "white" }}
          >
            Explore All-In-One <i className="fas fa-angle-right"></i>
          </a>
        </div>
      </div>

      {/* Features List */}
      <div className="row mb-5">
        <div className="col-12">
          <ul className="list-group">
            <li className="list-group-item d-flex align-items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="me-2"
              >
                <path
                  d="M6.78741 10L12.7388 3.75C12.8578 3.625 12.8578 3.5 12.7388 3.375L12.2627 2.875C12.1436 2.75 12.0246 2.75 11.9056 2.875L5.59714 9.5C5.47811 9.625 5.24005 9.625 5.12103 9.5L2.3834 6.625C2.26437 6.5 2.14534 6.5 2.02632 6.625L1.55021 7.125C1.43118 7.25 1.43118 7.375 1.55021 7.5L3.93075 10L5.12103 11.25C5.24005 11.375 5.47811 11.375 5.59714 11.25L6.78741 10Z"
                  fill="green"
                />
              </svg>
              Practice Management
            </li>
            <li className="list-group-item d-flex align-items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="me-2"
              >
                <path
                  d="M6.78741 10L12.7388 3.75C12.8578 3.625 12.8578 3.5 12.7388 3.375L12.2627 2.875C12.1436 2.75 12.0246 2.75 11.9056 2.875L5.59714 9.5C5.47811 9.625 5.24005 9.625 5.12103 9.5L2.3834 6.625C2.26437 6.5 2.14534 6.5 2.02632 6.625L1.55021 7.125C1.43118 7.25 1.43118 7.375 1.55021 7.5L3.93075 10L5.12103 11.25C5.24005 11.375 5.47811 11.375 5.59714 11.25L6.78741 10Z"
                  fill="green"
                />
              </svg>
              Insurance Eligibility
            </li>
            <li className="list-group-item d-flex align-items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="me-2"
              >
                <path
                  d="M6.78741 10L12.7388 3.75C12.8578 3.625 12.8578 3.5 12.7388 3.375L12.2627 2.875C12.1436 2.75 12.0246 2.75 11.9056 2.875L5.59714 9.5C5.47811 9.625 5.24005 9.625 5.12103 9.5L2.3834 6.625C2.26437 6.5 2.14534 6.5 2.02632 6.625L1.55021 7.125C1.43118 7.25 1.43118 7.375 1.55021 7.5L3.93075 10L5.12103 11.25C5.24005 11.375 5.47811 11.375 5.59714 11.25L6.78741 10Z"
                  fill="green"
                />
              </svg>
              Insurance Claim Submission
            </li>
            <li className="list-group-item d-flex align-items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="me-2"
              >
                <path
                  d="M6.78741 10L12.7388 3.75C12.8578 3.625 12.8578 3.5 12.7388 3.375L12.2627 2.875C12.1436 2.75 12.0246 2.75 11.9056 2.875L5.59714 9.5C5.47811 9.625 5.24005 9.625 5.12103 9.5L2.3834 6.625C2.26437 6.5 2.14534 6.5 2.02632 6.625L1.55021 7.125C1.43118 7.25 1.43118 7.375 1.55021 7.5L3.93075 10L5.12103 11.25C5.24005 11.375 5.47811 11.375 5.59714 11.25L6.78741 10Z"
                  fill="green"
                />
              </svg>
              Patient Payments
            </li>
          </ul>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="fw-bold">
            Work Smarter, Care Better <br />
            An EHR Designed for You
          </h2>
          <p className="lead">
            Billing Vista EHR is designed to simplify your daily tasks, reduce
            administrative burdens, and enhance patient care. With an intuitive
            interface and smart automation, you can streamline workflows,
            improve efficiency, and focus on your patients the most.
          </p>
          <div className="accordion" id="ehrAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className={`accordion-button ${
                    activeAccordion === 1 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(1)}
                  aria-expanded={activeAccordion === 1}
                  aria-controls="collapseOne"
                >
                  Workflow
                </button>
              </h2>
              <div
                id="collapseOne"
                className={`accordion-collapse collapse ${
                  activeAccordion === 1 ? "show" : ""
                }`}
                aria-labelledby="headingOne"
                data-bs-parent="#ehrAccordion"
              >
                <div className="accordion-body">
                  Take smarter, faster action with real-time patient information
                  at the point of care.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className={`accordion-button ${
                    activeAccordion === 2 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(2)}
                  aria-expanded={activeAccordion === 2}
                  aria-controls="collapseTwo"
                >
                  Flexible Charting
                </button>
              </h2>
              <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${
                  activeAccordion === 2 ? "show" : ""
                }`}
                aria-labelledby="headingTwo"
                data-bs-parent="#ehrAccordion"
              >
                <div className="accordion-body">
                  Customize templates, order sets, and charting options for
                  efficient documentation.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className={`accordion-button ${
                    activeAccordion === 3 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(3)}
                  aria-expanded={activeAccordion === 3}
                  aria-controls="collapseThree"
                >
                  Clinical Decision Support (CDS)
                </button>
              </h2>
              <div
                id="collapseThree"
                className={`accordion-collapse collapse ${
                  activeAccordion === 3 ? "show" : ""
                }`}
                aria-labelledby="headingThree"
                data-bs-parent="#ehrAccordion"
              >
                <div className="accordion-body">
                  Get real-time intelligence to enhance decision-making and
                  patient safety.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="row text-center bg-light p-5 rounded">
        <div className="col-12">
          <h3>Streamline Your Practice with Billing Vista</h3>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a
              href="#"
              className="btn  btn-sm"
              style={{
                backgroundColor: "rgb(4, 158, 187)",
                color: "white",
              }}
            >
              Book Your Demo <i className="fas fa-angle-right"></i>
            </a>
            <button
              className="btn btn-sm"
              style={{
                border: "1px solid rgb(4, 158, 187)",
                color: "rgb(4, 158, 187)",
                backgroundColor: "transparent",
              }}
              onClick={openModal}
            >
              Chat with Us Instantly <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Contact Sales Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  style={{ color: "rgb(4, 158, 187)" }}
                >
                  Contact Sales
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <div className="mb-4">
                  <h6 className="fw-bold">Get in touch with our sales team</h6>
                  <p className="text-muted">
                    We're here to help you find the perfect solution for your
                    practice.
                  </p>
                </div>
                <div className="contact-info">
                  <div className="mb-3">
                    <i
                      className="fas fa-phone me-2"
                      style={{ color: "rgb(4, 158, 187)" }}
                    ></i>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+12535457483" className="text-decoration-none">
                      +1 (253) 545-7483
                    </a>
                  </div>
                  <div className="mb-3">
                    <i
                      className="fas fa-envelope me-2"
                      style={{ color: "rgb(4, 158, 187)" }}
                    ></i>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:info@billingvista.com"
                      className="text-decoration-none"
                    >
                      info@billingvista.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EHRPage;
