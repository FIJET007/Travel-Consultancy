import Link from "next/link";

export default function StudyAbroadPage() {
  return (
    <>
      <section className="page-hero">
        <img
          className="hero-media"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80"
          alt="Students walking on a university campus"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow">Study abroad</p>
          <h1>Plan your education journey with better structure and support.</h1>
          <p>
            GlobeTrek helps prospective students understand options, prepare documents, and move through
            the application process with clearer expectations.
          </p>
        </div>
      </section>

      <section className="section-inner split-section">
        <div className="feature-image">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80"
            alt="Students walking on campus with books"
          />
        </div>
        <div>
          <p className="section-kicker">Student recruitment support</p>
          <h2>For students who want to study outside their home country.</h2>
          <p>
            The right study path starts with profile review, course direction, document preparation, and
            realistic guidance. GlobeTrek supports students as they prepare for applications and travel.
          </p>
          <Link className="btn btn-secondary" href="/contact">Discuss my study plan</Link>
        </div>
      </section>

      <section className="process-band">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Student process</p>
            <h2>Simple steps for getting started.</h2>
          </div>
          <div className="card-grid four">
            <article className="process-card">
              <span>01</span>
              <h3>Profile review</h3>
              <p>Share your background, goals, academic records, and preferred destination.</p>
            </article>
            <article className="process-card">
              <span>02</span>
              <h3>Options guidance</h3>
              <p>Receive direction on suitable study routes and the documents likely required.</p>
            </article>
            <article className="process-card">
              <span>03</span>
              <h3>Application support</h3>
              <p>Get help with forms, document assessment, and organized submission preparation.</p>
            </article>
            <article className="process-card">
              <span>04</span>
              <h3>Travel readiness</h3>
              <p>Prepare for appointments, reservations, and other travel-related requirements.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-inner image-copy-grid">
        <div className="feature-image">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80"
            alt="Students studying together on campus"
          />
        </div>
        <div className="feature-copy">
          <p className="section-kicker">What to prepare</p>
          <h2>Good planning starts before an application is submitted.</h2>
          <ul className="check-list">
            <li>Academic records and personal details</li>
            <li>Preferred study destination and course direction</li>
            <li>Passport, travel history, and supporting documents</li>
            <li>Questions about appointment requirements</li>
          </ul>
        </div>
      </section>
    </>
  );
}