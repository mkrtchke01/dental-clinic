'use client';

import { useState, useRef, useEffect } from 'react';
import {
  IconTooth, IconPhone, IconArrow, IconCheck, IconShield,
  IconImplant, IconWhitening, IconBraces, IconCavity, IconHeart,
  IconPin, IconClock, IconChevrons,
} from '@/components/icons';

const SERVICES = [
  { Icon: IconImplant, title: 'Dental Implants', text: 'Permanent, natural-looking replacements for missing teeth using titanium implants and 3D-guided placement.' },
  { Icon: IconWhitening, title: 'Teeth Whitening', text: 'Brighten your smile by up to 8 shades in a single visit with safe, enamel-friendly professional whitening.' },
  { Icon: IconBraces, title: 'Braces & Aligners', text: 'Discreet clear aligners and modern braces that straighten your teeth comfortably and on your schedule.' },
  { Icon: IconCavity, title: 'Cavity Treatment', text: 'Tooth-colored fillings and minimally invasive restorations that stop decay and protect your natural teeth.' },
  { Icon: IconHeart, title: 'Preventive Care', text: 'Regular cleanings, sealants, and check-ups that keep problems away and your smile healthy for life.' },
];

const DOCTORS = [
  { name: 'Dr. Emily Carter', role: 'Lead Dentist & Implantology', exp: '15 years experience', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80' },
  { name: 'Dr. James Mitchell', role: 'Orthodontist & Aligners', exp: '12 years experience', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80' },
  { name: 'Dr. Sofia Reyes', role: 'Cosmetic Dentistry', exp: '10 years experience', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80' },
  { name: 'Dr. Daniel Okafor', role: 'Pediatric & Preventive', exp: '9 years experience', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80' },
];

const REVIEWS = [
  { name: 'Hannah L.', tag: 'Whitening & cleaning', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80', text: 'I used to dread the dentist. The team at NovaDent completely changed that — calm, kind, and genuinely painless. I actually look forward to my visits now.' },
  { name: 'Marcus T.', tag: 'Dental implants', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80', text: 'My implants look and feel completely natural. Dr. Carter explained everything clearly and the whole process was smoother than I imagined.' },
  { name: 'Priya S.', tag: 'Family preventive care', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80', text: 'Brought my whole family here. The kids love it, the clinic is spotless, and pricing was clear from day one. Highly recommend.' },
];

const FAQS = [
  { q: 'Is treatment really painless?', a: 'We use gentle techniques, modern anesthetics, and sedation options for anxious patients. Most patients are surprised by how comfortable their visit is — and your comfort is our priority at every step.' },
  { q: 'Do you accept insurance?', a: 'Yes — we work with most major insurance providers and handle the paperwork for you. For treatments not fully covered, we offer flexible monthly financing with no hidden fees.' },
  { q: 'How soon can I get an appointment?', a: 'New patients are usually seen within 2–3 days, and we reserve same-day slots for dental emergencies. Book online or call us and we’ll find a time that works.' },
  { q: 'What should I expect on my first visit?', a: 'A relaxed conversation about your goals, a gentle exam with digital imaging, and a clear, honest treatment plan with transparent pricing — no pressure, no surprises.' },
  { q: 'Are children welcome?', a: 'Absolutely. We’re a family-friendly clinic with pediatric specialists who make visits fun and stress-free for kids of all ages.' },
];

const NAV = [
  ['#services', 'Services'], ['#about', 'About'], ['#doctors', 'Doctors'],
  ['#results', 'Results'], ['#pricing', 'Pricing'], ['#faq', 'FAQ'],
];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          setTimeout(() => el.classList.add('in'), (i % 4) * 70);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <SiteHeader navOpen={navOpen} setNavOpen={setNavOpen} />

      <main>
        <Hero />

        {/* Services */}
        <section className="section" id="services">
          <div className="container">
            <header className="section-head">
              <span className="kicker">Our Services</span>
              <h2>Comprehensive care, gentle by design</h2>
              <p>From routine check-ups to full smile makeovers, every treatment is delivered with precision technology and a calm, personal touch.</p>
            </header>

            <div className="services-grid">
              {SERVICES.map(({ Icon, title, text }) => (
                <article className="service-card reveal" key={title}>
                  <span className="service-icon"><Icon /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#contact" className="service-link">Learn more →</a>
                </article>
              ))}
              <article className="service-card service-card--cta reveal">
                <h3>Not sure what you need?</h3>
                <p>Book a free consultation and we&rsquo;ll build a personalized treatment plan together.</p>
                <a href="#contact" className="btn btn-primary btn-sm">Free Consultation</a>
              </article>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section section--soft" id="about">
          <div className="container about-grid">
            <div className="about-media reveal">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" alt="Dental team in a modern clinic" loading="lazy" />
              <div className="about-stat">
                <strong>18+</strong>
                <span>years of trusted care</span>
              </div>
            </div>
            <div className="about-copy reveal">
              <span className="kicker">About NovaDent</span>
              <h2>A clinic built around how you feel</h2>
              <p>We know dental visits can feel stressful. That&rsquo;s why we designed NovaDent to be different — calm spaces, honest advice, and gentle, modern treatments with no surprises. Our dentists explain every step, so you always feel in control.</p>
              <ul className="check-list">
                {['Transparent pricing, no hidden fees', 'Digital scans & low-radiation imaging', 'Sedation options for anxious patients', 'Family-friendly, all ages welcome'].map((t) => (
                  <li key={t}><IconCheck size={20} /> {t}</li>
                ))}
              </ul>
              <div className="about-metrics">
                <div><strong>12k+</strong><span>Patients treated</span></div>
                <div><strong>98%</strong><span>Would recommend</span></div>
                <div><strong>30+</strong><span>Specialists on team</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors */}
        <section className="section" id="doctors">
          <div className="container">
            <header className="section-head">
              <span className="kicker">Meet the Team</span>
              <h2>Experienced dentists you can trust</h2>
              <p>Board-certified specialists who combine clinical excellence with a warm, patient-first approach.</p>
            </header>

            <div className="doctors-grid">
              {DOCTORS.map((d) => (
                <article className="doctor-card reveal" key={d.name}>
                  <div className="doctor-photo">
                    <img src={d.img} alt={d.name} loading="lazy" />
                  </div>
                  <h3>{d.name}</h3>
                  <p className="doctor-role">{d.role}</p>
                  <span className="doctor-exp">{d.exp}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="section section--soft" id="results">
          <div className="container ba-grid">
            <div className="ba-copy reveal">
              <span className="kicker">Smile Transformations</span>
              <h2>Real results, real confidence</h2>
              <p>Drag the slider to see the difference our cosmetic treatments make. Every smile is unique — yours could be next.</p>
              <ul className="check-list">
                <li><IconCheck size={20} /> Natural-looking veneers &amp; bonding</li>
                <li><IconCheck size={20} /> Digital smile preview before you start</li>
              </ul>
              <a href="#contact" className="btn btn-primary">Start Your Transformation</a>
            </div>
            <BeforeAfter />
          </div>
        </section>

        {/* Reviews */}
        <section className="section" id="reviews">
          <div className="container">
            <header className="section-head">
              <span className="kicker">Patient Reviews</span>
              <h2>Loved by thousands of smiles</h2>
              <p>We&rsquo;re proud of the trust our patients place in us — here&rsquo;s what a few of them have to say.</p>
            </header>

            <div className="reviews-grid">
              {REVIEWS.map((r) => (
                <figure className="review-card reveal" key={r.name}>
                  <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote>&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption>
                    <img src={r.img} alt="" />
                    <div><strong>{r.name}</strong><span>{r.tag}</span></div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section section--soft" id="pricing">
          <div className="container">
            <header className="section-head">
              <span className="kicker">Treatment Packages</span>
              <h2>Transparent, honest pricing</h2>
              <p>Clear packages with no hidden fees. Flexible monthly financing available on every plan.</p>
            </header>

            <div className="pricing-grid">
              <article className="price-card reveal">
                <h3>Essential Care</h3>
                <p className="price-desc">For routine check-ups &amp; healthy smiles</p>
                <div className="price"><span className="price-amt">$89</span><span className="price-per">/ visit</span></div>
                <ul className="price-features">
                  <li>Comprehensive exam</li>
                  <li>Professional cleaning</li>
                  <li>Digital X-rays</li>
                  <li>Oral health plan</li>
                </ul>
                <a href="#contact" className="btn btn-ghost btn-block">Choose Essential</a>
              </article>

              <article className="price-card price-card--featured reveal">
                <span className="price-badge">Most popular</span>
                <h3>Smile Bright</h3>
                <p className="price-desc">Whitening &amp; cosmetic refresh</p>
                <div className="price"><span className="price-amt">$299</span><span className="price-per">/ package</span></div>
                <ul className="price-features">
                  <li>Everything in Essential</li>
                  <li>Professional whitening</li>
                  <li>Polishing &amp; stain removal</li>
                  <li>Digital smile preview</li>
                  <li>Free follow-up visit</li>
                </ul>
                <a href="#contact" className="btn btn-primary btn-block">Choose Smile Bright</a>
              </article>

              <article className="price-card reveal">
                <h3>Full Restoration</h3>
                <p className="price-desc">Implants, aligners &amp; makeovers</p>
                <div className="price"><span className="price-amt">From $1,200</span></div>
                <ul className="price-features">
                  <li>Personalized treatment plan</li>
                  <li>Implants or clear aligners</li>
                  <li>3D-guided procedures</li>
                  <li>Sedation options</li>
                  <li>Monthly financing</li>
                </ul>
                <a href="#contact" className="btn btn-ghost btn-block">Get a Quote</a>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container faq-grid">
            <header className="section-head section-head--left">
              <span className="kicker">FAQ</span>
              <h2>Questions, answered</h2>
              <p>Can&rsquo;t find what you&rsquo;re looking for? Our front desk is happy to help — just give us a call.</p>
              <a href="tel:+18005550199" className="btn btn-ghost">Call (800) 555-0199</a>
            </header>

            <div className="faq-list">
              {FAQS.map((item, i) => (
                <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={item.q}>
                  <button
                    className="faq-q"
                    aria-expanded={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {item.q}
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                  <div className="faq-a">
                    <div className="faq-a-inner"><p>{item.a}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section section--contact" id="contact">
          <div className="container contact-grid">
            <div className="contact-info">
              <span className="kicker">Book Your Visit</span>
              <h2>Ready for a confident smile?</h2>
              <p>Schedule your appointment online or reach out directly. We&rsquo;ll confirm within one business hour.</p>

              <ul className="contact-list">
                <li>
                  <span className="contact-ic"><IconPhone size={18} /></span>
                  <div><strong>Phone</strong><a href="tel:+18005550199">(800) 555-0199</a></div>
                </li>
                <li>
                  <span className="contact-ic"><IconPin size={18} /></span>
                  <div><strong>Address</strong><span>248 Maple Avenue, Suite 200<br />Riverside, CA 92501</span></div>
                </li>
                <li>
                  <span className="contact-ic"><IconClock size={18} /></span>
                  <div><strong>Working Hours</strong><span>Mon–Fri: 8:00 — 19:00<br />Sat: 9:00 — 15:00 · Sun: Closed</span></div>
                </li>
              </ul>
            </div>

            <AppointmentForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

/* ===== Header ===== */
function SiteHeader({ navOpen, setNavOpen }) {
  return (
    <header className="site-header" id="top">
      <div className="container nav">
        <a href="#top" className="brand" aria-label="NovaDent Clinic home">
          <span className="brand-mark" aria-hidden="true"><IconTooth size={22} /></span>
          <span className="brand-name">NovaDent<span className="brand-accent">Clinic</span></span>
        </a>

        <nav className={`nav-links${navOpen ? ' open' : ''}`} aria-label="Primary">
          {NAV.map(([href, label]) => (
            <a href={href} key={href} onClick={() => setNavOpen(false)}>{label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="tel:+18005550199" className="nav-phone">
            <IconPhone size={16} />
            <span>(800) 555-0199</span>
          </a>
          <a href="#contact" className="btn btn-primary btn-sm">Book an Appointment</a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

/* ===== Hero ===== */
function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><span className="dot" /> Trusted by 12,000+ happy patients</span>
          <h1>Modern Dental Care for a <span className="text-gradient">Confident Smile</span></h1>
          <p className="lead">Painless treatment, experienced dentists, and advanced technology — all in a calm, welcoming clinic designed around your comfort.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Book an Appointment</a>
            <a href="#services" className="btn btn-ghost">View Services <IconArrow size={18} /></a>
          </div>
          <ul className="hero-trust">
            <li><IconCheck size={18} /> Pain-free guarantee</li>
            <li><IconCheck size={18} /> Same-day emergencies</li>
            <li><IconCheck size={18} /> Flexible financing</li>
          </ul>
        </div>

        <div className="hero-media">
          <div className="hero-photo">
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80" alt="Smiling patient in a bright modern dental clinic" />
          </div>
          <div className="hero-badge hero-badge--rating">
            <div className="stars" aria-hidden="true">★★★★★</div>
            <div><strong>4.9 / 5</strong><span>2,400+ reviews</span></div>
          </div>
          <div className="hero-badge hero-badge--safe">
            <span className="hb-icon" aria-hidden="true"><IconShield size={20} /></span>
            <div><strong>Certified</strong><span>Sterile &amp; safe</span></div>
          </div>
        </div>
      </div>

      <div className="container logo-strip">
        <span>Recognized &amp; accredited by</span>
        <div className="logo-strip-items">
          <span>ADA</span><span>ISO 9001</span><span>FDI World</span><span>SmileSafe™</span><span>Invisalign®</span>
        </div>
      </div>
    </section>
  );
}

/* ===== Before / After slider ===== */
function BeforeAfter() {
  const [pct, setPct] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);

  const setFromClientX = (clientX) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let p = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.max(0, Math.min(100, p)));
  };

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(x);
    };
    const stop = () => { dragging.current = false; };
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchend', stop);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchend', stop);
    };
  }, []);

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') { setPct((p) => Math.max(0, p - 4)); e.preventDefault(); }
    if (e.key === 'ArrowRight') { setPct((p) => Math.min(100, p + 4)); e.preventDefault(); }
  };

  return (
    <div
      className="ba-slider reveal"
      ref={ref}
      onMouseDown={(e) => { dragging.current = true; setFromClientX(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; setFromClientX(e.touches[0].clientX); }}
    >
      <img className="ba-img ba-after" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80" alt="After treatment — bright confident smile" loading="lazy" />
      <div className="ba-before-wrap" style={{ width: `${pct}%` }}>
        <img className="ba-img" src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=80" alt="Before treatment" loading="lazy" />
      </div>
      <div
        className="ba-handle"
        style={{ left: `${pct}%` }}
        role="slider"
        aria-label="Before and after comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        tabIndex={0}
        onKeyDown={onKey}
      >
        <IconChevrons size={20} />
      </div>
      <span className="ba-tag ba-tag--before">Before</span>
      <span className="ba-tag ba-tag--after">After</span>
    </div>
  );
}

/* ===== Appointment form ===== */
function AppointmentForm() {
  const [values, setValues] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [invalid, setInvalid] = useState({});
  const [success, setSuccess] = useState(false);

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setInvalid((iv) => ({ ...iv, [key]: false }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = true;
    if (!values.phone.trim()) next.phone = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = true;
    if (!values.service) next.service = true;
    setInvalid(next);
    if (Object.keys(next).length) return;

    setSuccess(true);
    setValues({ name: '', phone: '', email: '', service: '', message: '' });
    setTimeout(() => setSuccess(false), 6000);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <h3>Book an Appointment</h3>
      <div className="form-row">
        <div className={`field${invalid.name ? ' invalid' : ''}`}>
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" placeholder="Jane Doe" value={values.name} onChange={update('name')} />
        </div>
        <div className={`field${invalid.phone ? ' invalid' : ''}`}>
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="(800) 555-0199" value={values.phone} onChange={update('phone')} />
        </div>
      </div>
      <div className="form-row">
        <div className={`field${invalid.email ? ' invalid' : ''}`}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="jane@email.com" value={values.email} onChange={update('email')} />
        </div>
        <div className={`field${invalid.service ? ' invalid' : ''}`}>
          <label htmlFor="service">Service</label>
          <select id="service" value={values.service} onChange={update('service')}>
            <option value="" disabled>Choose a service</option>
            <option>Dental Implants</option>
            <option>Teeth Whitening</option>
            <option>Braces &amp; Aligners</option>
            <option>Cavity Treatment</option>
            <option>Preventive Care</option>
            <option>Not sure / Consultation</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message <span className="optional">(optional)</span></label>
        <textarea id="message" rows={3} placeholder="Tell us a little about what you need…" value={values.message} onChange={update('message')} />
      </div>
      <button type="submit" className="btn btn-primary btn-block">Book an Appointment</button>
      <p className="form-note">By booking you agree to be contacted about your appointment. We never share your data.</p>
      {success && <p className="form-success">✓ Thank you! We&rsquo;ve received your request and will confirm shortly.</p>}
    </form>
  );
}

/* ===== Footer ===== */
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#top" className="brand">
            <span className="brand-mark" aria-hidden="true"><IconTooth size={22} /></span>
            <span className="brand-name">NovaDent<span className="brand-accent">Clinic</span></span>
          </a>
          <p>Modern dental care for a confident smile. Painless treatment, experienced dentists, and advanced technology.</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#services">Dental Implants</a>
          <a href="#services">Teeth Whitening</a>
          <a href="#services">Braces &amp; Aligners</a>
          <a href="#services">Preventive Care</a>
        </div>
        <div className="footer-col">
          <h4>Clinic</h4>
          <a href="#about">About us</a>
          <a href="#doctors">Our doctors</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+18005550199">(800) 555-0199</a>
          <a href="mailto:hello@novadent.clinic">hello@novadent.clinic</a>
          <span>248 Maple Avenue, Suite 200<br />Riverside, CA 92501</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 NovaDent Clinic. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
