import Link from "next/link";

export default function TravelPackagesPage() {
  return (
    <>
      <section className="page-hero">
        <img
          className="hero-media"
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=80"
          alt="Airplane wing above the clouds"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow">Travel packages</p>
          <h1>Plan trips, reservations, and itineraries with support.</h1>
          <p>
            From flight and hotel reservations to itinerary planning, GlobeTrek helps travellers prepare
            with a clearer process.
          </p>
        </div>
      </section>

      <section className="section-inner package-intro">
        <div className="section-heading">
          <p className="section-kicker">Trip support</p>
          <h2>Travel help for holidays, visits, business trips, and special plans.</h2>
        </div>
        <div className="card-grid three">
          <article className="package-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
              alt="Beach destination for leisure travel"
            />
            <div>
              <h3>Leisure travel</h3>
              <p>Trip planning support for holidays, family visits, and getaway ideas.</p>
            </div>
          </article>
          <article className="package-card">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
              alt="Business travellers in a meeting"
            />
            <div>
              <h3>Business travel</h3>
              <p>Consultation and reservation support for business-related travel needs.</p>
            </div>
          </article>
          <article className="package-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
              alt="Travel destination with scenic accommodation"
            />
            <div>
              <h3>Custom packages</h3>
              <p>Flexible planning for destinations, stays, activities, and itinerary management.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="feature-band">
        <div className="section-inner feature-grid">
          <div className="feature-image">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80"
              alt="Traveller planning a route with a map"
            />
          </div>
          <div className="feature-copy">
            <p className="section-kicker">What can be included</p>
            <h2>Useful support before the trip begins.</h2>
            <ul className="check-list">
              <li>Travel consultation and destination guidance</li>
              <li>Flight and accommodation reservation support</li>
              <li>Itinerary planning and requirement checks</li>
              <li>Appointment guidance where travel processes require it</li>
            </ul>
            <Link className="btn btn-primary" href="/contact">Request travel support</Link>
          </div>
        </div>
      </section>
    </>
  );
}