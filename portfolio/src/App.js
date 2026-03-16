import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Placeholder sections — we'll build these in the next steps! */}
      <section id="about" className="section" />
      <section id="projects" className="section" />
      <section id="skills" className="section" />
      <section id="contact" className="section" />
    </div>
  );
}

export default App;