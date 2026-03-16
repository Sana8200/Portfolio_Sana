import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Projects", "Skills", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,229,160,0.08)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <a href="#hero" style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "1.15rem",
        fontWeight: 700,
        color: "#00e5a0",
        textDecoration: "none",
        letterSpacing: "-0.5px",
      }}>
        {"<SM />"}
      </a>

      {/* Desktop links */}
      <div style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
      }}
        className="nav-links-desktop"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: "#a0a0b5",
              textDecoration: "none",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 400,
              letterSpacing: "0.5px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#00e5a0")}
            onMouseLeave={(e) => (e.target.style.color = "#a0a0b5")}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 2rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(rgba(0,229,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
      }} />

      {/* Glow orb */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "20%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(0,229,160,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "720px",
        position: "relative",
        zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        {/* Tag line */}
        <div style={{
          display: "inline-block",
          padding: "6px 14px",
          border: "1px solid rgba(0,229,160,0.2)",
          borderRadius: "999px",
          fontSize: "0.78rem",
          fontFamily: "'Space Mono', monospace",
          color: "#00e5a0",
          marginBottom: "1.5rem",
          background: "rgba(0,229,160,0.05)",
          letterSpacing: "0.5px",
        }}>
          Open to internships
        </div>

        <h1 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: "1.2rem",
          color: "#e8e8ed",
        }}>
          Hi, I'm{" "}
          <span style={{
            color: "#00e5a0",
            position: "relative",
          }}>
            Sana
            <span style={{
              position: "absolute",
              bottom: "-4px",
              left: 0,
              width: "100%",
              height: "3px",
              background: "linear-gradient(90deg, #00e5a0, transparent)",
              borderRadius: "2px",
            }} />
          </span>
          <span style={{ color: "#7a7a8e", fontWeight: 300 }}>.</span>
        </h1>

        <p style={{
          fontSize: "1.15rem",
          color: "#a0a0b5",
          lineHeight: 1.7,
          maxWidth: "560px",
          marginBottom: "2rem",
          fontWeight: 300,
        }}>
          ICT Engineering student at{" "}
          <span style={{ color: "#e8e8ed", fontWeight: 500 }}>KTH Royal Institute of Technology</span>.
          I build scalable, data-driven software — from embedded systems to full-stack web apps.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              padding: "12px 28px",
              background: "#00e5a0",
              color: "#0a0a0f",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
              fontFamily: "'Outfit', sans-serif",
              transition: "all 0.2s",
              border: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#00cc8e";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 24px rgba(0,229,160,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#00e5a0";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              padding: "12px 28px",
              background: "transparent",
              color: "#a0a0b5",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9rem",
              fontFamily: "'Outfit', sans-serif",
              border: "1px solid #1e1e2a",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#00e5a0";
              e.target.style.color = "#00e5a0";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#1e1e2a";
              e.target.style.color = "#a0a0b5";
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Quick links */}
        <div style={{
          display: "flex",
          gap: "1.5rem",
          marginTop: "2.5rem",
          paddingTop: "2rem",
          borderTop: "1px solid #1e1e2a",
        }}>
          {[
            { label: "GitHub", url: "https://github.com/Sana8200" },
            { label: "LinkedIn", url: "https://linkedin.com/in/sana-monhaseri" },
            { label: "Email", url: "mailto:s.monhaserii@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#7a7a8e",
                textDecoration: "none",
                fontSize: "0.82rem",
                fontFamily: "'Space Mono', monospace",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00e5a0")}
              onMouseLeave={(e) => (e.target.style.color = "#7a7a8e")}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div style={{
      background: "#0a0a0f",
      minHeight: "100vh",
      fontFamily: "'Outfit', sans-serif",
    }}>
      <Navbar />
      <Hero />

      {/* Placeholder sections — we'll build these next! */}
      <section id="about" style={{ minHeight: "50vh", padding: "4rem 2rem" }} />
      <section id="projects" style={{ minHeight: "50vh", padding: "4rem 2rem" }} />
      <section id="skills" style={{ minHeight: "50vh", padding: "4rem 2rem" }} />
      <section id="contact" style={{ minHeight: "50vh", padding: "4rem 2rem" }} />
    </div>
  );
}