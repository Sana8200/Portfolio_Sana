import { useRef } from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants/social';
import Scope from './Scope';
import './Hero.css';

const HIGHLIGHTS = [
  { label: 'Studying', value: 'B.Sc. ICT Engineering', meta: 'KTH · final year' },
  { label: 'Team', value: 'KTH Formula Student', meta: 'Powertrain & Electronics' },
  {
    label: 'Scholarship',
    value: 'King & SGI Scholar',
    meta: '1 of 11 · 2025–26',
    url: 'https://www.dataspelsbranschen.se/nyheter/den-andra-upplagan-av-king-swedish-games-industry-scholarship-har-introducerat-11-nykomlingar-till-branschen/',
  },
  { label: 'Teaching', value: 'Lab Assistant', meta: 'Programming & Digital Design' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const socialUrl = (label) => SOCIALS.find((s) => s.label === label).url;

function Hero() {
  const heroRef = useRef(null);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="container hero__content">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="hero__badge">
          <span className="hero__badge-dot" />
          <span className="hero__badge-text">open to thesis & internships · 2027</span>
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="hero__title">
          <span className="hero__name">Sana Monhaseri</span>
          <span className="hero__role">Software & Embedded Developer</span>
        </motion.h1>

        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="hero__row">
          <p className="hero__desc">
            Final-year ICT Engineering student at KTH in Stockholm. I build across
            the stack — from embedded firmware in C and Assembly to full-stack web
            apps in React.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--gradient">View my work</a>
            <a href="#contact" className="btn btn--outline btn--outline-dark">Get in touch</a>
            <div className="hero__socials">
              <a href={socialUrl('GitHub')} target="_blank" rel="noopener noreferrer" className="hero__social-icon" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
              </a>
              <a href={socialUrl('LinkedIn')} target="_blank" rel="noopener noreferrer" className="hero__social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href={socialUrl('Email')} className="hero__social-icon" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scope"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.7 }}
      >
        <Scope hostRef={heroRef} />
        <span className="scope__tag scope__tag--ch1" aria-hidden="true">CH1</span>
        <span className="scope__tag scope__tag--ch2" aria-hidden="true">CH2</span>
        <span className="scope__caption">ch2 decodes to “SANA” in 8-bit ASCII</span>
      </motion.div>

      <motion.ul custom={4} variants={fadeUp} initial="hidden" animate="visible" className="container hero__stats">
        {HIGHLIGHTS.map((s) => {
          const body = (
            <>
              <span className="hero__stat-label">{s.label}</span>
              <span className="hero__stat-value">
                {s.value}
                {s.url && <span className="hero__stat-arrow" aria-hidden="true"> ↗</span>}
              </span>
              <span className="hero__stat-meta">{s.meta}</span>
            </>
          );
          return (
            <li key={s.label} className="hero__stat">
              {s.url ? (
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="hero__stat-link">{body}</a>
              ) : body}
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
}

export default Hero;
