import { useState } from 'react';
import { Reveal } from '../hooks/useReveal';
import './Projects.css';

function ImageSlider({ images, alt, imgClass, sideBySide }) {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;
  if (sideBySide) {
    return (
      <div className="proj__media proj__media--side-by-side">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`${alt} ${i + 1}`} loading="lazy" className={`proj__img proj__img--half ${imgClass || ''}`} />
        ))}
      </div>
    );
  }
  if (images.length === 1) {
    return (
      <div className="proj__media">
        <img src={images[0]} alt={alt} loading="lazy" className={`proj__img ${imgClass || ''}`} />
      </div>
    );
  }
  return (
    <div className="proj__media proj__media--slider">
      <div className="proj__slides" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`${alt} ${i + 1}`} loading="lazy" className={`proj__img proj__slide ${imgClass || ''}`} />
        ))}
      </div>
      <button
        className="proj__arrow proj__arrow--left"
        onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        aria-label="Previous image"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button
        className="proj__arrow proj__arrow--right"
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
            className={`proj__dot ${i === current ? 'proj__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const GITHUB = 'https://github.com/Sana8200';

const PROJECTS = [
  {
    title: 'HouseBite',
    images: ['/images/HOUSE_BITE.png'],
    imgClass: 'proj__img--screenshot',
    desc: 'A PWA that turns a household into a shared smart pantry — grocery and expiry tracking, recipe suggestions, OCR receipt scanning, and a shared budget. Team of 7, Scrum.',
    role: 'Household management, Google sign-in, the app-wide notification and error system, and Supabase schema work.',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    links: [
      { label: 'Code', url: `${GITHUB}/HouseBite` },
      { label: 'Live app', url: 'https://housebite.app/', demo: true },
    ],
  },
  {
    title: 'FingerOscilloscope',
    images: ['/images/oscilloscope-hardware.jpg', '/images/oscilloscope-screen.jpg'],
    desc: 'A real-time oscilloscope on the DE10-Lite board. C and Assembly firmware on a RISC-V soft-core reads a 16-bit ADC over SPI and draws live waveforms on a VGA display, with adjustable gain (1–8×) and sample rate (50–500 Hz).',
    tags: ['C', 'Assembly', 'RISC-V', 'SPI'],
    links: [{ label: 'Code', url: `${GITHUB}/FingerOscilloscope` }],
  },
  {
    title: 'LeafKeeper',
    images: ['/images/leafkeeper-landing.png', '/images/leafkeeper-app.png'],
    desc: 'A plant-care tracking app built in a team of 3. I designed the UI/UX and built the React front end on top of a REST API.',
    tags: ['React', 'JavaScript', 'REST APIs'],
    links: [{ label: 'Live demo', url: 'https://group-11-57e70.web.app/', demo: true }],
  },
  {
    title: 'Soundgood Database',
    images: ['/images/soundgood-er.png'],
    imgClass: 'proj__img--screenshot',
    desc: 'A PostgreSQL database for a music school, built in a team of 3 — ER model in Astah, then the schema, constraints and queries in SQL, covering lessons, instrument rentals and sibling-discount pricing.',
    tags: ['PostgreSQL', 'SQL', 'ER Modeling'],
    links: [],
  },
];

// Smaller work, collapsed by default to keep the page short
const MORE = [
  {
    name: 'Digital Design & Embedded Electronics',
    detail: 'Combinational and sequential logic circuits, plus hardware interfaces for sensors and displays. Now a lab assistant for the course.',
  },
  {
    name: 'Concurrent Programming',
    detail: 'Locks, barriers, semaphores and monitors with pthreads and Java; OpenMP; MPI message passing.',
    url: `${GITHUB}/Concurrent-Programming`,
  },
  {
    name: 'Computer Organization (IS1200)',
    detail: 'RISC-V assembly, C, I/O programming, and processor design.',
    url: `${GITHUB}/Datorteknik-IS1200`,
  },
  {
    name: 'Socket Programming',
    detail: 'TCP client, HTTP echo server, and a multi-threaded HTTP server in Java.',
    url: `${GITHUB}/Socket-Programming`,
  },
  {
    name: 'Operating Systems',
    detail: 'Process and thread management, scheduling algorithms, and synchronization primitives in C.',
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
  </svg>
);

function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="projects">
      <div className="color-wash">
        <div className="color-wash__blob color-wash__blob--peach" />
        <div className="color-wash__blob color-wash__blob--rose" />
      </div>
      <div className="container">
        <Reveal>
          <h2 className="sec-title">Selected work</h2>
        </Reveal>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) + 1}>
              <article className="proj">
                <ImageSlider images={p.images} alt={p.title} imgClass={p.imgClass} sideBySide={p.sideBySide} />
                <div className="proj__body">
                  <div className="proj__header">
                    <span className="proj__num">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="proj__title">{p.title}</h3>
                  </div>
                  <p className="proj__desc">{p.desc}</p>
                  {p.role && (
                    <p className="proj__role">
                      <span className="proj__role-label">My part</span>
                      {p.role}
                    </p>
                  )}
                  <div className="proj__footer">
                    <div className="proj__tags">
                      {p.tags.map((tag) => (
                        <span key={tag} className="proj__tag">{tag}</span>
                      ))}
                    </div>
                    {p.links.length > 0 && (
                      <div className="proj__links">
                        {p.links.map((l) => (
                          <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`proj__link ${l.demo ? 'proj__link--demo' : ''}`}
                          >
                            {l.label}
                            {l.demo ? <PlayIcon /> : <ArrowIcon />}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="more">
          <button
            className="more__toggle"
            onClick={() => setShowMore((v) => !v)}
            aria-expanded={showMore}
            aria-controls="more-work"
          >
            {showMore ? 'Hide' : 'Show'} {MORE.length} more — coursework & labs
            <svg className={`more__chevron ${showMore ? 'more__chevron--open' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <ul id="more-work" className="more__list" hidden={!showMore}>
            {MORE.map((m) => (
              <li key={m.name} className="more__item">
                {m.url ? (
                  <a href={m.url} target="_blank" rel="noopener noreferrer" className="more__name more__name--link">
                    {m.name} <ArrowIcon />
                  </a>
                ) : (
                  <span className="more__name">{m.name}</span>
                )}
                <span className="more__detail">{m.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
