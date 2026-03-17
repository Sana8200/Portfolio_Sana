import './Marquee.css';

const SKILLS = [
  'Java', 'C', 'Python', 'JavaScript', 'React', 'Node.js', 'HTML/CSS',
  'SQL', 'Assembly', 'Docker', 'Git', 'Firebase',
  'Linux', 'REST APIs', 'Digital Design',
  'Data Structures', 'Algorithms', 'OOP', 'CI/CD', 'Concurrency',
];

const COLORS = ['rust', 'sage', 'mauve', 'amber', 'teal', 'default'];

function Marquee() {
  const items = [...SKILLS, ...SKILLS];

  return (
    <div className="marquee-section">
      <div className="marquee">
        {items.map((s, i) => (
          <span
            key={i}
            className={`marquee__item marquee__item--${COLORS[i % COLORS.length]}`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
