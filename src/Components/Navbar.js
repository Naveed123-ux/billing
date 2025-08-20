import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

    function mobileNavToogle() {
      document.querySelector("body").classList.toggle("mobile-nav-active");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    }
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
    }
  }, []);
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <NavLink
          to="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          <svg
            className="my-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="bgCarrier" stroke-width="0"></g>
            <g
              id="tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="iconCarrier">
              <path
                d="M22 22L2 22"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M17 22V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V22"
                stroke="currentColor"
                stroke-width="1.5"
              ></path>
              <path
                opacity="0.5"
                d="M21 22V8.5C21 7.09554 21 6.39331 20.6629 5.88886C20.517 5.67048 20.3295 5.48298 20.1111 5.33706C19.6067 5 18.9045 5 17.5 5"
                stroke="currentColor"
                stroke-width="1.5"
              ></path>
              <path
                opacity="0.5"
                d="M3 22V8.5C3 7.09554 3 6.39331 3.33706 5.88886C3.48298 5.67048 3.67048 5.48298 3.88886 5.33706C4.39331 5 5.09554 5 6.5 5"
                stroke="currentColor"
                stroke-width="1.5"
              ></path>
              <path
                d="M12 22V19"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                opacity="0.5"
                d="M10 12H14"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                opacity="0.5"
                d="M5.5 11H7"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                opacity="0.5"
                d="M5.5 14H7"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                opacity="0.5"
                d="M17 11H18.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                opacity="0.5"
                d="M17 14H18.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                opacity="0.5"
                d="M5.5 8H7"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                opacity="0.5"
                d="M17 8H18.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                opacity="0.5"
                d="M10 15H14"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M12 9V5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M14 7L10 7"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
          <h1 className="sitename">MediTrust</h1>
        </NavLink>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/department">Departments</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/doctors">Doctors</NavLink>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>More Pages</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <NavLink to="/department-details">Department Details</NavLink>
                </li>
                <li>
                  <NavLink to="/services-details">Service Details</NavLink>
                </li>
                <li>
                  <NavLink to="/appointment">Appointment</NavLink>
                </li>
                <li>
                  <NavLink to="/testimonials">Testimonials</NavLink>
                </li>
                <li>
                  <NavLink to="/faq">Frequently Asked Questions</NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" className="active">
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terms">Terms</NavLink>
                </li>
                <li>
                  <NavLink to="/privacy">Privacy</NavLink>
                </li>
                <li>
                  <NavLink to="/404">404</NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Solutions</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <NavLink to="/revenue-cycle-management">
                    Revenue Cycle
                  </NavLink>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <NavLink to="#">Deep Dropdown 1</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Deep Dropdown 2</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Deep Dropdown 3</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Deep Dropdown 4</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Deep Dropdown 5</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/ehr">Electronic health records</NavLink>
                </li>
                <li>
                  <NavLink to="/front-desk">FrontDesk Assist</NavLink>
                </li>
                <li>
                  <NavLink to="/medical-credentialing">
                    Medical Credentialing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/medical-billing">
                    Medical Billing and Coding
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/denial">AR & Denial Management</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <NavLink className="btn-getstarted" to="/appointment">
          Appointment
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
