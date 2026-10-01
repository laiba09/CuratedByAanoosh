import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";

import heroImage from "../assets/hero-image1.png";
import holf from "../assets/holf.png";
import pers from "../assets/wedding.png";
import introEditorial from "../assets/pers.png";
import silhouetteFit from "../assets/choose.png";
import colourPalette from "../assets/shoulder.png";
import lifestyleOccasion from "../assets/hang.png";
import servicesMain from "../assets/book.png";

const NAV = [
  ["/", "Home"],
  ["/about", "About"],
  ["/personal-styling", "Personal Styling"],
  ["/wedding-styling", "Wedding Styling"],
  ["/contact", "Enquiry"]
];

const TESTIMONIALS = [
  {
    quote:
      "Aanoosh was brilliant! Highly recommend her. She made the experience for my wedding party and I incredibly easy and we were all over the moon with how our suits turned out. Thanks Aanoosh!!",
    name: "Ayden",
  },
  {
    quote:
      "Aanoosh listened carefully to what I wanted and helped create my wedding suit that perfectly matched the style I had in mind. Her attention to detail and friendly approach made the process stress-free and enjoyable. Thanks Aanoosh!",
    name: "Maddison",
  },
  {
    quote:
      "Aanoosh was an absolute professional. She had great suggestions for every detail and made the entire customisation process so easy.",
    name: "Caroline",
  },
  {
    quote:
      "Great service, Aanoosh made the experience smooth and easy.",
    name: "Fergus",
  },
  {
    quote:
      "Thanks Aanoosh for all the help and making the multiple suit fittings a great experience. Would highly recommend if you're in need of a custom suit.",
    name: "Ethan",
  },
];

const PILLARS = [
  {

    title: "Silhouette & fit",
    text: "Cuts and proportions chosen for your frame, so clothes sit the way they should and you stop adjusting them.",
    image: silhouetteFit,
  },
  {
 
    title: "Colour & palette",
    text: "A palette drawn from your skin tone, hair and existing wardrobe, so more of what you own works together.",
    image: colourPalette,
  },
  {

    title: "Lifestyle & occasion",
    text: "Looks built around your week: work, travel, weekends and the events that matter to you.",
    image: lifestyleOccasion,
  },
];

const STEPS = [
  {
    title: "Enquiry",
    text: "Send a short note about what you need. You will hear back within two business days.",
  },
  {
    title: "Consultation",
    text: "We talk through your lifestyle, your taste and what is and is not working right now.",
  },
  {
    title: "Direction",
    text: "You receive a clear styling direction: palette, silhouettes, key pieces and references.",
  },
  {
    title: "Styling",
    text: "We put it into practice through wardrobe edits, shopping support or full outfit planning.",
  },
];

const AUDIENCE = [
  "You have a full wardrobe but nothing feels right to wear.",
  "You are starting a new role, moving cities or changing your look.",
  "You are planning a wedding and want your looks to feel cohesive.",
  "You want your partner, bridal party or family to be styled with you.",
];

const FAQS = [
  {
    q: "Do I need to buy new clothes?",
    a: "No. Most sessions begin with what you already own. New pieces are only suggested where they fill a real gap.",
  },
  {
    q: "Can we work together if I am not in Sydney?",
    a: "Yes. Consultations and styling direction can be done online. Shopping and fittings are available in Sydney.",
  },
  {
    q: "How far ahead should I book wedding styling?",
    a: "Ideally three to six months before the wedding, which leaves time for sourcing, fittings and alterations.",
  },
  {
    q: "What does a consultation cost?",
    a: "Send an enquiry with a few details and you will receive pricing that fits the service you need.",
  },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".home-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("home-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-page">
      {/* HERO */}
      <section className="home-hero">
        <img
          className="home-hero-background"
          src={heroImage}
          alt="Luxury wardrobe styling"
        />
        <div className="home-hero-overlay" />

        <header className="home-navbar">
          <Link to="/" className="home-logo">
            Curated by Aanoosh
          </Link>

          <button
            className="home-menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav className={`home-nav-links ${menuOpen ? "open" : ""}`}>
            {NAV.map(([href, label]) => (
              <Link key={href} to={href}>
                {label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="home-hero-content">
          <p className="home-eyebrow">Personal & Wedding Styling</p>

          <h1>
            Style,
            <span>curated for you.</span>
          </h1>

          <p className="home-hero-description">
            Thoughtful styling for individuals and couples who want to feel
            confident, refined and completely themselves.
          </p>

          <div className="home-hero-actions">
            <Link to="/contact" className="home-outline-button">
              Book a Consultation
            </Link>
            <Link to="/personal-styling" className="home-text-link">
              Explore Styling
            </Link>
          </div>
        </div>

        <div className="home-hero-bottom">
          <span>Discover you</span>
        </div>
      </section>

      {/* INTRO */}
      {/* INTRO */}
<section className="home-intro home-reveal">
  <div className="home-intro-visual">
    <p className="home-section-label">
      Curated with intention
    </p>

    <h2>
      Style that feels
      <span>completely your own.</span>
    </h2>

    <div className="home-intro-image">
      <img
        src={introEditorial}
        alt="Curated neutral wardrobe and styling accessories"
      />

      <div className="home-intro-image-caption">
        <span>PERSONAL</span>
        <span>INTENTIONAL</span>
        <span>CURATED</span>
      </div>
    </div>
  </div>

  <div className="home-intro-copy">
    <p>
      Curated by Aanoosh is a personal and wedding styling service
      focused on creating a considered visual identity around you.
    </p>

    <p>
      From everyday dressing to meaningful celebrations, every detail is
      chosen with purpose, from silhouette and colour to the way each
      piece works within your lifestyle.
    </p>

    <p>
      The approach is thoughtful, collaborative and personal, creating a
      wardrobe or styling direction that feels refined without ever
      feeling forced.
    </p>

    <div className="home-intro-divider" />

    <p className="home-intro-small">
      Every styling experience begins with understanding who you are,
      how you live and how you want to feel. The result is a wardrobe
      that feels considered, effortless and unmistakably yours.
    </p>
  </div>
</section>

      {/* APPROACH */}
      
{/* APPROACH */}
<section className="home-approach home-reveal">
  <div className="home-approach-inner">

    <div className="home-approach-header">

      <div className="home-approach-heading">
        <p className="home-section-label">The approach</p>

        <h2>
          Three things
          <span>every look is built on.</span>
        </h2>
      </div>

      <p className="home-approach-intro">
        Every styling decision begins with you — your proportions,
        your palette and the way you actually live.
      </p>

    </div>

    <div className="home-pillars">

      {PILLARS.map((item) => (
        <article className="home-pillar" key={item.title}>

          <div className="home-pillar-number-row">
            <span className="home-pillar-number">
              {item.number}
            </span>

            <span className="home-pillar-number-line" />
          </div>

          <div className="home-pillar-image">
            <img
              src={item.image}
              alt={item.title}
            />
          </div>

          <div className="home-pillar-copy">

            <h3>{item.title}</h3>

            <div className="home-pillar-text-row">

              <p>{item.text}</p>

              

            </div>

          </div>

        </article>
      ))}

    </div>

  </div>
</section>
      {/* STYLING OPTIONS */}
      <section className="home-services">
        <Link to="/personal-styling" className="home-service-card home-reveal">
          <div className="home-service-image">
            <img src={holf} alt="Personal styling" />
          </div>
          <div className="home-service-overlay" />
          <div className="home-service-content">
            <p>For everyday life</p>
            <h3>
              Personal
              <span>Styling</span>
            </h3>
            <p className="home-service-description">
              Refine your wardrobe and develop a personal style that feels
              polished, effortless and truly yours. Includes wardrobe edits,
              colour and fit guidance, and shopping support.
            </p>
            <span className="home-service-link">
              Explore Personal Styling 
            </span>
          </div>
        </Link>

        <Link to="/wedding-styling" className="home-service-card home-reveal">
          <div className="home-service-image">
            <img src={pers} alt="Wedding styling" />
          </div>
          <div className="home-service-overlay" />
          <div className="home-service-content">
            <p>For your celebration</p>
            <h3>
              Wedding
              <span>Styling</span>
            </h3>
            <p className="home-service-description">
              Create a cohesive visual story across your wedding looks,
              partner, bridal party and finishing details. Includes fittings,
              sourcing and day-of coordination.
            </p>
            <span className="home-service-link">
              Explore Wedding Styling
            </span>
          </div>
        </Link>
      </section>

      {/* WHO IT'S FOR */}
      {/* <section className="home-audience home-reveal">
        <div>
          <p className="home-section-label">Who it is for</p>
          <h2>
            Is this
            <span>right for you?</span>
          </h2>
        </div>

        <ul className="home-audience-list">
          {AUDIENCE.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section> */}

{/* SERVICES INDEX */}
{/* SERVICES INDEX */}
<section className="editorial-services home-reveal">

  {/* LEFT SIDE */}
  <div className="editorial-services-left">

    <div className="editorial-services-heading">
      <p className="editorial-services-eyebrow">
        <span></span>
        WHAT WE OFFER
      </p>

      <h2>
        Styling, shaped
        <em>around you.</em>
      </h2>

      <p className="editorial-services-description">
        From refining your everyday wardrobe to creating a complete
        direction for your wedding, each service is designed to feel
        personal, considered and entirely your own.
      </p>
    </div>

    <div className="editorial-main-image">
      <img
        src={servicesMain}
        alt="Curated personal styling"
      />

      <div className="editorial-image-circle">
        <span>A MORE CONSIDERED WARDROBE</span>
      </div>
    </div>

  </div>


  {/* RIGHT SIDE */}
  <div className="editorial-services-right">

    <a href="/personal-styling" className="editorial-service-item">

      <span className="editorial-service-number">
      </span>

      <div className="editorial-service-thumb">
        
      </div>

      <div className="editorial-service-copy">
        <h3>
          Personal
          <span>Consultation</span>
        </h3>

        <p>
          Clarity, direction and a fresh perspective
          on your style.
        </p>
      </div>

      <span className="editorial-service-category">
        PERSONAL
      </span>

      <span className="editorial-service-arrow">
        →
      </span>

    </a>


    <a href="/personal-styling" className="editorial-service-item">

      <span className="editorial-service-number">

      </span>

      <div className="editorial-service-thumb">
        
      </div>

      <div className="editorial-service-copy">
        <h3>Curated Day</h3>

        <p>
          A dedicated styling experience built
          entirely around you.
        </p>
      </div>

      <span className="editorial-service-category">
        PERSONAL
      </span>

      <span className="editorial-service-arrow">
        →
      </span>

    </a>


    <a href="/personal-styling" className="editorial-service-item">

      <span className="editorial-service-number">

      </span>

      <div className="editorial-service-thumb">
        
      </div>

      <div className="editorial-service-copy">
        <h3>Inner Circle</h3>

        <p>
          Ongoing styling support for an
          evolving wardrobe.
        </p>
      </div>

      <span className="editorial-service-category">
        PERSONAL
      </span>

      <span className="editorial-service-arrow">
        →
      </span>

    </a>


    <a href="/wedding-styling" className="editorial-service-item">

      <span className="editorial-service-number">

      </span>

      <div className="editorial-service-thumb">
        
      </div>

      <div className="editorial-service-copy">
        <h3>
          Wedding
          <span>Consultation</span>
        </h3>

        <p>
          Thoughtful guidance for the beginning
          of your bridal vision.
        </p>
      </div>

      <span className="editorial-service-category">
        WEDDING
      </span>

      <span className="editorial-service-arrow">
        →
      </span>

    </a>


    <a href="/wedding-styling" className="editorial-service-item">

      <span className="editorial-service-number">

      </span>

      <div className="editorial-service-thumb">
        
      </div>

      <div className="editorial-service-copy">
        <h3>Creative Direction</h3>

        <p>
          A cohesive visual direction for every
          part of your celebration.
        </p>
      </div>

      <span className="editorial-service-category">
        WEDDING
      </span>

      <span className="editorial-service-arrow">
        →
      </span>

    </a>


    <a href="/wedding-styling" className="editorial-service-item">

      <span className="editorial-service-number">

      </span>

      <div className="editorial-service-thumb">
        
      </div>

      <div className="editorial-service-copy">
        <h3>Full Styling</h3>

        <p>
          Complete styling from first concept
          to final look.
        </p>
      </div>

      <span className="editorial-service-category">
        WEDDING
      </span>

      <span className="editorial-service-arrow">
        →
      </span>

    </a>

  </div>

</section>
{/* TESTIMONIALS */}
<section className="home-testimonials home-reveal">
  <div className="home-testimonials-heading">
    <p className="home-section-label">Client words</p>

    <h2>Testimonials</h2>

    <p className="home-testimonials-note">
      Mentioned in the 2026 Wedding Suit Review
    </p>
  </div>

  <div className="home-testimonials-list">
    {TESTIMONIALS.map((testimonial) => (
      <article
        className="home-testimonial"
        key={testimonial.name}
      >
        <p>“{testimonial.quote}”</p>

        <span>— {testimonial.name}</span>
      </article>
    ))}
  </div>
</section>


{/* FAQ */}
<section className="home-faq home-reveal">
  <div className="home-faq-heading">
    <p className="home-section-label">
      Need to know
    </p>

    <h2>
      Your Questions,
      <span>Answered.</span>
    </h2>
  </div>

  <div className="home-faq-list">
    {FAQS.map((item, index) => (
      <details key={item.q} open={index === 0}>
        <summary>{item.q}</summary>
        <p>{item.a}</p>
      </details>
    ))}
  </div>
</section>
      {/* CONSULTATION */}
      <section className="home-consultation home-reveal" id="consultation">
        <div>
          <p className="home-section-label">Begin your journey</p>
          <h2>
            Your style begins
            <span>with a conversation.</span>
          </h2>
        </div>

        <div className="home-consultation-copy">
          <p>
            Whether you are refreshing your wardrobe or styling one of the most
            important moments of your life, the process begins by understanding
            you.
          </p>
          <Link to="/contact" className="home-dark-button">
            Make an Enquiry
          </Link>
        </div>
      </section>

  

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="home-footer-brand">
          <h2>Curated by Aanoosh</h2>
          <p>Personal & Wedding Styling</p>
        </div>

        <div className="home-footer-links">
          {NAV.map(([href, label]) => (
            <Link key={href} to={href}>
              {label}
            </Link>
          ))}
        </div>

        <div className="home-footer-bottom">
          <span>© 2026 Curated by Aanoosh</span>
          <span>Sydney, Australia</span>
        </div>
      </footer>
    </main>
  );
}

export default Home;