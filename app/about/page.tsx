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
        <div className="feature-image">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80"
            alt="Business consultants working together"
          />
        </div>
        <div>
          <p className="section-kicker">Who we are</p>
          <h2>An education and travel consultancy built for clarity.</h2>
          <p>
            GlobeTrek Solutions helps students, families, and travellers understand their options and
            prepare more confidently for applications, reservations, appointments, and travel plans.
          </p>
          <p>
            The business combines education consultancy, student recruitment,
            travel packages, and general travel consultation into one organized experience.
          </p>
        </div>
      </section>

      <section className="section-inner team-section">
        <div className="section-heading">
          <p className="section-kicker">Meet the team</p>
          <h2>The people behind GlobeTrek Solutions.</h2>
        </div>
        <div className="team-grid">
          <article className="team-card">
            <img
              src="/samuel-globetrek.jpeg"
              alt="Samuel Ibitoye Adeiza"
            />
            <div>
              <h3>Samuel Ibitoye Adeiza</h3>
              <p className="role">Travel Consultant</p>
              <p>
                A seasoned travel and customer service professional with extensive experience in
                travel consultancy, business operations, and client relationship management. With a
                proven track record in flight reservations, visa assistance, and travel planning,
                Samuel is dedicated to delivering seamless travel experiences and exceptional
                customer satisfaction. His strong leadership skills and customer-first approach make
                him a valuable asset in helping clients explore the world with confidence.
              </p>
            </div>
          </article>
          <article className="team-card">
            <img
              src="/Stan.jpeg"
              alt="Stan Opara"
            />
            <div>
              <h3>Stan Opara</h3>
              <p className="role">Global Immigration & Expatriate Mobility Specialist</p>
              <p>
                A global immigration and expatriate mobility specialist with years of experience
                leading complex cross-border assignments for multinational organisations in sectors
                including oil and gas, power and utilities, financial services, infrastructure,
                technology, and consumer markets. Skilled in immigration compliance, government and
                public relations, and in shaping policies and operating structures that support
                compliant mobility, employment, and residency.
              </p>
            </div>
          </article>
          <article className="team-card">
            <img
              src="/Temitope.jpeg"
              alt="Temitope Monyeh"
            />
            <div>
              <h3>Temitope Monyeh</h3>
              <p className="role">Travel Consultant</p>
              <p>
                A Travel Consultant dedicated to making travel planning simple, seamless, and
                stress-free. Works with individuals, families, students, and businesses to create
                personalized travel experiences—from holidays and business travel to visa support
                and study abroad journeys. With a keen eye for detail and a commitment to
                exceptional service, ensures every trip is carefully planned so clients can travel
                with confidence and peace of mind.
              </p>
            </div>
          </article>
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
            Every inquiry is different. A student may need school preparation, while another
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