import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = ['About', 'Projects', 'Skills', 'Contact'];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">Sana<i>.</i></a>
        <div className="nav__links">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav__link">{l}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
