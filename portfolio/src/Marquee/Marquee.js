import './Marquee.css';

const ITEMS = [
  'Java', 'C', 'Python', 'JavaScript', 'React', 'Node.js',
  'HTML/CSS', 'SQL', 'Assembly', 'Docker', 'Git', 'Firebase',
  'Linux', 'REST APIs', 'Digital Design', 'Algorithms', 'OOP', 'CI/CD',
];

function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="tape">
      <div className="tape__track">
        {doubled.map((item, i) => (
          <span key={i} className="tape__item">
            <span className="tape__dot" />{item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
