import './Hero.css';

const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/Sana8200' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/sana-monhaseri' },
  { label: 'Email', url: 'mailto:s.monhaserii@gmail.com' },
];

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              Open to opportunities
            </span>
            <h1 className="hero__title">
              Hi, I'm <em>Sana</em>.<br />
              I build software.
            </h1>
            <p className="hero__desc">
              ICT Engineering student at <strong>KTH Royal Institute of Technology</strong>.
              I craft thoughtful software — from embedded systems to full-stack web apps.
            </p>
            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">View my work →</a>
              <a href="#contact" className="btn btn--outline">Say hello</a>
            </div>
            <div className="hero__socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="hero__social">
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__bento">
              <div className="bento bento--wide bento--dark">
                <span className="bento__emoji">👩‍💻</span>
                <p className="bento__label">Currently</p>
                <p className="bento__value">Building at the intersection of hardware &amp; software</p>
              </div>
              <div className="bento bento--rust">
                <span className="bento__emoji">🎓</span>
                <p className="bento__label">Education</p>
                <p className="bento__value">KTH</p>
                <p className="bento__sub">ICT Engineering</p>
              </div>
              <div className="bento bento--sage">
                <span className="bento__emoji">📍</span>
                <p className="bento__label">Based in</p>
                <p className="bento__value">Stockholm</p>
                <p className="bento__sub">Sweden</p>
              </div>
              <div className="bento">
                <span className="bento__emoji">🏆</span>
                <p className="bento__label">Program</p>
                <p className="bento__value">King Scholarship</p>
                <p className="bento__sub">Swedish Game Industry</p>
              </div>
              <div className="bento">
                <span className="bento__emoji">✨</span>
                <p className="bento__label">Status</p>
                <p className="bento__value">Available</p>
                <p className="bento__sub">For internships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;