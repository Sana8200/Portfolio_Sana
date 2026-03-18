import { useState } from 'react';
import { Reveal } from '../hooks/useReveal';
import './Projects.css';

function ImageSlider({ images, alt, color }) {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className="proj__media">
        <img src={images[0]} alt={alt} className="proj__img" />
      </div>
    );
  }
  return (
    <div className="proj__media proj__media--slider">
      <div className="proj__slides" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`${alt} ${i + 1}`} className="proj__img proj__slide" />
        ))}
      </div>
      <button
        className={`proj__arrow proj__arrow--left proj__arrow--${color}`}
        onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        aria-label="Previous image"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button
        className={`proj__arrow proj__arrow--right proj__arrow--${color}`}
        onClick={() => setCurrent((current + 1) % images.length)}
        aria-label="Next image"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
      <div className="proj__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`proj__dot ${i === current ? 'proj__dot--active' : ''} proj__dot--${color}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    title: 'Finger Oscilloscope',
    num: '01',
    images: ['/images/oscilloscope-hardware.jpg', '/images/oscilloscope-screen.jpg'],
    desc: 'Built a real-time digital oscilloscope on a DE10-Lite FPGA using a RISC-V processor and 16-bit ADC. Implemented VGA waveform display (320\u00d7240) with run/stop, zoom/pan, and dual-mode operation. Firmware in C and Assembly for SPI and ADC data acquisition.',
    tags: ['C', 'Assembly', 'SPI', 'VGA'],
    link: 'https://github.com/Sana8200/FingerOscilloscope',
    color: 'rust',
  },
  {
    title: 'LeafKeeper',
    num: '02',
    images: ['/images/leafkeeper-app.png', '/images/leafkeeper-landing.png'],
    desc: 'Designed UI/UX and developed full-stack functionality in a 3-person team. Built the front end with React and JavaScript, integrated backend via REST APIs. A digital gardening companion for plant collections and care tracking.',
    tags: ['React', 'JavaScript', 'REST APIs'],
    demo: 'https://group-11-57e70.web.app/',
    color: 'sage',
  },
  {
    title: 'OS & Concurrent Programming',
    num: '03',
    desc: 'Implemented process and thread management, scheduling algorithms, and synchronization primitives in C. Built multi-threaded applications in Java exploring concurrency patterns, thread-safe data structures, and classic problems like dining philosophers.',
    tags: ['C', 'Java', 'OS', 'Concurrency'],
    link: 'https://github.com/Sana8200',
    color: 'mauve',
  },
  {
    title: 'Socket Programming',
    num: '04',
    desc: 'Built a TCP client, HTTP echo server, and multi-threaded HTTP server in Java. Gained hands-on experience with network protocols, socket programming, and concurrent request handling.',
    tags: ['Java', 'TCP/UDP', 'Networking'],
    link: 'https://github.com/Sana8200',
    color: 'amber',
  },
  {
    title: 'Digital Design & Embedded',
    num: '05',
    desc: 'Designed and implemented combinational and sequential logic circuits, programmed hardware interfaces for sensors and displays. Served as lab assistant for this course at KTH.',
    tags: ['Embedded', 'Digital Logic'],
    link: 'https://github.com/Sana8200',
    color: 'rust',
  },
  {
    title: 'Database Design & Analytics',
    num: '06',
    desc: 'Designed and implemented a PostgreSQL database for a music school in a 3-person team. Performed SQL-based data analysis and compared processing solutions for performance and scalability.',
    tags: ['PostgreSQL', 'SQL', 'Data Analytics'],
    link: 'https://github.com/Sana8200',
    color: 'sage',
  },
  {
    title: 'Portfolio Website',
    num: '07',
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
              <article className={`proj proj--${p.color} ${!p.images ? 'proj--no-img' : ''}`}>
                <ImageSlider images={p.images} alt={p.title} color={p.color} />
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
                    <div className="proj__links">
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj__link">
                          View project
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M17 7H7M17 7v10"/>
                          </svg>
                        </a>
                      )}
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proj__link proj__link--demo">
                          Live demo
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
                          </svg>
                        </a>
                      )}
                    </div>
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
