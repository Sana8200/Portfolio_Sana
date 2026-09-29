import { Reveal } from '../hooks/useReveal';
import './Experience.css';

const FEATURED = {
  role: 'Powertrain & Electronics',
  org: 'KTH Formula Student',
  period: 'Sep 2026 – present',
  points: [
    'Writing STM32 firmware in C, including a CAN bootloader so boards can be reflashed over the CAN bus.',
    'Working in KiCad and soldering electronics hardware.',
  ],
  tags: ['C', 'STM32', 'CAN', 'KiCad', 'Soldering'],
};

const ROLES = [
  { role: 'Lab Assistant — Programming & Digital Design', org: 'KTH', period: 'Current' },
  { role: 'International Student Ambassador', org: 'KTH School of EECS', period: 'Current' },
];

function Experience() {
  return (
    <section id="experience" className="exp">
      <div className="container">
        <Reveal>
          <h2 className="sec-title">Experience</h2>
        </Reveal>

        <Reveal delay={1}>
          <article className="exp__card">
            <div className="exp__head">
              <div>
                <h3 className="exp__role">{FEATURED.role}</h3>
                <p className="exp__org">{FEATURED.org}</p>
              </div>
              <span className="exp__period">{FEATURED.period}</span>
            </div>
            <ul className="exp__points">
              {FEATURED.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <div className="exp__tags">
              {FEATURED.tags.map((t) => <span key={t} className="exp__tag">{t}</span>)}
            </div>
          </article>
        </Reveal>

        <Reveal delay={2}>
          <ul className="exp__roles">
            {ROLES.map((r) => (
              <li key={r.role} className="exp__row">
                <span className="exp__row-role">{r.role}</span>
                <span className="exp__row-org">{r.org}</span>
                <span className="exp__period">{r.period}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
