import Navbar from './Navbar/Navbar';
import Intro from './Intro/Intro';
import About from './About/About';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />

      {/* Placeholder sections — we'll build these next */}
      <section id="projects" className="section" />
      <section id="skills" className="section" />
      <section id="contact" className="section" />
    </div>
  );
}

export default App;