import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero hero-large">
        <img
          className="hero-media"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80"
          alt="Students planning their next study abroad step"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow">Education consultancy and travel support</p>
          <h1>GlobeTrek Solutions</h1>
          <p>
            Practical guidance for study abroad plans, visa applications, travel packages,
            reservations, and consultation from first questions to final travel preparation.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://wa.me/2348038876566">
              Chat on WhatsApp
            </a>
            <Link className="btn btn-light" href="/contact">
              Request consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div className="section-inner intro-grid">
          <div>
            <p className="section-kicker">Clear support for important journeys</p>
            <h2>From applications to arrival plans, GlobeTrek keeps the process organized.</h2>
          </div>
          <p>
            Whether the goal is school admission, visa readiness, flight planning, or a tailored trip,
            the website guides visitors to the right service and makes it easy to contact the team.
          </p>
        </div>
      </section>

      <section className="section-inner services-preview">
        <div className="section-heading">
          <p className="section-kicker">Core services</p>
          <h2>Support designed around student, visa, and travel needs.</h2>
        </div>
        <div className="card-grid three">
          <article className="service-card">
            <span className="service-code">01</span>
            <h3>Application Profiling</h3>
            <p>Eligibility review and requirement checks before travel or visa applications begin.</p>
          </article>
          <article className="service-card">
            <span className="service-code">02</span>
            <h3>Document Assessment</h3>
            <p>Reviewing client documents so submissions are clearer, complete, and better prepared.</p>
          </article>
          <article className="service-card">
            <span className="service-code">03</span>
            <h3>Travel Consultation</h3>
            <p>Expert advice on travel planning, visa requirements, and itinerary management.</p>
          </article>
        </div>
        <div className="center-action">
          <Link className="btn btn-secondary" href="/services">
            View all services
          </Link>
        </div>
      </section>

      <section className="feature-band">
        <div className="section-inner feature-grid">
          <div className="feature-image">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80"
              alt="Travel documents being reviewed on a desk"
            />
          </div>
          <div className="feature-copy">
            <p className="section-kicker">Why clients come back</p>
            <h2>A calm process for decisions that can feel stressful.</h2>
            <p>
              GlobeTrek helps clients understand what is needed, what should happen next, and how to
              prepare documents or reservations with fewer surprises.
            </p>
            <ul className="check-list">
              <li>Structured consultation for study and travel goals</li>
              <li>Document support before visa or travel submissions</li>
              <li>Quick inquiry routes through WhatsApp and email</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-inner pathway-section">
        <div className="section-heading">
          <p className="section-kicker">How it works</p>
          <h2>A simple path from inquiry to next step.</h2>
        </div>
        <div className="timeline">
          <article>
            <span>1</span>
            <h3>Share your goal</h3>
            <p>Send the study, visa, or travel plan you want help with.</p>
          </article>
          <article>
            <span>2</span>
            <h3>Get profiled</h3>
            <p>The team reviews your eligibility, documents, and likely requirements.</p>
          </article>
          <article>
            <span>3</span>
            <h3>Prepare properly</h3>
            <p>Receive guidance for forms, documents, appointments, reservations, or itinerary plans.</p>
          </article>
        </div>
      </section>

      <section className="cta-band">
        <div className="section-inner cta-inner">
          <div>
            <p className="section-kicker">Ready to begin?</p>
            <h2>Ask GlobeTrek Solutions about your study, visa, or travel plan.</h2>
          </div>
          <Link className="btn btn-primary" href="/contact">
            Start an inquiry
          </Link>
        </div>
      </section>
    </>
  );
}