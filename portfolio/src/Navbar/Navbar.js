import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = ['About', 'Projects', 'Skills', 'Contact'];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#intro" className="navbar__logo">
        {'<SM />'}
      </a>

      <div className="navbar__links">
        {NAV_LINKS.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="navbar__link">
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;