import { Reveal } from '../hooks/useReveal';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__blob contact__blob--1" />
      <div className="contact__blob contact__blob--2" />
      <div className="container">
        <Reveal>
          <div className="contact__inner">
            <span className="contact__emoji">☕</span>
            <h2 className="contact__title">Let's work <em>together</em></h2>
            <p className="contact__desc">
              I'm currently looking for internship opportunities and always happy to connect.
              Whether you have a question or just want to say hi — my inbox is open!
            </p>
            <div className="contact__buttons">
              <a href="mailto:s.monhaserii@gmail.com" className="btn btn--primary">Send me an email →</a>
              <a href="https://linkedin.com/in/sana-monhaseri" target="_blank" rel="noopener noreferrer" className="btn btn--outline">LinkedIn</a>
            </div>
            <div className="contact__links">
              <a href="https://github.com/Sana8200" target="_blank" rel="noopener noreferrer" className="contact__link">GitHub ↗</a>
              <a href="mailto:s.monhaserii@gmail.com" className="contact__link">s.monhaserii@gmail.com</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;