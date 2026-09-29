import { SOCIALS } from '../constants/social';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.css';

const EMAIL = SOCIALS.find((s) => s.label === 'Email').url;

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <div className="footer__cta">
          <h2 className="footer__pitch">
            Open to a thesis project <em>&</em> internships in 2027.
          </h2>
          <a href={EMAIL} className="footer__email">
            {EMAIL.replace('mailto:', '')} <span aria-hidden="true">→</span>
          </a>
        </div>
        <SocialLinks className="footer__socials" linkClassName="footer__social-icon" />
      </div>

      <div className="footer__bar">
        <p className="footer__left">
          <span className="footer__name">sana/monhaseri</span>
          <span className="footer__year">{new Date().getFullYear()}</span>
        </p>
        <p className="footer__right">
          Designed & built by me —{' '}
          <a
            href="https://github.com/Sana8200/Portfolio_Sana"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            view source
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
