import { Reveal } from '../hooks/useReveal';
import './Skills.css';

const SKILL_CATS = [
  {
    label: 'lang',
    title: 'Languages',
    color: 'rust',
    items: ['Python', 'Java', 'JavaScript', 'C', 'SQL', 'HTML/CSS', 'Assembly'],
  },
  {
    label: 'tools',
    title: 'Frameworks & Tools',
    color: 'teal',
    items: ['React', 'Git', 'Docker', 'Linux', 'PostgreSQL', 'Google Workspace'],
  },
  {
    label: 'concepts',
    title: 'Concepts',
    color: 'mauve',
    items: ['Data Analytics', 'Database Design', 'UI/UX', 'OOP', 'Concurrency'],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal>
          <p className="sec-marker sec-marker--teal">// 03 skills</p>
          <h2 className="sec-title">What I work with</h2>
        </Reveal>

        <div className="skills__grid">
          {SKILL_CATS.map((cat, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className={`scat scat--${cat.color}`}>
                <div className="scat__head">
                  <span className="scat__label">{cat.label}</span>
                  <h3 className="scat__title">{cat.title}</h3>
                </div>
                <div className="scat__items">
                  {cat.items.map((item) => (
                    <span key={item} className="scat__pill">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
