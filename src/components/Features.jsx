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
      title: "Conditional Access Protection",
      description:
        "Protect web applications using intelligent conditional access policies based on user role, device posture, location, and real-time risk signals.",
      icon: <FaUserShield size={26} />,
      category: "Access Control",
      color: "primary",
    },
    {
      title: "Multi-Tier User Verification",
      description:
        "Verify users through layered authentication including passwords, push approvals, biometrics, and contextual risk evaluation.",
      icon: <FaBell size={26} />,
      category: "Authentication",
      color: "success",
    },
    {
      title: "Modern Identity Provider (IdP)",
      description:
        "Centralized Identity Provider supporting SAML 2.0 and OAuth 2.0 for secure and seamless cloud and on-prem integration.",
      icon: <FaBrain size={26} />,
      category: "Identity Management",
      color: "warning",
    },
    {
      title: "Office 365 Access Control",
      description:
        "Enforce role-based and location-aware access for Office 365, allowing secure remote access only for authorized users.",
      icon: <FaGlobeAmericas size={26} />,
      category: "Cloud Security",
      color: "info",
    },
    {
      title: "Universal Application Protection",
      description:
        "Secure HRMS, ERP, Office Portals, and custom web applications that support SAML or OAuth authentication standards.",
      icon: <FaBan size={26} />,
      category: "Application Security",
      color: "danger",
    },
    {
      title: "Active Directory & LDAP Integration",
      description:
        "Seamlessly integrate with existing on-premise Active Directory or LDAP without user migration or duplication.",
      icon: <FaCogs size={26} />,
      category: "Directory Integration",
      color: "secondary",
    },
    {
      title: "AI Face Recognition & Risk Analysis",
      description:
        "Military-grade security powered by facial recognition and AI-based risk analysis to block anomalous access in real time.",
      icon: <FaUserShield size={26} />,
      category: "Advanced Security",
      color: "dark",
    },
  ];

  return (
    <section className="features-section py-5 bg-light" id="features">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            Enterprise-Grade Identity Security
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "720px" }}>
            A unified Identity and Access Management platform designed to secure
            users, applications, and infrastructure at scale.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="row g-4">
          {features.map((feature, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div
                className="card h-100 border-0 shadow-sm p-4 text-center"
                style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
              >
                {/* Icon */}
                <div
                  className={`mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-${feature.color} bg-opacity-10`}
                  style={{ width: 56, height: 56 }}
                >
                  <span className={`text-${feature.color}`}>
                    {feature.icon}
                  </span>
                </div>

                {/* Category */}
                <div className="text-uppercase text-muted small fw-semibold mb-2">
                  {feature.category}
                </div>

                {/* Title */}
                <h5 className="fw-bold mb-3">
                  {feature.title}
                </h5>

                {/* Description */}
                <p className="text-muted mb-0">
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
