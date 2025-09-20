import React from "react";
import { Link, NavLink } from "react-router-dom";

const FrontDesk = () => {
  return (
    <>
      {/* Hero Section with Image */}
      <section className="py-5 bg-white" style={{ marginTop: "60px" }}>
        <div
          className="container"
          style={{ paddingLeft: "5%", paddingRight: "5%" }}
        >
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className=" mb-3 mt-5" style={{ color: "rgb(4, 158, 187)" }}>
                FrontDesk Assist
              </h3>
              <h1 className="display-5 fw-bold mb-4">
                Streamline Your Front-End Operations. Elevate Your Patient
                Experience.
              </h1>
              <p className="lead mb-4">
                Say goodbye to bottlenecks at the front desk and hello to
                greater efficiency, happier patients, and improved financial
                outcomes.
              </p>
              <div className="d-flex gap-3">
                <Link to="/bookdemo">
                  <a
                    href="#"
                    className="btn  btn-sm d-flex align-items-center gap-2"
                    style={{
                      backgroundColor: "rgb(4, 158, 187)",
                      color: "white",
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      className="bi bi-chevron-right"
                      width="16"
                      height="16"
                      viewBox="0 0 256 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                    </svg>
                    Get a free demo
                  </a>
                </Link>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn  btn-sm d-flex align-items-center gap-2"
                  style={{
                    border: "1px solid rgb(4, 158, 187)",
                    color: "rgb(4, 158, 187)",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    className="bi bi-chevron-right"
                    width="16"
                    height="16"
                    viewBox="0 0 256 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                  </svg>
                  Contact Sales
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4 mt-lg-0 "
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <img
                src="https://carecloud.com/wp-content/uploads/2025/03/front-desk-banner-new-1.webp"
                alt="A front desk healthcare receptionist assisting a lady holding her child"
                className="img-fluid rounded"
                width="600"
                height="420"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All-in-One Solution Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h4 className="" style={{ color: "rgb(4, 158, 187)" }}>
                Billing Vista All-in-one
              </h4>
              <h3 className="mb-4">
                FrontDesk Assist just part of our All-in-One Solution
              </h3>
              <NavLink
                to="/solutions"
                className="btn  btn-sm d-flex align-items-center gap-2 "
                style={{
                  backgroundColor: "rgb(4, 158, 187)",
                  color: "white",
                  width: "200px",
                }}
              >
                <svg
                  aria-hidden="true"
                  className="bi bi-chevron-right"
                  width="16"
                  height="16"
                  viewBox="0 0 256 512"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </svg>
                Explore All-In-One
              </NavLink>
            </div>
            <div className="col-lg-6" data-aos="fade-down" data-aos-delay="100">
              <ul className="list-unstyled row">
                {[
                  "Practice Management",
                  "Electronic Health Records",
                  "Revenue Cycle Management",
                  "AI powered clinical documentation",
                  "Patient Engagement",
                  "Insurance claim submission",
                  "Robotic process automation",
                  "Physician Credentialing",
                  "Remote Patient Monitoring",
                  "Telehealth",
                ].map((item, index) => (
                  <div className="col-md-6 mb-2" key={index}>
                    <li key={index} className="d-flex align-items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        className="me-2"
                      >
                        <path
                          d="M6.78741 10L12.7388 3.75C12.8578 3.625 12.8578 3.5 12.7388 3.375L12.2627 2.875C12.1436 2.75 12.0246 2.75 11.9056 2.875L5.59714 9.5C5.47811 9.625 5.24005 9.625 5.12103 9.5L2.3834 6.625C2.26437 6.5 2.14534 6.5 2.02632 6.625L1.55021 7.125C1.43118 7.25 1.43118 7.375 1.55021 7.5L3.93075 10L5.12103 11.25C5.24005 11.375 5.47811 11.375 5.59714 11.25L6.78741 10Z"
                          fill="rgb(4, 158, 187)"
                        />
                      </svg>
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
              {/* Placeholder for potential image */}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Excellence Section with Cards */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Unlock Operational Excellence</h2>
          <h3 className="text-center mb-4">
            FrontDesk Assist transforms your front-end workflows
          </h3>
          <p className="text-center mb-5">
            FrontDesk Assist by Billing Vista is a comprehensive, customizable
            front-office services solution that helps medical practices simplify
            scheduling, accelerate authorizations, and reduce administrative
            burdens—so your team can focus on what matters most—delivering
            exceptional care.
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div
                className="card h-100"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="card-body text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    className="mb-3"
                  >
                    <path
                      d="M38.2002 37H3.90019C2.90019 37 2.00019 36.4 1.60019 35.4C1.30019 34.5 1.50019 33.4 2.30019 32.7C2.40019 32.6 8.90019 26.9 9.40019 14.8V13.7H48.4002V14.8C47.9002 29.2 40.1002 35.9999 39.7002 36.2999C39.3002 36.7999 38.8002 37 38.2002 37ZM11.6002 16C10.8002 28.5 3.90019 34.3 3.80019 34.4C3.70019 34.5 3.70018 34.5 3.70018 34.6C3.70018 34.7 3.80019 34.7 3.90019 34.7H38.2002C38.3002 34.7 38.3002 34.7 38.3002 34.7C38.6002 34.5 45.3002 28.6 46.1002 16H11.6002Z"
                      fill="#29A6EC"
                    />
                    <path
                      d="M46.1 46.4996H11.9C10.6 46.4996 9.5 45.3996 9.5 44.0996V39.0996H38.2C38.9 39.0996 39.5 38.8996 40 38.3996C40.4 38.0996 43.9 34.9996 46.3 28.9996L47.4 26.2996C47.6 25.7996 48.4 25.8996 48.4 26.4996V44.0996C48.5 45.3996 47.4 46.4996 46.1 46.4996ZM11.7 41.1996V43.9996C11.7 44.0996 11.8 44.1996 11.9 44.1996H46.1C46.2 44.1996 46.3 44.0996 46.3 43.9996V33.9996C44.1 37.5996 42 39.5996 41.5 39.9996C40.6 40.7996 39.4 41.1996 38.3 41.1996H11.7Z"
                      fill="#29A6EC"
                    />
                    <path
                      d="M47.0996 9.0998H40.1996V7.6998C40.1996 6.8998 39.5996 6.2998 38.7996 6.2998C37.9996 6.2998 37.3996 6.8998 37.3996 7.6998V9.0998H30.3996H27.5996H20.6996V7.6998C20.6996 6.8998 20.0996 6.2998 19.2996 6.2998C18.4996 6.2998 17.8996 6.8998 17.8996 7.6998V9.0998H10.9996C10.1996 9.0998 9.59961 9.6998 9.59961 10.4998V12.2998H48.5996V10.4998C48.4996 9.6998 47.7996 9.0998 47.0996 9.0998Z"
                      fill="#29A6EC"
                    />
                  </svg>
                  <h4 className="card-title">Appointment Scheduling</h4>
                  <p className="card-text">
                    Eliminate delays and no-shows with efficient, centralized
                    scheduling support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card h-100"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <div className="card-body text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    className="mb-3"
                  >
                    <path
                      d="M7.37009 20.7201H16.2801C17.9401 23.9801 21.2801 26.0101 24.9901 26.0101C25.5001 26.0101 26.0001 25.5101 26.0001 25.0001C26.0001 24.4901 25.5001 23.9901 24.9901 23.9901C20.6901 23.9901 17.1801 20.4901 17.1801 16.1801V8.07008L23.9801 5.35008V10.1901C23.9801 10.6701 24.3601 11.2001 24.9901 11.2001C25.5001 11.2001 26.0001 10.7001 26.0001 10.1901V5.35008L29.9701 6.96008C30.4601 7.16008 31.0701 6.88008 31.2801 6.35008C31.3801 6.06008 31.3801 5.85008 31.2701 5.55008C31.1701 5.35008 30.9701 5.15008 30.7601 5.05008L25.3801 2.93008L25.3301 2.92008C25.2401 2.92008 25.2001 2.92008 25.1501 2.87008L25.1101 2.83008H24.6201L15.7401 6.38008C15.4601 6.57008 15.1601 6.96008 15.1601 7.37008V16.1801C15.1601 17.0201 15.3201 17.8701 15.4901 18.7001H7.36008C4.82008 18.7001 2.83008 20.6901 2.83008 23.2301V42.6201C2.83008 44.2201 3.61008 45.6401 4.93008 46.4301C5.12008 46.5201 5.31009 46.6201 5.51009 46.6201C5.81009 46.6201 6.11008 46.4301 6.30008 46.1401C6.51008 45.9301 6.51009 45.6201 6.51009 45.3501V45.3101L6.47008 45.2701C6.41008 45.2101 6.35008 45.1201 6.30008 45.0401C6.22008 44.9101 6.13008 44.7801 6.00008 44.7201C5.29008 44.3301 4.83008 43.5001 4.83008 42.6301V23.2401C4.85008 21.8001 5.94009 20.7201 7.37009 20.7201Z"
                      fill="#29A6EC"
                    />
                    <path
                      d="M46.1501 39.5C45.5301 39.5 45.1401 40.02 45.1401 40.51V42.63C45.1401 43.97 43.9601 45.15 42.6201 45.15H11.1301C10.6201 45.15 10.1201 45.65 10.1201 46.16C10.1201 46.67 10.6201 47.17 11.1301 47.17H42.6201C45.1601 47.17 47.1501 45.18 47.1501 42.64V40.51C47.1601 40 46.6601 39.5 46.1501 39.5Z"
                      fill="#29A6EC"
                    />
                    <path
                      d="M42.63 18.7001H34.51C34.72 17.9401 34.82 17.1101 34.82 16.1801V10.6301C34.82 10.0101 34.3 9.62012 33.81 9.62012C33.21 9.62012 32.8 10.0201 32.8 10.6301V16.1801C32.8 17.0901 32.6 18.0801 32.2 19.2001C32.11 19.3101 32.1 19.4201 32.1 19.5001C31.32 21.2101 29.88 22.5901 28.04 23.3701C27.73 23.4701 27.62 23.6901 27.53 23.8701C27.43 24.0801 27.42 24.3701 27.53 24.6901C27.73 25.0901 28.03 25.2901 28.43 25.2901C28.53 25.2901 28.72 25.2901 28.85 25.1801C30.94 24.3401 32.66 22.7501 33.71 20.7001H42.62C44.01 20.7001 45.14 21.8301 45.14 23.2201V33.4401C45.14 34.0401 45.54 34.4501 46.15 34.4501C46.63 34.4501 47.16 34.0701 47.16 33.4401V23.2401C47.16 20.7001 45.17 18.7001 42.63 18.7001Z"
                      fill="#29A6EC"
                    />
                    <path
                      d="M39.9803 38.0898H25.0002C24.4002 38.0898 23.9902 38.4898 23.9902 39.0998C23.9902 39.7098 24.3902 40.1098 25.0002 40.1098H39.9803C40.5803 40.1098 40.9902 39.7098 40.9902 39.0998C40.9902 38.4898 40.5803 38.0898 39.9803 38.0898Z"
                      fill="#29A6EC"
                    />
                    <path
                      d="M39.9803 33.6904H25.0002C24.4002 33.6904 23.9902 34.0904 23.9902 34.7004C23.9902 35.3104 24.3902 35.7104 25.0002 35.7104H39.9803C40.5803 35.7104 40.9902 35.3104 40.9902 34.7004C40.9902 34.0904 40.5803 33.6904 39.9803 33.6904Z"
                      fill="#29A6EC"
                    />
                    <path
                      d="M39.9799 29.2803H27.6399C27.0199 29.2803 26.6299 29.8003 26.6299 30.2903C26.6299 30.7803 27.0099 31.3003 27.6399 31.3003H39.9799C40.4899 31.3003 40.9899 30.8003 40.9899 30.2903C40.9899 29.7803 40.4899 29.2803 39.9799 29.2803Z"
                      fill="#29A6EC"
                    />
                    <path
                      d="M17.7211 34.6568L17.5213 34.5236L17.7211 34.3238C18.7865 33.4582 19.3859 32.1263 19.3859 30.7279C19.3859 28.1309 17.255 26 14.6579 26C12.0609 26 9.92999 28.1309 9.92999 30.7279C9.92999 32.1263 10.5293 33.3916 11.5948 34.3238L11.7945 34.5236L11.5282 34.6568C8.73136 35.8554 7 38.6522 7 41.6488C7 42.0484 7.33295 42.3813 7.7325 42.3813C8.13204 42.3813 8.46499 42.0484 8.46499 41.6488C8.46499 38.2527 11.1952 35.5225 14.5913 35.5225C17.9875 35.5225 20.7177 38.2527 20.7177 41.6488C20.7177 42.0484 21.0506 42.3813 21.4502 42.3813C21.8497 42.3813 22.1827 42.0484 22.1827 41.6488C22.3159 38.6522 20.5179 35.8554 17.7211 34.6568ZM14.6579 33.9909C12.9266 33.9909 11.4616 32.5925 11.4616 30.7945C11.4616 29.0632 12.86 27.5982 14.6579 27.5982C16.4559 27.5982 17.8543 28.9966 17.8543 30.7945C17.8543 32.5259 16.4559 33.9909 14.6579 33.9909Z"
                      fill="#29A6EC"
                    />
                  </svg>
                  <h4 className="card-title">Referral Management</h4>
                  <p className="card-text">
                    Ensure timely and accurate processing of inbound and
                    outbound referrals
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="card h-100">
                <div className="card-body text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    className="mb-3"
                  >
                    <path
                      d="M11.7807 26.8979H2.67867C1.92267 26.8979 1.30469 26.2859 1.30469 25.5239V3.37791C1.30469 2.62191 1.91667 2.00391 2.67867 2.00391H22.0167C22.7727 2.00391 23.3907 2.61591 23.3907 3.37791V10.7279"
                      stroke="#29A6EC"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5.50781 6.82812H18.5638"
                      stroke="#29A6EC"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5.50781 11.3516H14.2258"
                      stroke="#29A6EC"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5.50781 15.8711H10.8358"
                      stroke="#29A6EC"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5.50781 20.2734H10.8358"
                      stroke="#29A6EC"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18.1562 20.681L19.9563 22.487L23.5623 18.875"
                      stroke="#29A6EC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.0646 16.349C15.0646 15.557 15.7126 14.909 16.5046 14.909H17.7946C18.0946 14.909 18.5146 14.753 18.7366 14.567L19.9186 13.559C20.4406 13.121 21.2866 13.121 21.7906 13.559L22.9726 14.567C23.1946 14.753 23.6206 14.909 23.9206 14.909H25.1926C25.9846 14.909 26.6326 15.557 26.6326 16.349V17.621C26.6326 17.921 26.7886 18.335 26.9746 18.563L27.9826 19.745C28.4206 20.267 28.4206 21.113 27.9826 21.617L26.9746 22.799C26.7886 23.021 26.6326 23.441 26.6326 23.741V25.013C26.6326 25.805 25.9846 26.453 25.1926 26.453H23.9206C23.6206 26.453 23.2006 26.609 22.9786 26.795L21.7966 27.803C21.2746 28.241 20.4286 28.241 19.9246 27.803L18.7426 26.795C18.5206 26.609 18.0946 26.453 17.8006 26.453H16.4986C15.7066 26.453 15.0586 25.805 15.0586 25.013V23.735C15.0586 23.441 14.9086 23.021 14.7226 22.799L13.7146 21.611C13.2826 21.095 13.2826 20.261 13.7146 19.745L14.1346 19.253"
                      stroke="#29A6EC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h4 className="card-title">
                    Procedure Estimates & Prior Authorizations
                  </h4>
                  <p className="card-text">
                    Speed up time to treatment with faster approvals and clear,
                    upfront cost estimates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section with Image */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 order-lg-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="https://carecloud.com/wp-content/uploads/2025/03/practice-02.webp"
                alt="A healthcare professional in scrubs working on a computer"
                className="img-fluid rounded"
                width="600"
                height="420"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-down" data-aos-delay="100">
              <h4 className="" style={{ color: "rgb(4, 158, 187)" }}>
                Integration
              </h4>
              <h3 className="mb-4">
                Seamlessly Integrated with Your RCM & EHR
              </h3>
              <p>
                FrontDesk Assist integrates natively with Billing Vista EHR and
                RCM solutions, creating a seamless experience from check-in to
                reimbursement. Whether you’re looking to streamline operations,
                expand capacity, or improve financial performance, FrontDesk
                Assist delivers real-world results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive and Customizable Section with Image */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h4 style={{ color: "rgb(4, 158, 187)" }}>
                Comprehensive and customizable
              </h4>
              <h3 className="mb-4">
                Designed for Practices of All Sizes and Specialties
              </h3>
              <p>
                From ENT groups to primary care, FrontDesk Assist is trusted by
                practices nationwide to enhance their operational efficiency and
                deliver a better front-office experience.
              </p>
            </div>
            <div
              className="col-lg-6 mt-4 mt-lg-0"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <img
                src="https://carecloud.com/wp-content/uploads/2025/03/banner-frontdesk02.webp"
                alt="A front desk healthcare receptionist assisting a lady"
                className="img-fluid rounded"
                width="600"
                height="420"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results Section with Image */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img
                src="https://carecloud.com/wp-content/uploads/2025/03/front-desk-3-banner-size.webp"
                alt="A front desk healthcare receptionist assisting a mother holding her child"
                className="img-fluid rounded"
                width="600"
                height="420"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-down" data-aos-delay="100">
              <h4 className="" style={{ color: "rgb(4, 158, 187)" }}>
                Proven Results
              </h4>
              <h3 className="mb-4">
                Practices that adopt FrontDesk Assist report measurable
                improvements in front-office performance and patient experience
              </h3>
              <ul className="list-unstyled">
                {[
                  "Reduced patient wait times",
                  "Lower front-desk workload",
                  "Faster, more efficient appointment workflows",
                  "Higher patient satisfaction and access to care",
                ].map((item, index) => (
                  <li key={index} className="d-flex align-items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="26"
                      viewBox="0 0 28 26"
                      fill="none"
                      className="me-2"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.5417 16.9195C8.125 13.0221 5.91667 12.1382 4 14.8704C5.5 14.79 7.25 17.2008 9.125 21.5C10.2083 21.058 11.25 20.6161 12.3333 20.1339C15.1667 14.4686 18.9167 9.20509 24 4.62463C21.7083 3.41925 14.4583 11.2141 10.5417 16.9195Z"
                        fill="rgb(4, 158, 187)"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="mb-4">Ready to level up your front office?</h3>
              <p>
                Contact us today to see how Billing Vista FrontDesk Assist can
                simplify your operations and elevate the patient journey.
              </p>
            </div>
            <div className="col-lg-6" data-aos="fade-down" data-aos-delay="100">
              <div className="d-flex gap-3 flex-wrap">
                <Link>
                  {" "}
                  <a
                    href="#"
                    className="btn  btn-sm d-flex align-items-center gap-2"
                    style={{
                      backgroundColor: "rgb(4, 158, 187)",
                      color: "white",
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      className="bi bi-chevron-right"
                      width="16"
                      height="16"
                      viewBox="0 0 256 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                    </svg>
                    Schedule a demo
                  </a>
                </Link>
                <a
                  href="#"
                  className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                  style={{
                    border: "1px solid rgb(4, 158, 187)",
                    color: "rgb(4, 158, 187)",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    className="bi bi-chevron-right"
                    width="16"
                    height="16"
                    viewBox="0 0 256 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                  </svg>
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <figure className="mb-4">
            <img
              src="https://carecloud.com/wp-content/uploads/2025/02/unnamed-file.png"
              alt="quotation marks"
              className="me-2"
              width="30"
              height="30"
            />
            <blockquote className="blockquote">
              <p className="mb-0">
                Since deploying FrontDesk Assist, we’ve seen tangible
                improvements across our front-desk operations. Patient wait
                times are shorter, appointment scheduling is smoother, and our
                staff now spends far less time on administrative tasks.
              </p>
            </blockquote>
            <img
              src="https://carecloud.com/wp-content/uploads/2025/02/unnamed-file.png"
              alt="quotation marks"
              className="ms-2"
              width="30"
              height="30"
            />
            <figcaption className="blockquote-footer mt-2">
              Mike Heck, CEO of Alpine ENT
            </figcaption>
          </figure>
          {/* Placeholder for potential testimonial image */}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="" style={{ color: "rgb(4, 158, 187)" }}>
              We’re Here to Help
            </h6>
            <h3 className="mb-4">
              Streamline Your Practice with Billing Vista
            </h3>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">See Billing Vista in Action</h4>
                  <p className="card-text">
                    Discover how our platform can transform your workflow.
                  </p>
                  <a
                    href="#"
                    className="btn  btn-sm d-flex align-items-center gap-2 justify-content-center"
                    style={{
                      backgroundColor: "rgb(4, 158, 187)",
                      color: "white",
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      className="bi bi-chevron-right"
                      width="16"
                      height="16"
                      viewBox="0 0 256 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                    </svg>
                    Book Your Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">Need Support? Let’s Chat</h4>
                  <p className="card-text">
                    Our experts are ready to assist you in real-time.
                  </p>
                  <a
                    href="#"
                    className="btn  btn-sm d-flex align-items-center gap-2 justify-content-center"
                    style={{
                      backgroundColor: "rgb(4, 158, 187)",
                      color: "white",
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      className="bi bi-chevron-right"
                      width="16"
                      height="16"
                      viewBox="0 0 256 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                    </svg>
                    Chat with Us Instantly
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">Talk to an Expert Today</h4>
                  <p className="card-text">Let's talk</p>

                  <p className="card-text">1-877-342-7517</p>
                  <a
                    href="tel:1-877-342-7517"
                    className="btn  btn-sm d-flex align-items-center gap-2 justify-content-center"
                    style={{
                      backgroundColor: "rgb(4, 158, 187)",
                      color: "white",
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      className="bi bi-chevron-right"
                      width="16"
                      height="16"
                      viewBox="0 0 256 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                    </svg>
                    Get Personalized Assistance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrontDesk;
