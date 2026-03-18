import { Reveal } from '../hooks/useReveal';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Finger Oscilloscope',
    num: '01',
    image: '/images/oscilloscope-hardware.jpg',
    desc: 'Built a finger-controlled digital oscilloscope solo using the DE10-Lite board and AD7705 ADC. Implemented SPI communication, VGA display output, and signal processing — all in C and Assembly without using the FPGA.',
    tags: ['C', 'Assembly', 'SPI', 'VGA'],
    link: 'https://github.com/Sana8200/FingerOscilloscope',
    color: 'rust',
  },
  {
    title: 'LeafKeeper',
    num: '02',
    image: '/images/leafkeeper-app.png',
    desc: 'Full-stack web application built in a team of 3 — a digital gardening companion to search for plants, create collections, and track plant care schedules with reminders.',
    tags: ['React', 'Node.js', 'Firebase'],
    link: 'https://github.com/Sana8200',
    color: 'sage',
  },
  {
    title: 'Concurrent Programming',
    num: '03',
    desc: 'Built a multi-threaded chat server supporting concurrent client connections, implemented thread-safe data structures with fine-grained locking, and solved classic synchronization problems like dining philosophers.',
    tags: ['Java', 'Threads', 'Concurrency'],
    link: 'https://github.com/Sana8200',
    color: 'mauve',
  },
  {
    title: 'Digital Design & Embedded',
    num: '04',
    desc: 'Designed and implemented combinational & sequential logic circuits, programmed hardware interfaces for sensors and displays.',
    tags: ['Embedded', 'Digital Logic'],
    link: 'https://github.com/Sana8200',
    color: 'amber',
  },
  {
    title: 'Network & Algorithms',
    num: '05',
    desc: 'Implemented TCP/UDP protocols and socket programming for networked applications, built graph traversal and shortest-path algorithms, and benchmarked sorting and search performance on large datasets.',
    tags: ['Python', 'Networking', 'Algorithms'],
    link: 'https://github.com/Sana8200',
    color: 'teal',
  },
  {
    title: 'Portfolio Website',
    num: '06',
    desc: 'Designed and built this portfolio from scratch — a warm, typography-driven site with animated light beams, smooth section transitions, scroll-reveal animations, and a custom design system.',
    tags: ['React', 'CSS', 'Framer Motion'],
    link: 'https://github.com/Sana8200',
    color: 'rust',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="color-wash">
        <div className="color-wash__blob color-wash__blob--peach" />
        <div className="color-wash__blob color-wash__blob--rose" />
      </div>
      <div className="container">
        <Reveal>
          <p className="sec-marker sec-marker--sage">// 02 projects</p>
          <h2 className="sec-title">Selected work</h2>
          <p className="sec-desc">
            From embedded systems to full-stack web apps — projects that
            reflect how I think and build.
          </p>
        </Reveal>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={i < 3 ? i + 1 : 1}>
              <article className={`proj proj--${p.color} ${!p.image ? 'proj--no-img' : ''}`}>
                {p.image && (
                  <div className="proj__media">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="proj__img"
                    />
                  </div>
                )}
                <div className="proj__body">
                  <div className="proj__header">
                    <span className="proj__num">{p.num}</span>
                    <h3 className="proj__title">{p.title}</h3>
                  </div>
                  <p className="proj__desc">{p.desc}</p>
                  <div className="proj__footer">
                    <div className="proj__tags">
                      {p.tags.map((tag) => (
                        <span key={tag} className="proj__tag">{tag}</span>
                      ))}
                    </div>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj__link">
                      View project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
