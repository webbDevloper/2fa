export default function Stats() {
  const stats = [
    { number: "99.99%", label: "Uptime", color: "stat-blue" },
    { number: "<100ms", label: "Login Speed", color: "stat-teal" },
    { number: "10M+", label: "Users Protected", color: "stat-cyan" },
    { number: "50+", label: "Enterprise Clients", color: "stat-navy" },
  ]

  return (
    <section className="stats-section py-5">
      <div className="container">
        <div className="row g-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className={`stat-card ${stat.color}`}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
