import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__left">
          <span className="footer__name">sana/monhaseri</span>
          <span className="footer__year">{new Date().getFullYear()}</span>
        </p>
        <p className="footer__right">Designed & built with care</p>
      </div>
    </footer>
  );
}

export default Footer;
