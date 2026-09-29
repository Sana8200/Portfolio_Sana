import { useRef } from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
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

function Hero() {
  const heroRef = useRef(null);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="container hero__content">
        <div className="hero__badge hero-in hero-in--0">
          <span className="hero__badge-dot" />
          <span className="hero__badge-text">open to thesis & internships · 2027</span>
        </div>

        <h1 className="hero__title hero-in hero-in--1">
          <span className="hero__name">Sana Monhaseri</span>
          <span className="hero__role">Software & Embedded Developer</span>
        </h1>

        <div className="hero__row hero-in hero-in--2">
          <p className="hero__desc">
            Final-year ICT Engineering student at KTH in Stockholm. I build across
            the stack — from embedded firmware in C and Assembly to full-stack web
            apps in React.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--gradient">View my work</a>
            <a href="#contact" className="btn btn--outline btn--outline-dark">Get in touch</a>
            <SocialLinks className="hero__socials" linkClassName="hero__social-icon" />
          </div>
        </div>
      </div>

      <div className="hero__scope">
        <Scope hostRef={heroRef} />
        <span className="scope__tag scope__tag--ch1" aria-hidden="true">CH1</span>
        <span className="scope__tag scope__tag--ch2" aria-hidden="true">CH2</span>
        <span className="scope__caption">ch2 decodes to “SANA” in 8-bit ASCII</span>
      </div>

      <ul className="container hero__stats hero-in hero-in--4">
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
      </ul>
    </section>
  );
}

export default Hero;
