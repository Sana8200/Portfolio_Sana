import { Reveal } from '../hooks/useReveal';
import './About.css';

const LANGUAGES = [
  { name: 'Persian', native: true },
  { name: 'Azerbaijani', native: false },
  { name: 'English', native: true },
  { name: 'Turkish', native: false },
  { name: 'Swedish', native: false },
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
          <p className="sec-marker sec-marker--rust">// 01 about</p>
          <h2 className="sec-title">A bit about me</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={1}>
            <div className="about__prose">
              <p>
                I'm a <strong>third-year ICT Engineering student</strong> at{' '}
                <span className="about__accent">KTH Royal Institute of Technology</span> in Stockholm.
                My coursework spans everything from low-level systems programming in C and Assembly
                to full-stack web development with React and REST APIs — and I genuinely enjoy
                working across that entire spectrum.
              </p>
              <p>
                At KTH I work as a <strong>Programming Lab Assistant</strong>, where I help
                students debug code and build their understanding of core CS concepts during weekly
                lab sessions. I'm also a <strong>Digital Design Lab Assistant</strong>,
                guiding students through circuit design and hardware interfaces. I also serve as an{' '}
                <strong>International Student Ambassador</strong> for the EECS school, representing
                KTH at events and advising prospective international students.
              </p>
              <p>
                I've built a real-time oscilloscope, designed databases for music schools,
                written multi-threaded servers in Java, and created this portfolio from scratch.
                What ties it all together is that I like understanding how things work at every
                level — and building software that actually solves problems.
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
                <p className="about__card-meta">2025 - 2026/ Stockholm</p>
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
                    <span key={l.name} className={`about__lang ${l.native ? 'about__lang--native' : ''}`}>
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
