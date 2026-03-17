import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants/social';
import './Hero.css';

function createBeam(width, height) {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 15 + Math.random() * 30,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

function BeamsCanvas() {
  const canvasRef = useRef(null);
  const beamsRef = useRef([]);
  const animationRef = useRef(0);

  const resetBeam = useCallback((beam, index, totalBeams, canvasWidth, canvasHeight) => {
    const column = index % 3;
    const spacing = canvasWidth / 3;
    beam.y = canvasHeight + 100;
    beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
    beam.width = 100 + Math.random() * 100;
    beam.speed = 0.5 + Math.random() * 0.4;
    beam.hue = 15 + (index * 30) / totalBeams;
    beam.opacity = 0.2 + Math.random() * 0.1;
    return beam;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      beamsRef.current = Array.from({ length: 30 }, () =>
        createBeam(canvas.width, canvas.height)
      );
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const total = beamsRef.current.length;
      beamsRef.current.forEach((beam, i) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;

        if (beam.y + beam.length < -100) {
          resetBeam(beam, i, total, canvas.width, canvas.height);
        }

        ctx.save();
        ctx.translate(beam.x, beam.y);
        ctx.rotate((beam.angle * Math.PI) / 180);

        const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
        const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
        gradient.addColorStop(0, `hsla(${beam.hue}, 70%, 55%, 0)`);
        gradient.addColorStop(0.1, `hsla(${beam.hue}, 70%, 55%, ${pulsingOpacity * 0.5})`);
        gradient.addColorStop(0.4, `hsla(${beam.hue}, 70%, 55%, ${pulsingOpacity})`);
        gradient.addColorStop(0.6, `hsla(${beam.hue}, 70%, 55%, ${pulsingOpacity})`);
        gradient.addColorStop(0.9, `hsla(${beam.hue}, 70%, 55%, ${pulsingOpacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${beam.hue}, 70%, 55%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [resetBeam]);

  return <canvas ref={canvasRef} className="hero__canvas" />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

function Hero() {
  return (
    <section id="hero" className="hero">
      <BeamsCanvas />

      <motion.div
        className="hero__shimmer"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
      />

      <div className="container hero__container">
        <div className="hero__center">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-text">available for opportunities</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="hero__title">
              <span className="hero__title-line1">Sana Monhaseri</span>
              <br />
              <span className="hero__title-line2">Hardware & Web Engineer</span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
            <p className="hero__desc">
              ICT Engineering at KTH Royal Institute of Technology, Stockholm.
              Building thoughtful systems — from embedded hardware to full-stack applications.
            </p>
          </motion.div>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="hero__actions">
            <a href="#projects" className="btn btn--gradient">View my work</a>
            <a href="#contact" className="btn btn--outline btn--outline-dark">Get in touch</a>
          </motion.div>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="hero__socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                {...(s.label !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="hero__social"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="hero__fade-overlay" />
    </section>
  );
}

export default Hero;
