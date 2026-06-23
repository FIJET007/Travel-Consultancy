import Link from "next/link";

interface Service {
  num: string;
  title: string;
  desc: string;
}

const SERVICES: Service[] = [
  { num: "01", title: "Application Profiling", desc: "Evaluating client eligibility and requirements for travel or visa applications." },
  { num: "02", title: "Form Filling", desc: "Assisting in accurately completing necessary application forms." },
  { num: "03", title: "Document Assessment", desc: "Reviewing and verifying client-submitted documents." },
  { num: "04", title: "Flight/Hotel Reservations", desc: "Providing tentative flight and accommodation reservations when required." },
  { num: "05", title: "Document Upload/Submission", desc: "Facilitating document submissions for visa and travel processes." },
  { num: "06", title: "Appointment Booking", desc: "Scheduling embassy or visa application centre appointments." },
  { num: "07", title: "General Consultation", desc: "Offering expert advice on travel planning, visa requirements, and itinerary management." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <img
          className="hero-media"
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80"
          alt="Documents and travel planning materials"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow">Services</p>
          <h1>Support for applications, documents, reservations, and consultation.</h1>
          <p>
            Choose the service that matches your current stage, then contact GlobeTrek for guidance on
            the next step.
          </p>
        </div>
      </section>

      <section className="section-inner services-list-section">
        <div className="section-heading">
          <p className="section-kicker">Services provided</p>
          <h2>What GlobeTrek Solutions can help with.</h2>
        </div>
        <div className="service-list">
          {SERVICES.map((s) => (
            <article key={s.num}>
              <span>{s.num}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="section-inner feature-grid">
          <div className="feature-copy">
            <p className="section-kicker">Best for</p>
            <h2>Students, applicants, and travellers who want a clearer route.</h2>
            <p>
              The service mix is built for people who need help understanding requirements, preparing
              documents, completing forms, scheduling appointments, or arranging travel support.
            </p>
            <Link className="btn btn-primary" href="/contact">Ask about a service</Link>
          </div>
          <div className="feature-image">
            <img
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1400&q=80"
              alt="Professional consultation at a desk"
            />
          </div>
        </div>
      </section>
    </>
  );
}