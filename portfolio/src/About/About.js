import { Reveal } from '../hooks/useReveal';
import './About.css';

const LANGUAGES = [
  { name: 'Persian', native: true },
  { name: 'Azerbaijani', native: false },
  { name: 'English', native: true },
  { name: 'Turkish', native: false },
  { name: 'Swedish', native: false, level: 'Beginner' },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="color-wash">
        <div className="color-wash__blob color-wash__blob--rust" />
        <div className="color-wash__blob color-wash__blob--amber" />
      </div>
      <div className="container">
        <Reveal>
          <h2 className="sec-title">A bit about me</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={1}>
            <div className="about__prose">
              <p>
                I'm a <strong>third-year ICT Engineering student</strong> at{' '}
                <span className="about__accent">KTH Royal Institute of Technology</span> in Stockholm,
                drawn to work that sits between hardware and software — from embedded firmware
                in C and Assembly to full-stack applications in React.
              </p>
              <p>
                Alongside my studies, I'm a <strong>Programming</strong> and{' '}
                <strong>Digital Design Lab Assistant</strong> at KTH, and an{' '}
                <strong>International Student Ambassador</strong> for the EECS school. What I
                enjoy most is understanding how things work at every level — and building
                software that actually solves problems.
              </p>
            </div>
          </Reveal>

          <div className="about__sidebar">
            <Reveal delay={2}>
              <div className="about__card about__card--rust">
                <p className="about__card-label">Education</p>
                <p className="about__card-value">B.Sc. ICT Engineering — KTH</p>
                <p className="about__card-meta">2023 – present / Stockholm</p>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="about__card about__card--amber">
                <p className="about__card-label">Recognition</p>
                <p className="about__card-value">King & Swedish Game Industry Scholarship</p>
                <p className="about__card-meta">2025 – 2026 / Stockholm</p>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="about__card about__card--sage">
                <p className="about__card-label">Status</p>
                <p className="about__card-value">Available for full-time internship</p>
              </div>
            </Reveal>
            <Reveal delay={5}>
              <div className="about__card about__card--mauve">
                <p className="about__card-label">Languages</p>
                <div className="about__langs">
                  {LANGUAGES.map((l) => (
                    <span key={l.name} className={`about__lang ${l.native ? 'about__lang--native' : ''} ${l.level ? 'about__lang--beginner' : ''}`}>
                      {l.name}
                      {l.level && <span className="about__lang-level">{l.level}</span>}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
