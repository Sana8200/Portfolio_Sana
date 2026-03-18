import './Marquee.css';

const ITEMS = [
  'Python', 'Java', 'JavaScript', 'C', 'SQL', 'HTML/CSS', 'Assembly',
  'React', 'Git', 'Docker', 'Linux', 'PostgreSQL',
  'Data Analytics', 'Database Design', 'UI/UX', 'OOP', 'Concurrency',
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
