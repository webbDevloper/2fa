import {
  FaUserShield,
  FaBell,
  FaBrain,
  FaGlobeAmericas,
  FaBan,
  FaCogs,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "Biometric Face Verification",
      description:
        "Login with a Selfie. Users verify their identity using their camera, ensuring the person logging in is actually the authorized user.",
      icon: <FaUserShield size={28} className="text-primary" />,
      category: "Advanced Authentication",
    },
    {
      title: "Push Notification 2FA",
      description:
        "One-Tap Access. Forget typing 6-digit codes. Users receive a secure push notification and tap Approve to login instantly.",
      icon: <FaBell size={28} className="text-success" />,
      category: "Advanced Authentication",
    },
    {
      title: "Adaptive Risk Engine",
      description:
        "Smart Security. The system analyzes IP, location, and device headers in real-time, blocking high-risk attempts silently.",
      icon: <FaBrain size={28} className="text-warning" />,
      category: "Advanced Authentication",
    },
    // {
    //   title: "Impossible Travel Detection",
    //   description:
    //     "Physics-Based Security. Detects if a user logs in from New York and then London 5 minutes later, flagging the account immediately.",
    //   icon: <FaGlobeAmericas size={28} className="text-info" />,
    //   category: "Threat Defense",
    // },
    {
      title: "Geo-Fencing & Country Blocking",
      description:
        "Border Control for Data. Administrators can instantly block traffic from specific high-risk countries to reduce attack surface.",
      icon: <FaBan size={28} className="text-danger" />,
      category: "Threat Defense",
    },
    // {
    //   title: "Live Session Kill Switch",
    //   description:
    //     "Total Control. Admins can view every logged-in user and remotely revoke sessions instantly if a device is lost or stolen.",
    //   icon: <FaCogs size={28} className="text-secondary" />,
    //   category: "Administrative Control",
    // },
  ];

  return (
    <section className="features-section py-5" id="features">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">
            Powerful Features for Enterprise Security
          </h2>
          <p className="section-subtitle">
            Everything you need to protect your users and meet compliance requirements
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="feature-card text-center h-100">

                {/* Centered Icon */}
                <div className="feature-icon d-flex align-items-center justify-content-center mb-3">
                  {feature.icon}
                </div>

                <div className="feature-category text-muted mb-2">
                  {feature.category}
                </div>

                <h3 className="feature-title">
                  {feature.title}
                </h3>

                <p className="feature-description">
                  {feature.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
