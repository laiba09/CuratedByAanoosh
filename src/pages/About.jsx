import { useEffect, useState } from "react";
import "../CSS/About.css";

import aboutHero from "../assets/bag1.png";
import aboutDetail from "../assets/bag2.png";
import aboutpart1 from "../assets/aanoosh.png";
import aboutPortrait from "../assets/coat1.png";
import philosophy from "../assets/philo.png";

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="about-page">
      {/* NAVIGATION */}

      <header className="about-navbar">
        <a href="/" className="about-logo">
          Curated by Aanoosh
        </a>

        <button
          className="about-menu-button"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`about-nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/" onClick={closeMenu}>
            Home
          </a>

          <a href="/about" className="active" onClick={closeMenu}>
            About
          </a>
          <a href="/personal-styling" onClick={closeMenu}>
            Personal Styling
          </a>
          <a href="/wedding-styling" onClick={closeMenu}>
            Wedding Styling
          </a>
    


          <a href="/contact" onClick={closeMenu}>
            Enquiry
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section className="about-editorial-hero">
        <div className="about-editorial-copy about-reveal">
          <p className="about-label">
            Meet the Curator
          </p>

          <h1>
            A personal
            <span>point of view.</span>
          </h1>

          <p className="about-intro-text">
            Curated by Aanoosh is built around thoughtful styling,
            personal expression and the belief that the best style
            should feel unmistakably yours.
          </p>

          <a href="#story" className="about-outline-link">
            Discover the story
          </a>
        </div>

        <div className="about-editorial-images">
          <div className="about-main-image about-reveal">
            <img
              src={aboutHero}
              alt="Curated by Aanoosh styling"
            />
          </div>

          <div className="about-small-image about-reveal">
            <img
              src={aboutDetail}
              alt="Fashion styling detail"
            />
          </div>

          <p className="about-vertical-caption">
            Personal Styling · Wedding Styling
          </p>
        </div>

        <div className="about-hero-footer">
          <span>Style with intention</span>
        </div>
      </section>

      {/* STORY */}

      <section
        className="about-story"
        id="story"
      >
        <div className="about-story-image about-reveal">
          <img
            src={aboutpart1}
            alt="Luxury wardrobe styling"
          />
        </div>

        <div className="about-story-content about-reveal">
          <p className="about-label">
            The Story
          </p>

          <h2>
            More than
            <span>just clothes.</span>
          </h2>

          <p>
          It all began five years ago, when Aanoosh’s love for fashion and styling started to grow into something more intentional. What began as experimenting with different looks, helping others refine their wardrobes and developing an eye for proportion, colour and detail gradually became a genuine passion for helping people feel more confident in what they wear.
Over the years, that passion evolved into more than simply choosing beautiful clothes. 
 </p>
 <p>
Two years ago, that experience became Curated by Aanoosh, founded in Sydney, Australia with the intention of creating a styling service that felt more personal, thoughtful and considered. Rather than following trends alone, the focus has always been on creating looks that feel elevated, wearable and completely individual to each client.
          </p>
          
        </div>
      </section>

      {/* CURATOR */}

      <section className="about-curator">
        <div className="about-curator-image about-reveal">
          <img
            src={aboutPortrait}
            alt="Aanoosh stylist and creative director"
          />
        </div>

        <div className="about-curator-copy about-reveal">
          <p className="about-label">
            The Curator
          </p>

          <h2>
            Aanoosh
            <span>Stylist & Creative Director</span>
          </h2>

          <p>
    Aanoosh has continuously developed her skills in styling through hands-on experience, experimentation and a growing understanding of how clothing can completely change the way someone feels.
Her approach has evolved through studying proportion, silhouette, colour, fabric, layering and the small details that bring an outfit together. Over time, she has learned how to balance creativity with practicality — creating looks that feel polished and elevated while still being comfortable and personal to the individual wearing them.
</p>
<p>
Today, she continues to build on those skills through Curated by Aanoosh, approaching every client as an opportunity to create something considered, individual and genuinely reflective of who they are.
          </p>


          
        </div>
      </section>

      {/* PHILOSOPHY */}

      <section className="about-philosophy">
        <div className="about-philosophy-copy about-reveal">
          <p className="about-label">
            The Philosophy
          </p>

          <h2>
            Personal.
            <span>Intentional.</span>
            Considered.
          </h2>
          <p>
             Style should feel like an extension of who you are — not a costume, not a trend and never something forced.

          </p>
          <p>
          At Curated by Aanoosh, every decision is made with purpose. From silhouette and colour to texture, proportion and finishing details, each element is considered in relation to the person wearing it.
The goal is not to completely change your style, but to refine it. 
          </p>
        </div>

        <div className="about-philosophy-image about-reveal">
          <img
            src={philosophy}
            alt="Luxury fashion styling detail"
          />
        </div>
      </section>

      {/* VALUES */}
{/* VALUES */}

<section className="about-values">

  <div className="about-values-top about-reveal">

    <div className="about-values-heading">
      <p className="about-label">
        The Approach
      </p>

      <h2>
        Thoughtful,
        <span>considered</span>
        and uniquely yours.
      </h2>
    </div>

    <p className="about-values-intro">
      Every styling experience is built around the individual.
      The process is personal, carefully considered and always
      collaborative from beginning to end.
    </p>

  </div>

  <div className="about-values-grid">

    <article className="about-value about-reveal">
      <span className="about-value-number">01</span>

      <h3>Personal</h3>

      <p>
        Built around your lifestyle, preferences and individuality —
        never a one-size-fits-all approach.
      </p>
    </article>


    <article className="about-value about-reveal">
      <span className="about-value-number">02</span>

      <h3>Considered</h3>

      <p>
        Every detail matters, from silhouette and proportion to colour,
        texture and the finishing touches.
      </p>
    </article>


    <article className="about-value about-reveal">
      <span className="about-value-number">03</span>

      <h3>Collaborative</h3>

      <p>
        Styling is guided, but you remain part of every decision so the
        final result still feels completely like you.
      </p>
    </article>

  </div>

</section>
      

      {/* CTA */}

      <section className="about-cta">
        <div className="about-cta-inner about-reveal">
          <p className="about-label">
            Begin Your Journey
          </p>

          <h2>
            Let’s create a style
            <span>that feels like you.</span>
          </h2>

          <a href="/contact" className="about-dark-button">
            Make an Enquiry
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="about-footer">
        <div>
          <h2>
            Curated by Aanoosh
          </h2>

          <p>
            Personal & Wedding Styling
          </p>
        </div>

        <div className="about-footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Enquiry</a>
        </div>

        <div className="about-footer-bottom">
          <span>© 2026 Curated by Aanoosh</span>
          <span>Sydney, Australia</span>
        </div>
      </footer>
    </main>
  );
}

export default About;