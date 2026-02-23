export default function CTA() {
  const whatsappNumber = "9311108002" // ← replace with your WhatsApp number
  const message = "Hi, I want to start a free trial for UniLoginLogin."

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <section className="cta-section py-5" id="contact">
      <div className="container">
        <div className="cta-content text-center">

          <h2 className="cta-title">Ready to Secure Your Enterprise?</h2>

          <p className="cta-subtitle">
            Start your journey with a modern UniLoginLoginLogin solution built for speed, security, and scale.
          </p>

          <div className="cta-buttons">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg me-3"
            >
              Get Free Trial on WhatsApp
            </a>
          </div>

          <p className="cta-footnote mt-4">
            ✓ No credit card required • ✓ 14-day free trial • ✓ Full feature access
          </p>

        </div>
      </div>
    </section>
  )
}
