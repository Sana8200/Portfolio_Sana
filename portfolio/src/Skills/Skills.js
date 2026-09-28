import { Reveal } from '../hooks/useReveal';
import { SKILL_CATS } from '../constants/skills';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal>
          <h2 className="sec-title">What I work with</h2>
        </Reveal>

        <Reveal delay={1}>
          <dl className="skills__table">
            {SKILL_CATS.map((cat) => (
              <div key={cat.label} className="skills__row">
                <dt className="skills__cat">{cat.title}</dt>
                <dd className="skills__items">
                  {cat.items.map((item) => (
                    <span key={item} className="skills__pill">{item}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
