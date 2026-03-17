import { Reveal } from '../hooks/useReveal';
import './About.css';

const LANGUAGES = [
  { name: 'Persian', native: true },
  { name: 'Azerbaijani', native: true },
  { name: 'English', native: false },
  { name: 'Turkish', native: false },
  { name: 'Swedish', native: false },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal>
          <p className="sec-label sec-label--rust">About</p>
          <h2 className="sec-title">A bit about me</h2>
          <div className="sec-line sec-line--rust" />
        </Reveal>

        <div className="about__grid">
          <Reveal delay={1}>
            <div className="about__prose">
              <p>
                I'm a <strong>third-year ICT Engineering student</strong> at{' '}
                <span className="accent">KTH Royal Institute of Technology</span> in Stockholm.
                Before KTH I studied 2 years of computer science in Iran. I bring both a solid
                theoretical background and hands-on engineering skills to every project.
              </p>
              <p>
                At KTH I've worked as a <strong>Programming Lab Assistant</strong> and a{' '}
                <strong>Digital Design Lab Assistant</strong>, helping students debug their code
                and board circuits. I also serve as an{' '}
                <strong>International Student Ambassador</strong>, connecting prospective
                students with life at KTH.
              </p>
              <p>
                I'm passionate about building things that work at the intersection of hardware
                and software — whether that's a finger-controlled oscilloscope built from scratch,
                a full-stack gardening app like LeafKeeper, or multi-threaded systems in Java.
              </p>
            </div>
          </Reveal>

          <div className="about__cards">
            <Reveal delay={1}>
              <div className="about__card about__card--rust">
                <span className="about__card-icon">🎓</span>
                <p className="about__card-label">Education</p>
                <p className="about__card-value">
                  B.Sc. ICT Engineering — KTH<br />
                  <span>2023 – present · Stockholm, Sweden</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="about__card about__card--amber">
                <span className="about__card-icon">🏆</span>
                <p className="about__card-label">Recognition</p>
                <p className="about__card-value">
                  King &amp; Swedish Game Industry Program<br />
                  <span>Completed · Stockholm, Sweden</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="about__card about__card--sage">
                <span className="about__card-icon">✨</span>
                <p className="about__card-label">Status</p>
                <p className="about__card-value">Available for full-time internship</p>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="about__card about__card--mauve">
                <span className="about__card-icon">🌍</span>
                <p className="about__card-label">Languages</p>
                <div className="about__langs">
                  {LANGUAGES.map((l) => (
                    <span key={l.name} className={`lang-tag ${l.native ? 'lang-tag--native' : ''}`}>
                      {l.name}
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