import { FaLock, FaBolt, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container mt-0">
        <div className="row align-items-center min-vh-100">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 hero-content">
            <div className="badge-section mb-4">
              <span className="badge-text">Identity & Access Management</span>
            </div>

            <h3 className="hero-title" style={{ color: "#0b2494" }}>
              Protect Every Login. Secure Every Application.
            </h3>

            <p className="hero-subtitle">
              Secure your web applications with Conditional Access, multi-tier
              authentication, and modern identity protocols like SAML 2.0 and
              OAuth 2.0 — all powered by AI-driven risk analysis and face
              recognition.
            </p>

            <div className="hero-buttons mt-4">
              <button className="btn btn-primary btn-lg btn-get-started me-3">
                Start Free Trial
              </button>
              <button className="btn btn-outline btn-lg">
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="col-lg-6 hero-visual">
            <div className="hero-image-container">

              <div className="floating-card card-1">
                <div className="card-icon">
                  <FaLock size={28} className="text-primary" />
                </div>
                <div className="card-text">
                  Conditional Access & Secure Authentication
                </div>
              </div>

              <div className="floating-card card-2">
                <div className="card-icon">
                  <FaBolt size={28} className="text-warning" />
                </div>
                <div className="card-text">
                  Fast & Seamless SAML / OAuth Integration
                </div>
              </div>

              <div className="floating-card card-3">
                <div className="card-icon">
                  <FaShieldAlt size={28} className="text-success" />
                </div>
                <div className="card-text">
                  AI Risk Analysis & Face Recognition Security
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
