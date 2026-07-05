import Link from "next/link";

import React from "react";

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const SERVICES: Service[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "General Consultation",
    desc: "Offering expert advice on travel planning and itinerary management.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
      </svg>
    ),
    title: "Application Profiling",
    desc: "Evaluating client eligibility and requirements for travel applications.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M9 13h6"/>
        <path d="M9 17h6"/>
      </svg>
    ),
    title: "Form Filling",
    desc: "Assisting in accurately completing necessary application forms.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: "Document Assessment",
    desc: "Reviewing and verifying client-submitted documents.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2 11 13"/>
        <path d="m22 2-7 20-4-9-9-4 20-7z"/>
      </svg>
    ),
    title: "Flight/Hotel Reservations",
    desc: "Providing tentative flight and accommodation reservations when required.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    title: "Document Upload/Submission",
    desc: "Facilitating document submissions for travel processes.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01"/>
        <path d="M12 14h.01"/>
        <path d="M16 14h.01"/>
        <path d="M8 18h.01"/>
        <path d="M12 18h.01"/>
        <path d="M16 18h.01"/>
      </svg>
    ),
    title: "Appointment Booking",
    desc: "Scheduling embassy or application centre appointments.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-inner services-list-section">
        <div className="section-heading">
          <p className="section-kicker">Services provided</p>
          <h2>What GlobeTrek Solutions can help with.</h2>
        </div>
        <div className="service-list">
          {SERVICES.map((s, i) => (
            <article key={i}>
              <span>{s.icon}</span>
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
            <h2>
              Students, applicants, and travellers who want a clearer route.
            </h2>
            <p>
              The service mix is built for people who need help understanding
              requirements, preparing documents, completing forms, scheduling
              appointments, or arranging travel support.
            </p>
            <Link className="btn btn-primary" href="/contact">
              Ask about a service
            </Link>
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