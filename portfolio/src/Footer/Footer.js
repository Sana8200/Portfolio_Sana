import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
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
