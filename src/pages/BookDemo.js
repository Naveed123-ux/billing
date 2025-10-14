import React from "react";
import { useForm } from "react-hook-form";

const BookDemo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Get references to UI elements for feedback
    const loadingDiv = document.querySelector(".loading");
    const errorMessageDiv = document.querySelector(".error-message");
    const sentMessageDiv = document.querySelector(".sent-message");

    try {
      // Show loading state
      if (loadingDiv) loadingDiv.style.display = "block";
      if (errorMessageDiv) errorMessageDiv.style.display = "none";
      if (sentMessageDiv) sentMessageDiv.style.display = "none";

      // Make the real API request to your server
      const response = await fetch(
        "https://actons-billing.vercel.app/api/book-demo",
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
        reset(); // Clear the form
      } else {
        // Show error message from server
        if (loadingDiv) loadingDiv.style.display = "none";
        if (errorMessageDiv) {
          errorMessageDiv.textContent =
            result.message || "Something went wrong. Please try again.";
          errorMessageDiv.style.display = "block";
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      // Show generic error message
      if (loadingDiv) loadingDiv.style.display = "none";
      if (errorMessageDiv) {
        errorMessageDiv.textContent =
          "Failed to connect to server. Please check your connection and try again.";
        errorMessageDiv.style.display = "block";
      }
    }
  };

  return (
    <>
      <div className="page-title">
        <div className="breadcrumbs">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">
                  <i className="bi bi-house"></i> Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Category</a>
              </li>
              <li className="breadcrumb-item active current">Book Demo</li>
            </ol>
          </nav>
        </div>

        <div className="title-wrapper">
          <h1>Book Demo</h1>
          <p>
            Schedule a personalized demo to see how our platform can transform
            your billing workflow.
          </p>
        </div>
      </div>

      <section id="contact" className="contact section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-panel">
              <div className="contact-info-header">
                <h3>Get in Touch</h3>
                <p>
                  Dignissimos deleniti accusamus rerum voluptate. Dignissimos
                  rerum sit maiores reiciendis voluptate inventore ut.
                </p>
              </div>

              <div className="contact-info-cards">
                <div className="info-card">
                  <div className="icon-container">
                    <i className="bi bi-pin-map-fill"></i>
                  </div>
                  <div className="card-content">
                    <h4>Our Location</h4>
                    <p>5900 Balcones Drive # 5164, Austin, TX 78731</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon-container">
                    <i className="bi bi-envelope-open"></i>
                  </div>
                  <div className="card-content">
                    <h4>Email Us</h4>
                    <p>info@billingvista.com</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon-container">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="card-content">
                    <h4>Call Us</h4>
                    <p>512-270-6926</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon-container">
                    <i className="bi bi-clock-history"></i>
                  </div>
                  <div className="card-content">
                    <h4>Working Hours</h4>
                    <p>Monday-Saturday: 7AM - 4PM</p>
                  </div>
                </div>
              </div>

              <div className="social-links-panel">
                <h5>Follow Us</h5>
                <div className="social-icons">
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              {/* <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}

              <div className="form-container">
                <h3>Book Your Demo</h3>
                <p>
                  Fill out the form below and we’ll contact you to schedule your
                  personalized demo.
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="php-email-form"
                >
                  {/* First Name */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.firstName ? "is-invalid" : ""
                      }`}
                      id="firstNameInput"
                      placeholder="First Name"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                    <label htmlFor="firstNameInput">First Name</label>
                    {errors.firstName && (
                      <div className="invalid-feedback">
                        {errors.firstName.message}
                      </div>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                      id="lastNameInput"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                    <label htmlFor="lastNameInput">Last Name</label>
                    {errors.lastName && (
                      <div className="invalid-feedback">
                        {errors.lastName.message}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="emailInput"
                      placeholder="Email Address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    <label htmlFor="emailInput">Email Address</label>
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  {/* Facility */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.facility ? "is-invalid" : ""
                      }`}
                      id="facilityInput"
                      placeholder="Facility Name"
                      {...register("facility", {
                        required: "Facility name is required",
                      })}
                    />
                    <label htmlFor="facilityInput">Facility Name</label>
                    {errors.facility && (
                      <div className="invalid-feedback">
                        {errors.facility.message}
                      </div>
                    )}
                  </div>

                  {/* Service Dropdown */}
                  <div className="form-floating mb-3">
                    <select
                      className={`form-select ${
                        errors.service ? "is-invalid" : ""
                      }`}
                      id="serviceSelect"
                      {...register("service", {
                        required: "Please select a service",
                      })}
                    >
                      <option value="billing">Medical Billing</option>
                      <option value="credentialing">
                        Medical Credentialing
                      </option>
                      <option className="contactcenter">
                        Contact center and Scheduling services
                      </option>
                      <option value="ehr">EHR Solutions</option>
                      <option value="frontdesk">Virtual Front Desk</option>
                      <option value="denial">Denial Management</option>
                      <option value="rcm">Revenue Cycle Management</option>
                    </select>
                    <label htmlFor="serviceSelect">
                      Which service are you interested in?
                    </label>
                    {errors.service && (
                      <div className="invalid-feedback">
                        {errors.service.message}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="form-floating mb-3">
                    <textarea
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      id="messageInput"
                      placeholder="Your Message"
                      style={{ height: "150px" }}
                      {...register("message", {
                        required: "Message is required",
                      })}
                    ></textarea>
                    <label htmlFor="messageInput">
                      Your Message (Optional)
                    </label>
                    {errors.message && (
                      <div className="invalid-feedback">
                        {errors.message.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button & Status */}
                  <div className="my-3">
                    <div className="loading" style={{ display: "none" }}>
                      Sending...
                    </div>
                    <div
                      className="error-message"
                      style={{ color: "red", fontWeight: "bold" }}
                    ></div>
                    <div
                      className="sent-message"
                      style={{ color: "green", fontWeight: "bold" }}
                    ></div>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          Sending <i className="bi bi-arrow-repeat ms-2"></i>
                        </>
                      ) : (
                        <>
                          Book Demo <i className="bi bi-send-fill ms-2"></i>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDemo;
