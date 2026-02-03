import {
  FaUserShield,
  FaLock,
  FaKey,
  FaMicrosoft,
  FaGlobe,
  FaUsersCog,
  FaBrain,
  FaCheckCircle,
} from "react-icons/fa";

export default function Security() {
  const securityFeatures = [
    {
      title: "Conditional Access Protection",
      description:
        "Protect your web applications using intelligent Conditional Access policies based on user identity, role, location, device trust, and risk signals.",
      icon: <FaLock />,
      highlight: "Zero Trust",
    },
    {
      title: "Multi-Tier User Verification",
      description:
        "Ensure only authorized users gain access through layered authentication methods including passwords, push approval, biometrics, and contextual risk analysis.",
      icon: <FaKey />,
      highlight: "Strong Auth",
    },
    {
      title: "Modern Identity Provider (IdP)",
      description:
        "Act as a centralized Identity Provider supporting modern authentication standards such as SAML 2.0 and OAuth 2.0 for secure application integration.",
      icon: <FaUserShield />,
      highlight: "SAML / OAuth",
    },
    {
      title: "Office 365 Access Control",
      description:
        "Control Office 365 access with role-based and location-aware policies. Allow management users secure remote access while restricting others to on-premise access.",
      icon: <FaMicrosoft />,
      highlight: "Role Based",
    },
    {
      title: "Universal Application Security",
      description:
        "Secure HRMS, ERP, Office Portals, and custom web applications that support modern SAML or OAuth authentication protocols.",
      icon: <FaGlobe />,
      highlight: "Any App",
    },
    {
      title: "Active Directory & LDAP Integration",
      description:
        "Seamlessly integrate with on-premise Active Directory or LDAP to leverage existing user directories without migration or duplication.",
      icon: <FaUsersCog />,
      highlight: "Seamless Sync",
    },
    {
      title: "AI Risk Analysis & Face Recognition",
      description:
        "Achieve military-grade security using Face Recognition combined with AI-driven risk analysis to continuously detect and block suspicious login attempts.",
      icon: <FaBrain />,
      highlight: "AI Powered",
    },
  ];

  const securityTiers = [
    {
      name: "Access Protection Layer",
      features: [
        "Conditional Access Policies",
        "Multi-Tier Authentication",
        "Face Recognition Verification",
      ],
      borderColor: "#0d6efd",
    },
    {
      name: "Identity & Integration Layer",
      features: [
        "SAML 2.0 & OAuth 2.0 Support",
        "Office 365 Access Control",
        "HRMS / ERP / Portal Protection",
      ],
      borderColor: "#198754",
    },
    {
      name: "Threat Intelligence Layer",
      features: [
        "AI-Based Risk Analysis",
        "Real-Time Threat Detection",
        "Continuous Session Monitoring",
      ],
      borderColor: "#dc3545",
    },
  ];

  return (
    <section className="security-section py-5 bg-light" id="security">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge bg-primary mb-3 px-3 py-2">
            <FaLock className="me-2" />
            Enterprise Security
          </span>
          <h2 className="fw-bold mt-3">
            Secure Every Application. Trust Every Login.
          </h2>
          <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "720px" }}>
            A comprehensive Identity & Access Management platform designed to
            protect users, applications, and infrastructure with military-grade security.
          </p>
        </div>

        {/* Security Features */}
        <div className="row g-4 mb-5">
          {securityFeatures.map((feature, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="fs-3 text-primary me-3">
                    {feature.icon}
                  </div>
                  <span className="badge bg-secondary bg-opacity-10 text-secondary">
                    {feature.highlight}
                  </span>
                </div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-muted mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Security Tiers */}
        <div className="row g-4 mb-5">
          {securityTiers.map((tier, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div
                className="card h-100 border-0 shadow-sm p-4"
                style={{ borderLeft: `4px solid ${tier.borderColor}` }}
              >
                <h5 className="fw-bold mb-3">{tier.name}</h5>
                <ul className="list-unstyled mb-0">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="mb-2 text-muted">
                      <FaCheckCircle className="text-success me-2" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Security Stats */}
        <div className="row text-center pt-4">
          <div className="col-md-4 mb-3">
            <h3 className="fw-bold text-primary">99.99%</h3>
            <p className="text-muted">Authentication Uptime</p>
          </div>
          <div className="col-md-4 mb-3">
            <h3 className="fw-bold text-primary">256-bit</h3>
            <p className="text-muted">End-to-End Encryption</p>
          </div>
          <div className="col-md-4 mb-3">
            <h3 className="fw-bold text-primary">Enterprise</h3>
            <p className="text-muted">IAM Ready Architecture</p>
          </div>
        </div>

      </div>
    </section>
  );
}
