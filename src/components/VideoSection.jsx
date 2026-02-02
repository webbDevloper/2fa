import { FaUserCheck, FaShieldAlt, FaChartLine } from "react-icons/fa";
import demoVideo from "../assets/demoVideo.mp4";

export default function HowItWorks() {
  return (
    <section className="how-it-works py-5" id="demo">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT SIDE – VIDEO */}
          <div className="col-lg-6">
            <div className="video-box rounded shadow">
              <video
                src={demoVideo}
                className="w-100 rounded"
                controls
                autoPlay
                muted
              />
            </div>
          </div>

          {/* RIGHT SIDE – STEPS */}
          <div className="col-lg-6">
            <h2 className="mb-4">How 2FA Works</h2>

            <div className="step d-flex mb-4">
              <FaUserCheck size={32} className="text-primary me-3" />
              <div>
                <h5>User Authentication</h5>
                <p>
                  Users log in using biometric face verification or secure
                  multi-factor authentication.
                </p>
              </div>
            </div>

            <div className="step d-flex mb-4">
              <FaShieldAlt size={32} className="text-success me-3" />
              <div>
                <h5>Real-Time Threat Analysis</h5>
                <p>
                  Our adaptive risk engine analyzes device, IP, and location
                  signals to block suspicious activity instantly.
                </p>
              </div>
            </div>

            <div className="step d-flex">
              <FaChartLine size={32} className="text-warning me-3" />
              <div>
                <h5>Admin Control & Analytics</h5>
                <p>
                  Admins monitor sessions, view analytics, and instantly revoke
                  access from the dashboard.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
