import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="identa-footer">
      <div className="container py-5">

        <div className="row g-5 mb-5">
          
          {/* Brand Info */}
          <div className="col-md-4">
            <h5 className="footer-title">UniLogin</h5>
            <p className="footer-text">
              Enterprise authentication platform with military-grade security.
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-md-4">
            <h6 className="footer-title">Contact</h6>

            <p className="footer-text d-flex align-items-center">
              <FaEnvelope className="me-2 text-primary" />
              info@squadsystems.com
            </p>

            <p className="footer-text d-flex align-items-center">
              <FaPhoneAlt className="me-2 text-success" />
              +91 9911700247
            </p>
          </div>

          {/* Quick Links (Optional but Recommended) */}
          <div className="col-md-4">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#demo">Demo</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#contact">Get Started</a></li>
            </ul>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="row align-items-center">
          <div className="col-md-12 text-center">
            <p className="footer-copyright mb-0">
              © 2026 UniLogin. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
