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
            Practical guidance for study abroad plans, travel packages,
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
          <div className="feature-image">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80"
              alt="Person planning a trip with documents and laptop"
            />
          </div>
          <div>
            <p className="section-kicker">Clear support for important journeys</p>
            <h2>From applications to arrival plans, GlobeTrek keeps the process organized.</h2>
            <p>
              Whether the goal is school admission, flight planning, or a tailored trip,
              the website guides visitors to the right service and makes it easy to contact the team.
            </p>
          </div>
        </div>
      </section>

      <section className="section-inner services-preview">
        <div className="section-heading">
          <p className="section-kicker">Core services</p>
          <h2>Support designed around student and travel needs.</h2>
        </div>
        <div className="card-grid three">
          <article
            className="service-card"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)',
            }}
          >
            <h3>Application Profiling</h3>
            <p>Eligibility review and requirement checks before travel applications begin.</p>
          </article>
          <article
            className="service-card"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80)',
            }}
          >
            <h3>Document Assessment</h3>
            <p>Reviewing client documents so submissions are clearer, complete, and better prepared.</p>
          </article>
          <article
            className="service-card"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80)',
            }}
          >
            <h3>Travel Consultation</h3>
            <p>Expert advice on travel planning, itinerary management, and requirements.</p>
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
              <li>Document support before travel submissions</li>
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
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </span>
            <h3>Share your goal</h3>
            <p>Send the study or travel plan you want help with.</p>
          </article>
          <article>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                <line x1="10" y1="11" x2="14" y2="11"/>
                <line x1="10" y1="15" x2="14" y2="15"/>
              </svg>
            </span>
            <h3>Get profiled</h3>
            <p>The team reviews your eligibility, documents, and likely requirements.</p>
          </article>
          <article>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </span>
            <h3>Prepare properly</h3>
            <p>Receive guidance for forms, documents, appointments, reservations, or itinerary plans.</p>
          </article>
        </div>
      </section>

      <section className="cta-band">
        <div className="section-inner cta-inner">
          <div>
            <p className="section-kicker">Ready to begin?</p>
            <h2>Ask GlobeTrek Solutions about your study or travel plan.</h2>
          </div>
          <Link className="btn btn-primary" href="/contact">
            Start an inquiry
          </Link>
        </div>
      </section>
    </>
  );
}