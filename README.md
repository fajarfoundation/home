<!DOCTYPE html>
<!--
  ============================================================
  FAJAR FOUNDATION — OFFICIAL WEBSITE
  ============================================================
  File        : index.html
  Description : The complete single-page website for Fajar
                Foundation. Everything — the design (CSS),
                the content (HTML), and the behaviour
                (JavaScript) — lives in this one file.

  HOW THIS FILE IS ORGANISED
  ───────────────────────────
  1. HEAD          → Behind-the-scenes setup (fonts, icons, etc.)
  2. STYLE / CSS   → All visual design rules (colours, sizes,
                     layout, animations). Think of this as the
                     "paint and architecture" of the website.
  3. BODY / HTML   → The actual content visible on the page,
                     built section by section top to bottom.
  4. JAVASCRIPT    → Behaviour: scroll animations, number
                     counters, the popup, and the page loader.

  IMAGES NEEDED (place in the same folder as this file)
  ──────────────────────────────────────────────────────
    logo.png      → Full Fajar Foundation wordmark (used in
                    the top navigation bar and footer)
    ff_logo.png   → Icon-only logo / pinwheel (used in the
                    hero section and the loading spinner)
    hero.jpg      → Background photo for the hero section
    alim.jpg      → Co-founder Alim's photo
    kartik.jpg    → Co-founder Kartik's photo
    nitin.jpg     → Co-founder Nitin's photo

  TO UPDATE CONTENT
  ──────────────────
  Search for the section you want (e.g. <!-- TEAM -->) and
  edit the text between the HTML tags. You do NOT need to
  touch the CSS or JavaScript to change words or images.
  ============================================================
-->
<html lang="en">


<!-- ============================================================
     HEAD SECTION
     Everything inside <head> is not visible on the page.
     It contains instructions the browser needs before
     displaying anything.
     ============================================================ -->
<head>

  <!-- Tells the browser this file uses UTF-8 character encoding
       so special characters (like — or ") display correctly. -->
  <meta charset="UTF-8" />

  <!-- Makes the website look correct on mobile phones and tablets.
       Without this, mobiles would zoom out and show a tiny version. -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <!-- The text that appears on the browser tab -->
  <title>Fajar Foundation</title>

  <!-- These two lines speed up loading of Google Fonts by
       opening a connection to Google's servers early. -->
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

  <!-- Loads two fonts from Google:
       • Cormorant Garamond → elegant serif font used for
         headings and display text (gives the premium feel)
       • Jost → clean sans-serif font used for body text,
         labels, and navigation links -->
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet"/>

  <!-- Loads Font Awesome — a library of icons.
       We use it for the LinkedIn and Instagram icons in the footer. -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>


  <!-- ============================================================
       STYLE SECTION (CSS — THE DESIGN)
       CSS = Cascading Style Sheets. These are rules that tell
       the browser how everything should look: colours, sizes,
       spacing, fonts, animations, and layout.

       How to read a CSS rule:
         selector { property: value; }
       Example:
         h1 { color: red; font-size: 32px; }
         This means: "make every h1 heading red and 32px tall."
       ============================================================ -->
  <style>

    /* ----------------------------------------------------------
       GLOBAL RESET
       By default, browsers add their own spacing and sizing
       to elements, and each browser does it differently.
       This rule removes ALL of that default styling so we
       start with a clean, consistent slate across all browsers.
       ---------------------------------------------------------- */
    *, *::before, *::after {
      box-sizing: border-box; /* Padding is included inside width, not added on top */
      margin: 0;              /* Remove all default outer spacing */
      padding: 0;             /* Remove all default inner spacing */
    }


    /* ----------------------------------------------------------
       DESIGN TOKENS (COLOUR & FONT PALETTE)
       These are the website's brand colours and fonts, stored
       as named variables so we can reuse them everywhere.
       Changing a colour here changes it across the whole site.

       :root means "the whole document" — these variables are
       available to every CSS rule below.

       To change a colour, just swap the hex code (e.g. #3a1f00).
       Hex codes are 6-character colour codes used in web design.
       ---------------------------------------------------------- */
    :root {
      /* Browns — used for backgrounds, navbar, and dark sections */
      --brown-dark:  #3a1f00;   /* Very dark brown — navbar, about section */
      --brown-mid:   #5c2d00;   /* Medium brown — hover states */
      --brown-warm:  #6b3300;   /* Warm brown — donate section background */

      /* Golds — the brand accent colour throughout the site */
      --gold:        #c89a2e;   /* Primary gold — eyebrows, icons, highlights */
      --gold-light:  #e8c060;   /* Lighter gold — text on dark backgrounds */
      --gold-pale:   #f5e6c0;   /* Very pale gold — large background numbers */

      /* Creams — used for page backgrounds and card backgrounds */
      --cream:       #f5f0e8;   /* Warm cream — main page background */
      --cream-light: #faf7f2;   /* Slightly lighter cream — card backgrounds */

      /* Text colours */
      --text-dark:   #2c1a00;   /* Near-black brown — headings */
      --text-mid:    #5a3800;   /* Medium brown — body paragraphs */
      --text-muted:  #7a5c2e;   /* Muted brown — secondary text, card body */

      /* Border colour for cards and input fields */
      --border-card: #e8dcc8;   /* Warm beige border */

      /* Font families */
      --font-serif: 'Cormorant Garamond', Georgia, serif;
      /* ↑ Used for big headings and display text */
      --font-sans:  'Jost', sans-serif;
      /* ↑ Used for navigation, body text, labels, buttons */
    }


    /* ----------------------------------------------------------
       SMOOTH SCROLLING
       When a user clicks a navigation link (e.g. "ABOUT"),
       instead of jumping instantly to that section, the page
       glides smoothly down to it.
       ---------------------------------------------------------- */
    html {
      scroll-behavior: smooth;
    }


    /* ----------------------------------------------------------
       BODY — BASE STYLES
       Applies to the entire visible page content.
       ---------------------------------------------------------- */
    body {
      font-family: var(--font-sans); /* Default font for all text */
      background: var(--cream);      /* Warm cream page background */
      color: var(--text-dark);       /* Default text colour */
      overflow-x: hidden;            /* Prevents horizontal scrollbar
                                        from appearing on mobile */
    }


    /* ==========================================================
       LOADER STYLES
       The loading screen that shows while the page is loading.
       It covers the entire screen, shows a spinning logo,
       then fades away after 1.2 seconds.
       ========================================================== */

    /* The full-screen overlay that covers everything on load */
    #loader {
      position: fixed;           /* Stays in place even if you scroll */
      top: 0; left: 0;           /* Positioned at the very top-left corner */
      width: 100%; height: 100%; /* Covers the full screen */
      background: var(--cream-light); /* Cream background */
      display: flex;             /* Centers the logo inside */
      justify-content: center;   /* Horizontally centred */
      align-items: center;       /* Vertically centred */
      z-index: 9999;             /* Sits on top of EVERYTHING else on the page */
      transition: opacity 0.5s ease; /* Fades out smoothly when dismissed */
    }

    /* The spinning icon inside the loader */
    #loader img {
      width: 72px;                            /* Size of the spinning logo */
      animation: spinLoader 1.8s linear infinite; /* Spins continuously */
    }

    /* Defines the spin animation: rotates from 0° to 360° */
    @keyframes spinLoader {
      from { transform: rotate(0deg); }   /* Start: no rotation */
      to   { transform: rotate(360deg); } /* End: full circle */
    }


    /* ==========================================================
       NAVIGATION BAR STYLES
       The fixed top bar with the logo and page links.
       It stays visible as you scroll down the page.
       ========================================================== */

    /* The nav bar container */
    nav {
      position: fixed;         /* Sticks to the top of the screen while scrolling */
      top: 0; left: 0; right: 0; /* Stretches across the full width */
      z-index: 100;            /* Sits above the page content but below the loader */
      background: var(--brown-dark); /* Dark brown background */
      display: flex;           /* Puts logo and links side by side */
      align-items: center;     /* Vertically centres both */
      justify-content: space-between; /* Logo on left, links on right */
      padding: 0 3rem;         /* Horizontal breathing room on left and right */
      height: 56px;            /* Fixed height of the nav bar */
    }

    /* The logo link on the left side of the nav */
    .nav-logo {
      display: flex;
      align-items: center;
      text-decoration: none; /* Removes the underline from the link */
    }

    /* The logo image inside the nav — intentionally NO animation */
    .nav-logo img {
      height: 36px;          /* Logo height — change this to resize the nav logo */
      width: auto;           /* Width adjusts automatically to keep proportions */
      object-fit: contain;   /* Ensures the image is not cropped or stretched */
      /* NOTE: There is deliberately NO rotation animation here.
         The logo should remain static and professional in the nav. */
    }

    /* The list of navigation links (HOME, ABOUT, etc.) */
    .nav-links {
      display: flex;          /* Puts all links in a horizontal row */
      align-items: center;    /* Vertically centres links and the button */
      gap: 2rem;              /* Space between each link */
      list-style: none;       /* Removes the default bullet points from the list */
    }

    /* Individual navigation link styling */
    .nav-links a {
      font-family: var(--font-sans);
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.1em;  /* Slightly spaced-out letters for a premium look */
      color: #fff;             /* White text on the dark nav */
      text-decoration: none;   /* No underline */
      transition: color 0.2s;  /* Colour change animates over 0.2 seconds */
    }

    /* What the link looks like when hovered over */
    .nav-links a:hover {
      color: var(--gold-light); /* Text turns gold on hover */
    }

    /* The "GET INVOLVED" button in the nav — styled differently
       from regular links to draw attention as a call-to-action */
    .nav-involved-btn {
      font-family: var(--font-sans);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;    /* ALL CAPS text */
      color: var(--brown-dark);     /* Dark text on gold background */
      background: var(--gold);      /* Gold background */
      border: none;                 /* No border (it's a button element) */
      cursor: pointer;              /* Shows a hand cursor on hover */
      padding: 7px 16px;            /* Pill-shaped internal spacing */
      border-radius: 30px;          /* Rounded pill shape */
      transition: background 0.2s;  /* Smooth colour change on hover */
      white-space: nowrap;          /* Prevents the text from wrapping to two lines */
    }

    /* Button lightens slightly on hover */
    .nav-involved-btn:hover {
      background: var(--gold-light);
    }


    /* ==========================================================
       HERO SECTION STYLES
       The first thing visitors see — a full-screen banner with
       background photo, headline, and call-to-action button.
       ========================================================== */

    /* The hero section container — fills the full viewport height */
    #home {
      position: relative;   /* Needed so child elements can be positioned inside it */
      min-height: 100vh;    /* 100vh = 100% of the visible screen height */
      display: flex;        /* Used to vertically centre the content */
      align-items: center;  /* Centres content vertically */
      padding-top: 56px;    /* Pushes content down so it doesn't hide behind the nav bar */
      overflow: hidden;     /* Clips anything that goes outside this section's bounds */
    }

    /* The background image layer of the hero section.
       It sits behind all the text and the decorative logo. */
    .hero-bg {
      position: absolute; /* Fills the entire hero section */
      inset: 0;           /* Shorthand for top:0, right:0, bottom:0, left:0 */
      background:
        /* A gradient overlay fades the image into the cream background
           on the left side, so the text is always easy to read.
           The image shows more clearly on the right side. */
        linear-gradient(
          to right,
          rgba(245,240,232,0.97) 45%,  /* Almost fully opaque cream on the left */
          rgba(245,240,232,0.5)  75%,  /* Semi-transparent in the middle */
          rgba(245,240,232,0.1)  100%  /* Nearly transparent on the right */
        ),
        url('hero.jpg') center/cover no-repeat;
        /* hero.jpg = the background photo file (must be in the same folder) */
        /* center/cover = centres the image and scales it to fill the area */
    }

    /* The text content block (tag, headline, paragraph, button) */
    .hero-content {
      position: relative; /* Sits above the background image layer */
      z-index: 2;         /* Ensures text is always in front of the background */
      padding: 0 5rem;    /* Left/right padding keeps text away from the edges */
      max-width: 640px;   /* Limits text block width so lines aren't too long */
    }

    /* The small gold tag line above the main headline
       e.g. "A MOVEMENT. A DAWN. A NEW ERA." */
    .hero-tag {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.2em;     /* Wide letter spacing for an editorial feel */
      text-transform: uppercase;  /* Forces all caps */
      color: var(--gold);
      margin-bottom: 1.2rem;     /* Space below before the main headline */
    }

    /* The main headline — the biggest text on the page */
    .hero-title {
      font-family: var(--font-serif); /* Elegant serif font for impact */
      /* clamp(min, preferred, max) — the font size scales with screen width
         but never goes below 2.4rem or above 3.6rem */
      font-size: clamp(2.4rem, 4vw, 3.6rem);
      font-weight: 600;
      line-height: 1.15;      /* Tight line spacing for big headings */
      color: var(--brown-dark);
      margin-bottom: 1.4rem;
    }

    /* The word "movement" in the headline — underlined in gold */
    .hero-title .underline-gold {
      color: var(--gold);
      text-decoration: underline;
      text-decoration-color: var(--gold);
      text-underline-offset: 4px; /* Pushes the underline slightly below the text */
    }

    /* The paragraph below the headline */
    .hero-body {
      font-size: 15px;
      font-weight: 300;       /* Light weight for body text */
      line-height: 1.75;      /* Generous line height for easy reading */
      color: var(--text-mid);
      max-width: 480px;       /* Narrower than the heading block for readability */
      margin-bottom: 2.2rem;  /* Space before the button */
    }

    /* Bold words inside the hero paragraph (e.g. "rural India") */
    .hero-body strong {
      font-weight: 600;
      color: var(--text-dark); /* Slightly darker to emphasise */
    }

    /* The "DISCOVER OUR STORY →" button */
    .hero-cta {
      display: inline-flex;   /* Allows icon and text to sit side by side */
      align-items: center;
      gap: 10px;
      background: var(--brown-dark);
      color: var(--gold-light);
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      text-decoration: none;  /* No underline on the link */
      padding: 14px 28px;
      border-radius: 40px;    /* Fully rounded pill shape */
      transition: background 0.2s;
    }

    /* Button darkens slightly on hover */
    .hero-cta:hover {
      background: var(--brown-mid);
      color: #fff;
    }

    /* The decorative logo (ff_logo.png) positioned on the right
       side of the hero section. Full opacity — shown as a logo,
       not a watermark. Vertically centred. */
    .hero-deco {
      position: absolute;
      right: 8%;              /* 8% from the right edge of the section */
      top: 50%;               /* Start at the vertical midpoint */
      transform: translateY(-50%); /* Pull it up by half its own height to truly centre it */
      z-index: 2;             /* Above the background but below nothing */
      pointer-events: none;   /* Clicks pass through it — it's purely decorative */
    }

    /* The logo image inside the hero deco */
    .hero-deco img {
      width: 200px;   /* Size of the logo — adjust to make it bigger or smaller */
      opacity: 1;     /* Full opacity — this is a logo, not a watermark */
      display: block;
    }


    /* ==========================================================
       SHARED EYEBROW STYLE
       The small label that appears above section headings,
       e.g. "— ABOUT FAJAR —". Used across multiple sections.
       The horizontal lines before and after are created with
       CSS (::before and ::after pseudo-elements), not HTML.
       ========================================================== */
    .section-eyebrow {
      display: inline-flex;  /* Lines and text sit side by side */
      align-items: center;
      gap: 10px;             /* Space between the line and the text */
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold-light);
      margin-bottom: 2rem;
    }

    /* The horizontal decorative lines flanking the eyebrow text */
    .section-eyebrow::before,
    .section-eyebrow::after {
      content: '';          /* Required for pseudo-elements — creates an empty box */
      display: block;
      width: 32px;          /* Length of the line */
      height: 1px;          /* Thickness of the line */
      background: currentColor; /* Uses the same colour as the text */
    }


    /* ==========================================================
       ABOUT SECTION STYLES
       Dark brown background section with the foundation's story.
       ========================================================== */
    #about {
      background: var(--brown-dark); /* Dark rich brown */
      padding: 6rem 5rem;            /* Generous vertical and horizontal padding */
      text-align: center;
    }

    /* The large serif heading "The Dawn of Transformation" */
    .about-title {
      font-family: var(--font-serif);
      font-size: clamp(2.2rem, 4vw, 3.4rem);
      font-weight: 600;
      color: var(--gold-light); /* Light gold on dark background */
      margin-bottom: 2rem;
      line-height: 1.2;
    }

    /* The body paragraphs in the about section */
    .about-body {
      font-size: 15px;
      font-weight: 300;
      line-height: 1.8;
      color: rgba(255,255,255,0.75); /* Semi-transparent white — softer than pure white */
      max-width: 700px;
      margin: 0 auto 2rem; /* Centers the paragraph and adds space below */
    }

    /* Highlighted words (in gold) within the about paragraphs */
    .about-body .highlight {
      color: var(--gold-light);
      font-weight: 500;
    }

    /* The pill-shaped badge: "Fajar means Dawn — the beginning of a new era" */
    .about-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      border: 1px solid rgba(200,154,46,0.5); /* Semi-transparent gold border */
      border-radius: 40px;
      padding: 10px 24px;
      color: var(--gold-light);
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 0.04em;
    }

    /* The bullet dots flanking the badge text (added via CSS, not HTML) */
    .about-badge::before,
    .about-badge::after {
      content: '•';         /* The actual bullet character */
      font-size: 10px;
      color: var(--gold);
    }


    /* ==========================================================
       CORE BELIEF SECTION STYLES
       Two-column layout: big statement on the left,
       three value cards (Social, Economic, Political) on the right.
       ========================================================== */
    #belief {
      background: var(--cream);
      padding: 6rem 5rem;
      display: grid;                       /* CSS Grid for the two-column layout */
      grid-template-columns: 1fr 1fr;      /* Two equal columns */
      gap: 4rem;                           /* Space between the two columns */
      align-items: start;                  /* Both columns start at the top */
    }

    /* The small "OUR CORE BELIEF" label with a line before it */
    .belief-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 1.5rem;
    }

    /* Only a left line for the belief eyebrow (no right line) */
    .belief-eyebrow::before {
      content: '';
      display: block;
      width: 32px;
      height: 1px;
      background: var(--gold);
    }

    /* The large serif statement: "Justice is not an Ideal…" */
    .belief-title {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 3.5vw, 3rem);
      font-weight: 600;
      color: var(--brown-dark);
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }

    /* The explanation paragraph below the belief heading */
    .belief-body {
      font-size: 15px;
      font-weight: 300;
      line-height: 1.85;
      color: var(--text-mid);
    }

    /* Gold highlighted words within the belief paragraph */
    .belief-body .highlight { color: var(--gold); font-weight: 600; }
    .belief-body strong     { font-weight: 600; color: var(--text-dark); }

    /* The column of three cards on the right (Social, Economic, Political) */
    .belief-cards {
      display: flex;
      flex-direction: column; /* Stack the three cards vertically */
      gap: 1rem;
    }

    /* Each individual card (Social / Economic / Political) */
    .belief-card {
      background: var(--cream-light);
      border: 1px solid var(--border-card);
      border-radius: 12px;
      padding: 1.4rem 1.6rem;
    }

    /* The emoji icon at the top of each belief card */
    .belief-card-icon {
      font-size: 20px;
      margin-bottom: 0.7rem;
      display: block; /* Forces it onto its own line */
    }

    /* The card label: "SOCIAL", "ECONOMIC", "POLITICAL" */
    .belief-card-title {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--brown-dark);
      margin-bottom: 0.4rem;
    }

    /* The short description inside each belief card */
    .belief-card-body {
      font-size: 13px;
      font-weight: 300;
      line-height: 1.65;
      color: var(--text-muted);
    }


    /* ==========================================================
       OUR APPROACH SECTION STYLES
       Two side-by-side cards explaining the organisation's
       two core approaches (Education + Youth).
       ========================================================== */
    #approach {
      background: var(--cream-light);
      padding: 6rem 5rem;
    }

    /* "OUR APPROACH" label with a line to its left */
    .approach-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 1rem;
    }

    .approach-eyebrow::before {
      content: '';
      display: block;
      width: 32px;
      height: 1px;
      background: var(--gold);
    }

    /* Wraps the eyebrow, heading, and subtitle together */
    .approach-header { margin-bottom: 3rem; }

    /* "How We Create Change" heading */
    .approach-title {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 3.5vw, 2.8rem);
      font-weight: 600;
      color: var(--brown-dark);
      margin-bottom: 1rem;
    }

    /* The subtitle paragraph under the heading */
    .approach-sub {
      font-size: 15px;
      font-weight: 300;
      line-height: 1.75;
      color: var(--text-muted);
      max-width: 520px;
    }

    /* The two-column grid holding the approach cards */
    .approach-grid {
      display: grid;
      grid-template-columns: 1fr 1fr; /* Two equal columns */
      gap: 1.5rem;
    }

    /* Each approach card (Education / Youth) */
    .approach-card {
      background: var(--cream);
      border: 1px solid var(--border-card);
      border-top: 4px solid var(--gold); /* Gold top accent line */
      border-radius: 12px;
      padding: 2rem;
    }

    /* Top row of the card: icon on the left, number (01/02) on the right */
    .approach-card-top {
      display: flex;
      justify-content: space-between; /* Pushes icon left and number right */
      align-items: flex-start;
      margin-bottom: 1.2rem;
    }

    /* The dark square with a white SVG icon inside */
    .approach-card-icon {
      width: 44px;
      height: 44px;
      background: var(--brown-dark);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* The SVG icon inside the dark square */
    .approach-card-icon svg {
      width: 20px;
      height: 20px;
    }

    /* The large pale number "01" / "02" in the top-right of the card */
    .approach-card-num {
      font-family: var(--font-serif);
      font-size: 3rem;
      font-weight: 700;
      color: var(--gold-pale); /* Very pale so it doesn't compete with the text */
      line-height: 1;
    }

    /* Card heading: "Education as a Pathway" etc. */
    .approach-card-title {
      font-family: var(--font-serif);
      font-size: 1.35rem;
      font-weight: 600;
      color: var(--brown-dark);
      margin-bottom: 0.8rem;
    }

    /* The descriptive paragraph inside the approach card */
    .approach-card-body {
      font-size: 13.5px;
      font-weight: 300;
      line-height: 1.8;
      color: var(--text-muted);
    }

    /* Gold highlighted words within approach card text */
    .approach-card-body .hl { color: var(--gold); font-weight: 500; }
    .approach-card-body strong { font-weight: 600; color: var(--text-dark); }


    /* ==========================================================
       QUOTE BANNER STYLES
       A full-width dark brown section with the organisation's
       key quote displayed in large italic serif text.
       ========================================================== */
    #quote {
      background: var(--brown-dark);
      padding: 5rem;
      text-align: center;
    }

    /* The large decorative quotation mark " at the top */
    .quote-mark {
      font-family: Georgia, serif;
      font-size: 3rem;
      color: var(--gold);
      line-height: 0.6;   /* Pulls it tight, reducing the gap below it */
      display: block;
      margin-bottom: 1.8rem;
    }

    /* The quote text itself — large, italic, serif */
    .quote-text {
      font-family: var(--font-serif);
      font-style: italic;
      font-size: clamp(1.5rem, 2.8vw, 2.2rem);
      font-weight: 400;
      color: rgba(255,255,255,0.92); /* Near-white, slightly soft */
      max-width: 760px;
      margin: 0 auto 1.5rem; /* Centres the text and adds space below */
      line-height: 1.5;
    }

    /* The word "PEOPLE" in the quote — highlighted in gold */
    .quote-text .people {
      color: var(--gold-light);
      font-weight: 600;
    }

    /* The attribution line: "— Fajar Foundation, Est. 2024" */
    .quote-attr {
      font-size: 11px;
      letter-spacing: 0.2em;
      font-weight: 500;
      color: rgba(255,255,255,0.45); /* Very faded — secondary information */
      text-transform: uppercase;
    }


    /* ==========================================================
       PROGRAMS SECTION STYLES
       Three cards showing the organisation's key programs.
       ========================================================== */
    #programs {
      background: var(--cream);
      padding: 6rem 5rem;
      text-align: center;
    }

    /* "OUR PROGRAMS" eyebrow label with flanking lines */
    .programs-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 1rem;
    }

    .programs-eyebrow::before,
    .programs-eyebrow::after {
      content: '';
      display: block;
      width: 32px;
      height: 1px;
      background: var(--gold);
    }

    /* "Initiatives for Impact" heading */
    .programs-title {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 3.5vw, 2.8rem);
      font-weight: 600;
      color: var(--brown-dark);
      margin-bottom: 0.8rem;
    }

    /* The subtitle paragraph */
    .programs-sub {
      font-size: 15px;
      color: var(--text-muted);
      max-width: 520px;
      margin: 0 auto 3rem; /* Centred and spaced below */
      font-weight: 300;
      line-height: 1.7;
    }

    /* The three-column grid of program cards */
    .programs-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
      gap: 1.5rem;
      max-width: 960px;
      margin: 0 auto; /* Centres the grid */
    }

    /* Each program card */
    .prog-card {
      background: var(--cream-light);
      border: 1px solid var(--border-card);
      border-radius: 12px;
      padding: 2rem 1.5rem;
      text-align: left; /* Left-aligned content inside each card */
    }

    /* The dark square icon at the top of each program card */
    .prog-card-icon {
      width: 44px;
      height: 44px;
      background: var(--brown-dark);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.2rem;
      font-size: 18px;
    }

    /* Program card heading */
    .prog-card-title {
      font-family: var(--font-serif);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--brown-dark);
      margin-bottom: 0.6rem;
    }

    /* Program card description */
    .prog-card-body {
      font-size: 13px;
      font-weight: 300;
      line-height: 1.7;
      color: var(--text-muted);
    }


    /* ==========================================================
       IMPACT SECTION STYLES
       Four animated counter cards showing the organisation's
       key numbers: students reached, schools engaged, etc.
       ========================================================== */
    #impact {
      background: var(--cream-light);
      padding: 6rem 5rem;
      text-align: center;
    }

    /* "OUR IMPACT" eyebrow with flanking lines */
    .impact-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 1rem;
    }

    .impact-eyebrow::before,
    .impact-eyebrow::after {
      content: '';
      display: block;
      width: 32px;
      height: 1px;
      background: var(--gold);
    }

    /* "Numbers that Tell Our Story" heading */
    .impact-title {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 3.5vw, 2.8rem);
      font-weight: 600;
      color: var(--brown-dark);
      margin-bottom: 1rem;
    }

    /* Subtitle below the impact heading */
    .impact-sub {
      font-size: 15px;
      color: var(--text-muted);
      max-width: 500px;
      margin: 0 auto 3rem;
      font-weight: 300;
      line-height: 1.7;
    }

    /* Four-column grid of impact number cards */
    .impact-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    /* Each impact number card */
    .impact-card {
      background: var(--cream);
      border: 1px solid var(--border-card);
      border-top: 4px solid var(--gold); /* Gold top accent — matches approach cards */
      border-radius: 12px;
      padding: 2rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    /* Card lifts upward slightly when hovered over */
    .impact-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 18px 40px rgba(58,31,0,0.12);
    }

    /* The large animated number (e.g. "1,000") inside each card.
       The number starts at 0 and counts up when you scroll to
       this section — controlled by the JavaScript below. */
    .impact-number {
      font-family: var(--font-serif);
      font-size: 3rem;
      font-weight: 600;
      color: var(--gold);
      margin-bottom: 0.5rem;
      display: block;
    }

    /* The label below the number (e.g. "Students Reached") */
    .impact-label {
      font-size: 13px;
      color: var(--text-muted);
      letter-spacing: 0.04em;
      line-height: 1.5;
    }


    /* ==========================================================
       TEAM SECTION STYLES
       Three co-founder profile cards with photo, badge, name,
       and biography. Cards have a hover lift effect.
       ========================================================== */
    #team {
      background: var(--cream);
      padding: 6rem 5rem;
      text-align: center;
    }

    /* "THE PEOPLE BEHIND FAJAR" eyebrow with flanking lines */
    .team-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 1rem;
    }

    .team-eyebrow::before,
    .team-eyebrow::after {
      content: '';
      display: block;
      width: 32px;
      height: 1px;
      background: var(--gold);
    }

    /* "Our Team" heading */
    .team-title {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 3.5vw, 2.8rem);
      font-weight: 600;
      color: var(--brown-dark);
      margin-bottom: 0.8rem;
    }

    /* Team section subtitle */
    .team-sub {
      font-size: 15px;
      color: var(--text-muted);
      max-width: 480px;
      margin: 0 auto 3.5rem;
      font-weight: 300;
      line-height: 1.7;
    }

    /* Three-column grid for the team cards */
    .team-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      max-width: 960px;
      margin: 0 auto;
    }

    /* Each team member card */
    .team-card {
      background: var(--cream-light);
      border: 1px solid var(--border-card);
      border-radius: 16px;
      overflow: hidden;   /* Clips the photo to the card's rounded corners */
      text-align: left;
      display: flex;
      flex-direction: column; /* Stacks photo → info → bar vertically */
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    /* Card lifts up slightly on hover */
    .team-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 18px 44px rgba(58,31,0,0.13);
    }

    /* The photo area — uses aspect-ratio to keep a consistent portrait shape */
    .team-photo-wrap {
      width: 100%;
      aspect-ratio: 3/3.6;    /* Slightly taller than wide — portrait format */
      overflow: hidden;
      background: var(--gold-pale); /* Pale gold shows while photo is loading */
    }

    /* The actual photo inside the photo wrapper */
    .team-photo-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;               /* Fills the box without stretching */
      object-position: top center;     /* Keeps faces visible when cropped */
      display: block;
      transition: transform 0.4s ease;
    }

    /* Photo zooms in slightly when the card is hovered */
    .team-card:hover .team-photo-wrap img {
      transform: scale(1.04);
    }

    /* The text area below the photo */
    .team-info {
      padding: 1.4rem 1.6rem 1.6rem;
      flex: 1; /* Takes up all remaining height so the gold bar is always at the bottom */
    }

    /* The "Co-Founder" pill badge above each name */
    .team-badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--gold);
      background: rgba(200,154,46,0.1); /* Very faint gold background */
      border: 1px solid rgba(200,154,46,0.3);
      border-radius: 20px;
      padding: 4px 12px;
      margin-bottom: 0.7rem;
    }

    /* The team member's name */
    .team-name {
      font-family: var(--font-serif);
      font-size: 1.35rem;
      font-weight: 600;
      color: var(--brown-dark);
      margin-bottom: 0.65rem;
      line-height: 1.2;
    }

    /* The biography text wrapper */
    .team-bio {
      font-size: 13px;
      font-weight: 300;
      line-height: 1.75;
      color: var(--text-muted);
    }

    /* Space between the two biography paragraphs */
    .team-bio p + p {
      margin-top: 0.75rem;
    }

    /* The thin gold gradient bar at the very bottom of each card */
    .team-card-bar {
      height: 3px;
      background: linear-gradient(to right, var(--gold), var(--gold-light));
    }


    /* ==========================================================
       DONATE SECTION STYLES
       A warm brown call-to-action section encouraging donations.
       ========================================================== */
    #donate {
      background: var(--brown-warm); /* Warm brown — slightly different from dark brown */
      padding: 6rem 5rem;
      text-align: center;
    }

    /* "SUPPORT THE CAUSE" eyebrow with flanking lines */
    .donate-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold-light);
      margin-bottom: 1.5rem;
    }

    .donate-eyebrow::before,
    .donate-eyebrow::after {
      content: '';
      display: block;
      width: 32px;
      height: 1px;
      background: var(--gold-light);
    }

    /* "Be Part of the Dawn" heading */
    .donate-title {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 3.5vw, 2.8rem);
      font-weight: 600;
      color: var(--gold-light);
      margin-bottom: 1rem;
    }

    /* The paragraph below the heading */
    .donate-sub {
      font-size: 15px;
      color: rgba(255,255,255,0.7);
      max-width: 480px;
      margin: 0 auto 2.5rem;
      font-weight: 300;
      line-height: 1.7;
    }

    /* The "DONATE NOW →" button */
    .donate-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--gold);
      color: var(--brown-dark); /* Dark text on gold background */
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 14px 36px;
      border-radius: 40px;
      text-decoration: none;
      transition: background 0.2s;
    }

    .donate-btn:hover {
      background: var(--gold-light);
    }


    /* ==========================================================
       CONTACT SECTION STYLES
       A cream section with a contact form (Name, Email,
       Subject, Message, and a Send button).
       ========================================================== */
    #contact {
      background: var(--cream);
      padding: 6rem 5rem;
      text-align: center;
    }

    /* "GET IN TOUCH" eyebrow with flanking lines */
    .contact-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 1rem;
    }

    .contact-eyebrow::before,
    .contact-eyebrow::after {
      content: '';
      display: block;
      width: 32px;
      height: 1px;
      background: var(--gold);
    }

    /* "Contact Us" heading */
    .contact-title {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 3.5vw, 2.8rem);
      font-weight: 600;
      color: var(--brown-dark);
      margin-bottom: 0.8rem;
    }

    /* Subtitle paragraph */
    .contact-sub {
      font-size: 15px;
      color: var(--text-muted);
      max-width: 420px;
      margin: 0 auto 3rem;
      font-weight: 300;
      line-height: 1.7;
    }

    /* The form container — centres and stacks fields vertically */
    .contact-form {
      max-width: 560px;
      margin: 0 auto;
      display: flex;
      flex-direction: column; /* Fields stack top to bottom */
      gap: 1rem;
      text-align: left; /* Form fields are left-aligned even though section is centred */
    }

    /* Styling for all input fields and the text area */
    .contact-form input,
    .contact-form textarea {
      width: 100%;
      padding: 13px 16px;
      border: 1px solid var(--border-card);
      border-radius: 8px;
      background: var(--cream-light);
      font-family: var(--font-sans);
      font-size: 14px;
      font-weight: 300;
      color: var(--text-dark);
      outline: none;           /* Removes the browser's default blue focus ring */
      transition: border 0.2s; /* Border colour transition on focus */
    }

    /* Placeholder text inside the fields */
    .contact-form input::placeholder,
    .contact-form textarea::placeholder {
      color: var(--text-muted);
    }

    /* Border turns gold when a field is clicked / focused */
    .contact-form input:focus,
    .contact-form textarea:focus {
      border-color: var(--gold);
    }

    /* The message textarea is taller and can be resized vertically */
    .contact-form textarea {
      resize: vertical;       /* User can drag to make it taller but not wider */
      min-height: 120px;
    }

    /* The "SEND MESSAGE →" submit button */
    .contact-submit {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--brown-dark);
      color: var(--gold-light);
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 14px 32px;
      border-radius: 40px;
      border: none;
      cursor: pointer;
      align-self: flex-start; /* Button aligns to the left within the form */
      transition: background 0.2s;
    }

    .contact-submit:hover {
      background: var(--brown-mid);
    }


    /* ==========================================================
       FOOTER STYLES
       Dark brown footer with logo, address on the left,
       and social icons + copyright on the right.
       ========================================================== */
    footer {
      background: var(--brown-dark);
      padding: 3rem 5rem;
      display: flex;
      justify-content: space-between; /* Left column and right column pushed apart */
      align-items: flex-start;        /* Both columns start at the top */
      gap: 3rem;
      flex-wrap: wrap; /* Wraps to a single column on small screens */
    }

    /* Left side: logo + address */
    .footer-left {
      max-width: 320px;
    }

    /* The logo image in the footer */
    .footer-logo img {
      height: 44px;
      margin-bottom: 1rem;
      display: block;
    }

    /* The registered address text */
    .footer-address {
      font-size: 12px;
      line-height: 1.8;
      color: rgba(255,255,255,0.55);
      font-weight: 300;
    }

    /* Right side: social icons + copyright */
    .footer-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end; /* Right-aligned */
      gap: 1rem;
    }

    /* Row of social media icon circles */
    .footer-social {
      display: flex;
      gap: 12px;
    }

    /* Individual social icon circle (LinkedIn, Instagram) */
    .social-icon {
      width: 36px;
      height: 36px;
      border: 1px solid rgba(255,255,255,0.3); /* Faint white circle border */
      border-radius: 50%;    /* Perfect circle */
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--gold-light);
      font-size: 14px;
      text-decoration: none;
      transition: all 0.2s;
    }

    /* On hover: circle fills gold and icon turns dark brown */
    .social-icon:hover {
      background: var(--gold);
      color: var(--brown-dark);
      border-color: var(--gold);
    }

    /* The copyright text at the bottom right */
    .footer-copy {
      font-size: 11px;
      color: rgba(255,255,255,0.4); /* Very faint */
      text-align: right;
      line-height: 1.6;
    }


    /* ==========================================================
       GET INVOLVED POPUP STYLES
       A modal (pop-up window) that appears when the user clicks
       "GET INVOLVED" in the navigation. It shows internship
       opportunities and a link to the application form.
       ========================================================== */

    /* The dark overlay behind the popup box.
       Covers the entire screen. Hidden by default (display: none). */
    .involved-popup {
      display: none;      /* Hidden until openInvolved() is called in JS */
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(30,10,0,0.65); /* Dark semi-transparent overlay */
      justify-content: center; /* Centres the box horizontally */
      align-items: center;     /* Centres the box vertically */
      z-index: 999;            /* Above everything on the page */
    }

    /* The white popup box itself */
    .involved-box {
      background: var(--cream-light);
      width: 540px;
      max-width: 92%;     /* On small screens, fills 92% of the width */
      padding: 2.5rem;
      border-radius: 16px;
      border-top: 4px solid var(--gold); /* Gold top accent */
      max-height: 90vh;   /* Never taller than 90% of the screen */
      overflow-y: auto;   /* Shows a scrollbar if content is very tall */
      position: relative; /* Needed for the close button to position itself */
    }

    /* The "Work With Us" heading inside the popup */
    .involved-box h2 {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 600;
      color: var(--brown-dark);
      margin-bottom: 0.4rem;
    }

    /* The subtitle "Join us in building change from the ground up." */
    .involved-box .involved-sub {
      font-size: 14px;
      font-weight: 300;
      color: var(--text-muted);
      margin-bottom: 2rem;
    }

    /* The vertical list of internship opportunity cards */
    .involved-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1.8rem;
    }

    /* Each internship card inside the popup */
    .involved-item {
      background: var(--cream);
      border: 1px solid var(--border-card);
      border-radius: 10px;
      padding: 1.2rem 1.4rem;
    }

    /* Internship title: "Social Media & Communications Intern" */
    .involved-item h3 {
      font-family: var(--font-serif);
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--brown-dark);
      margin-bottom: 0.4rem;
    }

    /* Short description and duration for each internship */
    .involved-item p {
      font-size: 13px;
      font-weight: 300;
      line-height: 1.65;
      color: var(--text-muted);
    }

    /* "Duration:" label inside each internship card */
    .involved-item p strong {
      font-weight: 600;
      color: var(--text-dark);
    }

    /* The "APPLY NOW →" button linking to the Google Form */
    .apply-main-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--brown-dark);
      color: var(--gold-light);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 13px 28px;
      border-radius: 40px;
      text-decoration: none;
      transition: background 0.2s;
    }

    .apply-main-btn:hover {
      background: var(--brown-mid);
      color: #fff;
    }

    /* The × close button in the top-right corner of the popup */
    .close-btn {
      position: absolute;
      top: 1.2rem;
      right: 1.4rem;
      font-size: 22px;
      font-weight: 300;
      cursor: pointer;
      color: var(--text-muted);
      line-height: 1;
      background: none;
      border: none;
      transition: color 0.2s;
    }

    .close-btn:hover {
      color: var(--brown-dark);
    }


    /* ==========================================================
       SCROLL REVEAL ANIMATION
       Elements with the class "reveal" start invisible and
       slightly shifted downward. When they scroll into view,
       the JavaScript adds the class "visible", which triggers
       this CSS transition — they fade in and slide up smoothly.
       ========================================================== */

    /* Initial state: invisible and shifted 24px down */
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }

    /* Final state (added by JS when element enters viewport) */
    .reveal.visible {
      opacity: 1;
      transform: none; /* Removes the downward shift */
    }


    /* ==========================================================
       RESPONSIVE STYLES — MOBILE & TABLET
       These rules override the desktop styles when the screen
       is narrower than 900px (tablets, phones) or 500px (phones).

       @media rules only apply if the condition in brackets is true.
       max-width: 900px means "screens 900px wide or narrower".
       ========================================================== */

    @media (max-width: 900px) {

      /* Nav bar: tighter padding and slightly smaller height */
      nav {
        padding: 0 1.2rem;
        height: 52px;
      }

      /* Nav links: tighter spacing and allow horizontal scrolling
         if there are too many links for the screen width */
      .nav-links {
        gap: 1rem;
        overflow-x: auto;
      }

      .nav-links a {
        font-size: 11px;
      }

      /* Hero: shorter on mobile — 80% of screen height instead of 100% */
      #home {
        min-height: 80vh;
        padding-top: 52px;
      }

      /* On mobile, the gradient covers the image from top to bottom
         instead of left to right (since the image is behind all the text) */
      .hero-bg {
        background:
          linear-gradient(
            to bottom,
            rgba(245,240,232,0.96) 60%,
            rgba(245,240,232,0.5) 100%
          ),
          url('hero.jpg') center top/cover no-repeat;
      }

      /* Hero text: full width and centred on mobile */
      .hero-content {
        padding: 2rem 1.5rem;
        max-width: 100%;
        text-align: center;
      }

      .hero-body {
        max-width: 100%;
      }

      /* Centre the CTA button on mobile */
      .hero-cta {
        margin: 0 auto;
      }

      /* The decorative logo moves below the text on mobile
         instead of floating on the right side */
      .hero-deco {
        position: static;      /* Removed from absolute positioning */
        transform: none;       /* No longer needs vertical centering */
        display: flex;
        justify-content: center;
        margin: 1.5rem auto 0;
        padding-bottom: 2rem;
      }

      .hero-deco img {
        width: 130px; /* Smaller logo on mobile */
      }

      /* All sections: reduce left/right padding on smaller screens */
      #about, #belief, #approach, #quote,
      #programs, #impact, #team, #donate, #contact {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      /* Belief, Approach: collapse from two columns to one column */
      #belief { grid-template-columns: 1fr; }
      .approach-grid { grid-template-columns: 1fr; }

      /* Programs: two columns instead of three on tablets */
      .programs-grid { grid-template-columns: 1fr 1fr; }

      /* Impact: two columns instead of four on tablets */
      .impact-grid { grid-template-columns: 1fr 1fr; gap: 1.2rem; }

      /* Team: one card per row on mobile, centred */
      .team-grid {
        grid-template-columns: 1fr;
        max-width: 420px;
        margin: 0 auto;
      }

      /* Footer: stack left and right sections vertically, centred */
      footer {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 2.5rem 1.5rem;
      }

      .footer-right { align-items: center; }
      .footer-copy  { text-align: center; }
    }

    /* Extra small screens (phones): collapse to single column */
    @media (max-width: 500px) {
      .programs-grid { grid-template-columns: 1fr; } /* One program card per row */
      .impact-grid   { grid-template-columns: 1fr; } /* One impact card per row */
    }

  </style>
</head>


<!-- ============================================================
     BODY SECTION — THE VISIBLE CONTENT
     Everything between <body> and </body> is what visitors see.
     Sections are ordered top to bottom as they appear on the page.
     ============================================================ -->
<body>


  <!-- ─────────────────────────────────────────────────────────
       PAGE LOADER
       This full-screen overlay is visible when the page first
       loads. It shows the spinning ff_logo.png icon for 1.2
       seconds, then fades out. Controlled by the JavaScript
       at the bottom of this file.
       ───────────────────────────────────────────────────────── -->
  <div id="loader">
    <!-- ff_logo.png = the icon/pinwheel logo (not the full wordmark)
         It spins because of the @keyframes spinLoader rule in CSS above -->
    <img src="ff_logo.png" alt="Loading Fajar Foundation…"/>
  </div>


  <!-- ─────────────────────────────────────────────────────────
       NAVIGATION BAR
       Fixed at the top of the screen at all times.
       Contains: logo on the left, page links on the right.

       HOW TO UPDATE THE NAV:
       • To change the logo → replace logo.png in the folder
       • To add a new page link → copy a <li><a> block and
         update the href="#section-id" and link text
       ───────────────────────────────────────────────────────── -->
  <nav>

    <!-- Logo: clicking it scrolls back to the top (home) -->
    <a href="#home" class="nav-logo">
      <img src="logo.png" alt="Fajar Foundation"/>
    </a>

    <!-- Navigation links: each href="#id" scrolls to that section -->
    <ul class="nav-links">
      <li><a href="#home">HOME</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#programs">PROGRAMS</a></li>
      <li><a href="#team">TEAM</a></li>
      <li><a href="#donate">DONATE</a></li>
      <li><a href="#contact">CONTACT</a></li>

      <!-- "GET INVOLVED" is a button (not a link) — it opens the
           internship popup. onclick="openInvolved()" calls the
           JavaScript function defined at the bottom of this file. -->
      <li>
        <button class="nav-involved-btn" onclick="openInvolved()">
          GET INVOLVED
        </button>
      </li>
    </ul>

  </nav>


  <!-- ─────────────────────────────────────────────────────────
       SECTION 1: HERO
       The first screen visitors see. Full-height, background
       image on the right, text content on the left.

       HOW TO UPDATE:
       • Change headline → edit the <h1> text
       • Change background photo → replace hero.jpg in the folder
       • Change the decorative logo → replace ff_logo.png
       • Change the button destination → edit href="#about"
       ───────────────────────────────────────────────────────── -->
  <section id="home">

    <!-- Background image layer — styled in CSS (.hero-bg) -->
    <div class="hero-bg"></div>

    <!-- Text content — fades in on page load via the "reveal" class -->
    <div class="hero-content reveal">

      <!-- Small gold tag above the headline -->
      <p class="hero-tag">A Movement. A Dawn. A New Era.</p>

      <!-- Main headline — "movement" is underlined in gold -->
      <h1 class="hero-title">
        More than an organisation —<br>
        FAJAR is a <span class="underline-gold">movement</span>
      </h1>

      <!-- Supporting paragraph -->
      <p class="hero-body">
        A collective of young professionals committed to those whom the world
        has overlooked or pushed to the margins. Rooted in the heart of
        <strong>rural India</strong>, we believe that community-led leadership
        can replace systemic dependency — one dawn at a time.
      </p>

      <!-- Call-to-action button — scrolls to the About section -->
      <a href="#about" class="hero-cta">DISCOVER OUR STORY →</a>

    </div>

    <!-- Decorative logo positioned on the right side of the hero.
         Full opacity — shown as a real logo, not a background watermark.
         TO RESIZE: change width in the CSS .hero-deco img rule. -->
    <div class="hero-deco">
      <img src="ff_logo.png" alt="Fajar Foundation"/>
    </div>

  </section>


  <!-- ─────────────────────────────────────────────────────────
       SECTION 2: ABOUT FAJAR
       Dark brown background. Tells the foundation's story —
       what it is, when it was founded, and what it stands for.

       HOW TO UPDATE: Edit the text inside the <p> tags.
       ───────────────────────────────────────────────────────── -->
  <section id="about" class="reveal">

    <!-- Section eyebrow label: "— ABOUT FAJAR —" -->
    <div class="section-eyebrow">ABOUT FAJAR</div>

    <!-- Section heading -->
    <h2 class="about-title">The Dawn of Transformation</h2>

    <!-- First paragraph — Foundation's legal background -->
    <p class="about-body">
      <span class="highlight">FAJAR Foundation</span>, established in 2024 and
      registered under <span class="highlight">Section 8 of the Companies Act,
      2013</span>, is a non-profit organization deeply rooted in the heart of
      rural India.
    </p>

    <!-- Second paragraph — the movement framing -->
    <p class="about-body">
      More than just an organization, FAJAR is a
      <span class="highlight">movement</span> — a collective of young
      professionals committed to those whom the world has overlooked or pushed
      to the margins.
    </p>

    <!-- The pill-shaped badge at the bottom -->
    <div class="about-badge">
      "Fajar" means Dawn — the beginning of a new era
    </div>

  </section>


  <!-- ─────────────────────────────────────────────────────────
       SECTION 3: CORE BELIEF
       Two-column layout. Left: the "Justice" statement.
       Right: three value cards — Social, Economic, Political.

       HOW TO UPDATE:
       • Edit the left-side text directly in the <p> tags
       • To change belief card content → find .belief-card in HTML
         and update the icon emoji, title, and body text
       ───────────────────────────────────────────────────────── -->
  <section id="belief">

    <!-- LEFT COLUMN: the big statement and explanation -->
    <div class="belief-left reveal">

      <!-- Eyebrow: "OUR CORE BELIEF" -->
      <div class="belief-eyebrow">OUR CORE BELIEF</div>

      <!-- The bold statement -->
      <h2 class="belief-title">
        Justice is not an Ideal.<br>It is a Practical Necessity.
      </h2>

      <!-- Explanation paragraph -->
      <p class="belief-body">
        We believe that a thriving community is built upon the pillars of
        social, economic, and political
        <span class="highlight">JUSTICE</span>. For us,
        <strong>SOCIAL EQUITY</strong> is a practical necessity for millions
        of underprivileged sections — not a distant aspiration, but an urgent
        and actionable commitment we pursue every single day.
      </p>

    </div>

    <!-- RIGHT COLUMN: the three value cards -->
    <div class="belief-cards reveal">

      <!-- Card 1: Social -->
      <div class="belief-card">
        <span class="belief-card-icon">⚖️</span>
        <p class="belief-card-title">SOCIAL</p>
        <p class="belief-card-body">
          Equity and dignity for every individual regardless of background.
        </p>
      </div>

      <!-- Card 2: Economic -->
      <div class="belief-card">
        <span class="belief-card-icon">📈</span>
        <p class="belief-card-title">ECONOMIC</p>
        <p class="belief-card-body">
          Opportunities and self-reliance for marginalized communities.
        </p>
      </div>

      <!-- Card 3: Political -->
      <div class="belief-card">
        <span class="belief-card-icon">🗣️</span>
        <p class="belief-card-title">POLITICAL</p>
        <p class="belief-card-body">
          Voice, representation, and leadership from within communities.
        </p>
      </div>

    </div>

  </section>


  <!-- ─────────────────────────────────────────────────────────
       SECTION 4: OUR APPROACH
       Explains the two strategic pillars: Education and Youth.
       Each pillar gets its own card with an icon, number, and text.
       ───────────────────────────────────────────────────────── -->
  <section id="approach">

    <!-- Section header block: eyebrow + heading + subtitle -->
    <div class="approach-header reveal">
      <div class="approach-eyebrow">OUR APPROACH</div>
      <h2 class="approach-title">How We Create Change</h2>
      <p class="approach-sub">
        Our work rests on two powerful convictions — that education is
        transformative, and that the best solutions come from within the
        community.
      </p>
    </div>

    <!-- Two-column grid of approach cards -->
    <div class="approach-grid">

      <!-- Card 01: Education as a Pathway -->
      <div class="approach-card reveal">
        <div class="approach-card-top">

          <!-- SVG icon: an open book -->
          <div class="approach-card-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                stroke="#e8c060" stroke-width="2" stroke-linecap="round"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                stroke="#e8c060" stroke-width="2"/>
            </svg>
          </div>

          <!-- Large pale number in top-right corner of the card -->
          <span class="approach-card-num">01</span>

        </div>

        <h3 class="approach-card-title">Education as a Pathway</h3>
        <p class="approach-card-body">
          Our conviction is unwavering: the light of
          <span class="hl">quality education</span> is the primary force
          capable of breaking the generational cycle of marginalization. We
          define education far beyond the walls of a classroom — it is the
          process of <strong>capacitating minds</strong>, the bridge to a
          future where individuals possess the agency of informed decisions.
        </p>
      </div>

      <!-- Card 02: Youth as a Catalyst of Change -->
      <div class="approach-card reveal">
        <div class="approach-card-top">

          <!-- SVG icon: a lightning bolt -->
          <div class="approach-card-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                stroke="#e8c060" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </div>

          <span class="approach-card-num">02</span>

        </div>

        <h3 class="approach-card-title">Youth as a Catalyst of Change</h3>
        <p class="approach-card-body">
          We believe in solutions that come from the ground. We position
          <strong>rural youth</strong> as the primary catalysts of change —
          capacitating young minds with professional skills and the confidence
          to lead, fostering a new
          <strong>leadership and self-reliance</strong> cultivated from within
          the underprivileged community itself.
        </p>
      </div>

    </div>

  </section>


  <!-- ─────────────────────────────────────────────────────────
       QUOTE BANNER
       Full-width dark brown section with the organisation's
       signature quote in large italic serif text.

       HOW TO UPDATE: Edit the text inside .quote-text
       ───────────────────────────────────────────────────────── -->
  <section id="quote" class="reveal">

    <!-- Decorative large opening quotation mark -->
    <span class="quote-mark">"</span>

    <!-- The quote text — "PEOPLE" is highlighted in gold -->
    <p class="quote-text">
      At FAJAR, we aren't just envisioning a better future — we are building
      it alongside the <span class="people">PEOPLE</span> who will lead it.
    </p>

    <!-- Attribution line -->
    <p class="quote-attr">— Fajar Foundation, Est. 2024</p>

  </section>


  <!-- ─────────────────────────────────────────────────────────
       SECTION 5: PROGRAMS
       Three cards summarising the foundation's programs.

       HOW TO UPDATE:
       • Change program name → edit .prog-card-title
       • Change description → edit .prog-card-body
       • Change icon → replace the emoji in .prog-card-icon
       ───────────────────────────────────────────────────────── -->
  <section id="programs">

    <div class="programs-eyebrow reveal">OUR PROGRAMS</div>
    <h2 class="programs-title reveal">Initiatives for Impact</h2>
    <p class="programs-sub reveal">
      From rural classrooms to community leadership — our programs are designed
      to ignite change from within.
    </p>

    <!-- Three program cards in a grid -->
    <div class="programs-grid">

      <!-- Program 1 -->
      <div class="prog-card reveal">
        <div class="prog-card-icon">📚</div>
        <h3 class="prog-card-title">Educational Outreach</h3>
        <p class="prog-card-body">
          Quality learning support for children in underserved rural areas,
          building foundational skills and a love for learning.
        </p>
      </div>

      <!-- Program 2 -->
      <div class="prog-card reveal">
        <div class="prog-card-icon">💡</div>
        <h3 class="prog-card-title">Youth Leadership</h3>
        <p class="prog-card-body">
          Developing confident, capable young leaders who can advocate for and
          serve their own communities.
        </p>
      </div>

      <!-- Program 3 -->
      <div class="prog-card reveal">
        <div class="prog-card-icon">🤝</div>
        <h3 class="prog-card-title">Community Capacitation</h3>
        <p class="prog-card-body">
          Skill development and livelihood programs that create economic
          self-reliance at the grassroots level.
        </p>
      </div>

    </div>

  </section>


  <!-- ─────────────────────────────────────────────────────────
       SECTION 6: IMPACT
       Four animated number cards that count up from 0 when the
       visitor scrolls down to this section.

       HOW TO UPDATE NUMBERS:
       Change data-target="1000" to any number you want.
       The counter will automatically animate up to that number.

       Example: data-target="2500" → counts up to 2,500
       ───────────────────────────────────────────────────────── -->
  <section id="impact">

    <div class="impact-eyebrow reveal">OUR IMPACT</div>
    <h2 class="impact-title reveal">Numbers that Tell Our Story</h2>
    <p class="impact-sub reveal">
      Every number reflects a life touched, a future shaped, and a community
      strengthened.
    </p>

    <!-- Four impact number cards -->
    <div class="impact-grid">

      <!-- Each .impact-number starts at "0" and counts up to data-target
           when this section is scrolled into view (handled by JavaScript) -->

      <div class="impact-card reveal">
        <span class="impact-number" data-target="1000">0</span>
        <p class="impact-label">Students Reached</p>
      </div>

      <div class="impact-card reveal">
        <span class="impact-number" data-target="5">0</span>
        <p class="impact-label">Schools Engaged</p>
      </div>

      <div class="impact-card reveal">
        <span class="impact-number" data-target="2">0</span>
        <p class="impact-label">Districts Covered</p>
      </div>

      <div class="impact-card reveal">
        <span class="impact-number" data-target="200">0</span>
        <p class="impact-label">Community Members Supported</p>
      </div>

    </div>

  </section>


  <!-- ─────────────────────────────────────────────────────────
       SECTION 7: TEAM
       Three co-founder profile cards. Each card has:
       a photo, a "Co-Founder" badge, a name, and a biography.

       HOW TO UPDATE:
       • Photo → replace alim.jpg / kartik.jpg / nitin.jpg in folder
       • Name → edit the <h3 class="team-name"> text
       • Biography → edit the <p> tags inside .team-bio
       ───────────────────────────────────────────────────────── -->
  <section id="team">

    <div class="team-eyebrow reveal">THE PEOPLE BEHIND FAJAR</div>
    <h2 class="team-title reveal">Our Team</h2>
    <p class="team-sub reveal">
      A collective of passionate young professionals committed to building a
      more just and equitable India — one community at a time.
    </p>

    <!-- Three team member cards -->
    <div class="team-grid">

      <!-- ── TEAM MEMBER 1: ALIM ── -->
      <div class="team-card reveal">

        <!-- Photo: replace alim.jpg with a new file of the same name to update -->
        <div class="team-photo-wrap">
          <img src="alim.jpg" alt="Alim, Co-Founder"/>
        </div>

        <!-- Name, badge, and biography -->
        <div class="team-info">
          <span class="team-badge">Co-Founder</span>
          <h3 class="team-name">Alim</h3>
          <div class="team-bio">
            <p>
              Alim Shaikh is a development professional with 7+ years of
              experience in education, youth development, and public systems.
              A Gandhi Fellowship alumnus, he has worked closely with
              governments and communities to improve learning outcomes and
              strengthen program implementation.
            </p>
            <p>
              Coming from a rural school background, he is deeply committed to
              creating equitable opportunities for young people. At Fajar
              Foundation, he focuses on building scalable solutions that
              empower students and strengthen local education systems.
            </p>
          </div>
        </div>

        <!-- Decorative gold gradient bar at the bottom of the card -->
        <div class="team-card-bar"></div>

      </div>

      <!-- ── TEAM MEMBER 2: KARTIK ── -->
      <div class="team-card reveal">

        <div class="team-photo-wrap">
          <img src="kartik.jpg" alt="Kartik, Co-Founder"/>
        </div>

        <div class="team-info">
          <span class="team-badge">Co-Founder</span>
          <h3 class="team-name">Kartik</h3>
          <div class="team-bio">
            <p>
              Kartik brings over a decade of experience in the development
              sector, with a strong focus on rural communities. His journey
              began in Melghat, shaping his commitment to social impact.
            </p>
            <p>
              He has worked extensively in Chhattisgarh on livelihoods,
              gender, and youth development. Kartik is also passionate about
              mentoring rural students to access higher education, and at
              Fajar, he works on creating pathways for youth empowerment.
            </p>
          </div>
        </div>

        <div class="team-card-bar"></div>

      </div>

      <!-- ── TEAM MEMBER 3: NITIN ── -->
      <div class="team-card reveal">

        <div class="team-photo-wrap">
          <img src="nitin.jpg" alt="Nitin, Co-Founder"/>
        </div>

        <div class="team-info">
          <span class="team-badge">Co-Founder</span>
          <h3 class="team-name">Nitin</h3>
          <div class="team-bio">
            <p>
              Nitin is a development practitioner with 4+ years of experience
              working in tribal regions of central India. His work focuses on
              climate resilience, rural governance, and strengthening
              grassroots institutions.
            </p>
            <p>
              He has supported women farmers and community groups in building
              sustainable livelihoods and accessing social protection. At
              Fajar, he brings a strong field perspective to drive
              community-led development initiatives.
            </p>
          </div>
        </div>

        <div class="team-card-bar"></div>

      </div>

    </div>

  </section>


  <!-- ─────────────────────────────────────────────────────────
       SECTION 8: DONATE
       A warm brown call-to-action section. Currently the
       "DONATE NOW" button links to the Contact section.

       HOW TO UPDATE:
       • To link to a payment page → change href="#contact" to
         your actual payment or donation URL
       ───────────────────────────────────────────────────────── -->
  <section id="donate" class="reveal">

    <div class="donate-eyebrow">SUPPORT THE CAUSE</div>
    <h2 class="donate-title">Be Part of the Dawn</h2>
    <p class="donate-sub">
      Every contribution helps us reach further into the margins — supporting
      education, building leaders, and changing lives one community at a time.
    </p>

    <!-- Currently links to the Contact section. Replace with a donation URL when ready. -->
    <a href="#contact" class="donate-btn">DONATE NOW →</a>

  </section>


  <!-- ─────────────────────────────────────────────────────────
       SECTION 9: CONTACT
       A contact form with fields for Name, Email, Subject,
       and Message. The form currently does nothing on submit
       (onsubmit="return false;") — it needs to be connected
       to a backend service (like Formspree or EmailJS) to
       actually send emails.

       HOW TO MAKE THE FORM WORK:
       Sign up at https://formspree.io, get a form action URL,
       then replace onsubmit="return false;" with
       action="https://formspree.io/f/YOUR_ID" method="POST"
       ───────────────────────────────────────────────────────── -->
  <section id="contact">

    <div class="contact-eyebrow reveal">GET IN TOUCH</div>
    <h2 class="contact-title reveal">Contact Us</h2>
    <p class="contact-sub reveal">
      Have a question, a partnership idea, or want to volunteer? We'd love to
      hear from you.
    </p>

    <!-- Contact form — currently non-functional (no backend connected) -->
    <form class="contact-form reveal" onsubmit="return false;">
      <input type="text"  placeholder="Your Name"/>
      <input type="email" placeholder="Your Email"/>
      <input type="text"  placeholder="Subject"/>
      <textarea           placeholder="Your Message"></textarea>
      <button type="submit" class="contact-submit">SEND MESSAGE →</button>
    </form>

  </section>


  <!-- ─────────────────────────────────────────────────────────
       FOOTER
       Dark brown footer with the logo, registered address
       on the left, and social media icons + copyright on
       the right.

       HOW TO UPDATE:
       • Address → edit the text inside .footer-address
       • Social links → replace href="#" with actual profile URLs
       ───────────────────────────────────────────────────────── -->
  <footer>

    <!-- LEFT: Logo and registered address -->
    <div class="footer-left">

      <div class="footer-logo">
        <!-- logo.png = the full Fajar Foundation wordmark -->
        <img src="logo.png" alt="Fajar Foundation"/>
      </div>

      <div class="footer-address">
        FAJAR FOUNDATION<br>
        C/O Avinash Ramrao Chitrakar,<br>
        At Tawlar, Pathrot,<br>
        Achalpur City, Amravati – 444808,<br>
        Maharashtra
      </div>

    </div>

    <!-- RIGHT: Social icons and copyright notice -->
    <div class="footer-right">

      <div class="footer-social">
        <!-- LinkedIn icon — replace href="#" with your LinkedIn page URL -->
        <a href="#" target="_blank" class="social-icon" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <!-- Instagram icon — replace href="#" with your Instagram profile URL -->
        <a href="#" target="_blank" class="social-icon" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
      </div>

      <p class="footer-copy">
        © 2024 Fajar Foundation.<br>
        Registered under Section 8, Companies Act 2013.
      </p>

    </div>

  </footer>


  <!-- ─────────────────────────────────────────────────────────
       GET INVOLVED POPUP (MODAL)
       Hidden by default. Opens when the user clicks the
       "GET INVOLVED" button in the navigation bar.
       Shows three internship opportunities and an "APPLY NOW"
       button that links to a Google Form.

       HOW TO UPDATE:
       • Add/remove internship roles → copy or delete .involved-item blocks
       • Change the Google Form link → find the href below and
         replace the URL with your new form link
       ───────────────────────────────────────────────────────── -->
  <div id="involvedPopup" class="involved-popup">

    <!-- The actual popup box (child of the dark overlay) -->
    <div class="involved-box">

      <!-- × close button: calls closeInvolved() in JavaScript -->
      <button class="close-btn" onclick="closeInvolved()" aria-label="Close">
        ×
      </button>

      <h2>Work With Us</h2>
      <p class="involved-sub">Join us in building change from the ground up.</p>

      <!-- List of internship opportunities -->
      <div class="involved-list">

        <!-- Internship 1 -->
        <div class="involved-item">
          <h3>Social Media &amp; Communications Intern</h3>
          <p>
            Create content, manage social media, and help us tell impactful
            stories.<br>
            <strong>Duration:</strong> 3 months
          </p>
        </div>

        <!-- Internship 2 -->
        <div class="involved-item">
          <h3>Fundraising &amp; Partnerships Intern</h3>
          <p>
            Support fundraising strategy, donor outreach, and partnerships.<br>
            <strong>Duration:</strong> 3 months
          </p>
        </div>

        <!-- Internship 3 -->
        <div class="involved-item">
          <h3>Field Research Intern</h3>
          <p>
            Work with communities, collect field data, and support program
            insights.<br>
            <strong>Duration:</strong> 2–3 months
          </p>
        </div>

      </div>

      <!-- "APPLY NOW" button — links to the Google Form application -->
      <!-- TO UPDATE: replace the href URL with your new form link -->
      <a href="https://forms.gle/2pZhjgX8KpmhEt1s8"
         target="_blank"
         rel="noopener noreferrer"
         class="apply-main-btn">
        APPLY NOW →
      </a>

    </div>

  </div>


  <!-- ============================================================
       JAVASCRIPT — BEHAVIOUR & INTERACTIVITY
       JavaScript makes the page interactive. This block handles:

       1. SCROLL REVEAL     → Elements fade in as you scroll down
       2. IMPACT COUNTERS   → Numbers count up when you reach
                              the Impact section
       3. GET INVOLVED POPUP → Opens and closes the popup window
       4. PAGE LOADER       → Fades out the loading screen after
                              1.2 seconds

       None of this affects what the page looks like — only how
       it behaves. You can edit text and images without touching
       any of this JavaScript.
       ============================================================ -->
  <script>

    /* ──────────────────────────────────────────────────────────
       1. SCROLL REVEAL ANIMATION
       ──────────────────────────────────────────────────────────
       How it works:
       • Every element with class="reveal" starts invisible
         (opacity 0, shifted down 24px) — defined in the CSS.
       • An "IntersectionObserver" watches all those elements.
       • When an element enters the visible part of the screen
         (at least 12% visible), it adds the class "visible"
         to that element.
       • The CSS for .reveal.visible fades it in and moves it
         to its normal position.
       • Once visible, the observer stops watching that element
         (unobserve) so the animation only happens once.
    */

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {           // Element has entered the viewport
          e.target.classList.add('visible'); // Add the "visible" CSS class
          revealObserver.unobserve(e.target); // Stop watching this element
        }
      });
    }, { threshold: 0.12 }); // Trigger when 12% of the element is visible

    // Attach the observer to every element with class="reveal"
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


    /* ──────────────────────────────────────────────────────────
       2. IMPACT COUNTER ANIMATION
       ──────────────────────────────────────────────────────────
       How it works:
       • animateCounters() loops through all .impact-number elements.
       • For each, it reads the data-target attribute (e.g. 1000).
       • Over 1.5 seconds, it updates the displayed number from 0
         up to the target using requestAnimationFrame (smooth 60fps).
       • A separate IntersectionObserver watches the #impact section.
       • When #impact becomes 30% visible on screen, animateCounters()
         is called once, then the observer disconnects so it never
         runs again on the same page load.
    */

    const animateCounters = () => {
      document.querySelectorAll('.impact-number').forEach(counter => {

        const target   = +counter.getAttribute('data-target'); // e.g. 1000
        const duration = 1500;                                 // 1.5 seconds
        const startTime = performance.now();                   // Start timestamp

        const update = (now) => {
          // How far through the 1.5s duration are we? (0.0 to 1.0)
          const progress = Math.min((now - startTime) / duration, 1);

          // Calculate the current number and display it
          counter.textContent = Math.floor(progress * target).toLocaleString();
          // .toLocaleString() adds commas: 1000 → "1,000"

          if (progress < 1) {
            requestAnimationFrame(update); // Keep animating
          } else {
            counter.textContent = target.toLocaleString(); // Ensure exact final value
          }
        };

        requestAnimationFrame(update); // Start the animation loop
      });
    };

    // Watch the #impact section — start counters when it comes into view
    const impactObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();             // Start the counting animation
        impactObserver.disconnect();   // Never run this again
      }
    }, { threshold: 0.3 }); // Trigger when 30% of the section is visible

    impactObserver.observe(document.querySelector('#impact'));


    /* ──────────────────────────────────────────────────────────
       3. GET INVOLVED POPUP
       ──────────────────────────────────────────────────────────
       openInvolved()   → called when "GET INVOLVED" nav button
                          is clicked. Shows the popup and locks
                          the page from scrolling behind it.

       closeInvolved()  → called when the × button is clicked,
                          OR when the user clicks the dark overlay
                          behind the popup. Hides the popup and
                          restores page scrolling.
    */

    // Show the popup
    function openInvolved() {
      document.getElementById('involvedPopup').style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Hide the popup
    function closeInvolved() {
      document.getElementById('involvedPopup').style.display = 'none';
      document.body.style.overflow = ''; // Restore background scrolling
    }

    // Also close if the user clicks the dark area outside the popup box
    document.getElementById('involvedPopup').addEventListener('click', function(e) {
      if (e.target === this) closeInvolved(); // Only if clicking the overlay itself
    });


    /* ──────────────────────────────────────────────────────────
       4. PAGE LOADER
       ──────────────────────────────────────────────────────────
       When the page finishes loading (all images downloaded etc.),
       this waits 1.2 seconds then fades the loader out over 0.5
       seconds. After the fade, the loader element is fully hidden.

       To change the loader duration → adjust the 1200 value below.
       (1200 = 1.2 seconds. 2000 = 2 seconds.)
    */

    window.addEventListener('load', function () {
      const loader = document.getElementById('loader');

      setTimeout(() => {
        loader.style.opacity = '0'; // Start fading out (CSS transition handles the smoothness)

        setTimeout(() => {
          loader.style.display = 'none'; // Fully remove after the fade completes
        }, 500); // 500ms = the duration of the CSS fade transition

      }, 1200); // Wait 1.2 seconds before starting the fade
    });

  </script>


</body>
</html>
