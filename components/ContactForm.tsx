"use client";

import { useState, useRef, FormEvent } from "react";

const SERVICES: string[] = [
  "Application Profiling",
  "Form Filling",
  "Document Assessment",
  "Flight/Hotel Reservations",
  "Document Upload/Submission",
  "Appointment Booking",
  "General Consultation",
  "Study Abroad",
  "Travel Packages",
];

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const requiredFields: HTMLInputElement[] = Array.from(
      form.querySelectorAll<HTMLInputElement>("[required]")
    );
    let isValid = true;

    requiredFields.forEach((field) => {
      const hasValue = field.value.trim().length > 0;
      field.classList.toggle("field-error", !hasValue);
      if (!hasValue) isValid = false;
    });

    if (!isValid) {
      setStatus("Please complete the required fields before sending your inquiry.");
      return;
    }

    const data = new FormData(form);
    const message = [
      "Hello GlobeTrek Solutions, I would like to make an inquiry.",
      "",
      `Name: ${data.get("name")}`,
      `Contact: ${data.get("contact")}`,
      `Service: ${data.get("service")}`,
      `Destination/Country: ${data.get("destination") || "Not specified"}`,
      "",
      `Message: ${data.get("message")}`,
    ].join("\n");

    const subject = encodeURIComponent("New Inquiry from GlobeTrek Website");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:globetrektravels@outlook.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email client...");
  };

  return (
    <form className="contact-form" id="consultation-form" ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <p className="section-kicker">Inquiry form</p>
        <h2>Request a consultation</h2>
      </div>
      <label>
        Full name
        <input type="text" name="name" autoComplete="name" required />
      </label>
      <label>
        Email or phone number
        <input type="text" name="contact" autoComplete="email" required />
      </label>
      <label>
        Service interest
        <select name="service" required>
          <option value="">Choose a service</option>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label>
        Destination or country
        <input type="text" name="destination" placeholder="Optional" />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} required></textarea>
      </label>
      <p className="form-status" role="status">{status}</p>
      <button className="btn btn-primary" type="submit">Send inquiry via email</button>
      <a className="email-fallback" href="https://wa.me/2348038876566">
        Prefer WhatsApp? Send a message instead.
      </a>
    </form>
  );
}