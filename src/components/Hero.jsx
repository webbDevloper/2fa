import { FaLock, FaBolt, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container mt-0">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-6 hero-content">
            <div className="badge-section mb-4">
              <span className="badge-text">Enterprise Authentication</span>
            </div>

            <h1 className="hero-title" style={{color:"#0b2494"}}>
              Security That Moves as Fast as You Do
            </h1>

            <p className="hero-subtitle">
              A unified authentication platform combining military-grade biometric
              security with frictionless user experience and real-time threat
              intelligence.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary btn-lg btn-get-started me-3">
                Start Free Trial
              </button>
              <button className="btn btn-outline btn-lg">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="col-lg-6 hero-visual">
            <div className="hero-image-container">

              <div className="floating-card card-1">
                <div className="card-icon">
                  <FaLock size={28} className="text-primary" />
                </div>
                <div className="card-text">
                  Military-Grade Security
                </div>
              </div>

              <div className="floating-card card-2">
                <div className="card-icon">
                  <FaBolt size={28} className="text-warning" />
                </div>
                <div className="card-text">
                  Lightning Fast
                </div>
              </div>

              <div className="floating-card card-3">
                <div className="card-icon">
                  <FaShieldAlt size={28} className="text-success" />
                </div>
                <div className="card-text">
                  Real-time Protection
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
