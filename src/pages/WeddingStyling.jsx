import { useEffect, useState } from "react";
import "../CSS/WeddingStyling.css";

import weddingHero from "../assets/wedding.png";
import creativeImage from "../assets/shoes.png";
import fullStylingImage from "../assets/second.png";
import dress1 from "../assets/dress2.png";
import comp from "../assets/compute.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import direct from "../assets/man.png";
import fourth from "../assets/direct.png";


function WeddingStyling() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".ws-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ws-visible");
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

  return (
    <main className="wedding-styling-page">

      {/* NAVBAR */}
      <header className="ws-navbar">
        <a href="/" className="ws-logo">
          Curated by Aanoosh
        </a>

        <nav className={`ws-nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/personal-styling">Personal Styling</a>
          <a href="/wedding-styling" className="active">
            Wedding Styling
          </a>
          <a href="/contact">Enquiry</a>
        </nav>

        <button
          className="ws-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </header>


      {/* HERO */}
      <section className="ws-editorial-hero">

        <div className="ws-editorial-image ws-reveal">
          <img
            src={weddingHero}
            alt="Wedding styling"
          />

          <div className="ws-editorial-image-overlay" />

          <div className="ws-editorial-image-caption">
            <span>CURATED BY AANOOSH</span>
          </div>
        </div>

        <div className="ws-editorial-copy ws-reveal">

          <div className="ws-editorial-topline">
            <span></span>
            <span className="ws-editorial-line" />
            <span>WEDDING STYLING</span>
          </div>

          <h1>
            Your day,
            <span>beautifully considered.</span>
          </h1>

          <p className="ws-editorial-lead">
            Thoughtful wedding styling for celebrations that feel
            personal, refined and unmistakably yours.
          </p>

          <p className="ws-editorial-description">
            From fashion and colour direction to the finer details that
            bring everything together, each decision is considered as
            part of one cohesive visual story.
          </p>

          <a href="/contact" className="ws-editorial-button">
            BEGIN YOUR WEDDING JOURNEY
          </a>

          <div className="ws-editorial-note">
            
          </div>

        </div>

      </section>


      {/* INTRODUCTION */}
      <section className="ws-introduction">

        <div className="ws-introduction-inner">

          <div className="ws-intro-label ws-reveal">
            <p>THE APPROACH</p>
          </div>

          <div className="ws-intro-heading ws-reveal">
            <h2>
              More than a look.
              <span>A feeling carried through every detail.</span>
            </h2>
          </div>

          <div className="ws-intro-text ws-reveal">
            <p>
              A wedding should feel personal before it feels perfect.
              Every choice should contribute to the same visual story.
            </p>

            <p>
              We work closely with you to understand the atmosphere you
              want to create, how you want to feel on the day and the
              details that matter most to you.
            </p>

            <p>
              From colour and texture to fashion, accessories and styling
              details, each element is considered as part of a complete
              and cohesive direction.
            </p>
          </div>

        </div>

      </section>

      

{/* =====================================================
    WEDDING SERVICES — EDITORIAL ROWS
===================================================== */}

<section className="ws-editorial-services">

  <div className="ws-editorial-services-header ws-reveal">


    <h2>
      From first vision
      <span>to final fitting.</span>
    </h2>

    <p>
      Begin with a consultation, build your complete visual direction,
      or continue through to a fully supported styling experience.
      Each stage is designed to build naturally on the one before it.
    </p>

  </div>
{/* PACKAGE ARCHES */}
<div className="ws-package-arches ws-reveal">

  {/* CONSULTATION */}
  <a href="#consultation" className="ws-package-arch">
    <div className="ws-package-arch-image">
      <img
        src={creativeImage}
        alt="Wedding styling consultation"
      />

      <div className="ws-package-arch-overlay" />

      <span className="ws-package-number">
        01
      </span>
    </div>

    <div className="ws-package-arch-copy">
      <p>WEDDING STYLING</p>

      <h3>Consultation</h3>

      <span>
        Begin with your vision
      </span>
    </div>
  </a>


  {/* CREATIVE DIRECTION */}
  <a href="#creative-direction" className="ws-package-arch">
    <div className="ws-package-arch-image">
      <img
        src={second}
        alt="Wedding creative direction"
      />

      <div className="ws-package-arch-overlay" />

      <span className="ws-package-number">
        02
      </span>
    </div>

    <div className="ws-package-arch-copy">
      <p>VISUAL DIRECTION</p>

      <h3>Creative Direction</h3>

      <span>
        Develop the complete aesthetic

      </span>
    </div>
  </a>


  {/* FULL STYLING */}
  <a href="#full-styling" className="ws-package-arch">
    <div className="ws-package-arch-image">
      <img
        src={third}
        alt="Full wedding styling"
      />

      <div className="ws-package-arch-overlay" />

      <span className="ws-package-number">
        03
      </span>
    </div>

    <div className="ws-package-arch-copy">
      <p>PREMIUM EXPERIENCE</p>

      <h3>Full Styling</h3>

      <span>
        Supported through every detail

      </span>
    </div>
  </a>

</div>

  {/* 01 — CONSULTATION */}
  <article className="ws-editorial-service ws-reveal">
    
    <div className="ws-editorial-service-image">  
      <img
        src={fourth}
        alt="Wedding Styling Consultation"
      />

      <span className="ws-editorial-number">
        01
      </span>
    </div>


    <div className="ws-editorial-service-copy">

      <p className="ws-editorial-label">
        WEDDING STYLING
      </p>

      <h3>
        Consultation
      </h3>

      <p className="ws-editorial-lead">
        Not sure where to start? This is where we begin.
      </p>

      <p>
        In your one-on-one consultation, I get to know you, your vision
        and the aesthetic you want to create for your wedding.
      </p>

      <p>
        We explore your references, preferred silhouettes, colour
        direction and the overall feeling you want the day to have.
        You’ll leave with clear creative direction, personalised styling
        notes and a sample mood board that begins to bring your ideas
        together.
      </p>

      <p>
        This session is ideal for couples who want expert guidance and
        a strong starting point before moving into the next stage.
      </p>


      <div className="ws-editorial-included">

        <p className="ws-editorial-included-title">
          WHAT’S INCLUDED
        </p>

        <div className="ws-editorial-included-grid">
          <span>Personalised one-on-one session</span>
          <span>Personalised styling notes & direction</span>
          <span>Sample mood board</span>
          <span>Concept overview</span>
          <span>Initial colour recommendations</span>
          <span>Initial silhouette recommendations</span>
        </div>

      </div>


      <a href="/contact" className="ws-editorial-link">
        ENQUIRE ABOUT CONSULTATION
      </a>
      
    </div>

  </article>


  {/* 02 — CREATIVE DIRECTION */}
  <article className="ws-editorial-service ws-editorial-service-reverse ws-reveal">

    <div className="ws-editorial-service-image">
      <img
        src={direct}
        alt="Wedding Creative Direction"
      />

      <span className="ws-editorial-number">
        02
      </span>
    </div>


    <div className="ws-editorial-service-copy">

      <p className="ws-editorial-label">
        CREATIVE DIRECTION
      </p>

      <h3>
        Creative Direction
      </h3>

      <p className="ws-editorial-lead">
        Once we know your vision, it’s time to build it.
      </p>

      <p>
        The Creative Direction Package takes everything established
        during your consultation and develops it into a cohesive,
        fully realised wedding aesthetic.
      </p>

      <p>
        We refine your colour palette, align the outfits across the
        wedding party and create detailed mood boards that become your
        visual guide for appointments and styling decisions.
      </p>

      <p>
        This package is designed for couples who want more than an idea —
        they want a clear and confident plan they can take into every
        fitting, appointment and vendor conversation.
      </p>


      <div className="ws-editorial-included">

        <p className="ws-editorial-included-title">
          WHAT’S INCLUDED
        </p>

        <div className="ws-editorial-included-grid">
          <span>Everything in the Consultation</span>
          <span>Three fully developed mood boards</span>
          <span>Complete colour palette</span>
          <span>Outfit alignment guide</span>
          <span>Styling proposal for vendors</span>
          <span>Wedding party coordination overview</span>
        </div>

      </div>


      <a href="/contact" className="ws-editorial-link">
        ENQUIRE ABOUT CREATIVE DIRECTION
      </a>

    </div>

  </article>


  {/* 03 — PREMIUM FULL STYLING */}
  <article className="ws-editorial-service ws-reveal">

    <div className="ws-editorial-service-image">
      <img
        src={fullStylingImage}
        alt="Premium Full Wedding Styling"
      />

      <span className="ws-editorial-number">
        03
      </span>
    </div>


    <div className="ws-editorial-service-copy">

      <p className="ws-editorial-label">
        PREMIUM EXPERIENCE
      </p>

      <h3>
        Full Styling
      </h3>

      <p className="ws-editorial-lead">
        The complete experience, from the first appointment through
        to the final fitting.
      </p>

      <p>
        I work alongside you throughout the entire styling journey,
        ensuring every fashion decision stays connected to the visual
        direction we have created together.
      </p>

      <p>
        I attend bridal and tailoring appointments, manage styling
        revisions and help coordinate the wedding party so the final
        result feels intentional, cohesive and considered from every
        angle.
      </p>

      <p>
        With a background in fashion styling and a specialisation in
        tailored suiting and wedding gowns, the focus is on precision,
        fit, silhouette, fabrication and the smaller details that shape
        the overall look.
      </p>

      <p>
        Available to couples who have completed the Consultation and
        Creative Direction stages.
      </p>


      <div className="ws-editorial-included">

        <p className="ws-editorial-included-title">
          WHAT’S INCLUDED
        </p>

        <div className="ws-editorial-included-grid">
          <span>Everything in Creative Direction</span>
          <span>Bridal appointment attendance</span>
          <span>Tailoring appointment attendance</span>
          <span>Outfit revisions & adjustments</span>
          <span>Wedding party visual coordination</span>
          <span>Minor aesthetic vendor guidance</span>
          <span>Ongoing support to the wedding day</span>
        </div>

      </div>


      <a href="/contact" className="ws-editorial-link">
        ENQUIRE ABOUT FULL STYLING
      </a>

    </div>

  </article>

</section>
      
{/* CONSULTATION INFO STRIP */}
<section className="consultation-info-strip">

  <div className="consultation-info-item">
    <span className="consultation-info-icon">□</span>

    <div>
      <h4>Easy Scheduling</h4>
      <p>
        Book your consultation
        at a time that works
        best for you.
      </p>
    </div>
  </div>


  <div className="consultation-info-item">
    <span className="consultation-info-icon">◉</span>

    <div>
      <h4>Via Zoom</h4>
      <p>
        Consultations can be
        completed remotely
        for your convenience.
      </p>
    </div>
  </div>


  <div className="consultation-info-item">
    <span className="consultation-info-icon">◷</span>

    <div>
      <h4>60 Minute Call</h4>
      <p>
        A focused session
        dedicated entirely
        to you.
      </p>
    </div>
  </div>


  <div className="consultation-info-item">
    <span className="consultation-info-icon">•••</span>

    <div>
      <h4>Ongoing Support</h4>
      <p>
        We’re just a message
        away whenever you
        need us.
      </p>
    </div>
  </div>

</section>
      
      {/* QUOTE */}
      <section className="ws-quote ws-reveal">

        <p>
          YOUR WEDDING, YOUR STORY
        </p>

        <h2>
          The most beautiful weddings
          <span>feel like the people they belong to.</span>
        </h2>

      </section>


      {/* FINAL CTA */}
      <section className="ws-final">

        <div className="ws-final-inner ws-reveal">


          <h2>
            Begin with an idea.
            <span>We’ll help shape the rest.</span>
          </h2>

          <p className="ws-final-copy">
            Tell us a little about your wedding, your vision and where
            you would like support. Together, we can create a styling
            direction that feels personal from the very beginning.
          </p>

          <a href="/contact">
            MAKE AN ENQUIRY
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="ws-footer">

        <div className="ws-footer-brand">
          <h2>Curated by Aanoosh</h2>
          <p>Personal & Wedding Styling</p>
        </div>

        <div className="ws-footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/personal-styling">Personal Styling</a>
          <a href="/wedding-styling">Wedding Styling</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="ws-footer-bottom">
          <span>© 2026 Curated by Aanoosh</span>
          <span>Sydney, Australia</span>
        </div>

      </footer>

    </main>
  );
}

export default WeddingStyling;