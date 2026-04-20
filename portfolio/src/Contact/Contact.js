import { SOCIALS } from '../constants/social';
import { Reveal } from '../hooks/useReveal';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <div className="contact__inner">
            <h2 className="contact__title">
              Let's <em>connect</em>
            </h2>
            <p className="contact__desc">
              Internship opportunity, project idea, or just a conversation about
              engineering — I'd love to hear from you.
            </p>
            <div className="contact__buttons">
              <a href={SOCIALS.find(s => s.label === 'Email').url} className="btn btn--gradient">Say hello</a>
              <a href={SOCIALS.find(s => s.label === 'LinkedIn').url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">LinkedIn</a>
              <a href={SOCIALS.find(s => s.label === 'GitHub').url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">GitHub</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
