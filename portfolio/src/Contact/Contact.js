import { SOCIALS } from '../constants/social';
import { Reveal } from '../hooks/useReveal';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <div className="contact__inner">
            <p className="sec-marker sec-marker--rust">// 04 contact</p>
            <h2 className="contact__title">
              Let's work <em>together</em>
            </h2>
            <p className="contact__desc">
              I'm currently looking for internship opportunities and always happy to connect.
              Whether you have a question or just want to say hi — my inbox is open.
            </p>
            <div className="contact__buttons">
              <a href={SOCIALS.find(s => s.label === 'Email').url} className="btn btn--gradient">Send me an email</a>
              <a href={SOCIALS.find(s => s.label === 'LinkedIn').url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">LinkedIn</a>
            </div>
            <div className="contact__links">
              {SOCIALS.filter(s => s.label !== 'LinkedIn').map((s, i) => (
                <span key={s.label}>
                  {i > 0 && <span className="contact__divider">/</span>}
                  <a href={s.url} target={s.label !== 'Email' ? '_blank' : undefined} rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined} className="contact__link">
                    {s.label === 'GitHub' ? 'github.com/Sana8200' : 's.monhaserii@gmail.com'}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
