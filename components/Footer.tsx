import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div>
          <Link className="footer-brand" href="/">
            <img src="/globetrek-logo.jpeg" alt="GlobeTrek Solutions logo" />
            <span>GlobeTrek Solutions</span>
          </Link>
          <p>
            Education consultancy, student recruitment, travel packages, and travel
            consultation.
          </p>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="tel:+2348038876566">+234 803 887 6566</a>
          <a href="tel:+353833774530">+353 83 377 4530</a>
          <a href="mailto:globetrektravels@outlook.com">globetrektravels@outlook.com</a>
        </div>
        <div>
          <h2>Follow</h2>
          <a href="https://www.instagram.com/GlobeTrek.travels/">Instagram: @GlobeTrek.travels</a>
          <a href="https://wa.me/2348038876566">WhatsApp consultation</a>
        </div>
      </div>
      <div className="footer-note">
        Consultations and document support do not guarantee application approval. Final decisions are made by
        the relevant institutions, embassies, and authorities.
      </div>
    </footer>
  );
}