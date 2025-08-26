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
    document
      .querySelectorAll(".navmenu .toggle-dropdown")
      .forEach((navmenu) => {
        navmenu.addEventListener("click", function (e) {
          e.preventDefault();
          this.parentNode.classList.toggle("active");
          this.parentNode.nextElementSibling.classList.toggle(
            "dropdown-active"
          );

          e.stopImmediatePropagation();
        });
      });
    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToogle();
        }
      });
    });
  }, []);
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <NavLink
          to="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          <img
            src="/assets/img/billing-vista-logo.jpg"
            style={{ width: "115px", height: "100px" }}
          />
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
                {/* <li className="dropdown">
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
                </li> */}
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
