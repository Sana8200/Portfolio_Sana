import { useState, useEffect, useRef } from 'react';

/* ===========================
   DATA
   =========================== */
const NAV_LINKS = ['About', 'Projects', 'Skills', 'Contact'];

const SKILLS_MARQUEE = [
  'Java', 'C', 'Python', 'JavaScript', 'React', 'Node.js', 'HTML/CSS',
  'SQL', 'Assembly', 'Docker', 'Git', 'Firebase',
  'Linux', 'REST APIs', 'Digital Design',
  'Data Structures', 'Algorithms', 'OOP', 'CI/CD', 'Concurrency',
];

const MARQUEE_COLORS = ['rust', 'sage', 'mauve', 'amber', 'teal', 'default'];

const LANGUAGES = [
  { name: 'Persian', native: true },
  { name: 'Azerbaijani', native: true },
  { name: 'English', native: false },
  { name: 'Turkish', native: false },
  { name: 'Swedish', native: false },
];

const PROJECTS = [
  {
    title: 'Finger Oscilloscope',
    images: ['/images/oscilloscope-hardware.jpg'],
    desc: 'Built a finger-controlled digital oscilloscope solo using the DE10-Lite board and AD7705 ADC. Implemented SPI communication, VGA display output, and signal processing — all in C and Assembly without using the FPGA.',
    tags: [{ t: 'C', c: 'rust' }, { t: 'Assembly', c: 'amber' }, { t: 'SPI', c: 'teal' }, { t: 'VGA', c: 'mauve' }],
    link: '#',
    bg: 'rust',
  },
  {
    title: 'LeafKeeper',
    image: '/images/leafkeeper-app.png',
    desc: 'Full-stack web application built in a team of 3 — a digital gardening companion to search for plants, create collections, and track plant care schedules.',
    tags: [{ t: 'React', c: 'teal' }, { t: 'Node.js', c: 'sage' }, { t: 'Firebase', c: 'amber' }],
    link: '#',
    bg: 'sage',
  },
  {
    title: 'Concurrent Programming Labs',
    emoji: '💬',
    desc: 'Course labs exploring multi-threaded systems — from concurrent chat servers to thread-safe data structures and synchronization problems.',
    tags: [{ t: 'Java', c: 'rust' }, { t: 'Threads', c: 'mauve' }, { t: 'Concurrency', c: 'teal' }],
    link: '#',
    bg: 'mauve',
  },
  {
    title: 'Digital Design & Embedded Labs',
    emoji: '⚡',
    desc: 'Hands-on lab work across digital design and embedded electronics courses — covering combinational & sequential logic, FPGA programming, and hardware interfacing.',
    tags: [{ t: 'VHDL', c: 'amber' }, { t: 'Embedded', c: 'rust' }, { t: 'Digital Logic', c: 'sage' }],
    link: '#',
    bg: 'amber',
  },
  {
    title: 'Network & Algorithms Labs',
    emoji: '🔗',
    desc: 'Course projects in network communication and algorithms & data structures — implementing protocols, graph algorithms, and performance analysis.',
    tags: [{ t: 'Python', c: 'sage' }, { t: 'Networking', c: 'teal' }, { t: 'Algorithms', c: 'mauve' }],
    link: '#',
    bg: 'teal',
  },
];

const SKILL_CATS = [
  { icon: '🖥️', title: 'Languages', color: 'rust', items: ['Java', 'C', 'Python', 'JavaScript', 'HTML/CSS', 'SQL', 'Assembly'] },
  { icon: '⚙️', title: 'Frameworks & Tools', color: 'teal', items: ['React', 'Node.js', 'Firebase', 'Git', 'Docker', 'Linux', 'REST APIs'] },
  { icon: '💡', title: 'Concepts', color: 'mauve', items: ['Data Structures', 'Algorithms', 'OOP', 'Concurrency', 'Digital Design', 'CI/CD'] },
];

const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/Sana8200' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/sana-monhaseri' },
  { label: 'Email', url: 'mailto:s.monhaserii@gmail.com' },
];

/* ===========================
   SCROLL REVEAL HOOK
   =========================== */
function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal--visible');
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${delay ? `reveal-delay-${delay}` : ''} ${className}`}>
      {children}
    </div>
  );
}

/* ===========================
   APP
   =========================== */
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const marqueeItems = [...SKILLS_MARQUEE, ...SKILLS_MARQUEE];

  return (
    <>
      {/* NAV */}
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <a href="#hero" className="nav__logo">Sana<i>.</i></a>
          <div className="nav__links">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav__link">{l}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
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

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee">
          {marqueeItems.map((s, i) => (
            <span
              key={i}
              className={`marquee__item marquee__item--${MARQUEE_COLORS[i % MARQUEE_COLORS.length]}`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
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

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <div className="container">
          <Reveal>
            <p className="sec-label sec-label--sage">Projects</p>
            <h2 className="sec-title">Things I've built</h2>
            <p className="sec-desc">
              A selection of projects across full-stack development, embedded systems,
              and everything in between.
            </p>
          </Reveal>

          <div className="projects__list">
            {PROJECTS.map((p, i) => (
              <Reveal key={i} delay={1}>
                <div className="proj">
                  {/* Image header — side by side on top */}
                  {p.images ? (
                    <div className="proj__gallery">
                      {p.images.map((src, j) => (
                        <img key={j} src={src} alt={`${p.title} ${j + 1}`} className="proj__gallery-img" />
                      ))}
                    </div>
                  ) : p.image ? (
                    <div className="proj__image-wrap">
                      <img src={p.image} alt={p.title} className="proj__img" />
                    </div>
                  ) : (
                    <div className={`proj__icon proj__icon--${p.bg}`}>
                      {p.emoji}
                    </div>
                  )}

                  {/* Text side */}
                  <div className="proj__body">
                    <h3 className="proj__title">{p.title}</h3>
                    <p className="proj__desc">{p.desc}</p>
                    <div className="proj__tags">
                      {p.tags.map((tag) => (
                        <span key={tag.t} className={`proj__tag proj__tag--${tag.c}`}>{tag.t}</span>
                      ))}
                    </div>
                    <a href={p.link} className="proj__link">View project →</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills">
        <div className="container">
          <Reveal>
            <p className="sec-label sec-label--teal">Skills</p>
            <h2 className="sec-title">What I work with</h2>
            <div className="sec-line sec-line--sage" />
          </Reveal>

          <div className="skills__grid">
            {SKILL_CATS.map((cat, i) => (
              <Reveal key={i} delay={i + 1}>
                <div className={`skill-cat skill-cat--${cat.color}`}>
                  <div className="skill-cat__icon">{cat.icon}</div>
                  <h3 className="skill-cat__title">{cat.title}</h3>
                  <div className="skill-cat__items">
                    {cat.items.map((item) => (
                      <span key={item} className="skill-pill">{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="contact__blob contact__blob--1" />
        <div className="contact__blob contact__blob--2" />
        <div className="container">
          <Reveal>
            <div className="contact__inner">
              <span className="contact__emoji">☕</span>
              <h2 className="contact__title">Let's work <em>together</em></h2>
              <p className="contact__desc">
                I'm currently looking for internship opportunities and always happy to connect.
                Whether you have a question or just want to say hi — my inbox is open!
              </p>
              <div className="contact__buttons">
                <a href="mailto:s.monhaserii@gmail.com" className="btn btn--primary">Send me an email →</a>
                <a href="https://linkedin.com/in/sana-monhaseri" target="_blank" rel="noopener noreferrer" className="btn btn--outline">LinkedIn</a>
              </div>
              <div className="contact__links">
                <a href="https://github.com/Sana8200" target="_blank" rel="noopener noreferrer" className="contact__link">GitHub ↗</a>
                <a href="mailto:s.monhaserii@gmail.com" className="contact__link">s.monhaserii@gmail.com</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Designed &amp; built by Sana Monhaseri <span>♥</span> 2025</p>
      </footer>
    </>
  );
}

export default App;