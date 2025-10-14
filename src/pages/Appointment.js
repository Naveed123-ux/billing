import React from "react";
import { useForm } from "react-hook-form";

const Appointment = () => {
  const { register, handleSubmit } = useForm();

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
              <li className="breadcrumb-item active current">Appointment</li>
            </ol>
          </nav>
        </div>

        <div className="title-wrapper">
          <h1>Appointment</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <section id="appointmnet" className="appointmnet section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="appointment-info">
                <h3>Quick &amp; Easy Online Booking</h3>
                <p className="mb-4">
                  Book your appointment in just a few simple steps. Our
                  healthcare professionals are ready to provide you with the
                  best medical care tailored to your needs.
                </p>

                <div className="info-items">
                  <div
                    className="info-item d-flex align-items-center mb-3"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-calendar-check"></i>
                    </div>
                    <div>
                      <h5>Flexible Scheduling</h5>
                      <p className="mb-0">
                        Choose from available time slots that fit your busy
                        schedule
                      </p>
                    </div>
                  </div>

                  <div
                    className="info-item d-flex align-items-center mb-3"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-stopwatch"></i>
                    </div>
                    <div>
                      <h5>Quick Response</h5>
                      <p className="mb-0">
                        Get confirmation within 15 minutes of submitting your
                        request
                      </p>
                    </div>
                  </div>

                  <div
                    className="info-item d-flex align-items-center mb-3"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <div>
                      <h5>Expert Billing Service</h5>
                      <p className="mb-0">
                        Best certified specialists at your service
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="emergency-contact mt-4"
                  data-aos="fade-up"
                  data-aos-delay="350"
                >
                  <div className="emergency-card p-3">
                    <h6 className="mb-2">
                      <i className="bi bi-telephone-fill me-2"></i>Contact
                    </h6>
                    <p className="mb-0">
                      Call <strong>512-270-6926</strong> for Billing
                      assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appointment-form-wrapper"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="appointment-form"
                >
                  <div className="row gy-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        {...register("practiceCompanyName", { required: true })}
                        className="form-control"
                        placeholder="Practice or Company Name*"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        {...register("name", { required: true })}
                        className="form-control"
                        placeholder="Name*"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="tel"
                        {...register("phone", { required: true })}
                        className="form-control"
                        placeholder="Phone Number*"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        className="form-control"
                        placeholder="Email*"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <select
                        {...register("role", { required: true })}
                        className="form-select"
                        required
                      >
                        <option value="">Please Select</option>
                        <option value="Physician">Physician</option>
                        <option value="Healthcare Provider">
                          Healthcare Provider
                        </option>
                        <option value="Practice Management">
                          Practice Management
                        </option>
                        <option value="Administrative">Administrative</option>
                        <option value="Billing Service Provider">
                          Billing Service Provider
                        </option>
                        <option value="Hospital Staff">Hospital Staff</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <textarea
                        {...register("message")}
                        className="form-control"
                        rows="5"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <div className="col-12">
                      {/* Ensure these are initially hidden */}
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

                      <button
                        type="submit"
                        className="btn btn-appointment w-100 mt-3"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            className="process-steps mt-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="row text-center gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-icon">
                    <i className="bi bi-person-fill"></i>
                  </div>
                  <h5>Fill Details</h5>
                  <p>
                    Provide your personal information and select your preferred
                    service
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-icon">
                    <i className="bi bi-calendar-event"></i>
                  </div>
                  <h5>Choose Date</h5>
                  <p>
                    Select your preferred date and time slot from available
                    options
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-icon">
                    <i className="bi bi-check-circle"></i>
                  </div>
                  <h5>Confirmation</h5>
                  <p>
                    Receive instant confirmation and appointment details via
                    email or SMS
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-icon">
                    <i className="bi bi-heart-pulse"></i>
                  </div>
                  <h5>Get Assistance</h5>
                  <p>
                    Visit our clinic at your scheduled time and receive quality
                    healthcare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
