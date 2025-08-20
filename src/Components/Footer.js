import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <NavLink to="/" className="logo d-flex align-items-center">
              <span className="sitename">MediTrust</span>
            </NavLink>
            <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY Useful Links</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="https://x.com">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://facebook.com">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/terms">Terms of service</NavLink>
              </li>
              <li>
                <NavLink to="/privacy">Privacy policy</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <NavLink to="/services-details">Web Design</NavLink>
              </li>
              <li>
                <NavLink to="/services-details">Web Development</NavLink>
              </li>
              <li>
                <NavLink to="/services-details">Product Management</NavLink>
              </li>
              <li>
                <NavLink to="/services-details">Marketing</NavLink>
              </li>
              <li>
                <NavLink to="/services-details">Graphic Design</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Hic solutasetp</h4>
            <ul>
              <li>
                <NavLink to="#">Molestiae accusamus iure</NavLink>
              </li>
              <li>
                <NavLink to="#">Excepturi dignissimos</NavLink>
              </li>
              <li>
                <NavLink to="#">Suscipit distinctio</NavLink>
              </li>
              <li>
                <NavLink to="#">Dilecta</NavLink>
              </li>
              <li>
                <NavLink to="#">Sit quas consectetur</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nobis illum</h4>
            <ul>
              <li>
                <NavLink to="#">Ipsam</NavLink>
              </li>
              <li>
                <NavLink to="#">Laudantium dolorum</NavLink>
              </li>
              <li>
                <NavLink to="#">Dinera</NavLink>
              </li>
              <li>
                <NavLink to="#">Trodelas</NavLink>
              </li>
              <li>
                <NavLink to="#">Flexo</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">MediTrust</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
