import { useEffect, useState } from "react";
import "../CSS/PersonalStyling.css";

import heroOne from "../assets/lap.png";
import heroTwo from "../assets/steam.png";
import heroThree from "../assets/notepad.png";
import heroFour from "../assets/paper.png";
import heroFive from "../assets/outfit.png";
import heroSix from "../assets/phone.png";
import heroSeven from "../assets/card.png";
import heroEight from "../assets/hanging.png";
import heroNine from "../assets/stair.png";
import heroTen from "../assets/philo.png";
import heroEleven from "../assets/intro-editorial.png";


function PersonalStyling() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".ps-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ps-visible");
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
    <main className="personal-styling-page">

      {/* HEADER */}
   <header className="ps2-navbar">
  <a href="/" className="ps2-logo">
    Curated by Aanoosh
  </a>

  <nav className={`ps2-nav-links ${menuOpen ? "open" : ""}`}>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/personal-styling">Personal Styling</a>
    <a href="/wedding-styling">Wedding Styling</a>
    <a href="/contact">Enquiry</a>
  </nav>

  <button
    type="button"
    className="ps2-menu-button"
    onClick={() => setMenuOpen((open) => !open)}
    aria-label="Toggle navigation"
    aria-expanded={menuOpen}
  >
    <span />
    <span />
  </button>
</header>

      {/* HERO */}
      <section className="ps-hero">
        <div className="ps-hero-inner">

          <div className="ps-hero-copy ps-reveal">
            <p className="ps-eyebrow">PERSONAL STYLING</p>

            <h1>
              Elevated
              <br />
              Everyday
              <span> Style.</span>
            </h1>

            <p className="ps-hero-description">
              Personal styling should feel like an extension of who you already
              are — not a version of yourself you have to perform.
            </p>

            <p className="ps-hero-description secondary">
              Whether you are rebuilding your wardrobe, refining your personal
              style or simply feeling stuck with what to wear, we create a
              considered direction that feels effortless, wearable and uniquely
              yours.
            </p>

            <a href="/contact" className="ps-primary-button">
              BOOK A CONSULTATION
  
            </a>
          </div>

          <div className="ps-hero-collage ps-reveal">

            <div className="ps-collage-image ps-collage-one">
              <img src={heroOne} alt="Personal styling wardrobe" />
            </div>

            <div className="ps-collage-image ps-collage-two">
              <img src={heroTwo} alt="Curated personal styling details" />
            </div>

            <div className="ps-collage-image ps-collage-three">
              <img src={heroThree} alt="Luxury wardrobe styling" />
            </div>

            <div className="ps-handwritten">
              personal.
              <br />
              intentional.
              <br />
              effortless.
            </div>

          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="ps-introduction">
        <div className="ps-introduction-inner">

          <div className="ps-intro-label ps-reveal">
            <p>THE APPROACH</p>
          </div>

          <div className="ps-intro-main ps-reveal">
            <h2>
              A wardrobe that feels
              <span> like you.</span>
            </h2>
          </div>

          <div className="ps-intro-text ps-reveal">
            <p>
              Great personal style is not about chasing every trend or replacing
              everything you own. It is about understanding what makes you feel
              confident, comfortable and completely yourself.
            </p>

            <p>
              Our approach begins with your lifestyle. We look at how you spend
              your days, the pieces you naturally reach for, what currently feels
              difficult and what you want your wardrobe to communicate.
            </p>

            <p>
              From there, we build a clear visual direction around silhouettes,
              colour, proportion, versatility and the details that make your
              wardrobe feel distinctly personal.
            </p>
          </div>

        </div>
      </section>
      

    {/* =====================================================
    SERVICES — EDITORIAL ROWS
===================================================== */}

<section className="ps-editorial-services">

  <div className="ps-editorial-services-header ps-reveal">

    <p className="ps-eyebrow">
      THE CURATOR — PERSONAL STYLING
    </p>

    <h2>
      Styling designed
      <span>to evolve with you.</span>
    </h2>

    <p>
      Begin with clarity, spend a day refining your wardrobe,
      completely rebuild your style or enter an ongoing private
      styling relationship.
    </p>

  </div>

  {/* PACKAGE ARCHES */}
<div className="ps-package-arches ps-reveal">

  {/* 01 — CONSULTATION */}
  <a href="#ps-consultation" className="ps-package-arch">
    <div className="ps-package-arch-image">
      <img src={heroFour} alt="Personal styling consultation" />
      <div className="ps-package-arch-overlay" />
      <span className="ps-package-number">01</span>
    </div>

    <div className="ps-package-arch-copy">
      <p>PERSONAL STYLING</p>
      <h3>Consultation</h3>
      <span>
        Begin with clarity
      </span>
    </div>
  </a>

  {/* 02 — CURATED DAY */}
  <a href="#ps-curated-day" className="ps-package-arch">
    <div className="ps-package-arch-image">
      <img src={heroFive} alt="The Curated Day" />
      <div className="ps-package-arch-overlay" />
      <span className="ps-package-number">02</span>
    </div>

    <div className="ps-package-arch-copy">
      <p>PERSONAL STYLING</p>
      <h3>The Curated Day</h3>
      <span>
        Refine in real time
      </span>
    </div>
  </a>

  {/* 03 — WARDROBE REBUILD */}
  <a href="#ps-wardrobe-rebuild" className="ps-package-arch">
    <div className="ps-package-arch-image">
      <img src={heroSix} alt="The Wardrobe Rebuild" />
      <div className="ps-package-arch-overlay" />
      <span className="ps-package-number">03</span>
    </div>

    <div className="ps-package-arch-copy">
      <p>PERSONAL STYLING</p>
      <h3>The Wardrobe Rebuild</h3>
      <span>
        Rebuild with intention
      </span>
    </div>
  </a>

  {/* 04 — INNER CIRCLE */}
  <a href="#ps-inner-circle" className="ps-package-arch">
    <div className="ps-package-arch-image">
      <img src={heroSeven} alt="The Inner Circle" />
      <div className="ps-package-arch-overlay" />
      <span className="ps-package-number">04</span>
    </div>

    <div className="ps-package-arch-copy">
      <p>PRIVATE CLIENT</p>
      <h3>The Inner Circle</h3>
      <span>
        Ongoing private styling
      </span>
    </div>
  </a>

</div>


  {/* 01 — CONSULTATION */}
  <article className="ps-editorial-service ps-reveal">

    <div className="ps-editorial-service-image">
      <img src={heroEight} alt="Personal Styling Consultation" />

      <span className="ps-editorial-number">
        01
      </span>
    </div>


    <div className="ps-editorial-service-copy">

      <p className="ps-editorial-label">
        PERSONAL STYLING
      </p>

      <h3>
        Consultation
      </h3>

      <p className="ps-editorial-lead">
        Not sure where to start? This is where we begin.
      </p>

      <p>
        In your one-on-one consultation, I take the time to understand
        your lifestyle, personal aesthetic, wardrobe challenges and the
        image you want to build.
      </p>

      <p>
        You’ll leave with clear styling direction, personalised notes,
        and a refined understanding of the colours, silhouettes and
        styling choices that work specifically for you.
      </p>


      <div className="ps-editorial-included">

        <p className="ps-editorial-included-title">
          WHAT’S INCLUDED
        </p>

        <div className="ps-editorial-included-grid">
          <span>Personalised one-on-one session</span>
          <span>Styling notes & wardrobe direction</span>
          <span>Colour & silhouette recommendations</span>
          <span>Wardrobe gap identification</span>
          <span>Initial outfit & brand recommendations</span>
          <span>Sample mood board & visual direction</span>
        </div>

      </div>


      <a href="/contact" className="ps-editorial-link">
        ENQUIRE ABOUT CONSULTATION

      </a>

    </div>

  </article>


  {/* 02 — CURATED DAY */}
  <article className="ps-editorial-service ps-editorial-service-reverse ps-reveal">

    <div className="ps-editorial-service-image">
      <img src={heroNine} alt="The Curated Day" />

      <span className="ps-editorial-number">
        02
      </span>
    </div>


    <div className="ps-editorial-service-copy">

      <p className="ps-editorial-label">
        PERSONAL STYLING
      </p>

      <h3>
        The Curated Day
      </h3>

      <p className="ps-editorial-lead">
        A one-on-one styling experience designed to refine and elevate
        your wardrobe in real time.
      </p>

      <p>
        Together, we source the right pieces, brands, fabrics and
        silhouettes for your lifestyle while incorporating pieces you
        already own wherever possible.
      </p>

      <p>
        The focus is not simply on buying more, but on making thoughtful
        choices that strengthen your wardrobe and give you more ways
        to wear what you already have.
      </p>


      <div className="ps-editorial-included">

        <p className="ps-editorial-included-title">
          WHAT’S INCLUDED
        </p>

        <div className="ps-editorial-included-grid">
          <span>Personal shopping experience</span>
          <span>Brand & store curation</span>
          <span>Existing wardrobe coordination</span>
          <span>Wardrobe gap sourcing</span>
          <span>Fit & silhouette recommendations</span>
          <span>Optional tailoring direction</span>
        </div>

      </div>


      <a href="/contact" className="ps-editorial-link">
        ENQUIRE ABOUT THE CURATED DAY

      </a>

    </div>

  </article>


  {/* 03 — WARDROBE REBUILD */}
  <article className="ps-editorial-service ps-reveal">

    <div className="ps-editorial-service-image">
      <img src={heroTen} alt="The Wardrobe Rebuild" />

      <span className="ps-editorial-number">
        03
      </span>
    </div>


    <div className="ps-editorial-service-copy">

      <p className="ps-editorial-label">
        PERSONAL STYLING
      </p>

      <h3>
        The Wardrobe Rebuild
      </h3>

      <p className="ps-editorial-lead">
        A complete wardrobe transformation designed around intention,
        longevity and your personal style.
      </p>

      <p>
        We assess your wardrobe as a whole — identifying what should
        stay, what no longer serves you and what is missing — before
        rebuilding it with carefully selected pieces.
      </p>

      <p>
        From essential foundations to statement pieces, every addition
        is chosen to work within a larger wardrobe rather than existing
        as an isolated purchase.
      </p>


      <div className="ps-editorial-included">

        <p className="ps-editorial-included-title">
          WHAT’S INCLUDED
        </p>

        <div className="ps-editorial-included-grid">
          <span>Everything in The Curated Day</span>
          <span>Full wardrobe assessment & overhaul</span>
          <span>Complete outfit building</span>
          <span>Seasonal wardrobe planning</span>
          <span>Occasion & event styling</span>
          <span>Tailored shopping strategy</span>
          <span>Digital styling references</span>
          <span>Ongoing styling revisions</span>
        </div>

      </div>


      <a href="/contact" className="ps-editorial-link">
        ENQUIRE ABOUT THE WARDROBE REBUILD

      </a>

    </div>

  </article>


  {/* 04 — INNER CIRCLE */}
  <article className="ps-editorial-service ps-editorial-service-reverse ps-reveal">

    <div className="ps-editorial-service-image">
      <img src={heroEleven} alt="The Inner Circle" />

      <span className="ps-editorial-number">
        04
      </span>
    </div>


    <div className="ps-editorial-service-copy">

      <p className="ps-editorial-label">
        PRIVATE CLIENT
      </p>

      <h3>
        The Inner Circle
      </h3>

      <p className="ps-editorial-lead">
        Private styling membership available exclusively to VIP clients.
      </p>

      <p>
        A highly personalised styling and sourcing experience focused on
        bespoke tailoring, rare pieces, luxury fabrication and ongoing
        wardrobe direction.
      </p>

      <p>
        Designed for clients seeking a fully curated wardrobe and a
        long-term private styling relationship that evolves alongside
        their lifestyle.
      </p>


      <div className="ps-editorial-included">

        <p className="ps-editorial-included-title">
          WHAT’S INCLUDED
        </p>

        <div className="ps-editorial-included-grid">
          <span>Bespoke garment development</span>
          <span>Private sourcing & luxury curation</span>
          <span>Tailoring & fitting coordination</span>
          <span>Seasonal wardrobe planning</span>
          <span>Priority curated edits</span>
          <span>Ongoing styling support</span>
          <span>Direct private client access</span>
        </div>

      </div>


      <a href="/contact" className="ps-editorial-link">
        ENQUIRE ABOUT THE INNER CIRCLE

      </a>

    </div>

  </article>

</section>

      {/* PHILOSOPHY */}
      <section className="ps-philosophy">
        <div className="ps-philosophy-inner">

          <div className="ps-philosophy-heading ps-reveal">
            <p className="ps-eyebrow light">THE PHILOSOPHY</p>

            <h2>
              Less about having more.
              <span> More about knowing what works.</span>
            </h2>
          </div>

          <div className="ps-philosophy-copy ps-reveal">
            <p>
              A considered wardrobe gives you options without overwhelming you.
              It makes getting dressed easier because the pieces you own make
              sense together and reflect the life you actually live.
            </p>

            <p>
              We focus on building confidence through clarity — understanding
              your proportions, recognising the silhouettes you feel best in and
              becoming more intentional about what deserves a place in your
              wardrobe.
            </p>

            <p>
              The result is not a wardrobe built around rules. It is one built
              around you.
            </p>
          </div>

        </div>
      </section>


      {/* PROCESS */}
      <section className="ps-process">

        <div className="ps-process-header ps-reveal">
          <p className="ps-eyebrow">THE PROCESS</p>

          <h2>
            Thoughtful from
            <span> beginning to end.</span>
          </h2>
        </div>

        <div className="ps-process-grid">

          <div className="ps-process-item ps-reveal">
            <h3>Discover</h3>
            <p>
              We begin by understanding your lifestyle, your current wardrobe,
              your preferences and what you want to change.
            </p>
          </div>

          <div className="ps-process-item ps-reveal">
            <h3>Define</h3>
            <p>
              Together we identify the colours, proportions, silhouettes and
              styling details that feel most natural to you.
            </p>
          </div>

          <div className="ps-process-item ps-reveal">
            <h3>Curate</h3>
            <p>
              We refine what you already own and identify the pieces that will
              make your wardrobe more functional and cohesive.
            </p>
          </div>

          <div className="ps-process-item ps-reveal">
            <h3>Style</h3>
            <p>
              Everything comes together through considered outfits and practical
              combinations you can confidently recreate yourself.
            </p>
          </div>

        </div>
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
<section className="ps-final-cta">

  <div className="ps-final-cta-image">
    <img
      src={heroThree}
      alt="Curated personal styling"
    />

    <div className="ps-final-cta-overlay" />
  </div>


  <div className="ps-final-cta-content ps-reveal">

    <p className="ps-final-eyebrow">
      READY TO BEGIN?
    </p>

    <h2>
      Let’s create a wardrobe
      <span>that feels like you.</span>
    </h2>

    <p className="ps-final-copy">
      Tell us a little about yourself, what you are looking for
      and where you would like support. We will help you choose
      the personal styling experience that best suits you.
    </p>

    <a href="/contact" className="ps-final-button">
      BOOK A CONSULTATION

    </a>

  </div>

</section>

      {/* FOOTER */}
      <footer className="ps-footer">

        <div className="ps-footer-top">

          <div className="ps-footer-brand">
            <h2>Curated by Aanoosh</h2>
            <p>Personal & Wedding Styling</p>
          </div>

          <div className="ps-footer-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/personal-styling">Personal Styling</a>
            <a href="/wedding-styling">Wedding Styling</a>
            <a href="/contact">Enquiry</a>
          </div>

        </div>

        <div className="ps-footer-line"></div>

        <div className="ps-footer-bottom">
          <p>© 2026 Curated by Aanoosh</p>
          <p>Sydney, Australia</p>
        </div>

      </footer>

    </main>
  );
}

export default PersonalStyling;