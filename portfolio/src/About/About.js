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
      <div className="container about__grid">
        <Reveal>
          <h2 className="sec-title about__title">A bit<br />about me</h2>
        </Reveal>

        <Reveal delay={1}>
          <div className="about__body">
            <p className="about__lead">
              I'm a final-year ICT Engineering student at KTH in Stockholm, drawn to
              work that sits between <em>hardware</em> and <em>software</em>.
            </p>
            <p className="about__text">
              From embedded firmware in C and Assembly to full-stack applications in
              React — what I enjoy most is understanding how things work at every
              level, and building software that actually solves problems.
            </p>

            <dl className="about__facts">
              <div className="about__fact">
                <dt>Recognition</dt>
                <dd>
                  King & Swedish Games Industry Scholarship — one of 11 scholars, 2025–26.{' '}
                  <a
                    className="about__link"
                    href="https://www.dataspelsbranschen.se/nyheter/den-andra-upplagan-av-king-swedish-games-industry-scholarship-har-introducerat-11-nykomlingar-till-branschen/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Announcement ↗
                  </a>
                </dd>
              </div>
              <div className="about__fact">
                <dt>Languages</dt>
                <dd className="about__langs">
                  {LANGUAGES.map((l) => (
                    <span key={l.name} className={`about__lang ${l.native ? 'about__lang--native' : ''} ${l.level ? 'about__lang--beginner' : ''}`}>
                      {l.name}
                      {l.level && <span className="about__lang-level">{l.level}</span>}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
