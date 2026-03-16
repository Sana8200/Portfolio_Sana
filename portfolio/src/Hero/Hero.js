import { useState, useEffect } from 'react';
import './Hero.css';

const SOCIAL_LINKS = [
  { label: 'GitHub', url: 'https://github.com/Sana8200' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/sana-monhaseri' },
  { label: 'Email', url: 'mailto:s.monhaserii@gmail.com' },
];

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Background effects */}
      <div className="hero__grid" />
      <div className="hero__glow" />

      <div className={`hero__content ${visible ? 'hero__content--visible' : ''}`}>
        <span className="hero__badge">Open to internships</span>

        <h1 className="hero__title">
          Hi, I'm <span className="hero__name">Sana</span>
          <span className="hero__dot">.</span>
        </h1>

        <p className="hero__description">
          ICT Engineering student at{' '}
          <span className="hero__highlight">KTH Royal Institute of Technology</span>.
          I build scalable, data-driven software — from embedded systems to
          full-stack web apps.
        </p>

        <div className="hero__buttons">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--outline">
            Get in Touch
          </a>
        </div>

        <div className="hero__socials">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;