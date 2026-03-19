import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const NAV_LINKS = ['About', 'Projects', 'Skills', 'Contact'];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <a href="#hero" className="nav__logo" onClick={closeMenu}>
            sana<span className="nav__logo-accent">/</span>monhaseri
          </a>

          {/* Desktop links */}
          <div className="nav__links">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav__link">
                {l.toLowerCase()}
              </a>
            ))}
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="nav__burger-line" />
            <span className="nav__burger-line" />
            <span className="nav__burger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`nav-mobile ${menuOpen ? 'nav-mobile--open' : ''}`}
        onClick={closeMenu}
      >
        <div className="nav-mobile__panel" onClick={(e) => e.stopPropagation()}>
          <div className="nav-mobile__links">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="nav-mobile__link"
                style={{ transitionDelay: menuOpen ? `${0.05 + i * 0.05}s` : '0s' }}
                onClick={closeMenu}
              >
                <span className="nav-mobile__link-num">0{i + 1}</span>
                {l}
              </a>
            ))}
          </div>
          <div className="nav-mobile__footer">
            <a href="mailto:s.monhaserii@gmail.com" className="nav-mobile__cta">
              Say hello →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;