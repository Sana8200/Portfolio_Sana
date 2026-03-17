import './Hero.css';

const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/Sana8200' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sana-monhaseri-90821a298' },
  { label: 'Email', url: 'mailto:s.monhaserii@gmail.com' },
];

const HIGHLIGHTS = [
  { label: 'Focus', value: 'Hardware & Software', color: 'rust' },
  { label: 'Study', value: 'KTH Stockholm', color: 'sage' },
  { label: 'Role', value: 'Lab Assistant', color: 'mauve' },
  { label: 'Open to', value: 'Internships', color: 'teal' },
];

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__blobs">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
        <div className="hero__blob hero__blob--4" />
      </div>
      <div className="dot-grid" />
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__overline">
              <span className="hero__status-dot" />
              <span className="hero__status-text">available for opportunities</span>
            </div>

            <h1 className="hero__title">
              Sana<br />Monhaseri
            </h1>

            <p className="hero__subtitle">
              Software that bridges <em>hardware</em> and <em>web</em>
            </p>

            <p className="hero__desc">
              ICT Engineering at KTH Royal Institute of Technology, Stockholm.
              I build thoughtful systems — from embedded hardware to full-stack applications.
            </p>

            <div className="hero__actions">
              <a href="#projects" className="btn btn--gradient">View my work</a>
              <a href="#contact" className="btn btn--outline">Get in touch</a>
            </div>

            <div className="hero__socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="hero__social">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero__side">
            <div className="hero__card-stack">
              {HIGHLIGHTS.map((h, i) => (
                <div key={h.label} className={`hero__card hero__card--${h.color}`} style={{ animationDelay: `${0.3 + i * 0.12}s` }}>
                  <span className="hero__card-label">{h.label}</span>
                  <span className="hero__card-value">{h.value}</span>
                </div>
              ))}
            </div>
            <div className="hero__decoration">
              <svg viewBox="0 0 200 200" className="hero__circles">
                <circle cx="100" cy="100" r="90" fill="none" stroke="var(--rust)" strokeWidth="0.5" opacity="0.2" />
                <circle cx="100" cy="100" r="65" fill="none" stroke="var(--teal)" strokeWidth="0.5" opacity="0.15" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="var(--mauve)" strokeWidth="0.5" opacity="0.15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
