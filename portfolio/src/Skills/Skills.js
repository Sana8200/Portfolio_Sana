import { Reveal } from '../hooks/useReveal';
import './Skills.css';

const SKILL_CATS = [
  { icon: '🖥️', title: 'Languages', color: 'rust', items: ['Java', 'C', 'Python', 'JavaScript', 'HTML/CSS', 'SQL', 'Assembly'] },
  { icon: '⚙️', title: 'Frameworks & Tools', color: 'teal', items: ['React', 'Node.js', 'Firebase', 'Git', 'Docker', 'Linux', 'REST APIs'] },
  { icon: '💡', title: 'Concepts', color: 'mauve', items: ['Data Structures', 'Algorithms', 'OOP', 'Concurrency', 'Digital Design', 'CI/CD'] },
];

function Skills() {
  return (
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
  );
}

export default Skills;
