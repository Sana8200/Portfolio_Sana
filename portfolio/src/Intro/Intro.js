import './Intro.css';

const SOCIAL_LINKS = [
  { label: 'GitHub', url: 'https://github.com/Sana8200' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/sana-monhaseri' },
  { label: 'Email', url: 'mailto:s.monhaserii@gmail.com' },
];

function Intro() {
  return (
    <section id="intro" className="intro">
      {/* Ambient background */}
      <div className="intro__orb intro__orb--violet" />
      <div className="intro__orb intro__orb--cyan" />
      <div className="intro__dots" />

      <div className="intro__content">
        <span className="intro__badge">
          <span className="intro__badge-dot" />
          Open to internships
        </span>

        <h1 className="intro__title">
          Hi, I'm <span className="intro__name">Sana</span>.
        </h1>

        <p className="intro__description">
          ICT Engineering student at{' '}
          <span className="intro__highlight">KTH Royal Institute of Technology</span>.
          I build scalable, data-driven software — from embedded systems to
          full-stack web apps.
        </p>

        <div className="intro__buttons">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--glass">
            Get in Touch
          </a>
        </div>

        <div className="intro__socials">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="intro__social-link"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Intro;