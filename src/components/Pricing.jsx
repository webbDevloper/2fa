import { FaCheckCircle, FaShieldAlt, FaCrown, FaRocket } from "react-icons/fa";

export default function Pricing() {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Simple, Transparent Pricing</h1>
        <p className="text-muted">
          Secure your applications with enterprise-grade identity protection
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="row g-4">
        <PriceCard
          icon={<FaShieldAlt />}
          title="Starter"
          price="₹999"
          subtitle="Per month"
          features={[
            "Conditional Access",
            "Multi-Factor Authentication",
            "SAML / OAuth Support",
            "Email Support",
          ]}
        />

        <PriceCard
          icon={<FaRocket />}
          title="Business"
          price="₹2,999"
          subtitle="Per month"
          popular
          features={[
            "Everything in Starter",
            "Office 365 Access Control",
            "Active Directory / LDAP Integration",
            "Risk-Based Authentication",
            "Priority Support",
          ]}
        />

        <PriceCard
          icon={<FaCrown />}
          title="Enterprise"
          price="Custom"
          subtitle="Contact us"
          features={[
            "Everything in Business",
            "AI Face Recognition",
            "Advanced Risk Analysis",
            "On-Premise Deployment",
            "Dedicated Account Manager",
          ]}
        />
      </div>
    </div>
  );
}

function PriceCard({ icon, title, price, subtitle, features, popular }) {
  return (
    <div className="col-md-4">
      <div className={`card h-100 shadow ${popular ? "border-primary" : ""}`}>
        {popular && (
          <div className="badge bg-primary position-absolute top-0 end-0 m-3">
            Most Popular
          </div>
        )}

        <div className="card-body text-center">
          <div className="fs-2 text-primary mb-3">{icon}</div>
          <h4 className="fw-bold">{title}</h4>
          <h2 className="my-3">{price}</h2>
          <p className="text-muted">{subtitle}</p>

          <ul className="list-unstyled text-start mt-4">
            {features.map((feature, i) => (
              <li key={i} className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                {feature}
              </li>
            ))}
          </ul>

          <button className="btn btn-primary w-100 mt-4">
            {price === "Custom" ? "Contact Sales" : "Get Started"}
          </button>
        </div>
      </div>
    </div>
  );
}
