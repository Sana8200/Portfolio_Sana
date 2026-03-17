import { Reveal } from '../hooks/useReveal';
import './Projects.css';

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

function Projects() {
  return (
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
  );
}

export default Projects;
