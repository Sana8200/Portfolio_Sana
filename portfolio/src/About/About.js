import './About.css';

const LANGUAGES = [
  { name: 'Persian', level: 'native' },
  { name: 'Azerbaijani', level: 'native' },
  { name: 'English', level: 'fluent-advanced' },
  { name: 'Turkish', level: 'advanced' },
  { name: 'Swedish', level: 'beginner' },
];

function About() {
  return (
    <section id="about" className="section about">
      <p className="section-label">// About</p>
      <h2 className="section-title">A bit about me</h2>

      <div className="about__grid">
        {/* Left — narrative */}
        <div className="about__text">
          <p>
            I'm a <strong>third-year ICT Engineering student</strong> at{' '}
            <span className="about__accent">KTH Royal Institute of Technology</span>{' '}
            in Stockholm. Before KTH I studied 2 years computer science in Iran. I
            have both a solid theoretical background and hands-on engineering
            skills to most projects.
          </p>
          <p>
            At KTH I've worked as a{' '}
            <strong>Programming Lab Assistant</strong> and a{' '}
            <strong>Digital Design Lab Assistant</strong>, helping students debug their codes and board circuits. I
            also serve as an{' '}
            <strong>International Student Ambassador</strong>, connecting
            prospective students with life at KTH.
          </p>
          <p>
            I'm passionate about building things that work at the intersection
            of hardware and software — whether that's an oscilloscope, a
            full-stack plant-care app, or a concurrent chat server.
          </p>
        </div>

        {/* Right — quick-info cards */}
        <div className="about__cards">
          <div className="about__card">
            <p className="about__card-label">Education</p>
            <p className="about__card-value">
              B.Sc. ICT Engineering — KTH
              <br />
              <span>2023 – present &nbsp;·&nbsp; Stockholm, Sweden</span>
            </p>
          </div>

          <div className="about__card">
            <p className="about__card-label">- </p>
            <p className="about__card-value">
              King &amp; Swedish Game Industry Scholarship
              <br />
              <span>- &nbsp;·&nbsp; Stockholm, Sweden</span>
            </p>
          </div>

          <div className="about__card">
            <p className="about__card-label">Status</p>
            <p className="about__card-value">
              Available for full-time internship
              <br />
              <span>-</span>
            </p>
          </div>

          <div className="about__card">
            <p className="about__card-label">Languages</p>
            <div className="about__languages">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang.name}
                  className={`about__lang-tag ${
                    lang.level === 'native' ? 'about__lang-tag--native' : ''
                  }`}
                >
                  {lang.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;