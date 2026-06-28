import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <img
          className="hero-media"
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1800&q=80"
          alt="Client sending an online inquiry"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow">Contact</p>
          <h1>Tell GlobeTrek what you need help with.</h1>
          <p>
            Send an inquiry for study abroad, travel packages, reservations, appointment
            booking, or general consultation.
          </p>
        </div>
      </section>

      <section className="section-inner contact-layout">
        <div className="contact-panel">
          <p className="section-kicker">Reach the team</p>
          <h2>Quick contact options</h2>
          <div className="contact-methods">
            <a href="https://wa.me/2348038876566">
              <span>WhatsApp</span>
              <strong>+234 803 887 6566</strong>
            </a>
            <a href="tel:+353833774530">
              <span>Secondary phone</span>
              <strong>+353 83 377 4530</strong>
            </a>
            <a href="mailto:globetrektravels@outlook.com">
              <span>Email</span>
              <strong>globetrektravels@outlook.com</strong>
            </a>
            <a href="https://www.instagram.com/GlobeTrek.travels/">
              <span>Instagram</span>
              <strong>@GlobeTrek.travels</strong>
            </a>
          </div>
          <p className="contact-note">
            Online consultation is available. No physical office address has been listed yet.
          </p>
        </div>

        <ContactForm />
      </section>
    </>
  );
}