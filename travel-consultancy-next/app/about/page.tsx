import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <img
          className="hero-media"
          src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1800&q=80"
          alt="Consultants planning with clients"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow">About the company</p>
          <h1>Guidance for people preparing to study, travel, and move with purpose.</h1>
          <p>
            GlobeTrek Solutions supports clients with practical planning, organized documentation,
            consultation, and travel-related assistance.
          </p>
        </div>
      </section>

      <section className="section-inner split-section">
        <div>
          <p className="section-kicker">Who we are</p>
          <h2>An education and travel consultancy built for clarity.</h2>
        </div>
        <div>
          <p>
            GlobeTrek Solutions helps students, families, and travellers understand their options and
            prepare more confidently for applications, reservations, appointments, and travel plans.
          </p>
          <p>
            The business combines education consultancy, student recruitment, visa process support,
            travel packages, and general travel consultation into one organized experience.
          </p>
        </div>
      </section>

      <section className="value-band">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">What clients can expect</p>
            <h2>Professional support without confusing language.</h2>
          </div>
          <div className="card-grid three">
            <article className="value-card">
              <h3>Clear direction</h3>
              <p>Clients get practical next steps based on the service they need and the goal they share.</p>
            </article>
            <article className="value-card">
              <h3>Organized preparation</h3>
              <p>Documents, forms, appointments, and reservations are handled with attention to detail.</p>
            </article>
            <article className="value-card">
              <h3>Easy communication</h3>
              <p>Visitors can quickly reach GlobeTrek through WhatsApp, phone, email, or the inquiry form.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-inner image-copy-grid">
        <div className="feature-copy">
          <p className="section-kicker">Our approach</p>
          <h2>Start with the client's goal, then build the right process around it.</h2>
          <p>
            Every inquiry is different. A student may need school and visa preparation, while another
            traveller may need reservations, appointment guidance, or trip planning. GlobeTrek's role is
            to make the process easier to understand and easier to act on.
          </p>
          <Link className="btn btn-secondary" href="/services">Explore services</Link>
        </div>
        <div className="feature-image">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=80"
            alt="Students walking on campus"
          />
        </div>
      </section>
    </>
  );
}