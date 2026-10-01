import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../CSS/Contact.css";

const NAV = [
  ["/", "Home"],
  ["/about", "About"],
  ["/personal-styling", "Personal Styling"],
  ["/wedding-styling", "Wedding Styling"],
  ["/contact", "Enquiry"],
];

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    contactMethod: "",
    message: "",
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Enquiry submitted:", formData);

    // Connect this to Formspree, EmailJS,
    // your own backend, etc. later.
  };

  return (
    <main className="contact-page">
      {/* =========================================
          NAVBAR
      ========================================= */}
      <header className="contact-navbar">
        <Link to="/" className="contact-logo">
          Curated by Aanoosh
        </Link>

        <button
          type="button"
          className="contact-menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`contact-nav-links ${
            menuOpen ? "contact-nav-open" : ""
          }`}
        >
          {NAV.map(([href, label]) => (
            <Link
              key={href}
              to={href}
              className={href === "/contact" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {/* =========================================
          HERO
      ========================================= */}
      <section className="contact-hero">
        <div className="contact-hero-inner contact-reveal">
          <p className="contact-eyebrow">
            <span />
            BEGIN YOUR JOURNEY
          </p>

          <h1>
            Tell me a little
            <em>about you.</em>
          </h1>

          <p className="contact-hero-copy">
            Share a few details below and Aanoosh will be in touch to
            understand what you are looking for and recommend the styling
            experience that feels right for you.
          </p>
        </div>
      </section>

      {/* =========================================
          FORM
      ========================================= */}
      <section className="contact-form-section">
        <div className="contact-form-shell">
          {/* LEFT INTRO */}
          <div className="contact-form-intro contact-reveal">
            <p className="contact-section-number">01</p>

            <p className="contact-section-label">
              YOUR DETAILS
            </p>

            <h2>
              Let’s get to
              <span>know you.</span>
            </h2>

            <p className="contact-form-intro-copy">
              A few simple details are all we need to begin. You can share
              as much or as little as you like.
            </p>
          </div>

          {/* FORM */}
          <form
            className="contact-form contact-reveal"
            onSubmit={handleSubmit}
          >
            {/* NAME */}
            <div className="contact-field contact-field-full">
              <label htmlFor="name">Your name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="contact-field">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* PHONE */}
            <div className="contact-field">
              <label htmlFor="phone">Phone number</label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+61"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* SERVICE */}
            <div className="contact-field contact-field-full contact-choice-field">
              <label>What are you interested in?</label>

              <div className="contact-options">
                <label className="contact-option">
                  <input
                    type="radio"
                    name="service"
                    value="Personal Styling"
                    checked={formData.service === "Personal Styling"}
                    onChange={handleChange}
                  />

                  <span>
                    <small>01</small>
                    Personal Styling
                  </span>
                </label>

                <label className="contact-option">
                  <input
                    type="radio"
                    name="service"
                    value="Wedding Styling"
                    checked={formData.service === "Wedding Styling"}
                    onChange={handleChange}
                  />

                  <span>
                    <small>02</small>
                    Wedding Styling
                  </span>
                </label>
              </div>
            </div>

            {/* CONTACT METHOD */}
            <div className="contact-field contact-field-full contact-choice-field">
              <label>How would you prefer to be contacted?</label>

              <div className="contact-options contact-options-three">
                <label className="contact-option">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="Email"
                    checked={formData.contactMethod === "Email"}
                    onChange={handleChange}
                  />

                  <span>Email</span>
                </label>

                <label className="contact-option">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="Phone"
                    checked={formData.contactMethod === "Phone"}
                    onChange={handleChange}
                  />

                  <span>Phone</span>
                </label>

                <label className="contact-option">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="WhatsApp"
                    checked={formData.contactMethod === "WhatsApp"}
                    onChange={handleChange}
                  />

                  <span>WhatsApp</span>
                </label>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="contact-field contact-field-full">
              <label htmlFor="message">
                Anything you’d like Aanoosh to know?
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us a little about what you're looking for..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* SUBMIT */}
            <div className="contact-submit-row contact-field-full">
              <button type="submit" className="contact-submit">
                SEND ENQUIRY
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* =========================================
          SMALL REASSURANCE STRIP
      ========================================= */}
      <section className="contact-info-strip">
        <div className="contact-info-item">
          <span>01</span>

          <div>
            <h3>Personal</h3>
            <p>
              Every enquiry is considered individually.
            </p>
          </div>
        </div>

        <div className="contact-info-item">
          <span>02</span>

          <div>
            <h3>Flexible</h3>
            <p>
              Consultations can be arranged in person or remotely.
            </p>
          </div>
        </div>

        <div className="contact-info-item">
          <span>03</span>

          <div>
            <h3>Considered</h3>
            <p>
              We will help guide you toward the right service.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================= */}
      <footer className="contact-footer">
        <div className="contact-footer-brand">
          <h2>Curated by Aanoosh</h2>
          <p>Personal & Wedding Styling</p>
        </div>

        <div className="contact-footer-links">
          {NAV.map(([href, label]) => (
            <Link key={href} to={href}>
              {label}
            </Link>
          ))}
        </div>

        <div className="contact-footer-bottom">
          <span>© 2026 Curated by Aanoosh</span>
          <span>Sydney, Australia</span>
        </div>
      </footer>
    </main>
  );
}

export default Contact;